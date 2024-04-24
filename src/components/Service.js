import React from "react";

export default function Service(props) {
  const data = {
    planning: {
      heading: `Architectural Planning Services`,
      description: `Experience meticulous attention to detail and unparalleled expertise with my architectural planning services. Utilizing industry-leading AutoCAD software, we deliver comprehensive 2D plans, precise working drawing sets, and intricate interior detailing. Trust me to bring clarity, precision, and professionalism to every stage of your project, from conception to execution.`,
      imgs: [
        "/images/ADVOCATE OFFICE (1).png",
        "/images/ADVOCATE OFFICE (2).png",
        "/images/ADVOCATE OFFICE (3).png",
        "/images/ADVOCATE OFFICE (1).png",
        "/images/ADVOCATE OFFICE (2).png",
        "/images/ADVOCATE OFFICE (3).png",
        "/images/ADVOCATE OFFICE (1).png",
        "/images/ADVOCATE OFFICE (2).png",
        "/images/ADVOCATE OFFICE (3).png",
      ],
    },
    visualization: {
      heading: `Visualization Services`,
      description: `Experience the power of visualization with my comprehensive services. Using a suite of industry-standard software including SketchUp, V-Ray, 3ds Max, Corona, Lumion, and Photoshop, we bring your projects to life with stunning realism and detail. From architectural renderings to interior visualizations, trust me to transform your concepts into captivating visual representations that inspire confidence and elevate your vision.`,
      imgs: [
        "/images/ADVOCATE OFFICE (1).png",
        "/images/ADVOCATE OFFICE (2).png",
        "/images/ADVOCATE OFFICE (3).png",
        "/images/ADVOCATE OFFICE (1).png",
        "/images/ADVOCATE OFFICE (2).png",
        "/images/ADVOCATE OFFICE (3).png",
        "/images/ADVOCATE OFFICE (1).png",
        "/images/ADVOCATE OFFICE (2).png",
        "/images/ADVOCATE OFFICE (3).png",
      ],
    },
    animation: {
      heading: `Animation Services`,
      description: `Unlock the potential of dynamic storytelling with my animation services. Leveraging Lumion for immersive 3D animations and Filmora for precise editing, I breathe life into your projects with captivating visual narratives. Whether it's architectural walkthroughs, interior animations, or promotional videos, I combine technical expertise with creative flair to deliver animations that engage, inspire, and leave a lasting impression.`,
      imgs: [
        "/images/ADVOCATE OFFICE (1).png",
        "/images/ADVOCATE OFFICE (2).png",
        "/images/ADVOCATE OFFICE (3).png",
        "/images/ADVOCATE OFFICE (1).png",
        "/images/ADVOCATE OFFICE (2).png",
        "/images/ADVOCATE OFFICE (3).png",
        "/images/ADVOCATE OFFICE (1).png",
        "/images/ADVOCATE OFFICE (2).png",
        "/images/ADVOCATE OFFICE (3).png",
      ],
    },
  };
  return (
    <div className="container my-4">
      <div className="content-div">
        <p className="servce-heading">{data[props.type].heading}</p>
        <p className="service-description">{data[props.type].description}</p>
      
      </div>

      <div className="row">
        {data[props.type].imgs.map((img, index) => (
          <div className="col-lg-3 col-md-6 col-sm-12 cat-body">
            <img className="cat-img" src={img} />
          </div>
        ))}
      </div>
    </div>
  );
}
