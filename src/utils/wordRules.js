export const normalize = (word) => word.trim().toLowerCase()

export const startsWithLastLetter = (word, previousWord) => {
  if (!previousWord) return true
  const lastLetter = previousWord[previousWord.length - 1]
  return word[0] === lastLetter
}

export const isAlreadyUsed = (word, words) => words.includes(word)

export const wordScore = (word) => word.length
