import React from 'react'
import { useState } from 'react'

const InputTable = () => {

    const [sno,setSno]=useState("")
    const [items,setItems]=useState("")
    const [hns,setHns]=useState("")
    const [qty,Setqty]=useState("")
    const [unit,setUnit]=useState("")
    const [unitCost,setUnitCost]=useState("")
    const [taxable,setTaxable]=useState("")
    const [cgstp,setCgstp]=useState("")
    const [cgst,setCgst]=useState("")
    const [sgstp,setSgstp]=useState("")
    const [sgst,setSgst]=useState("")
  return (
    <div>
        <table className=' mx-2 min-w-full border-2 border-black  '>
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
                            <td className='border-2 border-black p-3 '>  <input type="text" className='bg-gray-300 rounded-lg w-20' value={sno} onChange={(e)=>setSno(e.target.value)}  /> </td>
                            <td  className='border-2 border-black p-3'><input type="text" className='bg-gray-300 rounded-lg' value={items} onChange={(e)=>setItems(e.target.value)} /> </td>
                            <td className='border-2 border-black p-3'><input type="text" className='bg-gray-300 rounded-lg' value={hns} onChange={(e)=>setHns(e.target.value)} /> </td>
                            <td className='border-2 border-black p-3'><input type="text" className='bg-gray-300 rounded-lg' value={qty} onChange={(e)=>Setqty(e.target.value)} /> </td>
                            <td className='border-2 border-black p-3'><input type="text"  className='bg-gray-300 rounded-lg' value={unit} onChange={(e)=>setUnit(e.target.value)}/> </td>
                            <td className='border-2 border-black p-3'><input type="text" className='bg-gray-300 rounded-lg' value={unitCost} onChange={(e)=>setUnitCost(e.target.value)} /> </td>
                            <td className='border-2 border-black p-3'><input type="text" className='bg-gray-300 rounded-lg' value={taxable} onChange={(e)=>setTaxable(e.target.value)} /> </td>

                            <td className='border-2 border-t-0 border-black space-x-2  p-3  '>
                              <td>  <input type="text" className='bg-gray-300 rounded-lg w-8' value={cgstp} onChange={(e)=>setCgstp(e.target.value)} /> </td>
                              <td>  <input type="text" className='bg-gray-300 rounded-lg w-8' value={cgst} onChange={(e)=>setCgst(e.target.value)}  /> </td>
                            </td>

                            <td className='border-2 border-black space-x-2  p-3 '>
                              <td>  <input type="text" className='bg-gray-300 rounded-lg w-8'value={sgstp} onChange={(e)=>setSgstp(e.target.value)}  />  </td>
                              <td>  <input type="text" className='bg-gray-300 rounded-lg w-8' value={sgst} onChange={(e)=>setSgst(e.target.value)} />  </td>
                            </td>

                            
                        </tbody>

                 </table>
    </div>
  )
}

export default InputTable