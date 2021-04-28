import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  registerationForm: FormGroup;
  constructor() { }

  ngOnInit(): void {

    this.registerationForm=new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required,Validators.email]),
      password: new FormControl(null, [Validators.required,Validators.minLength(8)]),
      confirmPassword:new FormControl(null,[Validators.required]),
      mobile: new FormControl(null,[Validators.required, Validators.maxLength(10)])
    },this.passwrodMatchingValidator);
  }

  passwrodMatchingValidator(fg:FormGroup): Validators{
    return fg.get('password').value === fg.get('confirmPassword').value? null:
    {notmatched: true};
  }

  get userName(){
    return this.registerationForm.get('userName') as FormControl;
  }
  get email(){
    return this.registerationForm.get('email') as FormControl;
  }
  get password(){
    return this.registerationForm.get('password') as FormControl;
  }
  get confirmPassword(){
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get mobile(){
    return this.registerationForm.get('mobile') as FormControl;
  }


  onSubmit(){
    console.log(this.registerationForm);
  }

}
