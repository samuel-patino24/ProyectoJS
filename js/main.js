let opcion = parseInt(prompt(
  "BIENVENIDO A TU SERVICIO DE INTERNET \n\n" +
  "1. Iniciar\n" +
  "2. Salir\n\n" +
  "Ingrese el número de la opción que desea realizar:"
));

switch (opcion) {
  case 1:

    alert("Has elegido iniciar.");
    

    let velocidad = parseInt(prompt("que plan tenes contratado? (30, 50 o 100 Mbps):"));
    let tarifaBase = 0;

    if (velocidad === 30) {
      tarifaBase = 70000;
    } else if (velocidad === 50) {
      tarifaBase = 90000;
    } else if (velocidad === 100) {
      tarifaBase = 120000;
    } else {
      alert("Velocidad no válida.");
    }

    let tipoCliente = prompt("Ingrese el tipo de cliente (1. residencial, 2. empresarial, 3. institucional):").toLowerCase();

    if (tipoCliente === "1") {
      

    } else if (tipoCliente === "2") {
        tarifaBase = tarifaBase * 1.20;

    } else if (tipoCliente === "3") {
        tarifaBase = tarifaBase * 0.90;

    } else {
      alert("Tipo de cliente no válido.");
    }

    let ubicacion = prompt("¿Vive en zona rural? (si/no):").toLowerCase();
    if (ubicacion === "si") {
      tarifaBase = tarifaBase * 1.05;
    }

    let pagoTarde = prompt("¿Pagó despues de la fecha limite? (si/no):").toLowerCase();
    if (pagoTarde === "si") {
      tarifaBase = tarifaBase * 1.02;
    }

    alert("El total a pagar es: $" + tarifaBase);
    break;

  case 2:
    alert("Gracias por usar el servicio");
    break;

  default:
    alert("esa opcion no existe mi h");
    break;
}
