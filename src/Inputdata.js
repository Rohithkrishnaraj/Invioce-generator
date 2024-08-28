import React, { useState } from 'react';

const Inputdata = ({ onSubmit }) => {

    const [formData, setFormData] = useState({
        addr: '',
        gst: '',
        date: '',
        refno: '',
        sub: '',
        items: [
            {
                sno: '',
                name: '',
                hsn: '',
                qty: '',
                unit: '',
                unitCost: '',
                taxable: '',
                cgstp: '',
                cgst: '',
                sgstp: '',
                sgst: ''
            }
        ]
    })

    const handleChange =(e, index, field) => {
        const newItems = [...formData.items];
        newItems[index] [field] = e.target.value;
        setFormData ({ ...formData, items: newItems })
    };

    const addItem = () => {
        setFormData({
              ...formData,
             items: [
                ...formData.items,
                 {
                    sno: '',
                    name: '',
                    hsn: '',
                    qty: '',
                    unit: '',
                    unitCost: '',
                    taxable: '',
                    cgstp: '',
                    cgst: '',
                    sgstp: '',
                    sgst: ''
               }
            ]   
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className='space-y-5 m-3'>

            <h1 className='font-bold text-center text-3xl'>Quotation Data</h1>

            <div className='grid grid-cols-2 gap-5 bg-slate-300 p-4 rounded-lg '>

                <div className='flex flex-col'>
                    <label htmlFor="add">Address</label>
                    <textarea placeholder="Address" value={formData.addr} onChange={(e) => setFormData({ ...formData, addr: e.target.value })} className='border-2 border-black rounded-md'></textarea>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="date">Date</label>
                    <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className='border-2 border-black rounded-md' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="ref">Reference No</label>
                    <input type="text" placeholder="Reference No" value={formData.refno} onChange={(e) => setFormData({ ...formData, refno: e.target.value })} className='border-2 border-black rounded-md' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="gst">GST Number</label>
                    <input type='text' placeholder="GST No" value={formData.gst} onChange={(e) => setFormData({ ...formData, gst: e.target.value })} className='border-2 border-black rounded-md' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="sub">Subject</label>
                    <input type="text" placeholder="Subject" value={formData.sub} onChange={(e) => setFormData({ ...formData, sub: e.target.value })} className='border-2 border-black rounded-md' />
                </div>

            </div>
            <div>
                <table className='  border-2 border-black  '>
                    <thead className=' border-collapse'>
                        <tr className=''>
                            <th className='border-2 border-t-0 border-black '>SL.NO</th>
                            <th className='border-2 border-t-0 border-black'>Item Name / Description</th>
                            <th className='border-2 border-t-0 border-black'>HSN code</th>
                            <th className='border-2 border-t-0 border-black'>Qty</th>
                            <th className='border-2 border-t-0 border-black'>unit</th>
                            <th className='border-2 border-t-0 border-black'>unit Cost</th>
                            <th className='border-2 border-t-0 border-black'>Taxable value</th>
                            <th className='border-2 border-t-0 border-black w-32'>CGST/IGST
                                <th className='border-t-2 border-r-2 border-black   w-1/2'>%</th>
                                <th className='border-t-2  border-black min-w-full w-1/2'>Tax Amt</th>
                            </th>
                            <th className='border-2 border-t-0 border-black  '>SGST/UGST
                                <th className='border-t-2 border-r-2 border-black w-1/2 '>%</th>
                                <th className='border-t-2  border-black min-w-full w-1/2'>Tax Amt</th>
                            </th>
                        </tr>
                    </thead>

                    <tbody className='border-2 border-black '>

                        {formData.items.map((item, index) => (
                            <tr>
                                <td className='border-2 border-black p-3 '>  <input type="text" className='bg-gray-300 rounded-lg w-20' placeholder="S.No" value={item.sno} onChange={(e) => handleChange(e, index, 'sno')} /> </td>
                                <td className='border-2 border-black p-3'><input type="text" className='bg-gray-300 rounded-lg' placeholder='Items' value={item.name} onChange={(e) => handleChange(e, index, 'name')} /> </td>
                                <td className='border-2 border-black p-3'><input type="text" className='bg-gray-300 rounded-lg' placeholder="HSN Code" value={item.hsn} onChange={(e) => handleChange(e, index, 'hsn')} /> </td>
                                <td className='border-2 border-black p-3'><input type="text" className='bg-gray-300 rounded-lg' placeholder="Qty" value={item.qty} onChange={(e) => handleChange(e, index, 'qty')} /> </td>
                                <td className='border-2 border-black p-3'><input type="text" className='bg-gray-300 rounded-lg' placeholder="Unit" value={item.unit} onChange={(e) => handleChange(e, index, 'unit')} /> </td>
                                <td className='border-2 border-black p-3'><input type="text" className='bg-gray-300 rounded-lg' placeholder="Unit Cost" value={item.unitCost} onChange={(e) => handleChange(e, index, 'unitCost')} /> </td>
                                <td className='border-2 border-black p-3'><input type="text" className='bg-gray-300 rounded-lg' placeholder="Taxable Value" value={item.taxable} onChange={(e) => handleChange(e, index, 'taxable')} /> </td>

                                <td className='border-2 border-t-0 border-black space-x-2  p-3  '>
                                    <td>  <input type="text" className='bg-gray-300 rounded-lg w-8' placeholder="CGST %" value={item.cgstp} onChange={(e) => handleChange(e, index, 'cgstp')} /> </td>
                                    <td>  <input type="text" className='bg-gray-300 rounded-lg w-8' placeholder="CGST Amt" value={item.cgst} onChange={(e) => handleChange(e, index, 'cgst')} /> </td>
                                </td>

                                <td className='border-2 border-black space-x-2  p-3 '>
                                    <td>  <input type="text" className='bg-gray-300 rounded-lg w-8' placeholder="SGST %" value={item.sgstp} onChange={(e) => handleChange(e, index, 'sgstp')} />  </td>
                                    <td>  <input type="text" className='bg-gray-300 rounded-lg w-8' placeholder="SGST Amt" value={item.sgst} onChange={(e) => handleChange(e, index, 'sgst')} />  </td>
                                </td>

                            </tr>

                        ))}

                    </tbody>


                </table>

                <div className='flex justify-center space-x-5 p-4'>
                    <div>
                        <button onClick={addItem} type='button' className='border-2 border-black bg-yellow-200 rounded-sm px-2'>Add item</button>
                    </div>

                    <button onClick={handleSubmit} type='button' className='border-2 border-black bg-green-500 rounded-sm px-2' > Generate </button>
                </div>



            </div>



        </div>

    )
};

export default Inputdata;