import { Component, OnInit } from '@angular/core';
import { View } from 'ol';
import TileLayer from 'ol/layer/Tile.js';
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import { add, rotate} from 'ol/coordinate';



@Component({
  selector: 'app-ol-map',
  standalone: true,
  imports: [],
  templateUrl: './ol-map.component.html',
  styleUrl: './ol-map.component.scss'
})
export class OlMapComponent implements OnInit{
  public map: Map | undefined;
 

  ngOnInit(): void {
  
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'map',
      view: new View({
        center: [16, 48],
        zoom: 4,
        rotation: 0,

      }),
    
      
       
    });
    setInterval(() => {
      this.moveMap(5,0);
    },500)
    const view = this.map.getView();
    console.log(view);
    
    view.setCenter([16,48])

  }
  
  //  = function () {
  //   const view = map.getView();
  //   const zoom = view.getZoom();
  //   view.setZoom(zoom - 1);
  // };
  
  // = function () {
  //   const view = map.getView();
  //   const zoom = view.getZoom();
  //   view.setZoom(zoom + 1);
  // };
  public moveMap(a,b) {
    console.log("moin",a,b);
   
    // this.map?.panBy([a,b], {
    //   // easing: this.easing
    // });
    
   
  }
}
