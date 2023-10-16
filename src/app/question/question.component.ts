import { Component } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {

  static questions = [
    {
      id: 1,
      titre: "Quel est l'organe responsable de la pompe du sang dans le corps humain ?",
      choix: [
        {texte: "Le coeur", correct: true},
        {texte: "Le cerveau", correct: false},
        {texte: "Le foie", correct: false},
        {texte: "Les poumons", correct: false}
      ],
      etat: "non repondu"
    },
    {
      id: 2,
      titre: "Quel est l'organe responsable de la pompe du sang dans le corps humain ?",
      choix: [
        {texte: "Le cerveau", correct: false},
        {texte: "Le foie", correct: false},
        {texte: "Le coeur", correct: true},
        {texte: "Les poumons", correct: false}
      ],
      etat: "non repondu"
    },
    {
      id: 3,
      titre: "Quel est le symbole chimique de l'oxygène ?",
      choix: [
        {texte: "Ox", correct: false},
        {texte: "Oy", correct: false},
        {texte: "O", correct: true},
        {texte: "Oxg", correct: false}
      ],
      etat: "non repondu"
    },
    {
      id: 4,
      titre: "Quel est le symbole chimique de l'oxygène ?",
      choix: [
        {texte: "Ox", correct: false},
        {texte: "Oy", correct: false},
        {texte: "O", correct: true},
        {texte: "Oxg", correct: false}
      ],
      etat: "non repondu"
    },
    {
      id: 5,
      titre: "Quelle est la planète la plus proche du soleil ?",
      choix: [
        {texte: "La Terre", correct: false},
        {texte: "Mars", correct: false},
        {texte: "Vénus", correct: true},
        {texte: "Jupiter", correct: false}
      ],
      etat: "non repondu"
    },
    {
      id: 6,
      titre: "Combien de continents y a-t-il sur Terre ?",
      "choix": [
        {texte: "3", correct: false},
        {texte: "6", correct: true},
        {texte: "7", correct: false},
        {texte: "5", correct: false}
      ],
      etat: "non repondu"
    },
    {
      id: 7,
      titre: "Quel est l'élément le plus abondant dans l'atmosphère terrestre ?",
      "choix": [
        {texte: "Azote", correct: true},
        {texte: "Oxygène", correct: false},
        {texte: "Argon", correct: false},
        {texte: "Dioxyde de carbone", correct: false}
      ],
      etat: "non repondu"
    },
    {
      id: 8,
      titre: "Qui a peint 'La Joconde' ?",
      choix: [
        { texte: "Michel-Ange", correct: false },
        { texte: "Leonardo da Vinci", correct: true },
        { texte: "Vincent van Gogh", correct: false },
        { texte: "Pablo Picasso", correct: false }
      ],
      etat: "non repondu"
    }

  ];


}
