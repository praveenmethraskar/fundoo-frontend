import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user:UserService) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      
      email: ['', [Validators.required, Validators.email]],
      //acceptTerms: [true, Validators.requiredTrue]
  });
  }

      // convenience getter for easy access to form fields
      get f() { return this.forgotForm.controls; }

      onSubmit() {
          this.submitted = true;
  
          // stop here if form is invalid
          if (this.forgotForm.valid) {
            let payload = {
              email: this.forgotForm.value.email,
              //service:'advance'
            }
            console.log(payload);
            this.user.ForgetPassword(payload).subscribe((response:any)=>{
              console.log(response);
              localStorage.setItem("token",response.data);
            })
          }
      }
  }

