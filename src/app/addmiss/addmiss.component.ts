import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddmissService } from '../services/addmiss.service';
import {Miss} from '../shared/miss';
import { flyInOut, expand } from '../animations/app.animation';


@Component({
  selector: 'app-addmiss',
  templateUrl: './addmiss.component.html',
  styleUrls: ['./addmiss.component.scss'],
  host: {
           '[@flyInOut]': 'true',
           'style': 'display: block;'
           },
     animations: [
    flyInOut(),expand()
     ]
})
export class AddmissComponent implements OnInit {
  addmissForm: FormGroup;
  miss: Miss;
  submitted: any;
    hideform: boolean =  false;


  
  formErrors = {
    'name': '',
    'blood':'',
    'height':'',
    'marks':''
  };

  validationMessages = {
    'name': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 2 characters long.',
      'maxlength':     'Name cannot be more than 25 characters long.'
    },
        'blood': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 1 characters long.',
      'maxlength':     'Name cannot be more than 2 characters long.'
    },
        'height': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 2 characters long.',
      'maxlength':     'Name cannot be more than 8 characters long.'
    },
        'marks': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 2 characters long.'
    }

  };

  constructor(private fb: FormBuilder,private addmissService: AddmissService) {this.createForm(); }

  ngOnInit() {
  }

  createForm() {

     
     this.addmissForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      image:'',
      blood: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(2)] ],
      height: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(8)] ],
      marks: ['', [Validators.required, Validators.minLength(2) ]],
      information: ''
      
    });
        this.addmissForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }
  
    onValueChanged(data?: any) {
    if (!this.addmissForm) { return; }
    const form = this.addmissForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit() {
    
    this.miss = this.addmissForm.value;
    console.log(this.miss);
    this.addmissService.submitAddmiss(this.miss).subscribe(submitted => this.submitted=submitted);

        setTimeout(()=>{ 
    
      this.submitted = false; }, 5000 );
      
      this.addmissForm.reset({
          'name': '',
          'image':'',
          'blood':'',
          'height':'',
          'marks':'',
          'information':''

    });
  }
  


}