import React from "react";
import tripAppvideo from "./assets/TripAppVideo.mp4";
import { ReactVideo } from "reactjs-media";
import tripAppPoster from "./assets/tripAppPoster.jpg";
import ribbonAvailabilityVideo from "./assets/Ribbon Availability feature1.mp4";
import ribbonAvailabilityPoster from "./assets/RibbonAvailabilityPoster.png";

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
          <a
            href="https://trip-app-project.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="project-description">
              TrippApp helps users enter, modify and delete their car(s)
              details, mileage and/or car expenses for each car during the year
              and get tax deductions while filing taxes.
            </p>
          </a>
        </span>{" "}
        <span id="ribbon-availability">
          <ReactVideo
            src={ribbonAvailabilityVideo}
            poster={ribbonAvailabilityPoster}
            primaryColor="red"
          />
          <a
            href="https://www.loom.com/share/cd8c8c42817a4eceb34d691435bb3ca0"
            target="_blank"
            rel="noreferrer"
          >
            <p className="project-description">
              Ribbon Availability feature provides home buying agents and
              lenders with Ribbon service availability info based on the
              specific address/state/zip. It also allows data filtering in state
              view search.
            </p>
          </a>
        </span>
      </div>
    </div>
  );
};
export default MyProjects;
