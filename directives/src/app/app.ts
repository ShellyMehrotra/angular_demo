import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf,NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgIf, NgForOf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
isLoggedIn = false;
showTemplate = false;

items = ['Angular', 'React', 'Vue'];

role = 'user'; // try 'admin', 'guest'
}
