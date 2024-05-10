import React, { useEffect } from 'react';
import logo from '../icons-pictures/logo.png';
import profilePicture from '../icons-pictures/profile.jpeg';
import CustomNavbar from '../components/navbar';
import ApexCharts from 'apexcharts';

const SettingsConfigPage = () => {
  const user = {
    name: 'John Doe',
    profilePicture: profilePicture
  };

  const handleSaveChanges = () => {
    console.log('Changes saved');
  };

  const handleCancel = () => {
    console.log('Changes canceled');
  };

  // Dummy data for the radial bar chart
  const chartData = [44, 55, 67, 83];

  useEffect(() => {
    // Create a new radial bar chart
    const chartOptions = {
      chart: {
        type: 'radialBar'
      },
      series: chartData,
      labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4']
    };

    const chart = new ApexCharts(document.getElementById('chart'), chartOptions);
    chart.render();

    // Cleanup function
    return () => {
      chart.destroy();
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <CustomNavbar logo={logo} user={user} />

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Settings</h5>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="inverterCapacity" className="form-label">Inverter Capacity</label>
                    <input type="text" className="form-control" id="inverterCapacity" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inverterCapacity" className="form-label">Inverter Capacity</label>
                    <input type="text" className="form-control" id="inverterCapacity" />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-12 text-center">
                    <button className="btn btn-primary me-2" onClick={handleSaveChanges}>Save Changes</button>
                    <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Radial Bar Chart</h5>
                <div id="chart"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsConfigPage;
