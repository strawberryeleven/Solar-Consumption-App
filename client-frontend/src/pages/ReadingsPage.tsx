import React, { useState } from 'react';
import { Container, Card, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import CustomNavbar from '../components/navbar';
import ReadingsDataCard from '../components/ReadingsPage/ReadingsDataCard';
import profilePicture from '../icons-pictures/profile.jpeg';  // Make sure the path is correct

interface ReadingData {
  peakImport: number;
  peakExport: number;
  nonPeakImport: number;
  nonPeakExport: number;
  totalSolarGeneration: number;
}

const ReadingsPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<ReadingData & { date: string }>({
    date: new Date().toISOString().split('T')[0], // Default today's date in YYYY-MM-DD format
    peakImport: 0,
    peakExport: 0,
    nonPeakImport: 0,
    nonPeakExport: 0,
    totalSolarGeneration: 0
  });

  const sampleDataSets: ReadingData[] = [
    { peakImport: 100, peakExport: 50, nonPeakImport: 80, nonPeakExport: 40, totalSolarGeneration: 200 },
    { peakImport: 120, peakExport: 60, nonPeakImport: 90, nonPeakExport: 50, totalSolarGeneration: 230 },
    { peakImport: 140, peakExport: 70, nonPeakImport: 100, nonPeakExport: 60, totalSolarGeneration: 250 }
  ];

  const handleEdit = () => {
    console.log('Edit action');
  };

  const handleDelete = () => {
    console.log('Delete action');
  };

  const handleAdd = () => {
    setShowModal(true);
  };

  const handleSave = () => {
    console.log('Save Data', formData);
    setShowModal(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <>
      <CustomNavbar logo="path_to_logo.png" user={{ name: 'John Doe', profilePicture: profilePicture }} />
      <Container className="mt-4">
        <Row className="justify-content-between align-items-center mb-4">
          <Col>
            <h1>Readings</h1>
          </Col>
          <Col xs="auto">
            <Button variant="primary" onClick={handleAdd}>Add</Button>
          </Col>
        </Row>
        <Card className="mb-3">
          <Card.Body>
            <Row>
              <Col><h5 className="text-center">Peak Import</h5></Col>
              <Col><h5 className="text-center">Peak Export</h5></Col>
              <Col><h5 className="text-center">Non-Peak Import</h5></Col>
              <Col><h5 className="text-center">Non-Peak Export</h5></Col>
              <Col><h5 className="text-center">Total Solar Generation</h5></Col>
            </Row>
          </Card.Body>
        </Card>
        {sampleDataSets.map((data, index) => (
          <ReadingsDataCard
            key={index}
            peakImport={data.peakImport}
            peakExport={data.peakExport}
            nonPeakImport={data.nonPeakImport}
            nonPeakExport={data.nonPeakExport}
            totalSolarGeneration={data.totalSolarGeneration}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}

        <Modal show={showModal} onHide={handleSave} centered>
          <Modal.Header closeButton>
            <Modal.Title>Add New Reading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formPeakImport">
                <Form.Label>Peak Import</Form.Label>
                <Form.Control
                  type="number"
                  name="peakImport"
                  value={formData.peakImport}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formPeakExport">
                <Form.Label>Peak Export</Form.Label>
                <Form.Control
                  type="number"
                  name="peakExport"
                  value={formData.peakExport}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formNonPeakImport">
                <Form.Label>Non-Peak Import</Form.Label>
                <Form.Control
                  type="number"
                  name="nonPeakImport"
                  value={formData.nonPeakImport}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formNonPeakExport">
                <Form.Label>Non-Peak Export</Form.Label>
                <Form.Control
                  type="number"
                  name="nonPeakExport"
                  value={formData.nonPeakExport}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formTotalSolarGeneration">
                <Form.Label>Total Solar Generation</Form.Label>
                <Form.Control
                  type="number"
                  name="totalSolarGeneration"
                  value={formData.totalSolarGeneration}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleSave} className="mx-auto">
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default ReadingsPage;
