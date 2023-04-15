import React from 'react';
import './../styles/chartComponent.css';
import SecondsToCompleteComponent from './SecondsToCompleteComponent';

function ChartComponent(props) {
  const { component: Component, props: componentProps } = props;

  return (
    <div className="chartComponent2">
      <h3>{props.title}</h3>
      <Component {...componentProps} />
    </div>
  );
}

export default ChartComponent;
