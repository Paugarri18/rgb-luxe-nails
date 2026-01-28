document.getElementById("citaForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;
  const mensaje = document.getElementById("mensaje").value;

  const telefono = "628302701"; // SIN + ni espacios
  const texto = `
Hola quiero pedir cita para uñas.

 Nombre: ${nombre}
 Fecha: ${fecha}
 Hora: ${hora}

 Comentario: ${mensaje}
  `;

  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
});
