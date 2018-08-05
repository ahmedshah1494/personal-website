import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public static news_list = [
      {date:`July 2018`,news:`Submitted Sherlock to IEEE Infocom 2019`},
      {date:`May 2018`, news: `Accepted admission offer for Master of Language Technology program at CMU LTI.`},
      {date:`August 2017`, news: `Started working as a teaching assistant for Intro to Computer Systems (15-213) and Computer Networks (15-441) at CMU-Qatar`},
      {date:`May 2017`, news: `Participated and won NeuroHack 2017, organized by CMU BrainHub.`},
      {date:`May 2017`, news: `Accepted by CMU Sphinx for Google Summer of Code 2017 to build DNN-based speech recognition modules.`},
      {date:`May 2017`, news: `Graduated from CMU with a BSc. in Computer Science and, University and College Honors`},
      {date:`March 2017`, news: `Won the Algorithmic Trading Competition at CMU-Qatar`},
      {date:`February 2017`, news: `Accepted to Master of Language Technology program at CMU LTI.`},
  ]

  get news_list(){
      return NewsComponent.news_list;
  }
}
