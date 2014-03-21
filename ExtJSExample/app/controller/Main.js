Ext.define('NVD3Charts.controller.Main', {
    extend: 'Ext.app.Controller',
    
    requires: [
        'Ext.Ajax'
    ],
   
    refs: [{
        ref: 'cardContainer',
        selector: 'main panel[name=main_container]'
    },{
        ref: 'barChart',
        selector: 'main oc-barchart'
    },{
        ref: 'lineChart',
        selector: 'main oc-linechart'
    },{
        ref: 'scatterChart',
        selector: 'main oc-scatterchart'
    },{
        ref: 'stackedAreaChart',
        selector: 'main oc-stackedareachart'
    },{
        ref: 'stackedBarChart',
        selector: 'main oc-stackedbarchart'
    },{
        ref: 'horizontalStackedBarChart',
        selector: 'main oc-horizontalstackedbarchart'
    },{
        ref: 'linePlusBarChart',
        selector: 'main oc-lineplusbarchart'
    },{
        ref: 'cumulativeLineChart',
        selector: 'main oc-cumulativelinechart'
    },{
        ref: 'lineWithFocusChart',
        selector: 'main oc-linewithfocuschart'
    },{
        ref: 'pieChart',
        selector: 'main oc-piechart'
    },{
        ref: 'bulletChart',
        selector: 'main oc-bulletchart'
    }],

    init: function() {
        this.control({
            "main button[name=select_chart_type] > menuitem": {
                click: 'onNavButtonClick'
            }
        });
    },
    
    initializeCharts: function() {
        //trigger the onActiveItemChange initially to load the first chart's data
        var triggerObj = { config: { xtype: 'nvd3_barchart_panel' } },
            me = this;
    
        //the barchart is at index 0 so when the chart is loaded we need to
        //load the data
        this.getBarChart().on('chartLoaded', function(chart) {
            me.updateActiveItem(0);
        });
        
    },
    
    onNavButtonClick: function(button, e, eOpts) {
        var cardContainer = this.getCardContainer(),
            index = button.viewIndex;
    
        //update the view and display the selected chart
        cardContainer.layout.setActiveItem(index);
        this.updateActiveItem(index);
    },
    
    updateActiveItem: function(index) {
        var chart;
        switch(index) {
            case 0:
                chart = this.getBarChart();
                this.loadChartData('chartdata/barchart.json', chart);
                break;
            case 1:
                chart = this.getLineChart();
                this.loadChartData('chartdata/linechart.json', chart);
                break;
            case 2:
                chart = this.getScatterChart();
                this.loadChartData('chartdata/scatterchart.json', chart);
                break;
            case 3:
                chart = this.getStackedAreaChart();
                this.loadChartData('chartdata/stackedareachart.json', chart);
                break;
            case 4:
                chart = this.getStackedBarChart();
                this.loadChartData('chartdata/stackedbarchart.json', chart);
                break;
            case 5:
                chart = this.getHorizontalStackedBarChart();
                this.loadChartData('chartdata/horizontalstackedbarchart.json', chart);
                break;
            case 6:
                chart = this.getLinePlusBarChart();
                this.loadChartData('chartdata/lineplusbarchart.json', chart);
                break;
            case 7:
                chart = this.getCumulativeLineChart();
                this.loadChartData('chartdata/cumulativelinechart.json', chart);
                break;
            case 8:
                chart = this.getLineWithFocusChart();
                this.loadChartData('chartdata/linewithfocuschart.json', chart);
                break;
            case 9:
                chart = this.getPieChart();
                this.loadChartData('chartdata/piechart.json', chart);
                break;
            case 10:
                chart = this.getBulletChart();
                this.loadChartData('chartdata/bulletchart.json', chart);
                break;
            default:
        }
    },
    
    loadChartData: function(url, chart) {
        //grab the specified json file via xhr
        Ext.Ajax.request({
            url: url,
            success: function(response){
                var chartData = Ext.JSON.decode(response.responseText);
                
                //update the chart data
                chart.renderChartData(chartData);
            }
        });
    }
});