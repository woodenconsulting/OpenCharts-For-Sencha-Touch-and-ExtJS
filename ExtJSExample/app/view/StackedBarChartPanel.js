Ext.define('NVD3Charts.view.StackedBarChartPanel', {
    extend: 'Ext.Container',
    alias: 'widget.nvd3_stackedbarchart_panel',
    
    layout: 'fit',
    items: [{
        xtype: 'oc-stackedbarchart',
        chartFn: function(chart) {
            chart.xAxis
                .tickFormat(d3.format(',f'));

            chart.yAxis
                .tickFormat(d3.format(',.1f'));
        }
    }]
});