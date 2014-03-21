Ext.define('NVD3Charts.view.PieChartPanel', {
    extend: 'Ext.Container',
    alias: 'widget.nvd3_piechart_panel',
    
    layout: 'fit',
    items: [{
        xtype: 'oc-piechart',
        chartOptions: {
            x: function(d) { return d.label; },
            y: function(d) { return d.value; },
            showLabels: true
        }
    }]
});