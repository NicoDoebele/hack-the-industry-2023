import React from 'react';
import './../styles/chartComponent.css';

function ChartBigComponent(props) {
  const { component: Component, props: componentProps } = props;

  return (
    <div className="chartComponent">
      <h3>{props.title}</h3>
      <Component {...componentProps} />
    </div>
  );
}

export default ChartBigComponent;
