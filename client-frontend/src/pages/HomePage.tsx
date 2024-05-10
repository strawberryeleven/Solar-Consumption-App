import React from 'react';
import CustomNavbar from '../components/navbar';  // Make sure the path is correct
import InfoCard from '../components/Homepage/InfoCard';
import MeterGauge from '../components/Homepage/MeterGauge';
import ConsumptionProductionChart from '../components/Homepage/ConsumptionProductionChart';
import profilePicture from '../icons-pictures/profile.jpeg';  // Ensure this is the correct path
import { Container, Row, Col } from 'react-bootstrap';

const HomePage = () => {
  const userData = {
    consumption: 1200,
    production: 1500,
    totalUnits: 1500,
    netUsage: 300,
    savings: 200,
    excessElectricity: 75,
  };

  const data = [
    {name: 'January', Consumption: 400, Production: 240},
    {name: 'February', Consumption: 300, Production: 139},
    {name: 'March', Consumption: 200, Production: 980},
  ];

  const percentConsumed = (userData.consumption / userData.totalUnits) * 100; // Calculate percentage consumed
  const NoOfDays = 5; // Example value, replace with actual number of days left

  return (
    <>
      <CustomNavbar logo="path_to_logo.png" user={{ name: 'John Doe', profilePicture: profilePicture }} />
      <Container fluid>
        <Row className="my-3">
          <Col md={4} className="d-flex flex-column align-items-center gap-3">
            <Row><InfoCard title="Total Electricity Consumption" value={userData.consumption} unit="kWh" /></Row>
            <Row><InfoCard title="Net Electricity Usage" value={userData.netUsage} unit="kWh" /></Row>
          </Col>

          <Col md={4} className="d-flex justify-content-center align-items-center flex-column">
            <div className="d-flex flex-column align-items-center">
              <MeterGauge value={percentConsumed} />
              <div style={{ marginTop: '10px', marginBottom: '5px' }}>
                {`${userData.consumption} of ${userData.totalUnits} excess units consumed`}
              </div>
              <div style={{ marginBottom: '10px' }}>
                <strong>{`${NoOfDays}`} days left</strong> until next month count reset
              </div>
            </div>
          </Col>

          <Col md={4} className="d-flex flex-column align-items-center gap-3">
            <Row><InfoCard title="Total Electricity Production" value={userData.production} unit="kWh" /></Row>
            <Row><InfoCard title="Total Electricity Production" value={userData.production} unit="kWh" /></Row>
          </Col>
        </Row>

        <Row className="my-4">
          <Col md={12} className="px-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <ConsumptionProductionChart data={data} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
