import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-if',
  imports: [CommonModule],
  templateUrl: './ng-if.html',
  styleUrl: './ng-if.css'
})
export class NgIfComponent {
  isLoggedIn: boolean = false;

  toggle() {
    this.isLoggedIn = !this.isLoggedIn;
  }
  
}
