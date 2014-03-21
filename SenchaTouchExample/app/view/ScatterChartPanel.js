Ext.define('NVD3Charts.view.ScatterChartPanel', {
    extend: 'Ext.Container',
    alias: 'widget.nvd3_scatterchart_panel',
    
    config: {
        layout: 'fit',
        items: [{
            xtype: 'oc-scatterchart',
            chartOptions: {
                showDistX: true,
                showDistY: true,
                color: d3.scale.category10().range()
            },
            chartFn: function(chart) {
                chart.xAxis.tickFormat(d3.format('.02f'));
                chart.yAxis.tickFormat(d3.format('.02f'));
            }
        }]
    }
});