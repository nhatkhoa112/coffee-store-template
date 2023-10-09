import React from "react";
import PostCard from "../PostCard/PostCard";
import SectionHeader from "./../SectionHeader/SectionHeader";

import style from "./RecentBlogs.module.css";

import Btn from "./../../Components/UI/Btn/Btn";
import { Row } from "react-bootstrap";

let posts = [
  {
    id: 1,
    img: require("./../../imgs/blog1-770x570.jpg"),
    title: "History of coffee",
    desc: "Integer maximus accumsan nunc, sit amet tempor lectus facilisis eu. Cras vel elit felis. Vestibulum convallis ipsum id aliquam varius. Etiam nec laoreet ...",
    postDate: { day: "25", month: "septamber", age: "2022" },
    views: 1569,
  },
  {
    id: 2,
    img: require("./../../imgs/blog2-770x570.jpg"),
    title: "About Americano coffee",
    desc: "Vivamus tristique ligula quis orci malesuada tincidunt. Praesent magna purus, pharetra eu eleifend non, euismod vitae leo. Interdum et malesuada fames ac ante ...",
    postDate: { day: "25", month: "septamber", age: "2022" },
    views: 1569,
  },
  {
    id: 3,
    img: require("./../../imgs/blog3-770x570.jpg"),
    title: "Coffee roasts guide",
    desc: "In efficitur, leo non commodo lacinia, odio metus sodales purus, sed consequat lectus mi in purus. Vivamus vitae metus et nisl egestas sollicitudin. Quisque ...",
    postDate: { day: "25", month: "septamber", age: "2022" },
    views: 1569,
  },
];

const RecentBlogs = () => {
  return (
    <div className="container">
      <Row>
        <SectionHeader
          backTitle={"Blog"}
          frontUp={"Our Blog"}
          frontDown={"Recent posts"}
          backColor={"#f5f5f5"}
          frontDownColor={"#242424"}
        />

        <div className={style.posts}>
          {posts.map((post) => {
            return (
              <PostCard
                key={post.id}
                img={post.img}
                title={post.title}
                desc={post.desc}
                date={post.postDate}
                views={post.views}
              />
            );
          })}
        </div>
      </Row>
      <Btn className={style.btn}> read more </Btn>
    </div>
  );
};

export default RecentBlogs;
