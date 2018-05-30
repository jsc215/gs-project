import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/User';
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
  OSOfChoice = '';
  Email = '';
  IsAccepted = 0;

  constructor(private fb: FormBuilder, private userService: UserService) {
    // To initialize FormGroup
    this.regiForm = fb.group({
      FirstName: [null, Validators.required],
      LastName: [null, Validators.required],
      Address: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(30),
          Validators.maxLength(500)
        ])
      ],
      DOB: [null, Validators.required],
      Gender: [null, Validators.required],
      OSofChoice: [null, Validators.required],
      Email: [null, Validators.compose([Validators.required, Validators.email])],
      IsAccepted: [null]
    });
  }

  onChange(event: any) {
    if (event.checked === true) {
      this.IsAccepted = 1;
    } else {
      this.IsAccepted = 0;
    }
  }

  clearForm() {
    this.regiForm.reset({
      FirstName: '',
      LastName: '',
      Address: '',
      DOB: '',
      Gender: '',
      OSofChoice: '',
      Email: '',
      IsAccepted: 0
    });
  }

  // Executed When Form Is Submitted
  onFormSubmit(form: NgForm) {
    const newUser: User = {
      FirstName: this.regiForm.value.FirstName,
      LastName: this.regiForm.value.LastName,
      Address: this.regiForm.value.Address,
      DOB: this.regiForm.value.DOB,
      Gender: this.regiForm.value.Gender,
      OSofChoice: this.regiForm.value.OSofChoice,
      Email: this.regiForm.value.Email,
      IsAccepted: this.regiForm.value.IsAccepted
    };
    console.log(form);
    this.clearForm();
    this.userService.addUser(newUser).subscribe((res) => {
      console.log(res);
    });
  }
}
