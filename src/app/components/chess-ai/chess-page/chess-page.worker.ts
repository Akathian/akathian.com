/// <reference lib="webworker" />
import { Chess } from "./chess";
import { tables as pieceSquareTables } from "./piece-square-tables";
import { openings } from "./openings";
import { zobrist } from "./zobrist";
let shouldCheckOpenings = true;
const sortMovesOrder = {
  d: 1,
  e: 2,
  c: 3,
  f: 4,
  b: 5,
  g: 6,
  a: 7,
  h: 8,
};
const captureScores = {
  r: 500,
  n: 320,
  b: 330,
  q: 900,
  k: 20000,
  p: 100,
  R: -500,
  N: -320,
  B: -330,
  Q: -900,
  K: -20000,
  P: -100,
};

let casltingRights = "KQkq";

const transpositionTable = {};
let count = 0;

addEventListener("message", ({ data }) => {
  if  (!data.data) {
    return
  }
  const { fen, pgn, depth, turn, boardInfo, pieceValues, castleRights } =
    JSON.parse(data);

  const [bestMove, moveVal, openingName] = getNextMove({
    fen,
    pgn,
    depth,
    turn,
    boardInfo,
    pieceValues,
    castleRights,
  });
  console.log(count);
  console.log(transpositionTable);
  postMessage(JSON.stringify({ bestMove, moveVal, openingName }));
});

function getNextMove({
  fen,
  pgn,
  depth,
  turn,
  boardInfo,
  pieceValues,
  castleRights,
}) {
  const hiddenChess = new Chess(fen);
  let moveOpening;
  let openingName;
  if (shouldCheckOpenings) {
    // [moveOpening, openingName] = getMovesFromPgn(pgn);
  }
  let moveVal;
  let bestMove;
  if (!moveOpening || !shouldCheckOpenings) {
    shouldCheckOpenings = false;
    [moveVal, bestMove] = minimax(
      hiddenChess,
      depth,
      turn,
      -Infinity,
      Infinity,
      "",
      pieceValues,
      boardInfo,
      castleRights
    );
  } else {
    bestMove = moveOpening;
    hiddenChess.move(bestMove);
    moveVal = evaluate(hiddenChess, pieceValues, turn);
    hiddenChess.undo();
  }
  return [bestMove, moveVal, openingName];
}

