const versos = [
  "La luz recuerda lo que el ojo olvida",
  "Todo brillo nace de una herida",
  "El tiempo respira entre píxeles",
  "Nada es estático en la noche digital",
  "El cielo se pliega sobre sí mismo",
  "Las sombras respiran bajo la lluvia",
  "Un recuerdo arde sin nombre",
  "La ciudad mastica neón y silencio",
  "Mis manos olvidan su forma",
  "Parecierá que deciendo al abismo",
  "El amanecer llega sin cesar",
  "Una y otra vez",
  "El peso del universo aplastandome",
  "Inocencia raptada creando una melodia",
  "Enigmas que me empapan del peor pecado",
  "Flechas que traviesan el arco",
  "El Atlas que cae sobre mis manos",
  "Leí el título, ya tengo una opinión",
  "No terminé, pero ya lo compartí",
  "Si dura más de un minuto, no existe",
  "Pensar toma tiempo, siguiente",
  "Me informo rápido para no entender lento",
  "Todo es urgente, nada es importante",
  "No sé qué vi, pero vi mucho",
  "Tengo muchas ideas, ninguna propia",
  "Opiniones listas para usar",
  "Reflexioné tres segundos, suficiente",
  "Cuestionar cansa, repetir descansa",
  "Entender es opcional, reaccionar no",
  "Me indigna, luego se me pasa",
  "Pensar profundo no cabe en pantalla",
  "Quería crear, terminé viendo",
  "Mi idea compite con mil más",
  "Pensé algo… ya lo olvidé",
  "Inspiración interrumpida por un anuncio",
  "Crear es lento, consumir no",
  "Mi mente carga, pero no procesa",
  "Todo es urgente",
  "Nada importa",
];

const poema = document.getElementById("poema");

poema.addEventListener("click", () => {
  const random = Math.floor(Math.random() * versos.length);
  poema.textContent = versos[random];
}); 

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let hue = 0;

canvas.onmousemove = (e) => {
  ctx.fillStyle = "rgba(0,0,0,0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  draw(e.x, e.y);
};

function draw(x, y) {
  let gradient = ctx.createRadialGradient(x, y, 20, x, y, 50);

  gradient.addColorStop(0, `hsl(${hue}, 100%, 60%)`);
  gradient.addColorStop(1, "transparent");

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(x, y, 50, 0, Math.PI * 2);
  ctx.fill();

  hue += 5; 
}