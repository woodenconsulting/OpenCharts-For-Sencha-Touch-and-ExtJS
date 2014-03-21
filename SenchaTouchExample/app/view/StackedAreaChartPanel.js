Ext.define('NVD3Charts.view.StackedAreaChartPanel', {
    extend: 'Ext.Container',
    alias: 'widget.nvd3_stackedareachart_panel',
    
    config: {
        layout: 'fit',
        items: [{
            xtype: 'oc-stackedareachart',
            chartOptions: {
                x: function(d) { return d[0]; },
                y: function(d) { return d[1]; },
                clipEdge: true,
                useInteractiveGuideline: true
            },
            chartFn: function(chart) {
                chart.xAxis
                    .tickFormat(function(d) { return d3.time.format('%x')(new Date(d)); });

                chart.yAxis
                    .tickFormat(d3.format(',.2f'));
            }
        }]
    }
});