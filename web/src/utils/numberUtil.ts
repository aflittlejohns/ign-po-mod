/**
 * Utility functions for numbers
 */

/**
 * Using the binary representation of n, an Integer, returns the boolean
 * value at index, i.
 * @param n a number is implicity converter to a 32bit integer, by the bitwise operators
 * @param i is a number representing the bit position to be tested
 * @returns the boolean value of the bit at index i.
 */
export const getBoolAtIndex = (n: number, i: number): boolean => {
	return Boolean((n >> i) & 1);
};
