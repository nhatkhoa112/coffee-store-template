import React, { Fragment } from "react";
import homeLogo from "./../../imgs/home-2-logo-1.png";
import seprator from "./../../imgs/coffee_cut_long.png";

import style from "./Home.module.css";
import Navigation from "../../Components/Navigation/Navigation";
import Btn from "../../Components/UI/Btn/Btn";
import About from "../../Components/About/About";
import RecentProducts from "../../Components/RecentProducts/RecentProducts";
import DeliveryPoints from "../../Components/DeliveryPoints/DeliveryPoints";
import BecomeDealer from "../../Components/BecomeDealer/BecomeDealer";
import Brands from "../../Components/Brands/Brands";
import Discount from "../../Components/Discount/Discount";
import MailList from "../../Components/MailList/MailList";
import RecentBlogs from "../../Components/RecentBlogs/RecentBlogs";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <section className={style.sectionHome}>
        <div className="container">
          <Navigation />
          <img src={homeLogo} className={style.homeLogo} alt="home logo" />
          <Btn className={style.cta}> View products </Btn>
        </div>

        <img src={seprator} className={style.seprator} alt="seprator image" />
      </section>
      <About />
      <RecentProducts />
      <DeliveryPoints />
      <BecomeDealer />
      <Brands />
      <Discount />
      <RecentBlogs />
      <MailList />
      <Footer />
    </Fragment>
  );
};

export default Home;
