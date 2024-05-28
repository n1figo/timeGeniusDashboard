document.addEventListener('DOMContentLoaded', function() {
    // Performance Chart
    var ctx1 = document.getElementById('performanceChart').getContext('2d');
    var performanceChart = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['2020-02-03', '2020-02-10', '2020-02-17', '2020-02-24', '2020-03-02'],
            datasets: [{
                label: '코스피',
                data: [30, 32, 31, 29, 30],
                borderColor: 'red',
                fill: false
            }, {
                label: '퀀티랩 수익률',
                data: [20, 22, 21, 19, 20],
                borderColor: 'blue',
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'week'
                    }
                }
            }
        }
    });

    // Sample data for the stock rankings table
    var stockData = [
        {rank: 1, name: '사피엔바이오제', change: '5.14%', return: '-52.88%'},
        {rank: 2, name: '에코프로비엠', change: '-6.27%', return: '-14.37%'},
        // Add more rows here
    ];

    var tableBody = document.querySelector('#stock-rankings tbody');
    stockData.forEach(function(stock) {
        var row = document.createElement('tr');
        row.innerHTML = `<td>${stock.rank}</td><td>${stock.name}</td><td>${stock.change}</td><td>${stock.return}</td>`;
        tableBody.appendChild(row);
    });

    // KOSPI and KOSDAQ Charts
    var ctx2 = document.getElementById('kospiChart').getContext('2d');
    var kospiChart = new Chart(ctx2, {
        type: 'candlestick',
        data: {
            labels: ['2020-03-02', '2020-03-03', '2020-03-04', '2020-03-05', '2020-03-06'],
            datasets: [{
                label: 'KOSPI',
                data: [
                    {t: '2020-03-02', o: 2670, h: 2700, l: 2650, c: 2680},
                    {t: '2020-03-03', o: 2680, h: 2720, l: 2660, c: 2700},
                    // Add more data here
                ],
                borderColor: 'black',
                backgroundColor: 'rgba(0, 255, 0, 0.5)'
            }]
        },
        options: {
            responsive: true
        }
    });

    var ctx3 = document.getElementById('kosdaqChart').getContext('2d');
    var kosdaqChart = new Chart(ctx3, {
        type: 'candlestick',
        data: {
            labels: ['2020-03-02', '2020-03-03', '2020-03-04', '2020-03-05', '2020-03-06'],
            datasets: [{
                label: 'KOSDAQ',
                data: [
                    {t: '2020-03-02', o: 840, h: 850, l: 830, c: 845},
                    {t: '2020-03-03', o: 845, h: 855, l: 835, c: 850},
                    // Add more data here
                ],
                borderColor: 'black',
                backgroundColor: 'rgba(255, 0, 0, 0.5)'
            }]
        },
        options: {
            responsive: true
        }
    });
});
