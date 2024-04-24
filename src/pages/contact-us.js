import React from "react";

export default function contactUs() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 verticle-center">

            <div className="">
                <p className="contact-name-heading">M Fraz - Architect & Interior Designer</p>
                <p>Bringing 5+ years of expertise to residential, corporate, restaurant, and apartment projects. Proficient in AutoCAD, SketchUp, V-Ray, and more. Let's turn your vision into reality. Explore portfolio.</p>
                <p>
                    
                <i class="fa-solid fa-envelope"></i> farazjamil12@gmail.com
                </p>
            </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="container ">
            <form>
              <div class="mb-3">
                <label for="name" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                />
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">
                  Description
                </label>
                <textarea
                rows={4}
                  type="text"
                  class="form-control"
                  id="description"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
