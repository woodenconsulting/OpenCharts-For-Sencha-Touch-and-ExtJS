Ext.define('NVD3Charts.controller.BarChart', {
    extend: 'Ext.app.Controller',
    
    init: function() {
        this.control({
            "main oc-barchart": {
                elementMouseover: 'onElementMouseover',
                elementMouseout: 'onElementMouseout',
                tooltipShow: 'onTooltipShow',
                tooltipHide: 'onTooltipHide',
                elementClick: 'onElementClick'
            }
        });
    },
    
    onElementMouseover: function(e) {
        console.log('onElementMouseover');
        console.log(e);
    },
    
    onElementMouseout: function(e) {
        console.log('onElementMouseout');
        console.log(e);
    },
    
    onTooltipShow: function(e) {
        console.log('onTooltipShow');
        console.log(e);
    },
    
    onTooltipHide: function(e) {
        console.log('onTooltipHide');
        console.log(e);
    },
    
    onElementClick: function(e) {
        console.log('onElementClick');
        console.log(e);
    }
});