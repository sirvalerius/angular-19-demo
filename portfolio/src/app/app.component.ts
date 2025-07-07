import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FixedHeaderMenuComponent} from './fixed-header-menu/fixed-header-menu.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, FixedHeaderMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
