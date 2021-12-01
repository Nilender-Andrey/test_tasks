export default function arrayToString(arr: string[]) {
  return arr.reduce((str: string, item: string, index: number, array: string[]) => {
    return index < array.length - 1 ? (str = item + ', ' + str) : (str = str + item);
  }, '');
}
