import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public static pubs = [
      {
          title: "Hitting Three Birds With One System: A Voice-based CAPTCHA for The Modern User",
          venue: "IEEE ICWS 2018",
          citation: "M. A. Shah and K. A. Harras. “Hitting Three Birds With One System: A Voice-based CAPTCHA for The Modern User” 2018 IEEE International Conference on Web Services (ICWS), San Francisco, CA, 2018.",
          pdf: "https://nsl.qatar.cmu.edu/papers/icws18.pdf",
          tags: ['vcaptcha']
      },
      {
          title: "Inferring Room Semantics Using Acoustic Monitoring",
          venue: "IEEE MLSP 2017",
          citation: `M. A. Shah, B. Raj and K. A. Harras "Inferring Room Semantics Using Acoustic Monitoring" 2017 IEEE 27th International Workshop on Machine Learning for Signal Processing (MLSP), Tokyo, Japan, 2017.`,
          pdf: "https://arxiv.org/pdf/1710.08684.pdf",
          tags: ['sherlock']
      }
  ]

  reseach_projects = [
      {
          title: "Sherlock: A Crowdsourced System for Automatic Tagging Of Indoor Floorplans",
          description: [
          `Location-based services (LBSs) have become evermore pervasive with more than 153 million users relying on their smartphones for directions, recommendations,and other location 
          related information. However, since most of the current LBSs rely on GPS, they are only able to function in outdoor environments.A key pre-requisite for rich indoor LBSs however, 
          is the ability to obtain information about a user's environmental context without any explicit human intervention. This context would include the location within an indoor environment 
          (e.g. room and floor), as well as semantic information about the surrounding space (e.g. classroom).`,
          `While current indoor mapping techniques are capable of producing accurate maps, these maps are not labeled and hence of limited utility for many applications. To address this shortcoming, 
          we propose Sherlock, a fully-automated system that efficiently infers semantic labels for indoor spaces using crowdsourced audio and image samples. Instead of explicitly soliciting labels 
          from users who are unlikely to respond, we adopt a more practical solution that avoids explicit user intervention at any stage.`,
          `Sherlock consists of a client mobile application for data collection and a server for data processing and label inference. The client application runs in the background and obtains information 
          about the environment by periodically polling the on-board sensors. When suitable conditions exist, the application triggers data collection from the appropriate modality. The data is initially 
          stored locally and, when suitable network conditions are observed, is uploaded to the Sherlock server for feature extraction and classification. Unlike many existing systems, Sherlock does not 
          label individual data samples based on their classification scores, instead it uses these scores, in a probabilistic framework to update it's confidence in the semantic label for the physical 
          space the samples originated from. By computing the likelihood for each semantic label, and not enforcing a choice between them, Sherlock is able to detect multi-purpose rooms`,
          `We implement a prototype of Sherlock and evaluate it on a large dataset containing 11,704 3-second audio recordings and 1,287 images. In our evaluation, the confidence of our system in the true label 
          for a room generally outstripped the confidence in all other labels, reaching values as high as 100%. Our results also show that Sherlock requires only 26 data samples, on average, to label a 
          room and that collecting these data samples would impose a very nominal cost of 1.32 mAh of battery charge and 13.7 MB of temporary storage space, thus demonstrating the practical feasibility of deploying our system.`
          ],
          images: [
              {
                  path:"/assets/images/research_images/use_case_sherlock.png",
                  caption: "Sherlock usage scenario. The colors represent different room types and the intensity of the color represents the confidence in the deduced label."
              }, 
              {
                  path: "/assets/images/research_images/sys_arch_sherlock.png",
                  caption: "System Architecture of Sherlock"}
          ],
          pubs: ResearchComponent.pubs.filter(item => item.tags.indexOf("sherlock") !== -1)
      },
      {
          title: "vCAPTCHA: A Voice-based CAPTCHA for The Modern User",
          description: [
              `There are rising doubts about the effectiveness and security of CAPTCHA, the Completely Automated Public Turing Test to tell Computers and Humans Apart. 
              CAPTCHA and ReCAPTCHA systems are widely used on the Internet, mostly by web services, to differentiate between human users and automated scripts. The most common form of 
              CAPTCHA relies on the limitation of computer vision techniques by presenting users with a short, visually distorted string, and asking them to type out its contents. The 
              emerging concern, however, is based on the fact that modern optical character recognition techniques can solve the most difficult variants of Google's ReCAPTCHA with 
              more than 99% accuracy. In addition to the security concerns, the emerging trend of portable/mobile device adoption with its increased variety of usage as a pervasive sensor 
              for many applications, has rendered CAPTCHA challenges less convenient to use.`,
              `Given the recent advancements in speech processing technologies, we see speech as a very promising modality for CAPTCHA systems, one that could solve the aforementioned problems 
              of usability and security that plague current systems.With more than 70% of users finding speech to be more efficient than typing, and 20% of Google mobile searches happening via 
              voice, speech seems poised to become the dominant input modality for mobile devices. In addition, speech synthesis techniques have not matured enough to accurately replicate the 
              human voice. Synthesized speech usually contains certain artifacts that machine learning techniques can identify with more than 90% accuracy.`,
              `We propose vCAPTCHA, a secure and convenient voice-based CAPTCHA. A user is presented with a short challenge text, which he/she will respond to by speaking out the displayed text 
              rather than typing it in. Since vCAPTCHA uses the human-ness of speech to differentiate humans and bots, it obviates the need to visually distort the text displayed to the user. 
              This makes the task of solving our CAPTCHA even more convenient and less cognitively tasking for human users, while still presenting a significant challenge to bots.`,
              `We implement a prototype of vCAPTCHA and evaluate its different components using ASVSpoof 2015/17 datasets. These datasets include more than 200,000 speech samples, that are both spoofed 
              and genuine, on which we measure the attack and human success. There were two types of spoofed recodings present in our data, namely replayed recordings, and synthesized recordings. We were 
              able achieve attack success rates as low as, 10.2% while maintaining a human success rate of 73.7%, which is comparable to current CAPTCHAs.`
          ],
          images: [
              {
                  path: "/assets/images/research_images/captcha-diagram.png",
                  caption: "System architecture of vCAPTCHA."
              }
          ],
          pubs: ResearchComponent.pubs.filter(item => item.tags.indexOf("vcaptcha") !== -1)
      }    
  ]

  get publications(){
      return ResearchComponent.pubs
  }
}
