OpenCharts-For-Sencha-Touch-and-ExtJS
=====================================

## OpenCharts Description

OpenCharts brings over 10 NVD3 charts to the Sencha Touch and ExtJS frameworks and is backwards compatible with both. NVD3 is a charting library that utilizes D3.js. Note that OpenCharts contains the minified version of D3 and NVD3, however, the source for those files should be updated independantly of this repository.

http://d3js.org/

http://nvd3.org/

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

**Step 4)** Add a requires to OpenCharts in your app.js file (or the direct view the uses it)

requires: [
    'OpenCharts.OpenCharts'
]

**Step 5)** If you want to compile with Sencha CMD, make sure to update the app.classpath in your sencha.cfg file and add **${app.dir}/OpenCharts**

sencha.cfg is located in ".sencha/app/sencha.cfg"

Example: app.classpath=${app.dir}/app.js,${app.dir}/app,${app.dir}/OpenCharts