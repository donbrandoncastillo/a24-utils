/**
 * Convert a string to sentence case
 * @param text The input string
 * @returns {string} The string in sentence case
 */
export function toSentenceCase(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
  
/**
 * Check if an array has rows
 * @param data The array to check
 * @returns {boolean} True if the array has rows, false otherwise
 */
export function hasRows(data: any[]): boolean {
    return data.length > 0;
}
