document.addEventListener('DOMContentLoaded', function() {
    // Se seleccionan todos los enlaces dentro de los divs
    var links = document.querySelectorAll('div > a');
  
    // Se itera para añadir un event listener por cada enlace
    links.forEach(function(link, index) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        // Se toma el párrafo correspondiente al enlace
        var paragraph = this.previousElementSibling;
  
        // Se condiciona la visibilidad del párrafo
        if (paragraph.style.display === 'none') {
          paragraph.style.display = 'block';
          this.textContent = 'Ocultar contenidos';
        } else {
          paragraph.style.display = 'none';
          this.textContent = 'Mostrar contenidos';
        }
      });
    });
  });