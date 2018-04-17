import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpreqService } from './httpreq.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { ApiComponent } from './api/api.component';
import { ConnectComponent } from './connect/connect.component';
import { TodolistComponent } from './todolist/todolist.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { component: HomeComponent, path: 'home' },
  { component: TodolistComponent, path: 'todo' },
  { component: ProfileComponent, path: 'profile' },
  { component: KnowledgeComponent, path: 'knowledge' },
  { component: ApiComponent, path: 'api' },
  { component: ConnectComponent, path: 'connect' }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    KnowledgeComponent,
    ApiComponent,
    ConnectComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HttpreqService],
  bootstrap: [AppComponent]
})
export class AppModule { }
