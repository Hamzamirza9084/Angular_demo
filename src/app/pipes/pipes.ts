import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css'
})
export class Pipes {
  name: string = 'angular';
  upperName: string = 'ANGULAR';
  price: number = 12345.68;
  today: Date = new Date();
  rate: number = 0.23;
  text: string = 'hello angular';
}


