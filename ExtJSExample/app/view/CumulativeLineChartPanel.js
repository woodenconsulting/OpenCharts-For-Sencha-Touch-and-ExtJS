Ext.define('NVD3Charts.view.CumulativeLineChartPanel', {
    extend: 'Ext.Container',
    alias: 'widget.nvd3_cumulativelinechart_panel',
    
    layout: 'fit',
    items: [{
        xtype: 'oc-cumulativelinechart',
        chartOptions: {
            x: function(d) { return d[0]; },
            y: function(d) { return d[1]/100; },
            color: d3.scale.category10().range(),
            useInteractiveGuideline: true
        },
        chartFn: function(chart) {
            chart.xAxis
                .tickFormat(function(d) {
                  return d3.time.format('%x')(new Date(d));
                });

            chart.yAxis.tickFormat(d3.format(',.1%'));
        }
    }]
});