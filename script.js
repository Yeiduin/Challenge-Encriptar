const textoencriptado = document.getElementById("texencriptado");

let letrasOriginal = ["ai", "enter", "ober", "imes", "ufat"];
let letrasNueva = ["a", "e", "o", "i", "u"];

function cambiarDisplay() {
  const div = document.getElementById("primero");
  const divdos = document.getElementById("segundo");

  div.style.display = "none";
  divdos.style.display = "flex";
}

function encriptar() {
  const textoaEncriptar = document.getElementById("textforencript").value;
  const regex = /^[a-z\s]+$/;
  if (!regex.test(textoaEncriptar)) {
    textoencriptado.textContent =
      "Recuerda solo puedes encriptar letras minúsculas y sin acentos";
    cambiarDisplay();
  } else {
    let encriptado = [];
    for (let i = 0; i < textoaEncriptar.length; i++) {
      switch (textoaEncriptar[i]) {
        case "a":
          encriptado.push("ai");
          break;
        case "e":
          encriptado.push("enter");

          break;
        case "i":
          encriptado.push("imes");

          break;
        case "o":
          encriptado.push("ober");

          break;
        case "u":
          encriptado.push("ufat");

          break;
        default:
          encriptado.push(textoaEncriptar[i]);
          break;
      }
    }

    let resultado = encriptado.join("");

    textoencriptado.textContent = resultado;
    cambiarDisplay();
  }
}

function Desencriptar() {
  let letrasOriginal = ["ai", "enter", "ober", "imes", "ufat"];
  let letrasNueva = ["a", "e", "o", "i", "u"];
  let texto = document.getElementById("textforencript").value;
  for (let i = 0; i < letrasOriginal.length; i++) {
    texto = texto.replace(new RegExp(letrasOriginal[i], "g"), letrasNueva[i]);
  }
  textoencriptado.textContent = texto;
  cambiarDisplay();
}

async function copiar() {
  try {
    const textoACopiar = document.getElementById("texencriptado").textContent;

    // Copia el texto del párrafo al portapapeles
    await navigator.clipboard.writeText(textoACopiar);
  } catch (err) {
    console.error("Error al copiar el texto: ", err);
  }
}
