import React from "react";
import groupImage from "../../assets/images/GroupImage.png";
import Discover from "../../assets/images/Discover.png";
import Contribute from "../../assets/images/Contribute.png";
import Learn from "../../assets/images/Learn.png";
import gifOfImg from "../../assets/images/gif1.gif";
import SVGOFIMG from "../../assets/images/svg1.gif";
import TwoPerson from "../../assets/images/TwoPerson.gif";
import "./home.css";
import UserComments from './userComments';
const home: React.FC = () => {
  return (
    <>
<div className="StartToButtom">
      <div className="homeMainContainer">
        <div className="homeMainContainerLeft">
          <h1>
            Why <span style={{ color: "green" }}>open</span>
            <span style={{ color: "tomato" }}>Sourceify </span> ?
          </h1>
          <p>
            openSourceify is your gateway to a world of collaborative
            innovation. It's a vibrant community where creators, developers, and
            enthusiasts converge to share, build, and learn together.
          </p>
        </div>
        <div className="homeMainContainerRight">
          <img src={groupImage} alt="Group" />
        </div>
      </div>
      {/* End of Div 1 */}

      <div className="homeSecondContainer">
        <div className="homeSecondContainerLeft">
          <h3>Discover Projects</h3>
          <img src={Discover} />
          <p>
            Explore a variety of open-source projects across multiple domains
          </p>
        </div>
        <div className="homeSecondContainerMiddle">
          <h3>Contribute & Collaborate</h3>
          <img src={Contribute} />
          <p>
            Join a community of developers, share your expertise, and contribute
            to inspiring projects that make a difference.
          </p>
        </div>
        <div className="homeSecondContainerRight">
          <h3>Learn & Grow</h3>
          <img src={Learn} />
          <p>
            Access resources for multiple programming languages to continuously
            enhance your skills and knowledge.
          </p>
        </div>
      </div>
      {/* End of Div 2 */}

      
      <div className="HomeScreenThirdContainer">
        <div className="HomeScreenThirdContainerHeading">
          <h1> We Belive in Working Together </h1>
        </div>
        <div className="HomeScreenThirdContainerMiddle">
          <img src={gifOfImg} />
          <img src={SVGOFIMG} />
          <img src={TwoPerson} />
        </div>
      </div>

     
      <UserComments></UserComments>
      </div>   
    </>
  );
};

export default home;
