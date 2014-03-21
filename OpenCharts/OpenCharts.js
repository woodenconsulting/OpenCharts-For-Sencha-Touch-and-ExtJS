/*!
 *
 * OpenCharts for Sencha Touch and ExtJS
 * Uses D3.js (d3js.org) and NVD3 (nvd3.org)
 * 
 * MIT License
 *
 * @package       OpenCharts
 * @copyright     Copyright (c) 2014 Jeff Wooden
 * @author        Jeff Wooden <codeimagined.com>
 */
Ext.define('OpenCharts.OpenCharts', {
    requires: [
        'OpenCharts.charts.BarChart',
        'OpenCharts.charts.LineChart',
        'OpenCharts.charts.ScatterChart',
        'OpenCharts.charts.StackedAreaChart',
        'OpenCharts.charts.StackedBarChart',
        'OpenCharts.charts.HorizontalStackedBarChart',
        'OpenCharts.charts.LinePlusBarChart',
        'OpenCharts.charts.CumulativeLineChart',
        'OpenCharts.charts.LineWithFocusChart',
        'OpenCharts.charts.PieChart',
        'OpenCharts.charts.BulletChart'
    ],
    
    constructor: function(config) {
        this.initConfig(config);
    }
});