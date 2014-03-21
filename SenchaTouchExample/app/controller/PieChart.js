Ext.define('NVD3Charts.controller.PieChart', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            pieChart: 'main oc-piechart'
        },
        
        control: {
            pieChart: {
                elementMouseover: 'onElementMouseover',
                elementMouseout: 'onElementMouseout',
                tooltipShow: 'onTooltipShow',
                tooltipHide: 'onTooltipHide',
                elementClick: 'onElementClick',
                legendMouseover: 'onLegendMouseover',
                stateChange: 'onStateChange'
            }
        }
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
    },
    
    onLegendMouseover: function(e) {
        console.log('onLegendMouseover');
        console.log(e);
    },
    
    onStateChange: function(e) {
        console.log('onStateChange');
        console.log(e);
    }
});