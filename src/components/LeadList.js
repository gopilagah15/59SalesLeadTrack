import React from 'react';

const LeadList = ({ leads }) => {
  return (
    <div>
      <h2>Sales Leads</h2>
      <ul>
        {leads.map((lead, index) => (
          <li key={index}>
            <strong>{lead.name}</strong> - Status: {lead.status}, Revenue: ${lead.revenue.toFixed(2)}, Follow-up: {lead.followUpDate || 'N/A'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeadList;
