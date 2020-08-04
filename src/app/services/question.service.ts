import { Injectable } from '@angular/core';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root',
})
export class QuestionService {

  getPersonQuestions() {
    let questions: QuestionBase<string>[] = [
      new TextboxQuestion({
        key: 'nome',
        label: 'Nome Completo',
        value: null,
        required: true,
        order: 1,
        validator: [Validators.required, Validators.minLength(10)]
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
