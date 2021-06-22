export const openings = {
  e4: [
    {
      move: "e5",
      Nf3: [
        {
          move: "Nc6",
          Bc4: [{ name: "Italian Game" }],
          d4: [{ name: "Scotch Game" }],
          Nf6: [{ name: "Petroff Defense" }],
          Bb5: [{ name: "Ruy Lopez (Spanish Opening)" }],
        },
      ],
    },
    {
      move: "c5",
      name: "Sicilian Defense",
      Nf3: [
        {
          move: "d6",
          name: "Sicilian Defense",
          d4: [
            {
              move: "cxd4",
              name: "Sicilian Defense",
              Nxd4: [
                {
                  move: "Nf6",
                  Nc3: [
                    { move: "g6", name: "Sicilian Dragon" },
                    { move: "a6", name: "Sicilian Najdorf" },
                  ],
                },
              ],
            },
          ],
        },
        {
          move: "e6",
          name: "Sicilian Defense",
          d4: [
            {
              move: "cxd4",
              Nxd4: [{ move: "Nc6", name: "Sicilian Taimanov" }],
            },
          ],
        },
      ],
    },
    {
      move: "e6",
      d4: [
        {
          name: "French Defense",
          move: "d5",
          exd5: [{ name: "French Defense Exchange Variation" }],
          e5: [{ move: "c5", name: "French Defense Advance Variation" }],
          Nd2: [
            { move: "c5", name: "French Defense Tarrasch Variation 1" },
            {
              move: "Nf6",
              e5: [
                {
                  move: "Nfd7",
                  any: [
                    {
                      move: "c5",
                      name: "French Defense Tarrasch Variation 2",
                    },
                  ],
                },
              ],
            },
          ],
          Nc3: [
            {
              move: "dxe4",
              name: "French Defense Main Line Rubinstein Variation",
            },
            {
              move: "Bb4",
              name: "French Defense Main Line Winawer Variation",
            },
            {
              move: "Nf6",
              name: "French Defense Main Line Classical Variation",
            },
          ],
        },
      ],
    },
  ],
  d4: [
    {
      move: "d5",
      c4: [
        { move: "dxc4", name: "Queen's Gambit Accepted" },
        { move: "e6", name: "Queen's Gambit Declined" },
        { move: "c6", Bb5: [{ name: "Slav Defense" }] },
      ],
    },
    {
      move: "Nf6",
      c4: [
        {
          move: "g6",
          Nc3: [
            { move: "Bg7", name: "King's Indian Defense" },
            { move: "d5", name: "Grunfeld Defense" },
          ],
        },
        {
          move: "e6",
          Nf3: [
            { move: "Bb4+", name: "Bogo-Indian Defense" },
            { move: "b6", name: "Queen's Indian Defense" },
          ],
          Nc3: [{ move: "Bb4", name: "Nimzo-Indian Defense" }],
        },
      ],
    },
  ],
};
