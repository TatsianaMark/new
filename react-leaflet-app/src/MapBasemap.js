import React from "react";
import  {Icon} from 'leaflet';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import Basemap from './Basemaps';
import './Map.css';


const black = new Icon({
  iconUrl:'/pin-black.png',
  iconSize: [25,25]
});
// указываем путь к файлам marker
// L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

class MapComponent extends React.Component {
    
  state = {
    lat: 55.702868,
    lng: 37.530865,
    zoom: 10,
    basemap: 'osm'
  };

  onBMChange = (bm) => {
    // console.log(this);
    this.setState({
      basemap: bm
    });
  }

  render() {
    let center = [this.state.lat, this.state.lng];

    const basemapsDict = {
      osm: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      hot: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
      dark:"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
      cycle: "https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
    }

    return (
      <Map zoom={this.state.zoom} center={center}>
        <TileLayer
          // attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={basemapsDict[this.state.basemap]}
        />
        <Basemap basemap={this.state.basemap} onChange={this.onBMChange}/>
        <Marker position={center}>
          <Popup>Выбрана тема {this.state.basemap}</Popup>
          icon={black}
        </Marker>
      </Map>
    );
  }
};

export default MapComponent;