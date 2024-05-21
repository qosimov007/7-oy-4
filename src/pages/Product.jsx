
// import { useLoaderData } from "react-router-dom";
// import { customFetch } from "../utils/index";

// export const loader = async ({ params }) => {
//   const req = await customFetch(`/products/${params.id}`);
//   const product = req.data;
//   return { product };
// };

// function Product() {
//   const { product } = useLoaderData();
//   console.log(product);

//   return <>
//    <div className="max-w-6xl mx-auto flex-col items-start">
//     <h1 className="text-3xl font-bold">{product.title}</h1>
//      <div className="carousel carousel-center max-w-4xl mx-auto p-4 space-x-4 bg-neutral rounded-box">
//       {product.images.map((image) => {
//         return (
//           <div className="carousel-item"> 
//           <img  src={image} className="rounded-box h-96" />
//           </div>
//         );
//       })}
//      </div>
//      <div className="flex items-center gap-2"> 
//      <button className="btn btn-secondary">-</button>
//      <h3>1</h3>
//      <button className="btn btn-secondary">+</button>

//      <hr />

//      <button className="btn btn-primary">Add To Bag</button>
//      </div>
//     </div>
//    </>
// }

// export default Product;

import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { customFetch } from "../utils/index";

export const loader = async ({ params }) => {
  const req = await customFetch(`/products/${params.id}`);
  const product = req.data;
  return { product };
};

function Product() {
  const { product } = useLoaderData();
  const [productAmount, setProductAmount] = useState(1);

  const setAmount = (type) => {
    if (type === "decrease" && productAmount > 1) {
      setProductAmount((prev) => prev - 1);
    } else if (type === "increase") {
      setProductAmount((prev) => prev + 1);
    }
  };

  const AddToBag = () => {
    const newProduct = {
      amount: productAmount,
    };
    console.log(newProduct); // Add logic to handle adding to bag
  };

  return (
    <>
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <div className="carousel carousel-center max-w-4xl mx-auto p-4 space-x-4 bg-neutral rounded-box">
          {product.images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-96"
                alt={`Product image ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={() => setAmount("decrease")}
            className="btn btn-secondary"
            disabled={productAmount === 1}
          >
            -
          </button>
          <h3>{productAmount}</h3>
          <button
            onClick={() => setAmount("increase")}
            className="btn btn-secondary"
          >
            +
          </button>
        </div>
        <hr className="my-4" />
        <button className="btn btn-primary" onClick={AddToBag}>
          Add To Bag
        </button>
      </div>
    </>
  );
}

export default Product;
