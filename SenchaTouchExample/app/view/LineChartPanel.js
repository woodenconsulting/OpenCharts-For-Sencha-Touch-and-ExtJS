Ext.define('NVD3Charts.view.LineChartPanel', {
    extend: 'Ext.Container',
    alias: 'widget.nvd3_linechart_panel',
    
    config: {
        layout: 'fit',
        items: [{
            xtype: 'oc-linechart',
            chartOptions: {
                x: function(d,i) { return i; },
                showXAxis: true,
                showYAxis: true,
                transitionDuration: 250
            },
            chartFn: function(chart) {
                chart.xAxis
                    .axisLabel('Time (ms)')
                    .tickFormat(d3.format(',r'));

                chart.yAxis
                    .axisLabel('Voltage (v)')
                    .tickFormat(d3.format('.02f'));
            }
        }]
    }
});
