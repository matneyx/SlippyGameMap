﻿var map = new ol.Map({
    target: "map",
    layers: [
        new ol.layer.Tile({
            source: new ol.source.MapQuest({ layer: "sat" })
        })
    ],
    view: new ol.View({
        center: [0, 0],
        zoom: 1
    })
});