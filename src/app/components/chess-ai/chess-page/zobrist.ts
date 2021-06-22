const zobristTable = [];
const castlingTable = [];
const turnTable = [];
const castlingIndexes = {
  "-": 0,
  q: 1,
  k: 2,
  kq: 3,
  Q: 4,
  Qq: 5,
  Qk: 6,
  Qkq: 7,
  Kq: 8,
  Kk: 9,
  Kkq: 10,
  KQ: 11,
  KQq: 12,
  KQk: 13,
  KQkq: 14,
};

const pieceIndexes = {
  r: 0,
  n: 1,
  b: 2,
  q: 3,
  k: 4,
  p: 5,
  R: 6,
  N: 7,
  B: 8,
  Q: 9,
  K: 10,
  P: 11,
};

const turnIdx = {
  w: 0,
  b: 1,
};
let randomState = 1804289383;
class Zobrist {
  constructor() {
    for (let i = 0; i < 64; i++) {
      zobristTable[i] = [];
      for (let j = 0; j < 12; j++) {
        zobristTable[i][j] = this.random();
      }
    }
    for (let i = 0; i < 15; i++) {
      castlingTable[i] = this.random();
    }
    for (let i = 0; i < 2; i++) {
      turnTable[i] = this.random();
    }
  }

  random() {
    let number = randomState;

    // 64-bit XOR shift
    number ^= number << 13;
    number ^= number >> 7;
    number ^= number << 17;
    randomState = number;

    return number;
  }

  generateHashKey(boardInfo, turn, casltingRights) {
    let finalKey = 0;
    const boardArray = Object.entries(boardInfo);
    for (let i = 0; i < boardArray.length; i++) {
      const [pos, piece] = boardArray[i];
      const pieceIndex = pieceIndexes[piece as string];
      finalKey ^= zobristTable[i][pieceIndex];
    }
    finalKey ^= turnTable[turnIdx[turn]];
    return finalKey;
    // return fen.split(" ").slice(0, 4).join(" ");
  }
}

const zobrist = new Zobrist();

export { zobrist };
