import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products_data from "../data/products_data";
import ProductTemplate from "./ProductTemplate";

const ProductDetails = () => {
  const { productSlug } = useParams();
  const [product, setProduct] = useState();
  console.log(productSlug);
  useEffect(() => {
    const result = products_data.find(
      (data) => encodeURIComponent(data.id) === productSlug
    );

    if (result) {
      setProduct(result);
    } else {
    }
  }, [productSlug]);

  return (
    <div>
      {product?.id ? (
        <ProductTemplate
          name={product.name}
          img={product.img}
          rating={product.rating}
          price={product.price}
          code={product.code}
          text={product.text}
          slides={product.slides}
        />
      ) : (
        "Error"
      )}
    </div>
  );
};

export default ProductDetails;
