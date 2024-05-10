import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './ReadingsDataCard.css'; // Import the custom CSS file

interface ReadingsDataProps {
  peakImport: number;
  peakExport: number;
  nonPeakImport: number;
  nonPeakExport: number;
  totalSolarGeneration: number;
  onEdit: () => void;
  onDelete: () => void;
}

const ReadingsDataCard: React.FC<ReadingsDataProps> = ({
  peakImport, peakExport, nonPeakImport, nonPeakExport, totalSolarGeneration, onEdit, onDelete
}) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Row className="text-large">
          <Col className="text-center">{peakImport}</Col>
          <Col className="text-center">{peakExport}</Col>
          <Col className="text-center">{nonPeakImport}</Col>
          <Col className="text-center">{nonPeakExport}</Col>
          <Col className="text-center">{totalSolarGeneration}</Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center mt-3">
            <button className="btn btn-outline-secondary mx-1" onClick={onEdit}>Edit</button>
            <button className="btn btn-outline-danger mx-1" onClick={onDelete}>Delete</button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ReadingsDataCard;
