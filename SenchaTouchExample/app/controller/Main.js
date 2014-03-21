Ext.define('NVD3Charts.controller.Main', {
    extend: 'Ext.app.Controller',
    
    requires: [
        'Ext.Ajax'
    ],
    
    config: {
        refs: {
            cardContainer: 'main container[name=main_container]',
            barChart: 'main oc-barchart',
            lineChart: 'main oc-linechart',
            scatterChart: 'main oc-scatterchart',
            stackedAreaChart: 'main oc-stackedareachart',
            stackedBarChart: 'main oc-stackedbarchart',
            horizontalStackedBarChart: 'main oc-horizontalstackedbarchart',
            linePlusBarChart: 'main oc-lineplusbarchart',
            cumulativeLineChart: 'main oc-cumulativelinechart',
            lineWithFocusChart: 'main oc-linewithfocuschart',
            pieChart: 'main oc-piechart',
            bulletChart: 'main oc-bulletchart'
        },
        
        control: {
            "toolbar[name=view_button_toolbar] button": {
                tap: 'onNavButtonTap'
            },
            
            cardContainer: {
                activeitemchange: 'onActiveItemChange'
            }
        }
    },
    
    launch: function() {
        //trigger the onActiveItemChange initially to load the first chart's data
        var triggerObj = { config: { xtype: 'nvd3_barchart_panel' } },
            me = this;
    
        //the barchart is at index 0 so when the chart is loaded we need to
        //load the data
        this.getBarChart().on('chartLoaded', function(chart) {
            me.onActiveItemChange(null, triggerObj);
        });
        
    },
    
    onNavButtonTap: function(cmp, e, eOpts) {
        var cardContainer = this.getCardContainer(),
            index = cmp.viewIndex;
    
        //update the view and display the selected chart
        cardContainer.animateActiveItem(index, {type:'slide', direction:'left'});
    },
    
    onActiveItemChange: function(container, value, oldValue, eOpts) {
        var xtype = value.config.xtype,
            chart;
        
        switch(xtype) {
            case 'nvd3_barchart_panel':
                chart = this.getBarChart();
                this.loadChartData('chartdata/barchart.json', chart);
                break;
            case 'nvd3_linechart_panel':
                chart = this.getLineChart();
                this.loadChartData('chartdata/linechart.json', chart);
                break;
            case 'nvd3_scatterchart_panel':
                chart = this.getScatterChart();
                this.loadChartData('chartdata/scatterchart.json', chart);
                break;
            case 'nvd3_stackedareachart_panel':
                chart = this.getStackedAreaChart();
                this.loadChartData('chartdata/stackedareachart.json', chart);
                break;
            case 'nvd3_stackedbarchart_panel':
                chart = this.getStackedBarChart();
                this.loadChartData('chartdata/stackedbarchart.json', chart);
                break;
            case 'nvd3_horizontalstackedbarchart_panel':
                chart = this.getHorizontalStackedBarChart();
                this.loadChartData('chartdata/horizontalstackedbarchart.json', chart);
                break;
            case 'nvd3_lineplusbarchart_panel':
                chart = this.getLinePlusBarChart();
                this.loadChartData('chartdata/lineplusbarchart.json', chart);
                break;
            case 'nvd3_cumulativelinechart_panel':
                chart = this.getCumulativeLineChart();
                this.loadChartData('chartdata/cumulativelinechart.json', chart);
                break;
            case 'nvd3_linewithfocuschart_panel':
                chart = this.getLineWithFocusChart();
                this.loadChartData('chartdata/linewithfocuschart.json', chart);
                break;
            case 'nvd3_piechart_panel':
                chart = this.getPieChart();
                this.loadChartData('chartdata/piechart.json', chart);
                break;
            case 'nvd3_bulletchart_panel':
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