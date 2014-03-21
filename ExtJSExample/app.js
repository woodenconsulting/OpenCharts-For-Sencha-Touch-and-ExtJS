/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when upgrading.
*/

Ext.application({
    name: 'NVD3Charts',
    
    requires: [
        'OpenCharts.OpenCharts'
    ],

    extend: 'NVD3Charts.Application',
    
    autoCreateViewport: true,
    fullScreen: true,
    
    controllers: [
        'Main',
        /* Chart Controllers */
        'BarChart',
        'LineChart',
        'ScatterChart',
        'StackedAreaChart',
        'StackedBarChart',
        'HorizontalStackedBarChart',
        'LinePlusBarChart',
        'CumulativeLineChart',
        'LineWithFocusChart',
        'PieChart',
        'BulletChart'
    ],
    
    launch: function() {
        this.getApplication().getController('Main').initializeCharts();
    }
});
