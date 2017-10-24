import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddfoundService } from '../services/addfound.service';
import {Found} from '../shared/found';
import { flyInOut, expand } from '../animations/app.animation';


@Component({
  selector: 'app-addfound',
  templateUrl: './addfound.component.html',
  styleUrls: ['./addfound.component.scss'],
  host: {
           '[@flyInOut]': 'true',
           'style': 'display: block;'
           },
     animations: [
    flyInOut(),expand()
     ]
})
export class AddfoundComponent implements OnInit {
  addfoundForm: FormGroup;
  found: Found;
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

  constructor(private fb: FormBuilder,private addfoundService: AddfoundService) {this.createForm(); }

  ngOnInit() {
  }

  createForm() {

     
     this.addfoundForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      image:'',
      blood: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(2)] ],
      height: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(8)] ],
      marks: ['', [Validators.required, Validators.minLength(2) ]],
      information: ''
      
    });
        this.addfoundForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }
  
    onValueChanged(data?: any) {
    if (!this.addfoundForm) { return; }
    const form = this.addfoundForm;
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
    
    this.found = this.addfoundForm.value;
    console.log(this.found);
    this.addfoundService.submitAddfound(this.found).subscribe(submitted => this.submitted=submitted);

        setTimeout(()=>{ 
    
      this.submitted = false; }, 5000 );
      
      this.addfoundForm.reset({
          'name': '',
          'image':'',
          'blood':'',
          'height':'',
          'marks':'',
          'information':''

    });
  }
  


}
