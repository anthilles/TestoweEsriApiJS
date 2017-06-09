require([
    "esri/arcgis/utils",
    "esri/dijit/LayerList",
    "dijit/layout/BorderContainer",
    "dijit/layout/ContentPane",
    "dojo/domReady!"
], function(
    arcgisUtils,
    LayerList
) {

    arcgisUtils.createMap("8cec676b5c7346e795abad2786385c79", "map").then(function(response){
        var testLayers = new LayerList({
           map: response.map,
           layers: arcgisUtils.getLayerList(response)
        },"layerList");
        testLayers.startup();
    });
    
    

});



