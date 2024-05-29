import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MapComponent } from './map/map.component';
import { OlMapComponent } from './ol-map/ol-map.component';
import { LeaflatMapComponent } from './leaflat-map/leaflat-map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MapComponent, OlMapComponent, LeaflatMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'world-clicker';
}
