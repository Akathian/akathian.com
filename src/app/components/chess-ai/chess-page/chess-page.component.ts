import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from "@angular/core";
import { zobrist } from "./zobrist";
import { NgxChessBoardComponent } from "ngx-chess-board";
import { Chess } from "./chess";
import { getNewBoardInfo } from "./chess-page.worker";
@Component({
  selector: "app-chess-page",
  templateUrl: "./chess-page.component.html",
  styleUrls: ["./chess-page.component.scss"],
})
export class ChessPageComponent implements OnInit, AfterViewInit {
  @ViewChild("board", { static: false })
  board: NgxChessBoardComponent;
  @ViewChild("hiddenBoard", { static: false })
  hiddenBoard: NgxChessBoardComponent;
  @ViewChild("2pBoard", { static: false })
  twoPboard: NgxChessBoardComponent;
  public depth = 3;
  public miniMaxWorker;
  public fen = "";
  public pgn: string = "";
  public userColor = "white";
  public gameArray;
  public chess;
  public isLoading = false;
  public openingName = "";
  public moveVals = "";
  public numTurns = 0;
  public isLoadedFromCache = false;
  public numLoadedMoves = "0";
  public loadedPgn = "";
  public loadedFen = "3r3k/1R1N3r/2Rp3p/pB1P1Pp1/8/P7/3K1PPP/8 w - g6 0 30";
  public totalThinkTime = 0;
  public avgThinkTime = 0;
  public start = 0;
  public end = 0;
  public eloProblems = "r1b3k1/6p1/P1n1pr1p/q1p6/";

  public castleRights = "KQkq";
  // prettier-ignore
  public boardInfo = {
    a8: "r", b8: "n", c8: "b", d8: "q", e8: "k", f8: "b", g8: "n", h8: "r", 
    a7: "p", b7: "p", c7: "p", d7: "p", e7: "p", f7: "p", g7: "p", h7: "p",
    a6: "", b6: "", c6: "", d6: "", e6: "", f6: "", g6: "", h6: "",
    a5: "", b5: "", c5: "", d5: "", e5: "", f5: "", g5: "", h5: "",
    a4: "", b4: "", c4: "", d4: "", e4: "", f4: "", g4: "", h4: "",
    a3: "", b3: "", c3: "", d3: "", e3: "", f3: "", g3: "", h3: "",
    a2: "P", b2: "P", c2: "P", d2: "P", e2: "P", f2: "P", g2: "P", h2: "P",
    a1: "R", b1: "N", c1: "B", d1: "Q", e1: "K", f1: "B", g1: "N", h1: "R",
  };

  public pieceValues = 0;

  constructor() {}

  async ngOnInit() {
    await this.workerInit();
  }

  ngAfterViewInit() {
    this.hiddenBoard.darkDisabled = true;
    this.hiddenBoard.lightDisabled = true;

    this.board.darkDisabled = true;
    const loadedMoves = this.loadedPgn
      .split(" ")
      .filter((el) => el.indexOf(".") >= 0)
      .map((el) => el.replace(".", ""));
    this.numLoadedMoves = loadedMoves[loadedMoves.length - 1];
    if (this.loadedPgn) {
      this.isLoadedFromCache = true;
      this.board.setPGN(this.loadedPgn);
      this.hiddenBoard.setPGN(this.loadedPgn);
      this.twoPboard.setPGN(this.loadedPgn);
    }

    this.fen = this.board.getFEN();
    this.pgn = this.board.getPGN();
    this.chess = new Chess(this.fen);
  }

