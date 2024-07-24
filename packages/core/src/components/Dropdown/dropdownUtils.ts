export function generateEmotionCacheKey() {
  // emotion cache key must only contain alphabetic lowercase characters
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return Array.from({ length: 5 }, () => alphabet[Math.floor(Math.random() * 26)]).join("") as Lowercase<string>;
}
