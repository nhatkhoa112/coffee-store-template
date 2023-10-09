import React, { useRef } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";

import style from "./RecentProducts.module.css";

import "./Slider.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import ProductCard from "../ProductCard/ProductCard";

import { Container } from "react-bootstrap";
import "swiper/css/navigation";
// import required modules
import { Navigation, SwiperCore } from "swiper";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Btn from "../UI/Btn/Btn";

const RecentProducts = () => {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "American Black Coffee",
      desc: "product description text ",
      price: "26.99",
      img: require("./../../imgs/coffee_item1-300x300.jpg"),
    },
    {
      id: 2,
      name: "Ground Coffee",
      desc: "product description text ",
      price: "45.30",
      img: require("./../../imgs/coffee_item2-300x300.jpg"),
    },
    {
      id: 3,
      name: "Coffee Beans",
      desc: "product description text ",
      price: "90.99",
      img: require("./../../imgs/coffee_item3-300x300.jpg"),
    },
    {
      id: 4,
      name: "Accessories",
      desc: "product description text ",
      price: "265.29",
      img: require("./../../imgs/coffee_item4-300x300.jpg"),
    },

    {
      id: 5,
      name: "American Black Coffee",
      desc: "product description text ",
      price: "26.99",
      img: require("./../../imgs/coffee_item1-300x300.jpg"),
    },
    {
      id: 6,
      name: "Ground Coffee",
      desc: "product description text ",
      price: "45.30",
      img: require("./../../imgs/coffee_item2-300x300.jpg"),
    },
    {
      id: 7,
      name: "Coffee Beans",
      desc: "product description text ",
      price: "90.99",
      img: require("./../../imgs/coffee_item3-300x300.jpg"),
    },
    {
      id: 8,
      name: "Accessories",
      desc: "product description text ",
      price: "265.29",
      img: require("./../../imgs/coffee_item4-300x300.jpg"),
    },
  ];

  return (
    <div style={{ backgroundColor: "#242424", padding: "5rem 0px 2rem 0px" }}>
      <div className={style.sectionTitle}>
        <SectionHeader
          backTitle={"Products"}
          frontUp={"choose your coffee"}
          frontDown={"Recent Products"}
        />
      </div>
      <div style={{ overflow: "hidden" }}>
        {/* start swiper slider  */}
        <div className="test">
          <Swiper
            loop={true}
            className="swiper-container"
            ref={swiperRef}
            slidesPerView={1}
            modules={[Navigation]}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            // responsive
            breakpoints={{
              // when window width is >= 768px
              600: {
                width: 700,
                slidesPerView: 2,
              },
              800: {
                width: 1000,
                slidesPerView: 3,
              },
              1200: {
                width: 1300,
                slidesPerView: 4,
              },
              1300: {
                width: 1400,
                slidesPerView: 4,
              },
            }}
          >
            {products.map((product) => {
              return (
                <SwiperSlide key={product.id} style={{ margin: "auto" }}>
                  <ProductCard
                    img={product.img}
                    name={product.name}
                    desc={product.desc}
                    price={product.price}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          {/* prev and next */}
          <div
            ref={prevRef}
            className="prev"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            <FaChevronLeft />
          </div>
          <div
            ref={nextRef}
            className="next"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <FaChevronRight />
          </div>
          {/* pren and next */}
        </div>

        {/* end swiper slider  */}
      </div>
      <Btn className={style.viewAllBtn}> View all products</Btn>
    </div>
  );
};

export default RecentProducts;
