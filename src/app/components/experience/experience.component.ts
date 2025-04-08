import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"],
})
export class ExperienceComponent implements OnInit {
  constructor() {}
  experiences = [
    {
      name: "Machine Learning Engineer",
      id: "marz",
      company: "Monsters Aliens Zombies Robots (MARZ)",
      location: "Toronto, ON",
      blurb:
        "Engineering ML apps, data pipelines, ML models and supporting ML infrastructure for VFX tasks",
      dates: {
        from: "March 2022",
        to: "May 2023",
      },
      desc: [
        "Spearheaded pivotal discussions in system design meetings for LipDub AI and Vanity AI, contributing to the development of cutting-edge AI infrastructure that facilitated Hollywood-grade automated lip-syncing and accelerated, high-quality VFX enhancements, respectively",
        "Sped up a data pipeline by over 300x by optimizing db calls, model compilation (ONNX runtime) and general code quality",
        "Built an end-to-end ML webapp for eye bag, acne and deaging edits that meet Hollywood standards with 5 team members, saving artists over 90% of their time"
      ],
      tech: [],
    },
    {
      name: "Deep Learning Research Programmer",
      id: "ws",
      company: "University of Toronto Dept. of Psychology",
      location: "Toronto, ON",
      blurb:
        "Developing neural network models of how humans produce, comprehend, and understand language",
      dates: {
        from: "September 2021",
        to: "August 2022",
      },
      desc: [
        "Researched and coded the python (PYLens) translation of the CLens neural network simulator implementation of Simple Recurrent Backpropogation Through Time (SRBPTT)",
      ],
      tech: [],
    },
    {
      name: "Machine Learning Engineer",
      id: "16bit",
      company: "16Bit",
      location: "Remote",
      blurb:
        "Engineer, train, test and validate neural network model to infer bone density from x-ray images and survival predictions in COVID-19 patients.",
      dates: {
        from: "September 2021",
        to: "December 2021",
      },
      desc: [
        "Researched and implemented independantly DeepHit, COX, XGBoost, and DeepSurvivalMachine algorithms to COVID-19 patient data to predict clinical outcomes",
        "Built a pipeline to run multiple experiments to obtain the model that could predict risk score the best",
      ],
      tech: [],
    },
    {
      name: "Software Developer",
      id: "biorender",
      company: "BioRender",
      location: "Toronto, ON",
      blurb:
        "Worked on the platform team focusing on features, APIs and the database before moving to the Growth & Acceleration Engineering team to focus on user recommendations, running A/B tests and analyzing data.",
      dates: {
        from: "January 2021",
        to: "August 2021",
      },
      desc: [
        "Coded and A/B tested a scoring function to match over 6k users to field-specific templates to investigate whether recommending templates to a user would increase their usage",
        "Engineered, trained and tested document classifying and clustering algorithms to recommend templates most similar to the user’s illustrations",
        "Implemented the Flagsmith A/B testing platform, enabling over 25 developers and project managers to test any number of features risk-free, and investigate whether the feature improves metrics",
      ],
      tech: [],
    },
    {
      name: "Freelance Web Developer",
      id: "free",
      company: "Freelance",
      location: "Scarborough, ON",
      blurb:
        "Build and maintain the business' website and teach subjects such as Programming, Math and French to students",
      img: "https://thayahanartsschool.ca/assets/logo.png",
      dates: {
        from: "August 2020",
        to: "Present",
      },
      desc: [
        "Built a fully fledged e-commerce web-app for OVVisuals (arts), allowing paypal payments, user login and other functionalities using multiple APIs.",
        "Creating a blog and forum website for a mental health awareness non-profit business, allowing for user anonymity",
        "Wrote reusable Angular components to keep the code for the websites clean and organized",
      ],
      tech: ["Python", "French", "Math"],
    },
    // {
    //   name: "Web Developer & Tutor",
    //   id: "thayahan",
    //   company: "Thayahan Arts School",
    //   location: "Scarborough, ON",
    //   blurb:
    //     "Build and maintain the business’ website for 100s of monthly visitors and tutor students",
    //   img: "https://thayahanartsschool.ca/assets/logo.png",
    //   dates: {
    //     from: "January 2019",
    //     to: "Present",
    //   },
    //   desc: [
    //     "Deployed a business website using Angular and Firebase with around 10 reusable components",
    //     "Teach 5 students 1:1 the fundamentals of programming and french while keeping them engaged and interested in the lessons",
    //   ],
    //   tech: ["Python", "French", "Math"],
    // },
    {
      name: "Innovation Engineer (R&D App Dev)",
      id: "cibc",
      company: "CIBC",
      location: "Toronto, ON",
      blurb:
        "One of seven members of an agile R&D team following SDLC practices prototyping an interactive digital assistant for CIBC corporate and client use cases.",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/CIBC_logo.svg/350px-CIBC_logo.svg.png",
      dates: {
        from: "September 2019",
        to: "April 2020",
      },
      desc: [
        "Developed a queueing system using Node.js to determine event processing order, capable of handling over 1k events in a few milliseconds",
        // 'Wrote extensive mocha/chai unit tests for the server\'s Node.js backend',
        "Built a neural network predicting user’s overall sentiment based on their gestures, facial expression and what they say so that the assistant can change how she answers the user’s questions",
        // "Performed research on finding technologies for solutioning the assistant’s learning model, UI controls, microphone, and camera set-ups via IoT and AI",
        "Wrote a program that provided the same functionality as the AWS Lex Console GUI using the SDK to allow for Git versioning of Lex bots, intents and slots.",
        // 'Worked with ultrasonic and infrared sensors to create a prototype for controlling the assistant\'s UI'
      ],
      tech: [
        "Node.js",
        "Python (AI & Edge Computing)",
        "AWS",
        "Agile",
        "Git (GitFlow)",
        "MySQL",
        "Mocha/Chai",
        "React.js",
        "IoT",
        "Jira",
      ],
    },
    {
      name: "French Coding & Robotics Teacher",
      id: "sylvan",
      company: "Sylvan Learning of Unionville",
      location: "Markham, ON",
      blurb: "",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/US_2016_SYLVAN_LOGO.jpg/1200px-US_2016_SYLVAN_LOGO.jpg",
      dates: {
        from: "September 2018",
        to: "December 2018",
      },
      desc: [
        "Taught groups of up to 16 children from grades 3-6 basics of coding through block coding software",
        "Explained fundamentals of coding such as variables, loops and conditional statements",
        "Broadened students’ knowledge on real world applications of robotics",
      ],
      tech: [
        "Block Coding (Tynker)",
        "LEGO WeDo 2.0",
        "Java",
        "Python",
        "French",
      ],
    },
    {
      name: "Pharmacy Assistant",
      company: "Shopper's Drug Mart",
      location: "Markham, ON",
      id: "shop",
      blurb: "",
      img: "https://searchlogovector.com/wp-content/uploads/2018/10/shoppers-drug-mart-logo-vector.png",
      dates: {
        from: "September 2015",
        to: "January 2016",
      },
      desc: [
        "Assisted pharmacists in medication refilling, dispensing and managing patient records & confidentially",
        "Performed data entry of prescriptions, new patients and patient profile updates in HealthWatch",
        "Processed more than 15 prescriptions daily in person, by phone and on the computer",
      ],
      tech: ["HealthWatch"],
    },
    {
      name: "French Tutor",
      company: "Self Employed",
      location: "Markham, ON",
      blurb: "",
      dates: {
        from: "June 2015",
        to: "August 2016",
      },
      desc: [
        "Developed student’s writing skills by curating lessons for each student",
        "Strengthened student’s reading skill by selecting reading material for students according to skill level ",
      ],
      tech: ["French"],
    },
  ];
  ngOnInit() {}
}
