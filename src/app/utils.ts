const typeCache: { [label: string]: boolean } = {};

/**
 * @author Nabeel Ahmed
 */
export function type<T>(label: T | ''): T {
  if (typeCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unique`);
  }

  typeCache[<string>label] = true;

  return <T>label;
}