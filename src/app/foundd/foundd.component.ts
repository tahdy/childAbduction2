import {Component,OnInit, Inject} from '@angular/core';
import {FoundService} from '../services/found.service';
import {Params,ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Comment} from '../shared/comment';
import { Found } from '../shared/found';
import { visibility } from '../animations/app.animation';
import { flyInOut } from '../animations/app.animation';
import { expand } from '../animations/app.animation';

@Component({
    selector: 'app-foundd',
    templateUrl: './foundd.component.html',
    styleUrls: ['./foundd.component.scss'],
    host: {
           '[@flyInOut]': 'true',
           'style': 'display: block;'
           },
    animations:[visibility(),flyInOut(),expand()]
})

export class FounddComponent implements OnInit {

    foundIds: number[];
    prev: number;
    next: number;
    found: Found;
    commentForm: FormGroup;
    foundComment: Comment;
    errMess: string;
    foundcopy = null;
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


    constructor(private foundservice: FoundService,
        private route: ActivatedRoute,
        private location: Location, private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL) { this.createForm();}

    ngOnInit() {

      this.foundservice.getFoundIds().subscribe(foundIds => this.foundIds = foundIds,
      errmess => this.errMess = <any>errmess);
    this.route.params
      .switchMap((params: Params) => { this.visibility = 'hidden'; return this.foundservice.getFound(+params['id']); })
      .subscribe(found => { this.found = found; this.foundcopy = found; this.setPrevNext(found.id); this.visibility = 'shown'; },
          errmess => { this.found = null; this.errMess = <any>errmess; });    

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
      this.foundComment = this.commentForm.value;
    }
    else {
      this.foundComment = {
        
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
    this.foundComment.date = Date();
    this.foundcopy.comments.push(this.foundComment);
    this.foundcopy.save()
      .subscribe(found => { this.found = found; console.log(this.found); });
    this.commentForm.reset({
      
      comment: '',
      author: '',
      date: ''
    });
  }
    setPrevNext(foundId: number) {
        let index = this.foundIds.indexOf(foundId);
        this.prev = this.foundIds[(this.foundIds.length + index - 1) % this.foundIds.length];
        this.next = this.foundIds[(this.foundIds.length + index + 1) % this.foundIds.length];
    }

    goBack(): void {
        this.location.back();
    }

}

