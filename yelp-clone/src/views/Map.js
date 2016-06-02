import React, { PropTypes as T } from 'react'
import Map, { Marker } from 'google-maps-react'

export class MapComponent extends React.Component {
  _renderMarkers () {
    if (!this.props.places) {
      return
    }
    return this.props.places.map(p => {
      return <Marker
                key={p.id}
                name={p.id}
                place={p}
                label={p.name}
                onClick={this.props.onMarkerClick.bind(this)}
                map={this.props.map}
                position={p.geometry.location} />
    })
  }

  _renderChildren () {
    const {children} = this.props

    if (React.Children.count(children) > 0) {
      return React.Children.map(children, c => {
        return React.cloneElement(c, this.props, {
          map: this.props.map,
          google: this.props.google
        })
      })
    } else {
      return this._renderMarkers()
    }
  }

  render () {
    const {children} = this.props

    return (
      <Map map={this.props.map}
        google={this.props.google}
        className={'map'}
        zoom={this.props.zoom}
        onRecenter={this.props.onMove}
        onDragend={this.props.onMove}
        onClick={this.props.onClick}
        visible={!children || React.Children.count(children) === 0}
        >
        {this._renderChildren()}
      </Map>
    )
  }
}

MapComponent.propTypes = {
  onMarkerClick: T.func,
  places: T.any,
  zoom: T.any,
  onMove: T.any,
  onClick: T.any,
  google: T.any,
  map: T.any,
  children: T.any
}
const identity = (...a) => a
MapComponent.defaultProps = {
  onMarkerClick: identity
}

export default MapComponent
