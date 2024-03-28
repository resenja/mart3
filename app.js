function promeniSliku() {
  const slika = document.querySelector("#slika");

  // koristite .includes(...) jer može da se desi da src izgleda zapravo npr: file://mart3/kako-nacrtati.png
  if (slika.src.includes("kako-nacrtati.png")) slika.src = "parabola-animacija.gif";
  else slika.src = "kako-nacrtati.png";
}
// može i document.querySelector("#slika").addEventListener("mouseenter", promeniSliku);
// i document.querySelector("#slika").addEventListener("mouseleave", promeniSliku);
// ali sam već to uradio u HTML-u sa onmouseenter="promeniSliku();" i onmouseleave="promeniSliku();"

function izracunaj() {
  const a = parseInt(document.querySelector("#a").value); // može i parseFloat(...)
  const b = parseInt(document.querySelector("#b").value);
  const c = parseInt(document.querySelector("#c").value);

  const d = b * b - 4 * a * c;
  if (d === 0) {
    const x = ((-b + Math.sqrt(d)) / (2 * a)).toFixed(2);
    document.querySelector("#resenje").textContent = "jedinstveno rešenje: " + x;
  } else if (d > 0) {
    const x1 = ((-b + Math.sqrt(d)) / (2 * a)).toFixed(2);
    const x2 = ((-b - Math.sqrt(d)) / (2 * a)).toFixed(2);
    document.querySelector("#resenje").textContent = "Dva rešenja: x1=" + x1 + "; x2=" + x2;
  } else document.querySelector("#resenje").textContent = "Nema realnih rešenja";
}
// i ovo može sa document.querySelector("button").addEventListener("click", izracunaj);
