function check(str, bracketsConfig) {
  const openBracketsArray = [];
  const bracketPairs = new Map(bracketsConfig);
  const bracketOpen = new Set(bracketPairs.keys());
  const bracketClose = new Set(bracketPairs.values());

  for (const char of str) {
      if (bracketOpen.has(char)) {
          if (bracketPairs.get(char) === char) {
              if (openBracketsArray.length === 0 || openBracketsArray[openBracketsArray.length - 1] !== char) {
                  openBracketsArray.push(char);
              } else {
                  openBracketsArray.pop();
              }
          } else {
              openBracketsArray.push(char);
          }
      } else if (bracketClose.has(char)) {
          const lastOpenBracket = openBracketsArray.pop();
          if (lastOpenBracket === undefined || bracketPairs.get(lastOpenBracket) !== char) {
              return false;
          }
      }
  }
  
  return openBracketsArray.length === 0;
}
module.exports = check;
