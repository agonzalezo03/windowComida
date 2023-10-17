const body = document.body;
let comidas = ["🍕", "🍔", "🍟", "🌭", "🍗", "🌮", "🥓", "🌯"];


setInterval(addComida, 300);


function addComida() {
    let comida = document.createElement('div');
    comida.classList.add('comida');
    console.log("comida va");
    comida.innerText = comidas[Math.floor(Math.random() * comidas.length)];

    comida.style.left = Math.random() * 90 + "vw";
    comida.style.animationDuration = Math.random() * 2 + 3 + "s";
    comida.style.fontSize = Math.random() * 100 + 50 + "px";
    body.appendChild(comida);

    setTimeout(() => {
        comida.remove();
    }, 2000);
}

