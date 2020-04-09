import React from 'react';
// import {Icon} from 'antd';
import {EnvironmentTwoTone } from '@ant-design/icons';

const MapMarker = (({ name, key }) => {
  return (
    <div key={key}>
      <span className="brand-red">{name}</span>
      <EnvironmentTwoTone />
    </div>
  );
});

export default MapMarker;