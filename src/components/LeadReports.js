import React from 'react';

const LeadReports = ({ leads }) => {
  const totalLeads = leads.length;
  const closedLeads = leads.filter((lead) => lead.status === 'Closed').length;
  const conversionRate = totalLeads === 0 ? 0 : ((closedLeads / totalLeads) * 100).toFixed(2);
  const totalRevenue = leads.reduce((acc, lead) => acc + (lead.status === 'Closed' ? lead.revenue : 0), 0);

  return (
    <div>
      <h2>Lead Reports</h2>
      <p>Total Leads: {totalLeads}</p>
      <p>Closed Leads: {closedLeads}</p>
      <p>Conversion Rate: {conversionRate}%</p>
      <p>Total Revenue from Closed Leads: ${totalRevenue.toFixed(2)}</p>
    </div>
  );
};

export default LeadReports;
