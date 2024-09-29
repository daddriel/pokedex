export const apiPoke = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return { data };
  } catch (error) {
    console.error('Fetch error:', error);
    return { data: [] };
  }
};
