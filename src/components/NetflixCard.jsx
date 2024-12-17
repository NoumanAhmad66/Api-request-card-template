import { useEffect, useState } from "react";
import Swiper from "swiper/bundle";
import "../assets/css/styles.css";
import "../assets/css/swiper-bundle.min.css";

const NetflixCard = () => {
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "e5ea4452f4msh7e28e56d2b4b224p1b1e1cjsncdfc4b72d1b7",
      "x-rapidapi-host": "movies-api14.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://movies-api14.p.rapidapi.com/shows",
        options
      );
      const data = await response.json();
      console.log(data);
      setMyData(data.movies);
      setLoading(false); // Set loading to false once data is fetched
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (!loading) {
      new Swiper(".card__content", {
        loop: true,
        spaceBetween: 32,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          600: {
            slidesPerView: 2,
          },
          968: {
            slidesPerView: 3,
          },
        },
      });
    }
  }, [loading]);

  return (
    <div className="container">
      {loading ? (
        <div className="loading-spinner">Loading...</div>
      ) : (
        <div className="card__container swiper">
          <div className="card__content">
            <div className="swiper-wrapper">
              {myData.map((item, index) => (
                <article className="card__article swiper-slide" key={index}>
                  <div className="card__image">
                    <img
                      src={item.poster_path}
                      alt={item.title}
                      className="card__img"
                    />
                    <div className="card__data">
                      <h3 className="card__name">{item.title}</h3>
                      <p className="card__description">{item.original_title}</p>

                      <a href={item.link} className="card__button">
                        View More
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="swiper-button-next">
            <i className="ri-arrow-right-s-line"></i>
          </div>

          <div className="swiper-button-prev">
            <i className="ri-arrow-left-s-line"></i>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      )}
    </div>
  );
};

export default NetflixCard;
