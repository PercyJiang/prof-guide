import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDialogModule } from '@angular/material/dialog'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'

import { ProfessorComponent } from './components/professor/professor.component'
import { PostComponent } from './components/post/post.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { CreateProfessorComponent } from './components/create-professor/create-professor.component';
import { CreatePostComponent } from './components/create-post/create-post.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfessorComponent,
    PostComponent,
    SignUpComponent,
    LogInComponent,
    CreateProfessorComponent,
    CreatePostComponent
  ],
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
