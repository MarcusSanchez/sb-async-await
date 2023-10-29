let favorite = 7;
const URL = "http://numberapi.com/";

// Part 1.
document.getElementById("p1-btn").addEventListener("click", async () => {
  const response = await fetch(`${URL}${favorite}?json`);
  const data = await response.json();
  document.getElementById("p1").innerText = data.text;
  document.getElementById("p1-btn").remove();
});

// Part 2.
let favorites = [7, 31, 777];
document.getElementById("p2-btn").addEventListener("click", async () => {
  const responses = await Promise.all(favorites.map(number => fetch(`${URL}${number}?json`)));
  const data = await Promise.all(responses.map(response => response.json()));
  data.forEach(item => {
    for (let key in item) {
      document.getElementById("p2").innerText += `${item[key]}\n`;
    }
  });
  document.getElementById("p2-btn").remove();
});

// Part 3.
document.getElementById("p3-btn").addEventListener("click", async () => {
  const responses = await Promise.all(Array(4).fill(fetch(`${URL}${favorite}?json`)));
  const facts = await Promise.all(responses.map(response => response.json()));
  facts.forEach(data => {
    document.getElementById("p3").innerText += `${data.text}\n`;
  });
  document.getElementById("p3-btn").remove();
});
