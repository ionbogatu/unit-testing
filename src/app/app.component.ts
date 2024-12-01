import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MobileService } from './services/mobile.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'unit-testing';

  constructor(protected mobileService: MobileService) {}

  setTitle(newTitle: string) {
    this.title = newTitle;
  }
}
