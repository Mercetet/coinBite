function calcular() {
  const sueldo = parseFloat(document.getElementById("sueldo").value);
  const dias = parseFloat(document.getElementById("dias").value);
  const horas = parseFloat(document.getElementById("horas").value);
  const producto = parseFloat(document.getElementById("producto").value);
  const repeticion = parseFloat(document.getElementById("repeticion").value);

  if (!sueldo || !dias || !horas || !producto) {
    alert("Por favor, ingresa valores numéricos válidos en todos los campos.");
    return;
  }

  if (
    sueldo <= 0 ||
    dias <= 0 ||
    horas <= 0 ||
    producto <= 0 ||
    repeticion <= 0
  ) {
    alert("Por favor, ingresa valores mayores que cero en todos los campos.");
    return;
  }

  if (dias > 7) {
    alert("Los días trabajados por semana no pueden ser más de 7.");
    return;
  }

  if (horas > 24) {
    alert("Las horas trabajadas por día no pueden ser más de 24.");
    return;
  }

  if (!repeticion) {
    repeticion = 1;
  }

  const horasMes = horas * dias * 4.33;
  const precioHora = sueldo / horasMes;
  const tiempoNecesario = (producto * repeticion) / precioHora;

  const diasNecesarios = Math.floor(tiempoNecesario / horas);
  const horasRestantes = tiempoNecesario % horas;

  const horasNecesarias = Math.floor(horasRestantes);
  const minutosNecesarios = Math.round((horasRestantes - horasNecesarias) * 60);

  let textoDia = "días";
  if (diasNecesarios === 1) textoDia = "día";


  let textoHora = "horas";
  if (horasNecesarias === 1) textoHora = "hora";

  let textoMinuto = "minutos";
  if (minutosNecesarios === 1) textoMinuto = "minuto";

  document.getElementById("total").innerText = `Tu "pequeño" gasto cuesta $${
    producto * repeticion
  }. Equivale a ${diasNecesarios} ${textoDia}, ${horasNecesarias} ${textoHora} y ${minutosNecesarios} ${textoMinuto} de tu trabajo.`;
}
