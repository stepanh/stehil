
/**
 * '09:01' -> 9.01
 * @param timeString 
 */
export const formatPrice = (price: number) => {
  return `£${formatNumber(price)}`;
};

export const formatNumber = (num: number) => {
  return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};