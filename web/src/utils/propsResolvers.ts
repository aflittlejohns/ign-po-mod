/**
 * Property resolvers which enable Ignition props to keep in sync with
 * React component state.
 * Note - ignition only writes to one property tree leaf node at a time!
 */
import ComponentProps from '@inductiveautomation/perspective-client'
const { PropertyTree} = ComponentProps;
const {prototype} = PropertyTree;
const {write} = prototype;
/**
 * Syncs specified keys from newValues to the property tree if they differ from oldValues.
 * @param prefix - The property path prefix (e.g., "command.main")
 * @param keys - The keys to check and sync
 * @param newValues - The new state values
 * @param oldValues - The old property tree values
 * @param writeFn - Function to write to the property tree
 */
export function resolver<T extends Record<string, any>>(
  prefix: string,
  keys: Array<keyof T>,
  newValues: T,
  oldValues: T,
): void {
	if (!newValues || !oldValues) return
	keys.forEach((key) => {
	  console.log(`Prefix: "${prefix}.${String(key)}" oldValue: ${oldValues[key]} newValues: ${newValues[key]}`)
    if (newValues[key] !== oldValues[key]) {
      write(`${prefix}.${String(key)}`, newValues[key]);
	 }
  });
}
