document.addEventListener('DOMContentLoaded', function() {

    var addButton = document.getElementById('addButton');
    
    addButton.addEventListener('click', function() {
    
      var lista = document.getElementById('lista');
      
      // Crear nuevo elemento en la lista
      var nuevoElemento = document.createElement('li');
      
      // Asignar el texto que debe tener
      var numeroElemento = lista.getElementsByTagName('li').length + 1;
      nuevoElemento.textContent = 'Elemento ' + numeroElemento;
      
      // Añadir el nuevo elemento a la lista
      lista.appendChild(nuevoElemento);
    });
  });