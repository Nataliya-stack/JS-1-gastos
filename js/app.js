const NOMBRE = document.getElementById("nombre");
const APELLIDOS = document.getElementById("apellidos");
const INTERNET = document.getElementById("internet");
const LUZ = document.getElementById("luz");
const AGUA = document.getElementById("agua");
const GAS = document.getElementById("gas");
const ALQUILER = document.getElementById("alquiler");

const TOTAL_GASTOS = document.getElementById("totalGastos");


function calcular() {
      let nombre = NOMBRE.value.trim();
      let apellidos = APELLIDOS.value.trim();
      let internet = Number(INTERNET.value);
      let luz = Number(LUZ.value);
      let agua = Number(AGUA.value);
      let gas = Number(GAS.value);
      let alquiler = Number(ALQUILER.value);
      let total = internet + luz + agua + gas + alquiler;

    
      console.log("internet", internet, typeof(internet));
      console.log("luz", luz, typeof(luz));

      TOTAL_GASTOS.innerHTML = `<mark>${nombre} ${apellidos}: Tu gasto fijo total es de ${total} euros.</mark>`;
}

function rellenar() {
    NOMBRE.value = "Cyrille";
    APELLIDOS.value = "Nyami";
    INTERNET.value = "38";
    LUZ.value = "24";
    AGUA.value = "17";
    GAS.value = "42";
    ALQUILER.value = "950";
}
      
      //let total = Number(INTERNET.value) + 
                  //Number(LUZ.value) + 
                  //Number(AGUA.value) + 
                  //Number(GAS.value) + 
                 // Number(ALQUILER.value);

   
     