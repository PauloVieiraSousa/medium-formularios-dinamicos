import { Component, OnInit } from '@angular/core';
import { QuestionBase } from './services/question-base';
import { QuestionService } from './services/question.service';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from './services/question-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  questions: QuestionBase<any>[];
  form: FormGroup;
  payLoad = '';

  constructor(
    private questionService: QuestionService,
    private questionControlService: QuestionControlService
  ) {}

  ngOnInit() {
    this.questions = this.questionService.getPersonQuestions();
    this.form = this.questionControlService.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
