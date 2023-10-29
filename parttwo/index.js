const URL = "https://deckofcardsapi.com/api";
let deckId;

// Part 1:
{
  const response = await fetch(`${URL}/deck/new/draw`);
  const data = await response.json();
  const { suit: suit1, value: value1 } = data["cards"][0];
  console.log(`${value1} of ${suit1}`);
}

// Part 2:
{
  let response = await fetch(`${URL}/deck/new/draw`);
  let data = await response.json();
  const { value: fvalue, suit: fsuit } = data["cards"][0];
  deckId = data["deck_id"];

  response = await fetch(`${URL}/deck/${deckId}/draw`);
  data = await response.json();
  const { value: svalue, suit: ssuit } = data["cards"][0];

  console.log(`${fvalue} of ${fsuit}`);
  console.log(`${svalue} of ${ssuit}`);
}

// Part 3:
{
  const response = await fetch(`${URL}/deck/new/shuffle/`);
  const data = await response.json();
  deckId = data["deck_id"];

  document.getElementById('btn').addEventListener('click', async () => {
    const response = await fetch(`${URL}/deck/${deckId}/draw/`);
    const data = await response.json();
    const { suit, value } = data["cards"][0];
    document.getElementById("cards").innerHTML += `<li>${value} of ${suit}</li>`;

    if (data["remaining"] === 0) document.getElementById("btn").remove();
  });
}
