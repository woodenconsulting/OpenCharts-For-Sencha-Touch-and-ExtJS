Ext.define('NVD3Charts.view.BarChartPanel', {
    extend: 'Ext.Container',
    alias: 'widget.nvd3_barchart_panel',
    
    config: {
        layout: 'fit',
        items: [{
            xtype: 'oc-barchart',
            chartOptions: {
                x: function(d) { return d.label; },
                y: function(d) { return d.value; },
                staggerLabels: true,
                tooltips: true,
                showValues: true
            }
        }]
    }
});
