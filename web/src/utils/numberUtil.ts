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

export function convertTPValveConfigToHmiValveConfig(n: number) {
	// bit 9 is true - butterfly valve
	let newConfig =0;
	let tp, hmi;
	// n at index 9 is true
	if ((n >> 9) & 1) {
		// TP bit 0 = Hmi bit 0
		tp=9; hmi=9
		newConfig = (newConfig & ~(1 << hmi)) | (((n >> tp) & 1) << hmi);
		// TP bit 0 = Hmi bit 0
		tp=0; hmi=0
		newConfig = (newConfig & ~(1 << hmi)) | (((n >> tp) & 1) << hmi);
		// TP bit 4 = Hmi bit 2
		tp=4; hmi=2
		newConfig = (newConfig & ~(1 << hmi)) | (((n >> tp) & 1) << hmi);

		// TP bit 6 = Hmi bit 3
		tp=6; hmi=3
		newConfig = (newConfig & ~(1 << hmi)) | (((n >> tp) & 1) << hmi);
		// TP bit 2 = Hmi bit 1
		tp=2; hmi=1
		newConfig = (newConfig & ~(1 << hmi)) | (((n >> tp) & 1) << hmi);


	} else {
		// TP bit 7 = Hmi bit 3
		tp=7; hmi=3
		newConfig = (newConfig & ~(1 << hmi)) | (((n >> tp) & 1) << hmi);
		// TP bit 5 = Hmi bit 7
		tp=5; hmi=7
		newConfig = (newConfig & ~(1 << hmi)) | (((n >> tp) & 1) << hmi);

		// TP bit 3 = Hmi bit 5
		tp=3; hmi=5
		newConfig = (newConfig & ~(1 << hmi)) | (((n >> tp) & 1) << hmi);
		// TP bit 4 = Hmi bit 6
		tp=4; hmi=6
		newConfig = (newConfig & ~(1 << hmi)) | (((n >> tp) & 1) << hmi);

	}
	// n at index 8 is true
	// set bits 2 and 4
	if((n >> 8) & 1){
		newConfig = newConfig | (1 << 2 ) | (1 << 4) | (1 << 8)
	}
	if((n >> 0) & 1){
		newConfig = newConfig | (1 << 0 )
	}
	if((n >> 1) & 1){
		newConfig = newConfig | (1 << 1 )
	}
	// if any of bits 7 , 6, & 5 are true set bit 8
	if(((newConfig >> 7) & 1) | ((newConfig >> 6) & 1) | ((newConfig >> 5) & 1) ){
		newConfig = newConfig | (1 << 8 )
	}
	return newConfig
}
