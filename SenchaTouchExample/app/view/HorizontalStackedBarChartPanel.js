Ext.define('NVD3Charts.view.HorizontalStackedBarChartPanel', {
    extend: 'Ext.Container',
    alias: 'widget.nvd3_horizontalstackedbarchart_panel',
    
    config: {
        layout: 'fit',
        items: [{
            xtype: 'oc-horizontalstackedbarchart',
            chartOptions: {
                x: function(d) { return d.label; },
                y: function(d) { return d.value; },
                margin: {top: 2, right: 2, bottom: 2, left: 2},
                showValues: true,
                tooltips: true,
                showControls: false
            },
            chartFn: function(chart) {
                chart.yAxis
                    .tickFormat(d3.format(',.2f'));
            }
        }]
    }
});