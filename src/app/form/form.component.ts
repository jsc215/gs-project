import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  regiForm: FormGroup;
  FirstName = '';
  LastName = '';
  Address = '';
  DOB: Date = null;
  Gender = '';
  osOfChoice = '';
  Email = '';
  IsAccepted = 0;



  constructor(private fb: FormBuilder) {
    // To initialize FormGroup
    this.regiForm = fb.group({
      'FirstName': [null, Validators.required],
      'LastName': [null, Validators.required],
      'Address': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'DOB': [null, Validators.required],
      'Gender': [null, Validators.required],
      'OS of Choice': [null, Validators.required],
      'Email': [null, Validators.compose([Validators.required, Validators.email])],
      'IsAccepted': [null]
    });
  }
  
  onChange(event: any) {
    if (event.checked === true) {
      this.IsAccepted = 1;
    } else {
      this.IsAccepted = 0;
    }
  }
  
  clearForm(){
    this.regiForm.reset({
      FirstName: '',
      LastName: '',
      Address: '',
      DOB: null,
      Gender: '',
      OSofChoice: '',
      Email: '',
      IsAccepted: 0,
    
    });
  }

  // Executed When Form Is Submitted
  onFormSubmit(form: NgForm) {
    console.log(form);
    this.clearForm()
    
    
  }
}
