export function lastSlash(input: string) {
  if (input[input.length - 1] !== '/') {
    return input + '/';
  }

  return input;
}
