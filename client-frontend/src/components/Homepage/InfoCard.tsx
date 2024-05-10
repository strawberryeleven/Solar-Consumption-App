import React from 'react';
import { Card } from 'react-bootstrap';

interface SummaryCardProps {
  title: string;
  value: number;
  unit: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, unit }) => {
  return (
    <Card className="d-flex justify-content-center align-items-center" style={{ width: '370px', height: '140px' }}>
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
        <Card.Text className="text-center" style={{ fontSize: '1.2em' }}>{`${value} ${unit}`}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SummaryCard;
