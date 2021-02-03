var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
        datasets: [{
            label: 'Data Penjualan Tiket per bulan ',
            backgroundColor: 'rgb(116, 185, 255)',
            borderColor: 'rgb(9, 132, 227, 0.3)',
            data: [3, 20, 5, 12, 20, 80, 40, 20, 80, 40, 70, 35]
        }]
    },

    // Configuration options go here
    options: {}
});