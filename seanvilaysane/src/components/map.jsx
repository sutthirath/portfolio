import React from 'react'
import mapboxgl from 'mapbox-gl'
import '../../public/static/css/map.css'

export class Map extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken = process.env.MAPBOX_TOKEN
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v9',
      center: [-122.3354524, 47.607817],
      zoom: 8,
    })

    // Add geolocate control to the map.
    this.map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        fitBoundsOptions: {
          maxZoom: 9,
        },
        trackUserLocation: true,
      }),
      'top-left'
    )

    // Add zoom and rotation controls to the map.
    this.map.addControl(new mapboxgl.NavigationControl())

    // Draws the polygon layer
    this.map.on('load', this.handleLayer)
  }

  // My polygon layer area
  handleLayer = () => {
    this.map.addLayer({
      id: 'seattle',
      type: 'fill',
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [-122.3998, 47.50329],
                [-122.42804, 47.57688],
                [-122.38635, 47.59896],
                [-122.35015, 47.59882],
                [-122.41839, 47.64017],
                [-122.43857, 47.66299],
                [-122.38597, 47.72462],
                [-122.40752, 47.7954],
                [-122.35178, 47.85666],
                [-122.30702, 47.95096],
                [-122.24515, 47.96887],
                [-122.23276, 48.01458],
                [-122.2135, 48.02168],
                [-122.18042, 48.01611],
                [-122.14008, 47.89298],
                [-122.1272, 47.76587],
                [-122.07892, 47.65957],
                [-122.08557, 47.62344],
                [-122.10527, 47.58126],
                [-122.13435, 47.52493],
                [-122.1799, 47.47597],
                [-122.26556, 47.46373],
                [-122.36564, 47.47238],
              ],
            ],
          },
        },
      },
      layout: {},
      paint: {
        'fill-color': '#39ff14',
        'fill-opacity': 0.3,
      },
    })
  }

  componentWillUnmount() {
    this.map.remove()
  }

  render() {
    return <div className="Map" ref={el => (this.mapContainer = el)} />
  }
}
