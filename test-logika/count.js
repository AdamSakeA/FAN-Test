function countSockPairs(socks) {
  const sockPairs = {};
  let pairs = 0;

  socks.forEach((sock) => {
    sockPairs[sock] = (sockPairs[sock] || 0) + 1;

    if (sockPairs[sock] % 2 === 0) {
      pairs++;
    }
  });

  return pairs;
}

function countWords(sentence) {
  const specialChars = "!@#$%^&*()_+=[]{};':\"\\|<>/";
  const words = sentence.split(/\s+/);

  const filteredWords = words.filter((word) => {
    return !specialChars.split("").some((char) => word.includes(char));
  });

  return filteredWords.length;
}

module.exports = {
  countSockPairs,
  countWords,
};
