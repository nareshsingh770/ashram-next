export const generateUsername = (name: string): string => {
  const namePart = name.toLowerCase().replace(/\s+/g, "").slice(0, 5);
  const randomString = Math.random().toString(36).substring(2, 5);
  return `${namePart}${randomString}`;
};
