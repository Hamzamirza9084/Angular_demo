import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-style',
  imports: [CommonModule],
  templateUrl: './ng-style.html',
  styleUrl: './ng-style.css'
})
export class NgStyleComponent {
  color: string = 'blue';
  fontSize: number = 20;

  changeColor(newColor: string) {
    this.color = newColor;
  }

  increaseSize() {
    this.fontSize += 2;
  }

  decreaseSize() {
    this.fontSize -= 2;
  }
}
