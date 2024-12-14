let years = [];
let temps = [];

async function getData() {
    const response = await fetch("NH.Ts+dSST.csv");
    const data = await response.text();
    const rows = data.split("\n").slice(1);
    rows.forEach((elem) => {
              let row = elem.split(",");
              let year = row[0];
              let temp = 14 + parseFloat(row[1]);
              years.push(year);
              temps.push(temp);
            });
             
    chart()
}



async function chart() {
    const ctx = document.getElementById('myChart');
        new Chart(ctx, {
          type: 'radar',
          data: {
            labels: years,
            datasets: [{
              label: 'Northern Average Temperatures',
              data: temps,
              borderColor: 'purple',
              backgroundColor: 'rgba(37, 47, 53, 0.2)', 
              borderWidth: 2
            }]
          },
          options: {
            scales: {
                r: { 
                    angleLines: { 
                        color: 'red', 
                        lineWidth: 1 
                    },
                    ticks: { 
                        display: true,
                        color: 'green',
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    },
                    pointLabels: { 
                        color: 'purple', 
                        font: {
                            size: 9, 
                            style: 'italic'
                        }
                    }
                }
            },
            
        }
          
        });
}

getData()
