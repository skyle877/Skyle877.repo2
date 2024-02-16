 // Arreglo para contar votos
 var voteCounts = [0, 0, 0, 0, 0];

 // añadir votos
 function vote(partyIndex) {
   voteCounts[partyIndex]++;
   updateChart();
 }

 // resetear los votos
 function reset() {
   voteCounts = [0, 0, 0, 0, 0];
   updateChart();
 }

 // actualizar gráfico
 var myChart = null;
 function updateChart() {
    var ctx = document.getElementById('myChart').getContext('2d');

    // Si el gráfico ya existe, se actualiza
    if (myChart) {
      myChart.data.datasets[0].data = voteCounts;
      myChart.update();
      return;
    } else {
      // Si no existe, se crea
      myChart = new Chart(ctx, {
        type: 'pie', 
        data: {
          labels: ['Socialistas', 'Liberales', 'Animalistas', 'Centristas', 'Ecologistas'],
          datasets: [{
            label: 'Votos',

            // los datos son los votos del arreglo
            data: voteCounts,

            // colores
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Votaciones'
            }
          }
        }
      });
    }
  }