/**
 * Returns the number of columns to use based on the array length.
 * If the length is divisible by 3, returns 3; otherwise 2.
 */
export function ColumnEquation(items = []) {
    const length = items?.length || 0;
    return length % 3 === 0 ? 3 : 2;
  }