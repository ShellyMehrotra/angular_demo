import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
// For Interpolation
title: string = 'Angular 20 Data Binding Example';

// For Property Binding
imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';
isDisabled: boolean = true;

// For Event Binding
counter: number = 0;

incrementCounter() {
this.counter++;
}

// For Two-way Binding
username: string = '';
}
