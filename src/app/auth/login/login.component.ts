import { LoginInfo } from './../login-info';
import { TokenStorageService } from './../../service/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  errorMessage = '';
  errorMessageLogin='';
  role: string = '';
  public loginInfo: LoginInfo = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.role = this.tokenStorage.getAuthorities();
    }
  }

  onSubmit() {

    if (!this.form.username || !this.form.password) {
      this.errorMessage = "Пожалуйста, заполните поле";
      return;
    }

    this.loginInfo = new LoginInfo(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.role);

        this.role = this.tokenStorage.getAuthorities();
        this.router.navigate(['table']);
      },
      (error) => {
        console.error('Login failed:', error);
        this.errorMessageLogin = 'Неверный логин или пароль';
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

  goSignUp(){
   this.router.navigate(['signup']);
  }
}
