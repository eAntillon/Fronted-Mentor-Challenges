import { LatLngExpression } from 'leaflet';
import React from 'react';
import { useMap } from 'react-leaflet';
interface props {
    center: LatLngExpression
}
const ChangeView = ({ center }:props) => {
    const map = useMap();
    map.setView(center, 20);
    return null;
  }

export default ChangeView;
