document.addEventListener('DOMContentLoaded', function() {
    var toggleLink = document.getElementById('toggleLink');
    toggleLink.addEventListener('click', function(event) {
      event.preventDefault();
      toggleText();
    });
  });
  
  var isTextShown = false;
  
  function toggleText() {
    var additionalText = document.getElementById('additionalText');
    var toggleLink = document.getElementById('toggleLink');
    
    if (isTextShown) {
      additionalText.classList.add('hidden');
      toggleLink.textContent = "Seguir leyendo";
      isTextShown = false;
    } else {
      additionalText.classList.remove('hidden');
      toggleLink.textContent = "Ocultar exceso de texto";
      isTextShown = true;
    }
  }