import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://cdn.carbuzz.com/gallery-images/original/202000/0/202002.jpg"
        profileSrc="https://i.pinimg.com/736x/74/d1/fe/74d1feb49f001fdd4208fe49b3d21a38.jpg"
        title="Alex Gomes"
      />
      <Story
        image="https://www.telegraph.co.uk/content/dam/news/2017/04/12/TELEMMGLPICT000125776356_trans_NvBQzQNjv4BqeK8ehqBZJSTiVTgumtathbH8AD1LYTdJsoz8pklmEgw.jpeg?imwidth=450"
        profileSrc="https://cnmsarchive.files.wordpress.com/2013/06/patrick_williams3.jpg?w=640"
        title="Patrick Williams"
      />
      <Story
        image="https://cdn.theforkmanager.com/static/styles/blog_article_header_image/public/wp-blog/5-el-tenedor-gestion-restaurantes-contratar-al-mejor-chef.jpg?itok=hDZiX5AS"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZaB5bs_pkNfNTWpJSW_TpgqV4Bjnlx8Vy7Q&usqp=CAU"
        title="Sam Roberts"
      />
      <Story
        image="https://chumley.barstoolsports.com/wp-content/uploads/2019/12/10/Screen-Shot-2019-12-10-at-2.13.48-PM-1024x567.png"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Connie_Willis_by_Gage_Skidmore.jpg/1200px-Connie_Willis_by_Gage_Skidmore.jpg"
        title="Connie Ingles"
      />
      <Story
        image="https://m.belfasttelegraph.co.uk/migration_catalog/b16af/25628029.ece/AUTOCROP/w300/iris_titty"
        profileSrc="https://communications.catholic.edu/_media/2018-news-photos/monsignor-green-250x324.jpg"
        title="Thomas Green"
      />
    </div>
  );
}

export default StoryReel;
