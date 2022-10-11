export const range = (startsAt: number, size: number): Array<number> =>
  [...Array(size).keys()].map(i => i + startsAt)

// Returns inclusive both max and min
export const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (Math.ceil(max + 1) - Math.floor(min)) + min)

// Returns inclusive min and exclusive max
export const getRandom = (min: number, max: number) =>
  Math.random() * (max - min) + min
