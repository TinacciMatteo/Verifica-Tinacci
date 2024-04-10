import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutenticazioneComponent } from './autenticazione/autenticazione.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AutenticazioneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'verifica';
}
