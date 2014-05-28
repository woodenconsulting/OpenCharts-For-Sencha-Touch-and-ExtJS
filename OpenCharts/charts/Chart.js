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
Ext.define('OpenCharts.charts.Chart',{
    extend: 'Ext.Component',
    alias: 'widget.oc-chartparent',
    
    config: {
        /*
         * @property {object} chart
         * Maintains a reference to the chart created
         */
        chart: null,
        /*
         * @property {string} chartType
         * The specific chart type to create
         * 
         * See available NVD3 models:
         * https://github.com/novus/nvd3/wiki/Models
         * 
         * Example: 'bulletChart'
         */
        chartType: null,
        /*
         * @property {array} chartData
         * An array of data for the chart
         */
        chartData:[],
        /*
         * @property {object} chartOptions
         * The chart options / properties to apply to the chart
         * Refer to the NVD3 documentation for specific chart options
         * 
         * Example (Bar Chart)
         * 
         * 
           chartOptions = {
               x: (function(d) { return d.label; }),
               y: (function(d) { return d.value; }),
               staggerLabels: true,
               tooltips: false,
               showValues: true
           }
         * 
         */
        chartOptions:[],
        /*
         * @property {function} chartFn
         * A function that can be configured to call additional methods on the
         * chart when instantiated. Unfortunately, not all of the properties can
         * be set in chartOptions and must be called as a function.
         * 
         * Example (Line Chart)
         * 
           chartFn: function(chart) {
               chart.xAxis
                   .axisLabel('Time (ms)')
                   .tickFormat(d3.format(',r'));

               chart.yAxis
                   .axisLabel('Voltage (v)')
                   .tickFormat(d3.format('.02f'));
           }
         * 
         */
        chartFn: function(chart){},
        
        /*
         * Set a default max width and height if not defined
         */
        height:'100%',
        width:'100%'
    },
    
    /*
     * Create the chart initially, even if there is no data (data can be rendered
     * later via a Controller using this.renderChartData).
     */
    initialize: function(){
        //reset initComponent to an empty function
        this.initComponent = Ext.emptyFn;
        
        nv.addGraph(Ext.bind(function(){
            //no chartType was defined, cannot do anything without that
            if (!this.getChartType()) {
                Ext.Logger.error('A chartType must be defined.');
                return;
            }
            
            //create a very basic chart, additional options are set in the
            //subsequent chart classes via their generateChart method
            var chart = nv.models[this.getChartType()](),
                options = this.getChartOptions(),
                dom;
            
            //we need the chartOptions to set the properties on the chart
            if (!options) {
                Ext.Logger.error('chartOptions is not defined for the '+ this.getChartType() +' chartType.');
                return;
            }
        
            //apply additional properties specific to each chartType
            //the various chart classes will override this method
            this.applyChartProperties(chart, options, this.getChartFn());
            
            //now we need to bind the various chart events so we can fire these
            //events for Sencha Touch
            this.bindChartEvents(chart);
        
            //append the chart to the inner element of the container
            //if there is no chart data it can be updated later via renderChartData
            if (this.innerElement) {
                dom = this.innerElement.dom
            } else {
                dom = this.el.dom
            }
            
            d3.select(dom).append('svg')
                .datum(this.getChartData())
                .transition().duration(500)
                .call(chart);
            
            //update the chart size when the window is resized
            nv.utils.windowResize(function() { chart.update(); });
            
            //add a reference to the chart for this class
            this.setChart(chart);
            
            //fire a chartLoaded event for controllers to use
            this.fireEvent('chartLoaded', chart);

            return chart;
        },this));
    },
    
    /*
     * ExtJS Support
     * 
     * ExtJS utilizes initComponent, Sencha Touch uses initialize, so we need
     * to integrate both.
     * 
     * Note: This is a deprecated method in Sencha Touch in favor of initialize;
     * in order to suppress the warnings and prevent initialize from being called
     * twice; initialize will set initComponent to Ext.emptyFn (initialize is
     * called first).
     */
    initComponent: function() {
        this.initialize();
    },
    
    /*
     * Applies the defined object of chartOptions to the chart and calls
     * chartFn if applicable in order to run any methods on the chart.
     */
    applyChartProperties: function(chart, options, chartFn) {
        //apply various properties specific to this chartType
        chart.options(options);
        
        //apply any additional chart functions
        if (Ext.isFunction(chartFn)) {
            chartFn(chart);
        }
    },
    
    /*
     * Renders the chart data
     */
    renderChartData: function(data) {
        if (!data || data.length === 0) {
            //do nothing if there is no data
            return;
        }
        
        //update the chartData json
        this.setChartData(data);
        
        var dom;
        if (this.innerElement) {
            dom = this.innerElement.dom
        } else {
            dom = this.el.dom
        }
        
        //get the chart and the inner svg
        var svg = dom.firstChild,
            chart = this.getChart();
        
        //redraw the chart
        d3.select(svg)
            .datum(data)
            .transition().duration(500)
            .call(chart);
    },
    
    /*
     * Binds NVD3 events to Ext events for use via Sencha / ExtJS
     */
    bindChartEvents: function(chart) {
        var me = this;
        
        if (chart.dispatch) {
            if (chart.dispatch.tooltipShow) {
                chart.dispatch.on('tooltipShow.directive', function (e) {
                    me.fireEvent('tooltipShow', e);
                });
            }

            if (chart.dispatch.tooltipHide) {
                chart.dispatch.on('tooltipHide.directive', function (e) {
                    me.fireEvent('tooltipHide', e);
                });
            }

            if (chart.dispatch.beforeUpdate) {
                chart.dispatch.on('beforeUpdate.directive', function (e) {
                    me.fireEvent('beforeUpdate', e);
                });
            }

            if (chart.dispatch.stateChange) {
                chart.dispatch.on('stateChange.directive', function (e) {
                    me.fireEvent('stateChange', e);
                });
            }

            if (chart.dispatch.changeState) {
                chart.dispatch.on('changeState.directive', function (e) {
                    me.fireEvent('changeState', e);
                });
            }
	}
        
        if (chart.lines) {
            chart.lines.dispatch.on('elementMouseover.tooltip.directive', function (e) {
                me.fireEvent('elementMouseover', e);
            });

            chart.lines.dispatch.on('elementMouseout.tooltip.directive', function (e) {
                me.fireEvent('elementMouseout', e);
            });

            chart.lines.dispatch.on('elementClick.directive', function (e) {
                me.fireEvent('elementClick', e);
            });
	}
        
        if (chart.bars) {
            chart.bars.dispatch.on('elementMouseover.tooltip.directive', function (e) {
                me.fireEvent('elementMouseover', e);
            });

            chart.bars.dispatch.on('elementMouseout.tooltip.directive', function (e) {
                me.fireEvent('elementMouseout', e);
            });

            chart.bars.dispatch.on('elementClick.directive', function (e) {
                me.fireEvent('elementClick', e);
            });
	}

	if (chart.stacked && chart.stacked.dispatch) {
            chart.stacked.dispatch.on('areaClick.toggle.directive', function (e) {
                me.fireEvent('areaClick', e);
            });

            chart.stacked.dispatch.on('tooltipShow.directive', function (e) {
                me.fireEvent('tooltipShow', e);
            });

            chart.stacked.dispatch.on('tooltipHide.directive', function (e) {
                me.fireEvent('tooltipHide', e);
            });
	}

	if (chart.interactiveLayer) {
            if (chart.interactiveLayer.elementMouseout) {
                chart.interactiveLayer.dispatch.on('elementMouseout.directive', function (e) {
                    me.fireEvent('elementMouseout', e);
                });
            }

            if (chart.interactiveLayer.elementMousemove) {
                chart.interactiveLayer.dispatch.on('elementMousemove.directive', function (e) {
                    me.fireEvent('elementMousemove', e);
                });
            }
	}

	if (chart.discretebar) {
            chart.discretebar.dispatch.on('elementMouseover.tooltip.directive', function (e) {
                me.fireEvent('elementMouseover', e);
            });

            chart.discretebar.dispatch.on('elementMouseout.tooltip.directive', function (e) {
                me.fireEvent('elementMouseout', e);
            });

            chart.discretebar.dispatch.on('elementClick.directive', function (e) {
                me.fireEvent('elementClick', e);
            });
	}
        
        if (chart.discretebar) {
            chart.discretebar.dispatch.on('elementMouseover.tooltip.directive', function (e) {
                me.fireEvent('elementMouseover', e);
            });

            chart.discretebar.dispatch.on('elementMouseout.tooltip.directive', function (e) {
                me.fireEvent('elementMouseout', e);
            });

            chart.discretebar.dispatch.on('elementClick.directive', function (e) {
                me.fireEvent('elementClick', e);
            });
	}

	if (chart.pie) {
            chart.pie.dispatch.on('elementMouseover.tooltip.directive', function (e) {
                me.fireEvent('elementMouseover', e);
            });

            chart.pie.dispatch.on('elementMouseout.tooltip.directive', function (e) {
                me.fireEvent('elementMouseout', e);
            });

            chart.pie.dispatch.on('elementClick.directive', function(e) {
                me.fireEvent('elementClick', e);
            });
	}

	if (chart.scatter) {
            chart.scatter.dispatch.on('elementMouseover.tooltip.directive', function (e) {
                me.fireEvent('elementMouseover', e);
            });

            chart.scatter.dispatch.on('elementMouseout.tooltip.directive', function (e) {
                me.fireEvent('elementMouseout', e);
            });
	}

	if (chart.bullet) {
            chart.bullet.dispatch.on('elementMouseover.tooltip.directive', function (e) {
                me.fireEvent('elementMouseover', e);
            });

            chart.bullet.dispatch.on('elementMouseout.tooltip.directive', function (e) {
                me.fireEvent('elementMouseout', e);
            });
	}

	if (chart.legend) {
            chart.legend.dispatch.on('stateChange.legend.directive', function (e) {
                me.fireEvent('stateChange', e);
            });
            chart.legend.dispatch.on('legendClick.directive', function (d, i) {
                me.fireEvent('legendClick', d, i);
            });
            chart.legend.dispatch.on('legendDblclick.directive', function (d, i) {
                me.fireEvent('legendDblclick', d, i);
            });
            chart.legend.dispatch.on('legendMouseover.directive', function (d, i) {
                me.fireEvent('legendMouseover', d, i);
            });
	}

	if (chart.controls) {
            if (chart.controls.legendClick) {
                chart.controls.dispatch.on('legendClick.directive', function (d, i) {
                    me.fireEvent('legendClick', d, i);
                });
            }
	}
    }
});