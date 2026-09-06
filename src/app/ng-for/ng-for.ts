import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-for',
  imports: [CommonModule],
  templateUrl: './ng-for.html',
  styleUrl: './ng-for.css'
})
export class NgForComponent {

  fruits: string[] = ['Apple', 'Banana', 'Mango', 'Orange'];

  
  students = [
    { name: 'Rahul', city: 'Pune' },
    { name: 'Pooja', city: 'Mumbai' },
    { name: 'Amit', city: 'Delhi' }
  ];
}
