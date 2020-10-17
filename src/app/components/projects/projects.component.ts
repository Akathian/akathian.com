import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  projects = [
    {
      name: '2020 - OVVisuals Ecommerce Website',
      id: "ovvisuals",
      imgs: ['https://i.imgur.com/b5gmgZP.png', 'https://i.imgur.com/8YvkIMu.png', 'https://i.imgur.com/xCLp9Pz.png', 'https://i.imgur.com/HvW6Ume.jpg', 'https://i.imgur.com/vQXjDkU.jpg', 'https://i.imgur.com/VOFupep.png', 'https://i.imgur.com/jP3TE8z.png', 'https://i.imgur.com/KAtbdB7.png', 'https://i.imgur.com/h46obx5.png'],
      blurb: 'Built a fully fledged ecommerce web-app for OVVisuals (arts), allowing paypal payments, user login and other functionalities using multiple APIs.',
      desc: [
        'Connected users to their data such as their cart, orders and wishlist using NoSQL Firebase Realtime Database',
        'Used Bootstrap styling to render the website more appealing and facilitate implementation of interactivity',
        'Created reusable Angular components to keep the code for the website clean and organized',
      ],
    },
    {
      name: '2019 - Thayahan\'s Arts School Website',
      id: "thayahan",
      imgs: ['https://i.imgur.com/MVLW91G.jpg', 'https://i.imgur.com/MYKGQnb.png', 'https://i.imgur.com/u9sp9yt.jpg', 'https://i.imgur.com/FA4zhOi.png', 'https://i.imgur.com/k5bZBVZ.jpg', 'https://i.imgur.com/DAoXFNq.png'],
      blurb: 'Created an interactive and responsive business website using Angular and Google Firebase',
      desc: [
        'Implemented Angular route animations to make transitions between pages smooth and elegant',
        'Used Bootstrap styling to render the website more appealing and facilitate implementation of interactivity',
        'Created reusable Angular components to keep the code for the website clean and organized',
      ],
    },
    {
      name: '2019 - Self-Teaching Deep Learning',
      id: "deeplearn",
      imgs: [],
      blurb: 'Self-teaching basic deep learning topics such as neural networks and linear regression using online tutorials.',
      desc: [
        'Implemented a single layer neural network to learn the use of gradient descent and sigmoid functions',
        'Built a program that predicts an animal’s weight based on brain weight using a linear regression library',
        'Used the pandas library to import datasets for further linear regression analysis',
      ],
    },
    {
      name: '2019 - Rain (Verilog/FGPA Board)',
      id: "rain",
      imgs: [],
      iframe: 'https://www.youtube.com/embed/9n59mADAYR4',
      blurb: '2-player block avoiding game made with Verilog in Quartus II Prime. Control the game using FGPA Board. Watch the summary of the project here',
      desc: [
        'Implemented a datapath to check for collision and win states',
        'Designed a control path for FGPA control',
        'Wrote a random binary number generator module to allow for randomly falling blocks',
      ],
    },
    {
      name: '2019 - Course Website for CSCB20',
      id: "cscb20",
      imgs: ['https://i.imgur.com/EgT6NCx.png', 'https://i.imgur.com/yCTftwB.png', 'https://i.imgur.com/0PjpHtD.png', 'https://i.imgur.com/0Wb7w1H.png', 'https://i.imgur.com/luUBwxn.png'],
      blurb: 'Redesigned a course website to render it more interactive and responsive. Written with one other team member.',
      desc: [
        'Used Flexbox styling to render the website more appealing and facilitate implementation of interactivity',
        'Implemented a user login system using SQL databases allowing for a cleaner UI and content personalization between instructors and students',
        'Simplified code using Flask to reduce the number of repeated HTML lines'
      ],
    },
    {
      name: '2018 - Mock JShell',
      id: "jshell",
      imgs: ['https://i.imgur.com/IjWVRvd.png', 'https://i.imgur.com/kFEuEmS.png'],
      blurb: 'The mock JShell is a replica of the shell/terminal that is found on Linux and MacOS based systems. It mimicks a file system and is able to save and load the file system state using XML files.',
      desc: [
        'Applied Agile Scrum techniques to manage workloads across team members',
        'Wrote extensive JUnit test cases to validate functionality each time the code was refactored',
        'Used SVN to maintain version control and coordinate the project between team members',
        'Designed using software development methodologies such as SRP and Dependancy Injection among others'
      ],
    },
    {
      name: '2016 - The Binding of Isaac: Bootlegged',
      id: "isaac",
      imgs: [],
      blurb: 'Recreation of a popular video game written in Java using the Greenfoot GUI. Play the (reduced) game here or download it if it doesn\'t work on the website',
      desc: [
        'Implemented an algorithm to randomly generate levels using 2D arrays',
        'Applied the SRP software development method to codes for enemies, projectiles and items'
      ],
    },
  ]

  ngOnInit() {
  }

}
