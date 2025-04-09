export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function capitalizeWords(str: string): string {
  if (!str) return str;
  return str.split(' ').map(capitalize).join(' ');
}
