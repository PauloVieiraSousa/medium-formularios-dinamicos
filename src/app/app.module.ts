import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {DynamicFormQuestionComponent} from "./dynamic-form-question/dynamic-form-question.component";


@NgModule({
  declarations: [
    AppComponent,
    DynamicFormQuestionComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
