import React from 'react'
import logo from './Logo dy.jpg';


const Header = ({data}) => {
if (!data.addr) return null 

const totalItems = data.items.length

const totalUnitCost = data.items.reduce((acc, item) => acc + parseFloat(item.unitCost || 0), 0)
    return (
        <div className=''>
            <h1 className='font-bold text-3xl text-center p-5'>Generated Quote</h1>
            <div className='min-w-full mx-2 mt-2 border-2 border-black space-y-5'>
                <div className='flex space-x-5'>
                    <div><img src={logo} alt="" /></div>
                    <div> <p><h2 className='text-yellow-500 font-bold text-xl uppercase'>Quantum Lasers</h2>
                        <div className='text-blue-900 font-semibold text-xl'> 
                          <p>Plot No:2-A Vellala Street,</p>  
                          <p>Ambattur Industrial Estate,</p>
                          <p>Athipet, Chennai-600058.</p>
                          <p>Ph:+91 98848 66333, E-mail:info@quantumlasers.in</p>
                        </div>
                    </p>
                    </div>
                </div>
                <div className='text-blue-700 italic font-semibold '>
                    <p>GST.NO:33AYXPP7084J1ZI</p>
                    
                </div>
            </div>


            <div className='min-w-full mx-2 font-semibold text-xl uppercase text-center border-x-2 border-b-2 border-black'>
                <h3>Quotation</h3>
            </div>

            <div className='min-w-full h-12 max-w-full mx-2 border-x-2 border-b-2 border-black'>

            </div>

            {/*  second  */}
            <div className=' min-w-full grid grid-cols-2 mx-2 border-x-2 border-b-2 border-black  '>
                {/* left */}
                <div className='flex justify-start items-end pb-3 border-r-2 border-black px-2 font-semibold '>
                    <div>
                        <p>{data.addr}</p>
                        <p>GST NO :{data.gst}</p>
                        <p>kind Attn :</p>
                    </div>

                </div>

                {/* right */}
                <div className='space-y-5 px-2 '>
                    <div className='font-semibold'>
                        <p>Quotation ID:</p>
                        <p>Date : {data.date}</p>
                    </div>

                    <div className='flex space-x-20 pb-9'>
                        <p>Ref NO: {data.refno}</p>
                        <p className='font-semibold'>EMAIL</p>
                    </div>
                </div>

            </div>

            {/* third*/}

            <div className=' min-w-full mx-2 border-x-2 border-b-2 border-black font-semibold'>
                <p>Subject : {data.sub}</p>
            </div>

            <div className=' min-w-full mx-2 border-x-2 border-b-2 border-black pt-3'>
                <p>We are pleased to submit the following quote as requested</p>
            </div>

            {/* third*/}

            <div>
                <table className=' mx-2 min-w-full mb-10  '>
                    <thead className=' border-collapse'>
                        <tr className=''>
                            <th className='border-2 border-t-0 border-black'>SL.NO</th>
                            <th className='border-2 border-t-0 border-black'>Item Name / Description</th>
                            <th className='border-2 border-t-0 border-black'>HSN code</th>
                            <th className='border-2 border-t-0 border-black'>Qty</th>
                            <th className='border-2 border-t-0 border-black'>unit</th>
                            <th className='border-2 border-t-0 border-black'>unit Cost</th>
                            <th className='border-2 border-t-0 border-black'>Taxable value</th>
                            <th className='border-2 border-t-0 border-black w-32'>CGST/IGST
                                <th className='border-t-2 border-r-2 border-black   w-1/2 '>%</th>
                                <th className='border-t-2  border-black min-w-full w-1/2'>Tax Amt</th>
                            </th>
                            <th className='border-2 border-t-0 border-black w-32 '>SGST/UGST
                                <th className='border-t-2 border-r-2 border-black w-1/2 '>%</th>
                                <th className='border-t-2  border-black min-w-full w-1/2'>Tax Amt</th>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
            {data.items.map((item, index) => (
              <tr key={index} className="text-center h-8">
                <td className="border-2 border-t-0 border-black">{item.sno}</td>
                <td className="border-2 border-t-0 border-black">{item.name}</td>
                <td className="border-2 border-t-0 border-black">{item.hsn}</td>
                <td className="border-2 border-t-0 border-black">{item.qty}</td>
                <td className="border-2 border-t-0 border-black">{item.unit}</td>
                <td className="border-2 border-t-0 border-black">{item.unitCost}</td>
                <td className="border-2 border-t-0 border-black">{item.taxable}</td>
                <td className="border-2 border-t-0 border-black">
                  <div className="flex">
                    <div className="w-1/2">{item.cgstp}</div>
                    <div className="w-1/2">{item.cgst}</div>
                  </div>
                </td>
                <td className="border-2 border-t-0 border-black">
                  <div className="flex">
                    <div className="w-1/2">{item.sgstp}</div>
                    <div className="w-1/2">{item.sgst}</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot className=''>
          <tr>
            <td  className="text-right font-bold">Total Items:</td>
            <td >{totalItems}</td>
            <td  className="text-right font-bold">Total Unit Cost:</td>
            <td >{totalUnitCost.toFixed(2)}</td>
          </tr>
          </tfoot>
                </table>

            </div>

        </div>
    )
}

export default Header