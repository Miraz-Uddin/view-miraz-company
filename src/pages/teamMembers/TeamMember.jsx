import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ImageFluid from "../../components/ImageFluid";

export default function TeamMember({ member, deleteTeamMember }) {
  const { id, fullName, designation, gender, image } = member;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
      <div className="member" data-aos="fade-up">
        <div className="member-img">
          {/* <img src={image} className="img-fluid" alt="" /> */}
          <ImageFluid imageName={image.split(".")[0]} />
          <div className="social action">
            <Link to={`/team/${id}`}>
              <i className="icofont-eye-alt"></i>
            </Link>
            <Link to={`/edit/team/${id}`}>
              <i className="icofont-pen-alt-1"></i>
            </Link>
            <Link to={`/team`} onClick={() => deleteTeamMember(id)}>
              {" "}
              <i className="icofont-minus-circle"></i>{" "}
            </Link>
          </div>
          {/* <div className="social">
            <a href="">
              <i className="icofont-twitter"></i>
            </a>
            <a href="">
              <i className="icofont-facebook"></i>
            </a>
            <a href="">
              <i className="icofont-instagram"></i>
            </a>
            <a href="">
              <i className="icofont-linkedin"></i>
            </a>
          </div> */}
        </div>
        <div className="member-info">
          <h4>{fullName}</h4>
          <span>{designation}</span>
        </div>
      </div>
    </div>
  );
}
