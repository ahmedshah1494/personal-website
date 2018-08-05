import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { ResearchComponent } from './components/research/research.component';
import { PersonalComponent } from './components/personal/personal.component';
import { CvComponent } from './components/cv/cv.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'research',
    component: ResearchComponent
  },
  {
    path: 'personal',
    component: PersonalComponent
  },
  {
    path: 'cv',
    component: CvComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    ResearchComponent,
    PersonalComponent,
    CvComponent
  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
