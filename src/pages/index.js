import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Header from "@/components/common/Header";
import MainSlider from "@/components/main/Slider";
import { topLevelCategory } from "@/constant/data";
import { useState } from "react";
import { router } from "next/router";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selectedCat, setSelectedCat] = useState("Residential");
  return (
    <>

      <Header />

      <div className="container p-4">
        {/* <MainSlider /> */}

        <MainSlider />

        <p className="container description mt-4">
          Bringing over 5 years of experience in the realms of architecture and
          interior design, I specialize in a diverse array of projects ranging
          from residential to corporate spaces, restaurants, and apartment
          buildings. Proficient in industry-standard software including AutoCAD,
          SketchUp, V-Ray, Corona, Lumion, Photoshop, Filmora, and Microsoft
          PowerPoint, my commitment lies in translating client visions into
          tangible, aesthetically captivating realities. Explore my portfolio to
          witness the seamless fusion of innovation, functionality, and
          meticulous craftsmanship in architectural and interior design.
        </p>



        <hr />

        <div class="d-flex justify-content-center ">
          <div className="d-flex ">
          <p
            onClick={() => setSelectedCat("Residential")}
            className={`category-menu ${selectedCat == 'Residential'?'catSelected':''}`}
          >
            Residential
          </p>
          <p
            onClick={() => setSelectedCat("Commercial")}
            className={`category-menu ${selectedCat == 'Commercial'?'catSelected':''}`}
          >
            Commercial
          </p>
          </div>
        </div>

        <div className="row">
          {topLevelCategory.map(
            (category, index) =>
              category.type == selectedCat && (
                <div onClick={() => router.push(selectedCat + "/" + category.name)} className="col-lg-3 col-md-6 col-sm-12 cat-body">
                  <img className="cat-img" src={category.img} />{" "}

                  <div className="cat-content">

                    <p className="cat-heading">{category.name}</p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}
