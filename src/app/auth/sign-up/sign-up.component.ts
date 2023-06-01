import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  form = {
    firstname: null,
    lastname: null, 
    username: null,
    password: null,
    email: null,
    birthday: null,
    phoneNumber: null,
  }

  pwdConfirm!: string;


  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
  }

  verifPassword(): Boolean {
    return this.pwdConfirm === this.form.password;
  }

  onSubmit() {
    console.log(this.form);
    this.httpClient.post("http://localhost:8080/api/account/signup", this.form).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
