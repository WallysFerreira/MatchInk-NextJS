export default async function getTatuador(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).catch(rejected => {
    console.log(rejected);
  });
  return res.json();
}
