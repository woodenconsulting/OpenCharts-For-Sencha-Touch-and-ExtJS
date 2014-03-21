Ext.define('NVD3Charts.view.LinePlusBarChartPanel', {
    extend: 'Ext.Container',
    alias: 'widget.nvd3_lineplusbarchart_panel',
    
    layout: 'fit',
    items: [{
        xtype: 'oc-lineplusbarchart',
        chartOptions: {
            x: function(d,i) { return i; },
            y: function(d) { return d[1]; },
            margin: {top: 30, right: 60, bottom: 50, left: 70},
            color: d3.scale.category10().range()
        },
        chartFn: function(chart) {
            chart.xAxis
                .showMaxMin(false)
                .tickFormat(function(d) {
                  var dx = data[0].values[d] && data[0].values[d][0] || 0;
                  return d3.time.format('%x')(new Date(dx));
                });

            chart.y1Axis
                .tickFormat(d3.format(',f'));

            chart.y2Axis
                .tickFormat(function(d) { return '$' + d3.format(',f')(d); });

            chart.bars.forceY([0]);
        }
    }]
});