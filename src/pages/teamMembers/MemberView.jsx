import React, { useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import ImageFluid from "../../components/ImageFluid";

export default function MemberView({ teamMembers }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const memberFound = teamMembers.find((member) => member.id == id);
  if (!memberFound) {
    return <Navigate to="/team" replace={true} />;
  } else {
    const { fullName, designation, gender, image, bio } = memberFound;
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
      <main id="main">
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Team</h2>
              <ol>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/team">Team</Link>
                </li>
                <li>View({fullName})</li>
              </ol>
            </div>
          </div>
        </section>

        <section id="team" className="team section-bg">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>
                <strong>{fullName}</strong>
              </h2>
              <p>{bio}</p>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up">
                  <div className="member-img">
                    <ImageFluid imageName={image.split(".")[0]} />
                  </div>
                  <div className="member-info">
                    <span className="text-success">{designation}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
