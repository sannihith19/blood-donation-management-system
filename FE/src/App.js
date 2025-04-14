import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddDonor from './components/AddDonor';
import Donors from './pages/Donors';
import Home from './pages/Home';
import AppBarComponent from './components/Appbar';
import React from 'react';
import BloodBankDetails from './pages/BloodBankDetails';
import Events from './pages/Events';
import Recipients from './pages/Recipients';
import BloodRequests from './pages/BloodRequests';


function App() {
  return (
    <React.Fragment>
      <Router>
    <AppBarComponent />
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/donors' element={<Donors />} />
          <Route path='/bloodBankDetails' element={<BloodBankDetails />} />
          <Route path='/events' element={<Events />} />
          <Route path='/bloodRequests' element={<BloodRequests/>} />
          <Route path='/recipients' element={<Recipients/>} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
