OpenCharts-For-Sencha-Touch-and-ExtJS
=====================================

## OpenCharts Description

OpenCharts brings over 10 NVD3 charts to the Sencha Touch and ExtJS frameworks and is backwards compatible with both. NVD3 is a charting library that utilizes D3.js. Note that OpenCharts contains the minified version of D3 and NVD3, however, the source for those files should be updated independantly of this repository.

- http://d3js.org/
- http://nvd3.org/

## Using The Example Applications

I did not include the Sencha Touch or ExtJS source files in the example applications folders. To use the example applications, first copy the OpenCharts source to the example's root directory.

For ExtJS, copy the **ext** folder to the root of the ExtJSExample application.

For Sencha Touch, copy the **touch** folder to the root of the SenchaTouchExample application.

You can easily get a copy of these folders via command line by creating a sample application with the respective framework. Make sure you are in either the ExtJS or Sencha Touch framework folder and run the following command via Sencha Command:

**sencha generate app TestApp \path\to\generate\app**

Once the generic application has been generated by Sencha CMD, get the respective folder you need and copy it to the example application root.

**Note: These example applications were generated with the following versions.**

- ExtJS 4.2.2
- Sencha Touch 2.3.1

## Installation

**Step 1)** Copy the OpenCharts folder to the root of your ExtJS or Sencha Touch application.

**Step 2)** Update your app.json file to include the D3 and NVD3 source and css references.

    "js": [
        {
            "path": "OpenCharts/lib/d3.min.js"
        },
        {
            "path": "OpenCharts/lib/nv.d3.min.js"
        }
    ],

    "css": [
        {
            "path": "resources/css/nv.d3.min.css",
            "update": "delta"
        }
    ]

**Step 3)** Download the latest NVD3 library and put nv.d3.min.css in your resources folder (refer to step 2). Note that you can also grab the css file from either example application.

**Step 4)** Add a requires to OpenCharts in your app.js file (or the direct view that uses it)

    requires: [
        'OpenCharts.OpenCharts'
    ]

**Step 5)** If you want to compile with Sencha CMD, make sure to update the app.classpath in your sencha.cfg file and add **${app.dir}/OpenCharts**

*sencha.cfg is located in ".sencha/app/sencha.cfg"*

**Example:** app.classpath=${app.dir}/app.js,${app.dir}/app,${app.dir}/OpenCharts

## Usage

#### Classes and xtypes

- OpenCharts.charts.BarChart (xtype: **oc-barchart**)
- OpenCharts.charts.LineChart (xtype: **oc-linechart**)
- OpenCharts.charts.ScatterChart (xtype: **oc-scatterchart**)
- OpenCharts.charts.StackedAreaChart (xtype: **oc-stackedareachart**)
- OpenCharts.charts.StackedBarChart (xtype: **oc-stackedbarchart**)
- OpenCharts.charts.HorizontalStackedBarChart (xtype: **oc-horizontalstackedbarchart**)
- OpenCharts.charts.LinePlusBarChart (xtype: **oc-lineplusbarchart**)
- OpenCharts.charts.CumulativeLineChart (xtype: **oc-cumulativelinechart**)
- OpenCharts.charts.LineWithFocusChart (xtype: **oc-linewithfocuschart**)
- OpenCharts.charts.PieChart (xtype: **oc-piechart**)
- OpenCharts.charts.BulletChart (xtype: **oc-bulletchart**)

#### Properties

**chartData**

An array of data for the chart (refer to the example applications or NVD3 documentation on how to handle data)

***

**chartOptions**

The chart options / properties to apply to the chart

Refer to the NVD3 documentation for specific chart options

**Example**

    chartOptions = {
         x: (function(d) { return d.label; }),
         y: (function(d) { return d.value; }),
         staggerLabels: true,
         tooltips: false,
         showValues: true
    }
    
***
    
**chartFn**

A function that can be configured to call additional methods on the chart when instantiated. Unfortunately, not all of the properties can be set in chartOptions and must be called as a function.

**Example**

    chartFn: function(chart) {
        chart.xAxis
            .axisLabel('Time (ms)')
            .tickFormat(d3.format(',r'));

        chart.yAxis
            .axisLabel('Voltage (v)')
            .tickFormat(d3.format('.02f'));
    }
    
#### Methods

**renderChartData**
Updates the chartData and refreshes the chart. Usually called after new chart data is grabbed via xhr.

Properties
- data {array}
The array of data to update the chart with