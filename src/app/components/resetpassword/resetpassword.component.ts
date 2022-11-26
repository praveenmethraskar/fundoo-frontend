import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetForm!: FormGroup;
  submitted = false;
  token: any;

  constructor(private formBuilder: FormBuilder, private user:UserService, private activeRoute: ActivatedRoute) {
      
   }

  ngOnInit(): void {
    this.token = this.activeRoute.snapshot.paramMap.get('token')
    
    this.resetForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(6)]],
      //acceptTerms: [true, Validators.requiredTrue]
  })
  this.token = this.activeRoute.snapshot.paramMap.get('token');
  console.log(this.token);
  }

      // convenience getter for easy access to form fields
      get f() { return this.resetForm.controls; }

      onSubmit() { 
          this.submitted = true;
  
          // stop here if form is invalid
          if (this.resetForm.valid) {
            let payload = { 
              newPassword: this.resetForm.value.password,
              confirmPassword: this.resetForm.value.confirmpassword,
              //service:'advance'
            }
            console.log(payload)
  
            this.user.Reset(payload,this.token).subscribe((response:any) =>{
              console.log('password response',response);
              //localStorage.setItem("token",response.data);
            })
          }
      }

}
