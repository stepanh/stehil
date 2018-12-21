// TODO: write tests!!

/**
 * Strict-ish integer parsing
 * @param value 
 */
export function toInteger(value: string): number {
  if (Number(value).toString() === value) {
    return parseInt(value, 10);
  }
  return NaN;  
}
