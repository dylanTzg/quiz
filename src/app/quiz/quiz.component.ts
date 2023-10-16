import {Component, Input} from '@angular/core';
import {QuestionComponent} from "../question/question.component";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  isQuizFinished = false;
  compteur = 0;
  questions = QuestionComponent.questions;


  onSendClick() {
    this.isQuizFinished = true;
  }

  onResponseClick(choix: { texte: string, correct: boolean },id : number ) {
    if(this.questions[id-1].etat != "non repondu") {
      return;
    }
    if (choix.correct) {
      this.questions[id-1].etat = "correct";
      this.compteur++;
    } else {
      this.questions[id-1].etat = "incorrect";
    }
  }

}
