import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor() { }
  experiences = [
    {
      name: 'Freelance Web Developer',
      id: 'free',
      company: 'Freelance',
      location: 'Scarborough, ON',
      blurb: 'Build and maintain the business\' website and teach subjects such as Programming, Math and French to students',
      img: 'https://thayahanartsschool.ca/assets/logo.png',
      dates: {
        from: "August 2020",
        to: 'Present'
      },
      desc: [
        'Built a fully fledged e-commerce web-app for OVVisuals (arts), allowing paypal payments, user login and other functionalities using multiple APIs.',
        'Creating a blog and forum website for a mental health awareness non-profit business, allowing for user anonymity',
        'Wrote reusable Angular components to keep the code for the websites clean and organized'
      ],
      tech: [
        'Python', 'French', 'Math'
      ]
    },
    {
      name: 'Web Developer & Tutor',
      id: 'thayahan',
      company: 'Thayahan Arts School',
      location: 'Scarborough, ON',
      blurb: 'Build and maintain the business\' website and teach subjects such as Programming, Math and French to students',
      img: 'https://thayahanartsschool.ca/assets/logo.png',
      dates: {
        from: "January 2019",
        to: 'Present'
      },
      desc: [
        'Created an interactive and responsive business website using Angular and Google Firebase',
        'Teach multiple students fundamentals of programming, mathematics and french while keeping them engaged and interested in the lessons',
      ],
      tech: [
        'Python', 'French', 'Math'
      ]
    },
    {
      name: 'Innovation Engineer (R&D App Dev)',
      id: 'cibc',
      company: 'CIBC',
      location: 'Toronto, ON',
      blurb: 'One of seven members of an agile R&D team following SDLC practices prototyping an interactive digital assistant for CIBC corporate and client use cases.',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/CIBC_logo.svg/350px-CIBC_logo.svg.png',
      dates: {
        from: "September 2019",
        to: 'April 2020'
      },
      desc: [
        'Developped a queueing system using Node.js to determine event processing order',
        // 'Wrote extensive mocha/chai unit tests for the server\'s Node.js backend',
        'Built a NN predicting user\'s overall sentiment based on gestures, facial expression and what they say so that the assistant can change how she answers the user\'s questions.',
        // 'Performed research on finding technologies for solutioning the assistant\'s learning model, UI controls, microphone, and camera set-ups',
        'Wrote a program that provided the same functionality as the AWS Lex Console GUI using the SDK to allow for Git versioning of Lex bots, intents and slots.',
        // 'Worked with ultrasonic and infrared sensors to create a prototype for controlling the assistant\'s UI'
      ],
      tech: [
        'Node.js', 'Python (AI & Edge Computing)', 'AWS', 'Agile', 'Git (GitFlow)', 'MySQL', 'Mocha/Chai', 'React.js', 'IoT', 'Jira'
      ]
    },
    {
      name: 'French Coding & Robotics Teacher',
      id: 'sylvan',
      company: 'Sylvan Learning of Unionville',
      location: 'Markham, ON',
      blurb: '',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/US_2016_SYLVAN_LOGO.jpg/1200px-US_2016_SYLVAN_LOGO.jpg',
      dates: {
        from: "September 2018",
        to: 'December 2018'
      },
      desc: [
        'Taught groups of up to 16 children from grades 3-6 basics of coding through block coding software',
        'Explained fundamentals of coding such as variables, loops and conditional statements',
        'Broadened students’ knowledge on real world applications of robotics',
      ],
      tech: [
        'Block Coding (Tynker)', 'LEGO WeDo 2.0', 'Java', 'Python', 'French'
      ]
    },
    {
      name: 'Pharmacy Assistant',
      company: 'Shopper\'s Drug Mart',
      location: 'Markham, ON',
      id: 'shop',
      blurb: '',
      img: 'https://searchlogovector.com/wp-content/uploads/2018/10/shoppers-drug-mart-logo-vector.png',
      dates: {
        from: "September 2015",
        to: 'January 2016'
      },
      desc: [
        'Assisted pharmacists in medication refilling, dispensing and managing patient records & confidentially',
        'Performed data entry of prescriptions, new patients and patient profile updates in HealthWatch',
        'Processed more than 15 prescriptions daily in person, by phone and on the computer',
      ],
      tech: [
        'HealthWatch'
      ]
    },
    {
      name: 'French Tutor',
      company: 'Self Employed',
      location: 'Markham, ON',
      blurb: '',
      dates: {
        from: "June 2015",
        to: 'August 2016'
      },
      desc: [
        'Developed student’s writing skills by curating lessons for each student',
        'Strengthened student’s reading skill by selecting reading material for students according to skill level ',
      ],
      tech: [
        'French'
      ]
    },
  ]
  ngOnInit() {
  }

}
