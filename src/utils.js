export function defaultBoard() { /* prevent deep copy issues. */
  return [['', '', ''], ['', '', ''], ['', '', '']];
}

export function isWinner(b, turn) {
  const t = turn? 'X' : 'O';
  for (var i = 0; i < 3; i++) {
    if ((b[i][0] == t && b[i][1] == t && b[i][2] == t) ||
        (b[0][i] == t && b[1][i] == t && b[2][i] == t)) {
      return true;
    }
  }
  for (var i = 0; i < 4; i += 2) {
    if (b[0][i] == t && b[1][1] == t && b[2][2-i] == t) {
      return true;
    }
  }
  return false;
}

export function isFilled(b) {
  var count = 0;
  for (var r = 0; r < 3; r++) {
    for (var c = 0; c < 3; c++) {
      count += (b[r][c] != '');
    }
  }
  return (count == 9);
}