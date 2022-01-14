import React from "react";
import "../styles/About.scss";

// about page

const About = () => {
  return (
    <main className="main-container-a">
      <img
        src="https://www.fototouren-berlin.de/wp-content/uploads/2014/11/oberbaumbruecke.jpg"
        className="bg-img-a"
        alt="puente"
      ></img>
      <h1 className="title-a">About Us</h1>
      <h2 className="subtitle-a">Way To Go, Helps and more</h2>
      <div className="paragraph-container-a">
        <p className="paragraphs-a">
          <span className="text-bold-a">WAY TO GO</span> Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Neque molestias officia veritatis
        </p>
        <div className="divider-horizontal-a"></div>
        <p className="paragraphs-a">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque in
          voluptas eos eius accusamus id nesciunt quod aliquid doloremque
          consequatur facere vitae temporibus, culpa illum numquam quidem quia
          veritatis distinctio? Autem deserunt, maxime commodi fugit
          reprehenderit odit ad iure laudantium velit, nobis accusamus porro, a
          reiciendis veniam. Repudiandae eius amet pariatur incidunt, culpa
          repellendus ut, aperiam perspiciatis placeat, debitis quibusdam?
        </p>
        <p className="paragraphs-a">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
          maxime ipsam? Temporibus facere exercitationem, beatae quam sapiente
          ratione sit, non itaque est ea cumque suscipit necessitatibus enim
          praesentium, quia et.
        </p>
      </div>
    </main>
  );
};

export default About;
