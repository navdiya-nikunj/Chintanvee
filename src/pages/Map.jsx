import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAlbers"
      projectionConfig={{
        scale: 800,
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#DDD"
              stroke="#FFF"
            />
          ))
        }
      </Geographies>
      <Marker coordinates={[-101, 53]} fill="#777">
        <text textAnchor="middle" fill="#F53">
          Canada
        </text>
      </Marker>
      <Marker coordinates={[-102, 38]} fill="#777">
        <text textAnchor="middle" fill="#F53">
          USA
        </text>
      </Marker>
      <Marker coordinates={[-103, 25]} fill="#777">
        <text textAnchor="middle" fill="#F53">
          Mexico
        </text>
      </Marker>
    </ComposableMap>
  );
};

export default Map;
