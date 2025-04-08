import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sides",
  templateUrl: "./sides.component.html",
  styleUrls: ["./sides.component.scss"],
})
export class SidesComponent implements OnInit {
  sides = [
    {
      num: 1,
      link: "/assets/projects/A Comparison Between Modern Day CNNs and Data Augmentation Techniques in Alzheimer’s Disease 4-stage Classification.pdf",
      // year: '2020 - 2021',
      name: "A Comparison Between Modern Day CNNs and Data Augmentation Techniques in Alzheimer’s Disease 4-stage Classification",
      id: "dl",
      imgs: [],
      blurb: "",
      desc: [
        "Alzheimer’s disease (AD) is a progressive neurodegenerative disorder, with no cure. It is often beneficial to diagnose the disease early to slow its progression and mitigate symptoms. Good clinicians and medical imaging are often required for rapid diagnosis of the disease. Recent studies have attempted to apply AI techniques to classify brain images into different AD stages. An ensemble deep CNN was proposed, [...]",
      ],
    },
    {
      num: 2,
      link: "/assets/sides/cards/A_Neural_Network_Model_of_Visual_Word_Recognition.pdf",
      // year: '2020 - 2021',
      name: "A Neural Network Model of Visual Word Recognition",
      id: "c90",
      imgs: [],
      blurb: "",
      desc: [
        "There has been much debate over how semantic memory is encoded. Most research has revolved around this topic using semantic priming, with little to no research conducted without priming factors. We provide computational evidence for a single mechanism distributed network account by investigating effects of lexical factors such as frequency, reading ability, category dominance, and semantic richness on two measures of reaction time (RT). We choose settling time as the first RT, and the time taken for the network to reach a certain semantic stress value, as the second. We demonstrate a three-way interaction effect between [...]",
      ],
    },
    {
      num: 3,
      link: "/chess",
      // year: '2020 - 2021',
      name: "Chess Bot",
      id: "chess",
      imgs: [],
      blurb: "In Progress",
      desc: [
        "Made use of the minimax algorithm with alpha-beta pruning and many other optimizations to create a chess AI (in progress, ELO: ?)",
      ],
    },
    {
      num: 4,
      link: "https://www.kaggle.com/akathiansanthakumar/competitions?tab=active",
      // year: '2020 - 2021',
      name: "Kaggle Competitions",
      id: "kaggle",
      imgs: [],
      blurb: "In Progress",
      desc: [
        "Built a CNN with data augmentation to recognize digits from the MNIST dataset and achieve a ranking in the top 16%",
      ],
    },
  ];
  constructor() {}

  ngOnInit() {}
}
