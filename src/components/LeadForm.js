import React, { useState } from 'react';

const LeadForm = ({ onAddLead }) => {
  const [lead, setLead] = useState({ name: '', status: 'New', revenue: '', followUpDate: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLead((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!lead.name || !lead.revenue) return;
    onAddLead({ ...lead, revenue: parseFloat(lead.revenue) });
    setLead({ name: '', status: 'New', revenue: '', followUpDate: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Lead Name"
        value={lead.name}
        onChange={handleChange}
        required
      />
      <select name="status" value={lead.status} onChange={handleChange}>
        <option value="New">New</option>
        <option value="Contacted">Contacted</option>
        <option value="Qualified">Qualified</option>
        <option value="Closed">Closed</option>
      </select>
      <input
        type="number"
        name="revenue"
        placeholder="Potential Revenue"
        value={lead.revenue}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="followUpDate"
        placeholder="Follow-up Date"
        value={lead.followUpDate}
        onChange={handleChange}
      />
      <button type="submit">Add Lead</button>
    </form>
  );
};

export default LeadForm;
