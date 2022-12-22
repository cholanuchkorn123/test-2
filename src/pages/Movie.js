import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useHook from "../hooks/useHook";
import { addProduct } from "../slices/cartslices";
import { useDispatch } from "react-redux";
export function Movie() {
  const path = useLocation().pathname.split("/")[2];
  const imgurl = "https://image.tmdb.org/t/p/w500/";
  const { detail, pickmovie } = useHook();
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({
    name: detail.original_title,
    img: imgurl + detail.poster_path,
    price: 0,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    pickmovie(path);
    setProduct({
      name: detail.original_title,
      img: imgurl + detail.poster_path,
      price: 0,
    });
  }, [path]);

  console.log(product);
  const handleclick = () => {
    setProduct({
      name: detail.original_title,
      img: imgurl + detail.poster_path,
      price: 0,
    });
    dispatch(addProduct({ product, quantity }));
  };
  return (
    <section>
      <div>
        <div>
          <h1>{detail.original_title}</h1>
          {(detail.poster_path === null && (
            <img
              src="https://image.winudf.com/v2/image1/Y29tLnRtZGIub2ZpY2lhbF9zY3JlZW5fMF8xNTg1NjY2Njk2XzA4OQ/screen-0.jpg?fakeurl=1&type=.webp"
              className="w-[200px] h-[300px]"
            />
          )) || (
            <img
              src={imgurl + detail.poster_path}
              className="w-[200px] h-[300px]"
            />
          )}

          <h1>{detail.vote_average}</h1>
          <p>{detail.release_date}</p>
          <input
            placeholder="price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            value={price}
          />
          <div>{quantity}</div>
          <button
            className="m-[40px]"
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            +
          </button>
          <button onClick={handleclick}>add to cart</button>
        </div>
      </div>
    </section>
  );
}
