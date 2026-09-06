import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-switch',
  imports: [CommonModule],
  templateUrl: './ng-switch.html',
  styleUrl: './ng-switch.css'
})
export class NgSwitchComponent {
  color: string = 'red';

  changeColor(newColor: string) {
    this.color = newColor;
  }
}
