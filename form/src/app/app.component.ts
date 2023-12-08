// import { Component, ElementRef } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'teacher';
  answer: string = '';
  genders: string[] = ['male', 'female'];
  user: {
    username: string;
    email: string;
    secretQuestion: string;
    answer: string;
    gender: string;
  } = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  submitted: boolean = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male',
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  //   // console.log(form.value);
  // }

  onSubmit() {
    // this.submitted = true;
    // this.user.username = this.signupForm.value.userData.username;
    // this.user.email = this.signupForm.value.userData.email;
    // this.user.secretQuestion = this.signupForm.value.secret;
    // this.user.answer = this.signupForm.value.questionAnswer;
    // this.user.gender = this.signupForm.value.gender;
    this.submitted = true;
    this.user = {
      username: this.signupForm.value.userData.username,
      email: this.signupForm.value.userData.email,
      secretQuestion: this.signupForm.value.secret,
      answer: this.signupForm.value.questionAnswer,
      gender: this.signupForm.value.gender,
    };
    this.signupForm.reset();
  }
}
