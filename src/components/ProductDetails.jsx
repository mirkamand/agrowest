import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products_data from "../data/products_data";

const ProductDetails = () => {
  const { productSlug } = useParams();
  const [product, setProduct] = useState();
  console.log(productSlug);
  useEffect(() => {
    const result = products_data.find(
      (data) =>
        encodeURIComponent(data.name.trim().toLocaleLowerCase()) === productSlug
    );

    if (result) {
      setProduct(result);
    } else {
    }
  }, [productSlug]);

  return <div>{product?.name}</div>;
};

export default ProductDetails;
