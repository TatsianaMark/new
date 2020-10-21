import React from 'react';

class Basemap extends React.Component {
  onChange = (e) => {
    let bm = e.currentTarget.value;

    if (this.props.onChange) {
      this.props.onChange(bm);
    }
  }

  render() {
    return (
      <div className="basemaps-container">
        <select value={this.props.basemap} onChange={this.onChange}>
          <option value="osm">OSM</option>
          <option value="hot">OSM HOT</option>
          <option value="dark">DARK</option>
          <option value="cycle">CYCLE MAP</option>
        </select>
      </div>
    );
  }
};

export default Basemap;