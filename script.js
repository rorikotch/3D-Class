Highcharts.chart('container', {

    title: {
        text: 'U.S. Milk Production 1998 to 2017'
    },

    subtitle: {
        text: 'This data was sourced from the U.S.D.A. Department of Agriculture'
    },

    yAxis: {
        title: {
            text: 'Billions of Pounds'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            pointStart: 1998
        }
    },

    series: [{
        name: 'Production',
        data: [16123000000, 16013000000, 16396000000, 17048000000, 17114000000, 17278000000, 17690000000, 17693000000, 18145000000]
    },
});
