Ext.define('NVD3Charts.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Border',
        'NVD3Charts.view.Main'
    ],
/*
    layout: 'fit',

    items: [{
        xtype: 'app-main'
    }]
*/
    layout:'border',
    items: [{
        region:'center',
        margin: '5 5 5 5',
        layout: 'fit',
        items:[{
            xtype: 'main'
        }]
    }]
});
