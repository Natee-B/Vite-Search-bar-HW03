import React from "react";

export default function ProductList({data,skip,setSkip}) {

  return (
    <div>
      <div className="flex justify-end gap-5 mb-3">
      <button className="border p-1 rounded-xl text-white bg-gray-800" onClick={()=>setSkip(el=>el<=0?0:el-5)}>before</button>
      <button className="border p-1 rounded-xl text-white bg-gray-800" onClick={()=>setSkip(el=>el>=15?15:el+5)}>next</button> 
      </div>

      {/* className="flex flex-col  gap-4 text-start border p-8 rounded-3xl bg-gray-800 w-1/2" */}
      <div className="border p-4 rounded-3xl bg-gray-800">
        {data.map((el) => (
          <ul
            className="text-white text-opacity-70 flex justify-between w-[600px] p-1"
            key={el.id}
          >
            <li className="w-[180px]">{el.id}: {el.title ? el.title : " - "}</li>
            <li >{el.brand ? el.brand : " - "}</li>
            <li className="w-[180px] text-end">${el.price ? el.price : " - "}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
