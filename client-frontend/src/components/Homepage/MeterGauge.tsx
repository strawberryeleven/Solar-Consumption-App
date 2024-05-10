import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface MeterGaugeProps {
  value: number;
}

const MeterGauge: React.FC<MeterGaugeProps> = ({ value }) => {
  return (
    <div style={{ width: '200px', height: '200px', margin: '0 auto' }}>
      <CircularProgressbar value={value} text={`${value}%`} />
    </div>
  );
};

export default MeterGauge;
