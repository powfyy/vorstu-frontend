import { Component, OnInit  } from '@angular/core';
import { TokenStorageService } from './service/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  role: string = '';
  authority: string='';

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.role = this.tokenStorage.getAuthorities();
        if (this.role === 'ROLE_ADMIN') {
          this.authority = 'ROLE_ADMIN';
          return false;
        }
        this.authority = 'ROLE_STUDENT';
      };
      return true
    }

  }