function getMovesFromPgn(pgn) {
  const splitPgn = pgn.split(" ");
  let possibleMovesWhite = openings;
  let possibleMovesBlack;
  let lastMove;
  const moveHistory = splitPgn.filter((elem) => elem.indexOf(".") < 0);
  for (let i = 0; i < moveHistory.length; i++) {
    const move = moveHistory[i];
    if (move.indexOf(".") < 0) {
      if (i % 2 !== 0 && Array.isArray(possibleMovesBlack)) {
        for (const blackMoveObjs of possibleMovesBlack) {
          if (blackMoveObjs.move === move) {
            possibleMovesWhite = blackMoveObjs;
            break;
          }
        }
      } else {
        possibleMovesBlack = possibleMovesWhite["any"]
          ? possibleMovesWhite["any"]
          : possibleMovesWhite[move];
      }
      lastMove = move;
    }
  }
  if (possibleMovesBlack) {
    const randomOpening = getRandomInt(possibleMovesBlack.length);
    const move = possibleMovesBlack[randomOpening];
    if (move === lastMove) {
      return ["", ""];
    }
    return [move.move, move.name];
  }
  return [undefined, undefined];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function minimax(
  hiddenChess,
  depth,
  turn,
  alpha,
  beta,
  move,
  pieceValues,
  bInfo,
  castleRights
) {
  let availableMoves = hiddenChess.moves();
  count++;
  const nextTurn = turn === "w" ? "b" : "w";

  if (depth === 0 || availableMoves.length === 0) {
    return [evaluate(hiddenChess, pieceValues, nextTurn), move];
  }
  let max = -Infinity;
  let min = Infinity;
  let moveToRet = "";
  let newPieceValues = pieceValues;
  for (const currMove of availableMoves) {
    const moveRet = hiddenChess.move(currMove);

    let newBoardInfo = bInfo;
    // console.time("start");
    [newBoardInfo, newPieceValues] = getNewBoardInfo(
      moveRet,
      newBoardInfo,
      pieceValues,
      castleRights
    );
    // console.timeEnd("start");
    const key = zobrist.generateHashKey(newBoardInfo, turn, casltingRights);
    let moveData = [];
    if (transpositionTable[key]) {
      moveData = transpositionTable[key];
    } else {
      moveData = minimax(
        hiddenChess,
        depth - 1,
        nextTurn,
        alpha,
        beta,
        currMove,
        newPieceValues,
        newBoardInfo,
        castleRights
      );
      transpositionTable[key] = moveData;
    }

    if (
      (moveData[0] > max && turn === "w") ||
      (moveData[0] < min && turn === "b")
    ) {
      moveToRet = currMove;

      if (turn === "w") {
        max = moveData[0];
      } else {
        min = moveData[0];
      }
    }
    hiddenChess.undo();

    if (turn === "w") {
      alpha = Math.max(alpha, max);

      if (alpha >= beta) {
        break;
      }
    } else {
      beta = Math.min(beta, min);

      if (beta <= alpha) {
        break;
      }
    }
  }
  if (turn === "w") {
    return [max, moveToRet];
  } else {
    return [min, moveToRet];
  }
}

export function getNewBoardInfo(moveRet, bInfo, pieceValues, castleRights) {
  let newBoardInfo = bInfo;
  let newPieceValues = pieceValues;
  const { color, to, from, flags, promotion, captured, piece } = moveRet;
  const colorize = (piece: string, captured: boolean) => {
    if (captured) {
      return color === "w" ? piece.toLowerCase() : piece.toUpperCase(); // opponent piece color
    } else {
      return color === "w" ? piece.toUpperCase() : piece.toLowerCase(); // own piece color
    }
  };
  if (flags === "k" || flags === "q") {
    let king, rook, oldKingPos, newKingPos, oldRookPos, newRookPos, rank;
    if (color === "w") {
      king = "K";
      rook = "R";
      rank = 1;
    } else {
      king = "k";
      rook = "r";
      rank = 8;
    }
    oldKingPos = `e${rank}`;
    if (flags === "k") {
      // king side castle
      newKingPos = `g${rank}`;
      oldRookPos = `h${rank}`;
      newRookPos = `f${rank}`;
    } else {
      // queen side castle
      newKingPos = `c${rank}`;
      oldRookPos = `a${rank}`;
      newRookPos = `d${rank}`;
    }
    // move king to new pos
    newPieceValues += movePiece(
      newBoardInfo,
      oldKingPos,
      newKingPos,
      king,
      "",
      "",
      castleRights
    );

    // move rook to new pos
    newPieceValues += movePiece(
      newBoardInfo,
      oldRookPos,
      newRookPos,
      rook,
      "",
      "",
      castleRights
    );
  } else if (flags.indexOf("p") >= 0) {
    // promo
    const colorPromoted = colorize(promotion, false);
    const removePawn = colorize("p", true);
    const movePawn = colorize("p", false);
    let colorCaptured;
    if (flags.indexOf("c") >= 0) {
      // capture-promo
      colorCaptured = colorize(captured, true);
    }
    // move pawn (& capture)
    newPieceValues += movePiece(
      newBoardInfo,
      from,
      to,
      movePawn,
      colorCaptured,
      to,
      castleRights
    );
    newBoardInfo[to] = colorPromoted; // promote pawn
    newPieceValues += getPosValue(colorPromoted, to); // add pos value of promoted piece
    newPieceValues += captureScores[colorPromoted]; // add value of piece promoted to
    newPieceValues -= captureScores[removePawn]; // remove value of pawn (same as capturing pawn)
  } else if (flags === "e") {
    // en passant
    let capturedPawnLoc;
    const capturedPawn = colorize("p", true);
    const movedPawn = colorize("p", false);
    if (color === "w") {
      capturedPawnLoc = `${to[0]}${+to[1] - 1}`;
    } else {
      capturedPawnLoc = `${to[0]}${+to[1] + 1}`;
    }
    newPieceValues += movePiece(
      newBoardInfo,
      from,
      to,
      movedPawn,
      capturedPawn,
      capturedPawnLoc,
      castleRights
    );
  } else if (flags.indexOf("c") >= 0) {
    const colorCaptured = colorize(captured, true);
    const colorCapturing = colorize(piece, false);
    newPieceValues += movePiece(
      newBoardInfo,
      from,
      to,
      colorCapturing,
      colorCaptured,
      to,
      castleRights
    );
  } else if (flags === "b" || flags === "n") {
    const colorMoving = colorize(piece, false);
    newPieceValues += movePiece(
      newBoardInfo,
      from,
      to,
      colorMoving,
      "",
      "",
      castleRights
    );
  }

  return [newBoardInfo, newPieceValues];
}

function movePiece(
  newBoardInfo,
  from,
  to,
  movedPiece,
  captured,
  capturedPieceLoc,
  castleRights
) {
  let pieceVal = 0;
  const moveNegator = /[rnbqkp]/.test(movedPiece) ? -1 : 1;

  if (captured) {
    const capNegator = /[rnbqkp]/.test(captured) ? -1 : 1;
    newBoardInfo[capturedPieceLoc] = ""; // remove captured piece from board
    pieceVal += captureScores[captured]; // add value for capturing piece
    pieceVal -= getPosValue(captured, capturedPieceLoc) * capNegator; // remove positional value of captured piece
  }
  newBoardInfo[to] = movedPiece; // place capturing piece to new position
  pieceVal += getPosValue(movedPiece, to) * moveNegator; // add positional value of new piece position

  newBoardInfo[from] = ""; // remove capturing piece from old position
  pieceVal -= getPosValue(movedPiece, from) * moveNegator; // remove positional value of old piece position

  return pieceVal;
}

function getPosValue(piece, pos) {
  const file = pos[0]; // a-h
  const rank = pos[1]; // 1-8
  const rowPos = {
    "1": 7,
    "2": 6,
    "3": 5,
    "4": 4,
    "5": 3,
    "6": 2,
    "7": 1,
    "8": 0,
  };
  const colPos = {
    h: 7,
    g: 6,
    f: 5,
    e: 4,
    d: 3,
    c: 2,
    b: 1,
    a: 0,
  };
  const i = rowPos[rank];
  const j = colPos[file];

  let posValue;
  if (piece.toLowerCase() !== "k") {
    posValue = pieceSquareTables[piece][i][j];
  } else {
    posValue = pieceSquareTables[piece].mid[i][j]; // todo mid/end logic
  }

  return posValue;
}

function evaluate(hiddenChess, pieceValues, turn) {
  let score = 0;
  // const old = false;

  // if (old) {
  //   const fen = hiddenChess.fen();
  //   const [gameArray, turn2] = generateGameArray(fen);
  //   score += getPieceSquareTableValues(gameArray);
  //   if (hiddenChess.game_over() && !hiddenChess.in_stalemate()) {
  //     score = turn2 === "w" ? -100000000 : turn2 === "b" ? 100000000 : 0;
  //   }
  //   if (hiddenChess.in_stalemate() && score < 0) {
  //     // black winning but in stalemate
  //     score = turn2 === "w" ? 10000000 : -10000000;
  //   }
  // } else {
  score = pieceValues;
  if (hiddenChess.game_over() && !hiddenChess.in_stalemate()) {
    score = turn === "w" ? 100000000 : turn === "b" ? -100000000 : 0;
  }
  if (hiddenChess.in_stalemate() && score < 0) {
    // black winning but in stalemate
    score = turn === "w" ? 10000000 : -10000000;
  }
  // }

  return score;
}

function getPieceSquareTableValues(gameArray) {
  let currScore = 0;
  let blackKingPos = { i: 0, j: 0 };
  let whiteKingPos = { i: 0, j: 0 };
  let numQueens = 0;
  let numBlackPieces = 0;
  let numWhitePieces = 0;
  let negator;
  for (let i = 0; i < gameArray.length; i++) {
    const rank = gameArray[i];
    for (let j = 0; j < rank.length; j++) {
      const piece = rank[j];
      if (pieceSquareTables[piece]) {
        negator = /[rnbqkp]/.test(piece) ? -1 : 1;
        if (piece.toLowerCase() !== "k") {
          const currVal = pieceSquareTables[piece][i][j];
          currScore += currVal;
          if (piece.toLowerCase() === "q") {
            numQueens++;
          } else {
            if (currVal < 0) {
              // black piece
              numBlackPieces++;
            } else {
              numWhitePieces++;
            }
          }
        } else if (piece === "k") {
          blackKingPos = { i, j };
        } else if (piece === "K") {
          whiteKingPos = { i, j };
        }
        currScore += captureScores[piece] * negator;
      }
    }
  }
  const noQueens = numQueens === 0;
  const oneSideQueen =
    numQueens === 1 && (numWhitePieces === 3 || numBlackPieces === 3);
  const twoSideQueens =
    numQueens === 2 && numWhitePieces === 3 && numBlackPieces === 3;
  const isEndGame = noQueens || oneSideQueen || twoSideQueens;
  if (isEndGame) {
    currScore += pieceSquareTables["k"].end[blackKingPos.i][blackKingPos.j];
    currScore += pieceSquareTables["K"].end[whiteKingPos.i][whiteKingPos.j];
  } else {
    currScore += pieceSquareTables["k"].mid[blackKingPos.i][blackKingPos.j];
    currScore += pieceSquareTables["K"].mid[whiteKingPos.i][whiteKingPos.j];
  }
  return currScore;
}

function generateGameArray(fen) {
  const [piecePlacement, turn] = fen.split(" ");
  const gameArray = piecePlacement.split("/").map((row) =>
    row
      .split("")
      .map((elem) => {
        if (!isNaN(+elem)) {
          return " ".repeat(+elem).split("");
        } else {
          return elem;
        }
      })
      .flat()
  );
  return [gameArray, turn];
}
