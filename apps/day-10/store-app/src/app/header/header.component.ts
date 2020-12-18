import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isAuthenticated = false;

  private subUser: Subscription;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.subUser = this.authService.user.subscribe(
      user => {
        this.isAuthenticated = user ? true : false
      }
    );
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    if (this.subUser) {
      this.subUser.unsubscribe();
    }
  }
}
