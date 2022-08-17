import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import MembershipForm from "./MembershipForm";

export default function MemberEdit({ teamMembers, updateTeamMember }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const memberFound = teamMembers.find((member) => member.id == id);
  if (!memberFound) {
    return <Navigate to="/team" replace={true} />;
  } else {
    return (
      <MembershipForm
        memberFound={memberFound}
        updateTeamMember={updateTeamMember}
      />
    );
  }
}
