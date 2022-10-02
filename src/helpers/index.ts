import {format} from 'date-fns';

/**
 * It takes a number and returns a string
 * @param {number} amount - number - The amount of money to format.
 * @returns A string with the amount formatted as a currency.
 */
export const parseMoney = (amount: number) => {
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  } catch (error) {
    return '$0.00';
  }
};

/**
 * It takes a date object and returns a string in the format of "Mon 12:00 pm"
 * @param {Date} date - Date - The date you want to format
 * @returns A string
 */
export const getCurrentDateFormatTimer = (date: Date): string => {
  try {
    return format(date ?? new Date(), 'ccc h:mm aa');
  } catch (error) {
    return '';
  }
};

/**
 * It takes a timestamp and returns a formatted date string
 * @param {number} timestamp - number - The timestamp to parse
 * @returns A string
 */
export const parseTimestampToFormat = (timestamp: number): string => {
  try {
    return format(new Date(timestamp), 'ccc h:mm aa');
  } catch (error) {
    return '';
  }
};
