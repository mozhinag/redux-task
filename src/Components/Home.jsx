import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import axios from "axios";
import { setProducts } from "../Redux/ProductReducer";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products);

  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("https://656ae17bdac3630cf7276265.mockapi.io/products");
      console.log(res);
      dispatch(setProducts(res.data)); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (data.products.length === 0) {
      fetchAllProducts();
    }
  }, [data.products, fetchAllProducts]); 
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {data.products.map((detail, index) => (
            <Card key={index} Details={detail} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
