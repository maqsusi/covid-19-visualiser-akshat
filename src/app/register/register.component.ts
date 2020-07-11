import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import {AuthService} from "../auth.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm;
  constructor(public fb: FormBuilder, public auth:AuthService) { 
    this.userForm = this.fb.group({
      "username": this.fb.control("", Validators.required),
      "password": this.fb.control("", Validators.required)
    })
  }

  ngOnInit(): void {
  }
  registerUser()
  {
    if(this.userForm.valid)
    {
      console.log("Details are valid.");
      console.log(this.userForm.value.username);
      console.log(this.userForm.value.password);
      this.auth.regUser(this.userForm.value.username, this.userForm.value.password);


    }
  }
}
