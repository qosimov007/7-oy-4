import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";

function Home() {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`https://strapi-store-server.onrender.com/api/products?featured=true`)
      .then((res) => res.json())
      .then((data) => {
        setFeatured(data.data);
        setLoading(true)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false)
      })
  }, []);

  return (
    <>
      {loading && (
        <span className="loading loading-ring loading-lg block mx-auto mt-60"></span>
      )}

      {!loading && (
        <>
          <div className="container w-3/4 mx-auto mt-10">
          

            <div className="mt-24 mb-20">
              <h2 className="font-bold text-3xl text-[#394E6A] mb-7">
                Featured Products
              </h2>
              <hr />

              <div className="flex justify-between gap-5">
                {featured.length > 0 &&
                  featured.map((el, index) => {
                    return <Card key={index} data={el}></Card>;
                  })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Home;
