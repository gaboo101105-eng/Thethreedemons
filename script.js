const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const year = document.getElementById("year");

if (year) year.textContent = new Date().getFullYear();

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  // Cerrar menú al dar click en un link
  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => menu.classList.remove("open"));
  });
}

// Enviar el formulario abriendo WhatsApp (sin backend)
function handleSubmit(e){
  e.preventDefault();
  const form = e.target;

  const nombre = encodeURIComponent(form.nombre.value.trim());
  const telefono = encodeURIComponent(form.telefono.value.trim());
  const servicio = encodeURIComponent(form.servicio.value);
  const mensaje = encodeURIComponent(form.mensaje.value.trim());

  // CAMBIA este número por el tuyo en formato internacional sin + ni espacios.
  const waNumber = "520000000000";

  const text = `Hola, soy ${nombre}.%0A` +
               `Mi teléfono/WhatsApp: ${telefono}.%0A` +
               `Servicio: ${servicio}.%0A` +
               `Mensaje: ${mensaje}`;

  window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank");
  return false;
}
