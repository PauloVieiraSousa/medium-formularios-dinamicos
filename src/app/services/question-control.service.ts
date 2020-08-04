import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { QuestionBase } from './question-base';

@Injectable({
  providedIn: 'root',
})
export class QuestionControlService {
  constructor() {}

  toFormGroup(questions: QuestionBase<string>[]) {
    let group: any = {};
    questions.forEach((question) => {
      group[question.key] = new FormControl({value: question.value , disabled: question.disabled } || '', Validators.compose(question.validator))
    });
    return new FormGroup(group);
  }

}
