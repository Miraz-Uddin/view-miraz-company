import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TeamMember from "./TeamMember";

export default function MemberList({ teamMembers, deleteTeamMember }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main id="main">
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Team</h2>
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Team</li>
            </ol>
          </div>
        </div>
      </section>
      {/* <!-- End Breadcrumbs --> */}

      {/* <!-- ======= Our Team Section ======= --> */}
      <section id="team" className="team section-bg">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>
              Our <strong>Team</strong>
            </h2>
            <p>
              Consider us your portal to an incredibly exciting marketplace for
              developers. Together with you, we recruit and operate external
              development teams, with developers who work closely and integrated
              with your in-house team. Outsourcing has never been easier!
            </p>
          </div>

          <div className="row">
            {teamMembers &&
              teamMembers.map((member) => (
                <TeamMember
                  key={member.id}
                  member={member}
                  deleteTeamMember={deleteTeamMember}
                />
              ))}
          </div>
        </div>
      </section>
      {/* <!-- End Our Team Section --> */}
    </main>
  );
}
