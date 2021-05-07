import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  registerationForm: FormGroup;
  user: User;
  userSubmitted:boolean;
  constructor( private fromBuilder: FormBuilder,
               private userServices: UserServiceService,
               private alertify: AlertifyService
    ) { }

  ngOnInit(): void {

    // this.registerationForm=new FormGroup({
    //   userName: new FormControl(null, Validators.required),
    //   email: new FormControl(null, [Validators.required,Validators.email]),
    //   password: new FormControl(null, [Validators.required,Validators.minLength(8)]),
    //   confirmPassword:new FormControl(null,[Validators.required]),
    //   mobile: new FormControl(null,[Validators.required, Validators.maxLength(10)])
    // },this.passwrodMatchingValidator);
    this.createRegisterationForm();
  }


  createRegisterationForm() {
    this.registerationForm =  this.fromBuilder.group({
        userName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword: [null, Validators.required],
        mobile: [null, [Validators.required, Validators.maxLength(11)]]
    }, {validators: this.passwordMatchingValidatior});
}

passwordMatchingValidatior(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value ? null :
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
    this.userSubmitted=true;

    if(this.registerationForm.valid){
      //this.user = Object.assign(this.user, this.registerationForm.value);
      this.userServices.addUser(this.userData());
      this.registerationForm.reset();
      this.userSubmitted=false;
      this.alertify.success('Congrats, registration successfull');
    } else{
      this.alertify.error('Kindly provide required field ')
    }


  }

  userData(): User{
    return this.user={
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }


}
