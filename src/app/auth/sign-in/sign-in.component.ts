import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{

  form = {
    username: null,
    password: null
  }

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
      
  }

  onSubmit() {
    console.log(this.form);
    
    this.httpClient.post('http://localhost:8080/api/account', this.form).subscribe(
      data => console.log(data), 
      err  => console.log(err)
    )
  
  }
}
