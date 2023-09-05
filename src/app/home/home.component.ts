import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
titre:string  = 'Bienvenue sur mon site';
personnes = ["dylan","idris","ales"];
condition:boolean = true;
}
