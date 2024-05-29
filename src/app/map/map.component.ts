import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Map, MapStyle, config } from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import { GoogleMapsModule } from '@angular/google-maps'

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {

  map: Map | undefined;
  @ViewChild('map')
private mapContainer!: ElementRef<HTMLElement>;
// lat long
public currentAddress: any[] = []
  ngOnInit(): void {
    
    

    config.apiKey = 'xm3lRZExJOMTGpLRGIAd';
    
  
    navigator.geolocation.getCurrentPosition((e)=> {
      console.log(e);
      this.currentAddress[0] = e.coords.latitude
      this.currentAddress[1] = e.coords.longitude
      console.log(this.currentAddress);
      // setInterval(() => {
      //   this.moveMap();
      // }, 500)
    })

    this.currentAddress = [
      0,
      0
    ]

  }


  ngAfterViewInit(): void {
    setTimeout(() => {
      const initialState = { lng: this.currentAddress[1], lat:this.currentAddress[0], zoom: 18 };

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: MapStyle.HYBRID,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
      interactive: false,
      // fullscreenControl: false,
      // geolocateControl: false
      terrain: true,
      // terrainExaggeration: 2
      navigationControl: false,
      maptilerLogo: false,
      geolocateControl:false,
      pitch:85,
      
      // dragRotate: true

      
    });
    }, 500);
  }
  ngOnDestroy(): void {
    this.map?.remove();
  }
public easing(t) {
  return t * (2 - t);
}
  public moveMap(a,b) {
    console.log("moin");
    setInterval(() => {
      
    }, 500)
    this.map?.panBy([a,b], {
      easing: this.easing
    });
   
  }
}
