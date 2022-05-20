import React from "react";
import treatment from "../../../images/treatment.png";
const FeaturedService = () => {
  return (
    <div className="features-service pb-0 pb-md-5 my-5">
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-md-5">
            <img className="img-fluid" src={treatment} alt="" />
          </div>
          <div className="col-md-7 align-self-center">
            <h1>
              Exceptional Dental
              <br />
              Care,on Your Terms{" "}
            </h1>
            <p className="text-secondary my-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
              incidunt. Deserunt harum adipisci sequi in exercitationem tenetur
              atque nobis mollitia aspernatur optio, esse doloremque vel
              voluptatum explicabo velit alias corrupti.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedService;
