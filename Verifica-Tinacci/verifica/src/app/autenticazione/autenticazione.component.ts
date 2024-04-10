import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
import { Utente } from '../model/utente';

@Component({
  selector: 'app-autenticazione',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './autenticazione.component.html',
  styleUrl: './autenticazione.component.css'
})
export class AutenticazioneComponent {
  newUtente: Utente = { username: "", password: ""};
  messaggio: string = "";
  showForm: boolean = false;
  showLogin: boolean = true;
  response: any;


  constructor(private loginService: LoginService) { }

  login(): void {
    this.loginService.login(this.newUtente)
      .subscribe((response) => {

        if(response.valid == true){
          this.messaggio = "Benvenuto sul sito!";
        }else{
          this.messaggio = "Errore credenziali errate o non sei registrato!";
        }

      });
      this.newUtente = {username: "", password: ""};
  }

  register(): void {
    this.loginService.register(this.newUtente)
      .subscribe(() => {
        this.messaggio = "Registrato!";
      });
      this.newUtente = {username: "", password: ""};
      this.showForm = false;
      this.showLogin = true;
  }


  show = () =>{
    this.showLogin = false;
    this.showForm = true;
  }





}
