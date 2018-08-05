import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    Name="Hi, I'm Ahmed";
    Intro=[`I graduated from Carnegie Mellon University, in May 2017, with a B.S. in Computer Science and, University and College Honors. My research interests lie 
           in the area of machine learning. My past projects have involved environment prediction/detection, 
           deep learning for speech recognition, speaker verification and neurological data analysis.`,           
           `I am currently working as a Teaching Assistant for Computer Science 
           at Carnegie Mellon University's Qatar Campus. In this capacity, assist with the computer systems and computer networks courses.
           In August, I'll be returning to CMU to pursue a Masters 
           in Language Technologies from the Language Technologies Institute.`,  
           `My other, non-professional, interests include cooking, reading, photography and traveling.`,       
           ];
    recent_projects = [
    {
        name: 'Sherlock: A Crowd-sourced System For Automatic Tagging Of Indoor Floor Plans',
        image: 'assets/images/sherlock.png'
    },
    {
        name: 'DNNs For CMU Sphinx',
        image: 'assets/images/sphinx.png'
    },
    {
        name: 'vCAPTCHA: A Voice-based CAPTCHA For the Modern User',
        image: 'assets/images/sherlock.png'
    },
    ]           
}
