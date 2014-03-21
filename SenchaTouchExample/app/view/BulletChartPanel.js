Ext.define('NVD3Charts.view.BulletChartPanel', {
    extend: 'Ext.Container',
    alias: 'widget.nvd3_bulletchart_panel',
    
    config: {
        layout: 'fit',
        items: [{
            xtype: 'oc-bulletchart'
        }]
    }
});