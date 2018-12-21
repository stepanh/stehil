const standardDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const getStandardDayName = (standardDayIndex: number) => standardDayNames[standardDayIndex];

/**
 * '09:01' -> 9.01
 * @param timeString 
 */
export const timeToNumber = (timeString: string) => {
  const t = timeString.replace(':', '.');
  return parseFloat(t);
};