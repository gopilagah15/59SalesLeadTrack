import React, { useState, useEffect } from 'react';
import LeadForm from './components/LeadForm';
import LeadList from './components/LeadList';
import LeadReports from './components/LeadReports';

const App = () => {
  const [leads, setLeads] = useState([]);

  // Load leads from LocalStorage
  useEffect(() => {
    const savedLeads = JSON.parse(localStorage.getItem('leads')) || [];
    setLeads(savedLeads);
  }, []);

  // Save leads to LocalStorage whenever they change
  useEffect(() => {
    localStorage.setItem('leads', JSON.stringify(leads));
  }, [leads]);

  const addLead = (lead) => {
    setLeads([...leads, lead]);
  };

  return (
    <div>
      <h1>Sales Lead Tracker</h1>
      <LeadForm onAddLead={addLead} />
      <LeadList leads={leads} />
      <LeadReports leads={leads} />
    </div>
  );
};

export default App;
