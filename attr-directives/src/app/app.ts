import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule,NgStyle,NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'attr-directives';
  // For ngClass
  isSpecial: boolean = true;
  hasError: boolean = false;

  // For ngStyle
  fontSize: string = '18px';
  textColor: string = 'blue';

  // For ngModel
  userName: string = '';
  age: number = 20;

  toggleClass() {
    this.isSpecial = !this.isSpecial;
    this.hasError = !this.hasError;
  }

  increaseFont() {
    this.fontSize = parseInt(this.fontSize) + 2 + 'px';
  }
}
