import React from "react";
import tripAppvideo from "./TripAppGiphy.mp4";
import { ReactVideo } from "reactjs-media";
import tripAppPoster from "./tripAppPoster.jpg";
import PERNStoreVideo from "./PERN-Store.mp4";
import PERNStorePoster from "./PERNStore.jpg";

const MyProjects = () => {
  return (
    <div>
      <div className="projects">
        <span id="tripApp-giphy">
          <ReactVideo
            src={tripAppvideo}
            poster={tripAppPoster}
            primaryColor="red"
          />
          <a href="https://trip-app-2021.netlify.app/" target="_blank">
            <p className="project-description">
              TrippApp helps users enter, modify and delete their mileage and/or
              car expenses during the whole year and get deductions while filing
              taxes.
            </p>
          </a>
        </span>
        <span id="PERN-store">
          <ReactVideo
            src={PERNStoreVideo}
            poster={PERNStorePoster}
            primaryColor="red"
          />
          <a href="https://pern-store-dd-kr-js-mg.netlify.app/" target="_blank">
            <p className="project-description">
              PERN Famous Footwear is an online store that allows the
              owner/employee to enter, modify and delete shoes in stock, add
              them to the cart.
            </p>
          </a>
        </span>
      </div>
    </div>
  );
};
export default MyProjects;
