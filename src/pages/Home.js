import React from "react";
import useHook from "../hooks/useHook";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export function Home({ search }) {
  const { data, seacrhmovie } = useHook();

  console.log(data);

  useEffect(() => {
    seacrhmovie(search);
  }, [search]);
  const imgurl = "https://image.tmdb.org/t/p/w500/";
  return (
    <section>
      <div className="flex items-center gap-[20px] flex-wrap justify-center">
        {data.map((item, itemindex) => {
          return (
            <Link to={`movie/${item.id}`}>
              <div key={itemindex}>
                <h1>{item.original_title}</h1>
                {(item.poster_path === null && (
                  <img
                    src="https://image.winudf.com/v2/image1/Y29tLnRtZGIub2ZpY2lhbF9zY3JlZW5fMF8xNTg1NjY2Njk2XzA4OQ/screen-0.jpg?fakeurl=1&type=.webp"
                    className="w-[200px] h-[300px]"
                  />
                )) || (
                  <img
                    src={imgurl + item.poster_path}
                    className="w-[200px] h-[300px]"
                  />
                )}

                <h1>{item.vote_average}</h1>
                <p>{item.release_date}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
