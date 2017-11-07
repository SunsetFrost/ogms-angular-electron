import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

// This is necessary to access ol3!
declare var ol: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit {
  // This is necessary to access the html element to set the map target (after view init)!
  @ViewChild('mapElement') mapElement: ElementRef;

  public map: any;

  constructor() {
    const osm_layer: any = new ol.layer.Tile({
      source: new ol.source.OSM()
    });

    const route_layer: any = new ol.layer.Vector({
      title: 'route layer',
      source: new ol.source.Vector({
        url: 'assets/route.geojson',
        format: new ol.format.GeoJSON()
      })
    });

    const node_layer: any = new ol.layer.Vector({
      title: 'node layer',
      source: new ol.source.Vector({
        url: 'assets/node.geojson',
        format: new ol.format.GeoJSON()
      })
    });

    const stop_layer: any = new ol.layer.Vector({
      title: 'stop layer',
      source: new ol.source.Vector({
        url: 'assets/stop.geojson',
        format: new ol.format.GeoJSON()
      })
    });

    // note that the target cannot be set here!
    this.map = new ol.Map({
      layers: [
        route_layer,
        stop_layer
      ],
      view: new ol.View({
        center: ol.proj.transform([118.80, 32.03], 'EPSG:4326', 'EPSG:3857'),
        zoom: 12
      })
    });
  }

  // After view init the map target can be set!
  ngAfterViewInit() {
    this.map.setTarget(this.mapElement.nativeElement.id);
  }

}
