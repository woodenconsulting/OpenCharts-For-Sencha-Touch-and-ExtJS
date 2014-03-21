Ext.define('NVD3Charts.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    
    requires: [
        'NVD3Charts.view.BarChartPanel',
        'NVD3Charts.view.LineChartPanel',
        'NVD3Charts.view.ScatterChartPanel',
        'NVD3Charts.view.StackedAreaChartPanel',
        'NVD3Charts.view.StackedBarChartPanel',
        'NVD3Charts.view.HorizontalStackedBarChartPanel',
        'NVD3Charts.view.LinePlusBarChartPanel',
        'NVD3Charts.view.CumulativeLineChartPanel',
        'NVD3Charts.view.LineWithFocusChartPanel',
        'NVD3Charts.view.PieChartPanel',
        'NVD3Charts.view.BulletChartPanel'
    ],
    
    config: {
        fullscreen: true,
        scrollable: null,
        layout: 'vbox',
        items: [{
            xtype: 'toolbar',
            title: 'OpenCharts For Sencha Touch (Using NVD3)'
        },{
            xtype: 'container',
            name: 'main_container',
            flex: 1,
            layout: 'card',
            items: [{
                xtype: 'nvd3_barchart_panel'
            },{
                xtype: 'nvd3_linechart_panel'
            },{
                xtype: 'nvd3_scatterchart_panel'
            },{
                xtype: 'nvd3_stackedareachart_panel'
            },{
                xtype: 'nvd3_stackedbarchart_panel'
            },{
                xtype: 'nvd3_horizontalstackedbarchart_panel'
            },{
                xtype: 'nvd3_lineplusbarchart_panel'
            },{
                xtype: 'nvd3_cumulativelinechart_panel'
            },{
                xtype: 'nvd3_linewithfocuschart_panel'
            },{
                xtype: 'nvd3_piechart_panel'
            },{
                xtype: 'nvd3_bulletchart_panel'
            }]
        },{
            xtype: 'toolbar',
            scrollable: {direction: 'horizontal', directionLock: true},
            name: 'view_button_toolbar',
            items: [{
                xtype: 'button',
                text: 'Bar Chart',
                viewIndex: 0
            },{
                xtype: 'button',
                text: 'Line Chart',
                viewIndex: 1
            },{
                xtype: 'button',
                text: 'Scatter Chart',
                viewIndex: 2
            },{
                xtype: 'button',
                text: 'Stacked Area Chart',
                viewIndex: 3
            },{
                xtype: 'button',
                text: 'Stacked Bar Chart',
                viewIndex: 4
            },{
                xtype: 'button',
                text: 'Horizontal Stacked Bar Chart',
                viewIndex: 5
            },{
                xtype: 'button',
                text: 'Line Plus Bar Chart',
                viewIndex: 6
            },{
                xtype: 'button',
                text: 'Cumulative Line Chart',
                viewIndex: 7
            },{
                xtype: 'button',
                text: 'Line With Focus Chart',
                viewIndex: 8
            },{
                xtype: 'button',
                text: 'Pie Chart',
                viewIndex: 9
            },{
                xtype: 'button',
                text: 'Bullet Chart',
                viewIndex: 10
            }]
        }]
    }
});
