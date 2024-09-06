import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";

function App() {
  const [data, setData] = useState([]);
  const [callProduct, setCallProduct] = useState("phone");
  const [check, setCheck] = useState(false);
  const [skip,setSkip] = useState(0)
  console.log(skip)

  // console.log("data",data)
  const fetchDataMain = async () => {
    const resp = await fetch(
      `https://dummyjson.com/products/category/smartphones/?limit=5&skip=${skip}`
    );
    const result = await resp.json();
    setData(result.products);
    // console.log(result.products)
  };

  // console.log("data",data)
  const fetchData = async () => {
    const resp = await fetch(
      `https://dummyjson.com/products/search?q=${callProduct}`
    );
    const result = await resp.json();
    setData(result.products);
    // console.log(result.products)
  };

  useEffect(() => {
    if (check) {
      fetchData();
    } else {
      fetchDataMain();
    }
  }, [callProduct,skip]);

  return (
    <div
      className="p-4 font-semibold text-opacity-80 flex flex-col gap-5 items-center w-full"
    >
      <h1 className="text-6xl p-2 font-extrabold text-orange-300 text-opacity-90">
        Product Search
      </h1>
      <SearchBar setCallProduct={setCallProduct} setCheck={setCheck} />
      <ProductList data={data} skip={skip} setSkip={setSkip} />
    </div>
  );
}

export default App;
