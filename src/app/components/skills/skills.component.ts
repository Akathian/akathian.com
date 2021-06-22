import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent implements OnInit {
  skills = [
    {
      cat: "Languages",
      id: "lang",
      items: [
        "Python",
        "Node.js",
        "Javascript",
        "Typescript",
        "Java",
        "C",
        "MySQL",
        "NoSQL",
      ],
    },
    {
      cat: "AI",
      id: "ai",
      items: [
        "Document AI (NN, LDA)",
        "Image AI (NN, RBF)",
        "Classification",
        "Clustering",
        "Regression",
        "Dimensionality Reduction",
        "AWS SageMaker",
        "OpenCV",
        "Darkflow",
        "Mediapipe",
      ],
    },
    {
      cat: "Web Dev & UI/UX",
      id: "web",
      items: [
        "Node.js",
        "Flask",
        "Angular",
        "React",
        "Jquery",
        "Mocha/Chai Tests",
        "AWS",
        "Firebase",
        "Moqups",
      ],
    },

    {
      cat: "Hacking",
      id: "hack",
      items: [
        "Penetration Testing (CTFs)",
        "Malware Analysis",
        "Cryptography",
        "Network Security",
        "OS & Program Security",
        "Web Security",
      ],
    },
    {
      cat: "AWS",
      id: "aws",
      items: [
        "SageMaker",
        "Rekognition",
        "Comprehend",
        "Lex",
        "Elastic Beanstalk",
        "SQS",
        "SNS",
        "EC2",
        "CodePipeline",
        "S3",
        "Sumerian",
        "CloudWatch",
      ],
    },
    {
      cat: "Theoretical CS",
      id: "cs",
      items: [
        "Algo Design & Analysis",
        "Data Structs Design & Analysis",
        "Algos for Computational Maths",
        "Theory of Computation",
        "Agile Methods",
      ],
    },
  ];
  constructor() {}

  ngOnInit() {}
}
