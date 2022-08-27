export const requestShortLink = async (url) => {
  const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
  const jsonResponse = await response.json();

  return jsonResponse;
}