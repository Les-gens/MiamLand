import {emojis} from '../theme'

/* return given string with first letter capitalized  */
export const capitalize = (s: string) => {
  return s.length > 1 ? s[0].toUpperCase() + s.substring(1) : s[0].toUpperCase()
}

/* given a notation, returns corresponding emoji */
export const emojifyNotation = (n: number) => {
  if (n >= 4) {
    return emojis.salivating
  } else if (n >= 3) {
    return emojis.yummy
  } else if (n >= 2) {
    return emojis.meh
  } else if (n >= 1) {
    return emojis.disgusted
  }
}
