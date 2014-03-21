Ext.define('NVD3Charts.view.LineWithFocusChartPanel', {
    extend: 'Ext.Container',
    alias: 'widget.nvd3_linewithfocuschart_panel',
    
    layout: 'fit',
    items: [{
        xtype: 'oc-linewithfocuschart',
        chartFn: function(chart) {
            chart.xAxis
                .tickFormat(d3.format(',f'));

              chart.yAxis
                .tickFormat(d3.format(',.2f'));

              chart.y2Axis
                .tickFormat(d3.format(',.2f'));
        }
    }]
});