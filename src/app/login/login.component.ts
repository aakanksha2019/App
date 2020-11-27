import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from '../helpers/must-match.validator';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'useapp';
  registerForm: FormGroup;
    submitted = false;
    passpattern="^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,}$";
    constructor(private formBuilder: FormBuilder,
        private router: Router,
        private dispservice:UserService) { }

    ngOnInit() {
       
        this.registerForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.pattern(this.passpattern)]],
            confirmPassword: ['', Validators.required],
            contactNumber: ['',Validators.required],
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
  
        // display form values on success
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
        //alert(this.registerForm.value.email);
        this.dispservice.userdetails=this.registerForm.value;
       this.router.navigate(['/display']);


    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }

}
