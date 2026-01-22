const year=document.getElementById("year");
if(year) year.textContent=new Date().getFullYear();

function handleSubmit(e){
  e.preventDefault();
  const f=e.target;
  const msg=`Hola soy ${f.nombre.value}, mi número es ${f.telefono.value}. ${f.mensaje.value}`;
  window.open(`https://wa.me/525510459053?text=${encodeURIComponent(msg)}`);
}
