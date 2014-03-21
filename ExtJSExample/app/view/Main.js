Ext.define('NVD3Charts.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    
    requires: [
        'Ext.layout.container.VBox',
        'Ext.layout.container.Card',
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
    
    layout: 'vbox',
    items:[{
        xtype: 'panel',
        title: 'OpenCharts For ExtJS (Using NVD3)',
        titleAlign: 'left',
        width: '100%',
        header: {
            titlePosition: 0,
            items: [{
                xtype: 'button',
                name: 'select_chart_type',
                text: 'Select Chart Type',
                menu: [{
                    text: 'Bar Chart',
                    viewIndex: 0
                },{
                    text: 'Line Chart',
                    viewIndex: 1
                },{
                    text: 'Scatter Chart',
                    viewIndex: 2
                },{
                    text: 'Stacked Area Chart',
                    viewIndex: 3
                },{
                    text: 'Stacked Bar Chart',
                    viewIndex: 4
                },{
                    text: 'Horizontal Stacked Bar Chart',
                    viewIndex: 5
                },{
                    text: 'Line Plus Bar Chart',
                    viewIndex: 6
                },{
                    text: 'Cumulative Line Chart',
                    viewIndex: 7
                },{
                    text: 'Line With Focus Chart',
                    viewIndex: 8
                },{
                    text: 'Pie Chart',
                    viewIndex: 9
                },{
                    text: 'Bullet Chart',
                    viewIndex: 10
                }]
            }]
        }
    },{
        xtype: 'panel',
        name: 'main_container',
        width: '100%',
        flex: 2,
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
    }]
});
