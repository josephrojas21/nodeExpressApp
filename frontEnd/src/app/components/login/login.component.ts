import { Component, OnInit } from '@angular/core';
import { AuthSericeService, TokenPayload } from '../../services/auth-serice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: TokenPayload = {
    email: '',
    password: ''
  };


  constructor(private auth: AuthSericeService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/users');
    }, (err) => {
      console.error(err);
    });
  }

}
