export function convertDateLocalToUTCFormat(localDatetimeString: string): string | undefined {
  if (!localDatetimeString) return undefined;

  const localDate = new Date(localDatetimeString);
  const utcString = localDate.toISOString();
  return utcString.slice(0, 17) + '00Z';
}
