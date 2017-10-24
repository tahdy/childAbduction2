import {Component,OnInit, Inject} from '@angular/core';

import {MissService} from '../services/miss.service';
import {Params,ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Comment} from '../shared/comment';
import { Miss } from '../shared/miss';
import { visibility } from '../animations/app.animation';
import { flyInOut } from '../animations/app.animation';
import { expand } from '../animations/app.animation';

@Component({
    selector: 'app-missd',
    templateUrl: './missd.component.html',
    styleUrls: ['./missd.component.scss'],
    host: {
           '[@flyInOut]': 'true',
           'style': 'display: block;'
           },
    animations:[visibility(),flyInOut(),expand()]
})

export class MissdComponent implements OnInit {

    missIds: number[];
    prev: number;
    next: number;
    miss: Miss;
    commentForm: FormGroup;
    missComment: Comment;
    errMess: string;
    misscopy = null;
    visibility = 'shown';

  formErrors = {
    'comment':'',
    'author':''
  }
  validationMessages = {
    'comment': {
      'required':      'Comment is required.',
      'minlength':     'Comment must be at least 2 characters long.'
    },
    'author': {
      'required':      'Author Name is required.',
      'minlength':     'Author Name must be at least 2 characters long.',
      'maxlength':     'Author Name cannot be more than 25 characters long.'
    }
  }


    constructor(private missservice: MissService,
        private route: ActivatedRoute,
        private location: Location, private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL) { this.createForm();}

    ngOnInit() {

      this.missservice.getMissIds().subscribe(missIds => this.missIds = missIds,
      errmess => this.errMess = <any>errmess);
    this.route.params
      .switchMap((params: Params) => { this.visibility = 'hidden'; return this.missservice.getMiss(+params['id']); })
      .subscribe(miss => { this.miss = miss; this.misscopy = miss; this.setPrevNext(miss.id); this.visibility = 'shown'; },
          errmess => { this.miss = null; this.errMess = <any>errmess; });    

    }

 createForm(): void {
    this.commentForm = this.fb.group({
     
      comment: ['', [Validators.required,Validators.minLength(2)]],
      author: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      date: ''
    });
    this.commentForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?:any) {
    const form=this.commentForm;
    if (form.get('author').valid && form.get('comment').valid) {
      this.missComment = this.commentForm.value;
    }
    else {
      this.missComment = {
        
        comment: '',
        author: '',
        date: ''
    };
    }
  
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key]+' ';
        }
      }
    }
  }

  onSubmit() {
    this.missComment.date = Date();
    this.misscopy.comments.push(this.missComment);
    this.misscopy.save()
      .subscribe(miss => { this.miss = miss; console.log(this.miss); });
    this.commentForm.reset({
      
      comment: '',
      author: '',
      date: ''
    });
  }
    setPrevNext(missId: number) {
        let index = this.missIds.indexOf(missId);
        this.prev = this.missIds[(this.missIds.length + index - 1) % this.missIds.length];
        this.next = this.missIds[(this.missIds.length + index + 1) % this.missIds.length];
    }

    goBack(): void {
        this.location.back();
    }

}
