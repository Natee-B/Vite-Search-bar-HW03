import React from "react";

export default function SearchBar({ setCheck, setCallProduct }) {
  const hdlChange = async (e) => {
    const value = e.target.value;
    setTimeout(()=>{
      setCallProduct(value)
    },"500")

    if (value === "") {
      setCheck(false);
    } else {
      setCheck(true);
    }
    // const resp = await fetch(
    //   `https://dummyjson.com/products/search?q=${callProduct}`
    // );
    // const result = await resp.json();
    // // setData(result);
    // console.log("S.Bar",result)
    // console.log("S.Bar", value);
  };

  return (
    <div className="flex justify-center w-full">
      <input 
      className="w-[600px] rounded-full bg-gray-800 p-1 text-orange-700"
      placeholder="   Search here . . ."
      onChange={(e) => hdlChange(e)} />
    </div>
  );
}
