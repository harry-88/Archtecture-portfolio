import { projectImages } from "@/constant/data";
import { useRouter } from "next/router";
import React from "react";
export default function ProjectDetail() {
  const router = useRouter();

  const { id } = router.query;
  return (
    <div className="container">
      <p>{projectImages[id].name}</p>

      <div className="row">
        {projectImages[id].map((img, index) => (
          <div className="col-lg-3 col-md-6 col-sm-12 cat-body">
            <img className="cat-img" src={img} />
          </div>
        ))}
      </div>
    </div>
  );
}
