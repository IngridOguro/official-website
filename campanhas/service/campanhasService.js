let campanhasCache = null;

export async function getCampanhas() {
  if (campanhasCache) return campanhasCache;

  const response = await fetch("../../assets/campanhas/campanhas.json");
  campanhasCache = await response.json();

  return campanhasCache;
}