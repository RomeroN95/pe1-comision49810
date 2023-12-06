function mostrarLista(lista) {
  if (lista.length === 0) {
    alert("La lista está vacía.");
  } else {
    alert("------Tu Lista:------\n\n" + lista.join("\n"));
  }
}

function gestionarLista() {
  var listaDeCompras = [];
  var continuarGestionando = true;

  while (continuarGestionando) {
    var opcion = prompt(
      "-----Seleccione una opción:-----\n" +
      "1. Agregar un ítem a la lista\n" +
      "2. Eliminar un ítem de la lista\n" +
      "3. Ver la lista de compras\n" +
      "4. Salir\n" +
      "-------------------------------------"
    );

    opcion = parseInt(opcion);

    switch (opcion) {
      case 1:
        var nuevoItem = prompt("Ingrese el ítem que desea agregar:");
        listaDeCompras.push(nuevoItem);
        alert("Se agregó '" + nuevoItem + "' a la lista.");
        break;

      case 2:
        if (listaDeCompras.length === 0) {
          alert("La lista está vacía. No hay ítems para eliminar.");
        } else {
          var itemEliminar = prompt("Ingrese el ítem que desea eliminar:\n" + listaDeCompras.join(", "));
          var index = listaDeCompras.indexOf(itemEliminar);
          
          if (index !== -1) {
            listaDeCompras.splice(index, 1);
            alert("Se eliminó '" + itemEliminar + "' de la lista.");
          } else {
            alert("El ítem '" + itemEliminar + "' no está en la lista.");
          }
        }
        break;

      case 3:
        mostrarLista(listaDeCompras);
        break;

      case 4:
        continuarGestionando = false;
        alert("Saliendo del programa");
        break;

      default:
        alert("Error, seleccione una opción válida.");
        break;
    }
  }
}
gestionarLista();
