import React, { useState } from 'react';
import InputData from './Inputdata';
import Header from './Header';

function App() {
  const [invoiceData, setInvoiceData] = useState(null)

  const handleFormSubmit = (data) => {
    setInvoiceData(data)
  }

  return (
    <div >
      
      <InputData onSubmit={handleFormSubmit} />
      {invoiceData && <Header data={invoiceData} />}
    </div>
  );
}

export default App;
