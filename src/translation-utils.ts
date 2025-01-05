export function translateObjectKeys<T>(obj: { [key: string]: any }, dict: { [key: string]: string }): { [key: string]: any } {
  const translatedObj: { [key: string]: any } = {};

  for (const [key, value] of Object.entries(obj)) {
    const translatedKey = dict[key] || key;
    translatedObj[translatedKey] = value;
  }

  return translatedObj;
}