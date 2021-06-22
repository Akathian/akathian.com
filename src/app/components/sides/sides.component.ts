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
      num: 2,
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