  async workerInit() {
    if (typeof Worker !== "undefined") {
      // Create a new
      // prettier-ignore
      this.miniMaxWorker = new Worker("./chess-page.worker.ts", {
        type: "module"
      });
      this.miniMaxWorker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
        const { bestMove, moveVal, openingName } = JSON.parse(data);

        this.openingName = openingName ? openingName : this.openingName;
        this.moveVals += ` ${this.numTurns}. ${moveVal}`;
        this.updateBoardStatus(bestMove);
        const tempPgn = `${this.pgn} ${bestMove}`;
        this.hiddenBoard.setPGN(tempPgn);
        const futureMoves = this.hiddenBoard.getMoveHistory();
        const futureMovesLen = futureMoves.length;
        const blackMove = futureMoves[futureMovesLen - 1];
        this.board.move(blackMove.move);
        const endDate = new Date();
        this.end = endDate.getTime();
        this.totalThinkTime += this.end - this.start;
        this.avgThinkTime = this.totalThinkTime / this.numTurns;
        console.timeEnd("Move process time");
        this.isLoading = false;
      };
    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
  updateBoardStatus(move) {
    const moveObj = this.chess.move(move);
    [this.boardInfo, this.pieceValues] = getNewBoardInfo(
      moveObj,
      this.boardInfo,
      this.pieceValues,
      true
    );
  }

  async moveCallback(move) {
    this.fen = this.board.getFEN();
    this.pgn = this.board.getPGN();
    if (move.color === this.userColor) {
      const splitPgn = this.pgn.split(" ");
      const lastMoveString = splitPgn[splitPgn.length - 1];
      this.updateBoardStatus(lastMoveString);

      const splitFen = this.fen.split(" ");
      const numTurnsPlayed = splitFen[splitFen.length - 1];

      if (!this.isLoadedFromCache || +numTurnsPlayed >= +this.numLoadedMoves) {
        this.isLoading = true;
        // await sleep(1000);
        console.time("Move process time");
        const startDate = new Date();
        this.start = startDate.getTime();
        this.miniMaxWorker.postMessage(
          JSON.stringify({
            fen: this.fen,
            pgn: this.pgn,
            depth: this.depth,
            turn: this.userColor === "white" ? "b" : "w",
            boardInfo: this.boardInfo,
            pieceValues: this.pieceValues,
            castleRights: this.castleRights,
          })
        );
      }
      this.numTurns++;
    }
    // sessionStorage.setItem("fen", this.board.getFEN());
  }

  moveCallback2p(move) {
    console.log(this.twoPboard.getPGN());
  }
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// function process(notation, engineFacade) {
//   DefaultPiecesLoader.loadDefaultPieces(engineFacade.board);
//   let moves = this.extractMoves(notation);
//   let counter = -1;
//   for (let move of moves) {
//     ++counter;
//     move = move.replace(/[+#]/g, "");
//     let promotionIndex = "";
//     if (move.includes("=")) {
//       promotionIndex = this.resolvePromotion(move.substring(move.length - 1));
//       move = move.substring(0, move.length - 2);
//     }
//     let color = counter === 0 || counter % 2 === 0 ? Color.WHITE : Color.BLACK;
//     if (/^[a-z]\d$/g.test(move)) {
//       // normal move to an empty square e4
//       // en passant check
//       // if piece is found for sure
//     } else {
//       if (/^[A-Z][a-h]\d$/g.test(move)) {
//         // if it has a capital letter, then you need to find which figure  Nf3
//       } else {
//         if ("O-O" === move) {
//           engineFacade.move(color === Color.WHITE ? "e1g1" : "e8g8");
//         } else {
//           if (/^[a-z]x[a-z]\d$/g.test(move)) {
//             // exd5
//             let pieces = MoveUtils.findPieceByPossibleCapturesContaining(
//               move.substring(move.indexOf("x") + 1),
//               engineFacade.board,
//               color
//             ).filter((piece) => piece instanceof Pawn);
//             let piece;
//             if (pieces.length > 1) {
//               piece = this.resolveByCol(pieces, move.substring(0, 1));
//             } else {
//               piece = pieces[0];
//             }
//             if (piece) {
//               engineFacade.move(
//                 MoveUtils.formatSingle(piece.point, false) +
//                   move.substring(move.indexOf("x") + 1) +
//                   promotionIndex
//               );
//             } else {
//             }
//           } else {
//             if (/^[A-Z]x[a-z]\d$/g.test(move)) {
//               let piece = MoveUtils.findPieceByPossibleCapturesContaining(
//                 move.substring(move.indexOf("x") + 1),
//                 engineFacade.board,
//                 color
//               ).find((piece) =>
//                 this.resolvePieceByFirstChar(move.substring(0, 1), piece)
//               );
//               if (piece) {
//                 engineFacade.move(
//                   MoveUtils.formatSingle(piece.point, false) +
//                     move.substring(move.indexOf("x") + 1) +
//                     promotionIndex
//                 );
//               } else {
//               }
//             } else {
//               if (move === "O-O-O") {
//                 engineFacade.move(color === Color.WHITE ? "e1c1" : "e8c8");
//               } else {
//                 if (/^[A-Z]\dx[a-z]\d$/g.test(move)) {
//                   //Ngxe4 sytuacja 2 skoczkow pion bicie
//                   let pieces = MoveUtils.findPieceByPossibleCapturesContaining(
//                     move.substring(move.indexOf("x") + 1),
//                     engineFacade.board,
//                     color
//                   ).filter((piece) =>
//                     this.resolvePieceByFirstChar(move.charAt(0), piece)
//                   );
//                   let piece = this.resolveByRow(pieces, move.substring(1, 2));
//                   if (piece) {
//                     engineFacade.move(
//                       MoveUtils.formatSingle(piece.point, false) +
//                         move.substring(move.indexOf("x") + 1) +
//                         promotionIndex
//                     );
//                   }
//                 } else {
//                   if (/^[A-Z][a-z][a-z]\d$/g.test(move)) {
//                     // dwie wieze bez bicia Rac1 pion
//                     let pieces = MoveUtils.findPieceByPossibleMovesContaining(
//                       move.substring(2, 4),
//                       engineFacade.board,
//                       color
//                     ).filter((piece) =>
//                       this.resolvePieceByFirstChar(move.charAt(0), piece)
//                     );
//                     let piece = this.resolveByCol(pieces, move.substring(1, 2));
//                     if (piece) {
//                       engineFacade.move(
//                         MoveUtils.formatSingle(piece.point, false) +
//                           move.substring(2, 4) +
//                           promotionIndex
//                       );
//                     }
//                   } else {
//                     if (/^[A-Z][a-z]x[a-z]\d$/g.test(move)) {
//                       let pieces = MoveUtils.findPieceByPossibleCapturesContaining(
//                         move.substring(move.indexOf("x") + 1),
//                         engineFacade.board,
//                         color
//                       ).filter((piece) =>
//                         this.resolvePieceByFirstChar(move.charAt(0), piece)
//                       );
//                       let piece = this.resolveByCol(
//                         pieces,
//                         move.substring(1, 2)
//                       );
//                       if (piece) {
//                         engineFacade.move(
//                           MoveUtils.formatSingle(piece.point, false) +
//                             move.substring(move.indexOf("x") + 1) +
//                             promotionIndex
//                         );
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
