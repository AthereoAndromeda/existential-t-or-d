export function getRandomElement<T>(arr: T[]): T {
  const randomNumber = Math.floor(Math.random() * arr.length);
  const element = arr[randomNumber];

  return element;
}
