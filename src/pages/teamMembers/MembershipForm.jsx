import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import ImageFluid from "../../components/ImageFluid";

export default function MembershipForm({
  addTeamMember,
  memberFound,
  updateTeamMember,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const memberInitials = {
    bio: memberFound?.bio || "Supportive and Creative When Solving Problems",
    fullName: memberFound?.fullName || "John Doe",
    gender: memberFound?.gender || "male",
    designation: memberFound?.designation || "Project Manager",
  };

  const [memberImage, setMemberImage] = useState(
    memberFound?.image.split(".")[0] || "team/team-1"
  );

  let schema = yup.object().shape({
    bio: yup
      .string()
      .required("A Short Bio Needed here")
      .min(10, "Bio Must be 10 or more Character in Length")
      .max(250, "Bio Must be Equal or Less Than 250 Character"),
    fullName: yup
      .string()
      .required("Provide Full Name here")
      .min(3, "Must be Greater Than 3"),
    gender: yup
      .string()
      .required("Don't you have a gender ?")
      .oneOf(["male", "female", "other"]),
    designation: yup.string().required("Please Add Designation"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const id = memberFound?.id;
    if (id) {
      updateTeamMember({
        ...data,
        image: memberImage,
        id,
      });
      enqueueSnackbar("Team Member Updated Successfully", {
        variant: "success",
      });
    } else {
      addTeamMember({
        ...data,
        image: memberImage,
      });
      enqueueSnackbar("New Team Member Added", { variant: "success" });
    }
    navigate("/team");
  };

  const handleImageByGender = (e) => {
    if (e.target.value == "male") {
      const arr = [1, 3];
      setMemberImage(
        `team/team-${arr[Math.floor(Math.random() * arr.length)]}`
      );
    } else if (e.target.value == "female") {
      const arr = [2, 4];
      setMemberImage(
        `team/team-${arr[Math.floor(Math.random() * arr.length)]}`
      );
    } else {
      setMemberImage("team/team-0");
    }
  };

  const { bio, fullName, gender, designation, image } = memberInitials;
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
              <li>Create</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="team" className="team section-bg">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>
              <strong>
                {memberFound?.id
                  ? `${memberFound?.fullName}'s Info`
                  : `New Member's Info`}
              </strong>
            </h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row no-gutters">
              <div className="col-lg-6 col-md-10 col-sm-12 m-auto">
                <div className="form-group m-2">
                  <div className="position-relative" data-aos="fade-up">
                    <textarea
                      className={`form-control ${errors?.bio && "is-invalid"}`}
                      style={{ height: "20vh", resize: "none" }}
                      defaultValue={bio}
                      placeholder="Enter Short Bio"
                      {...register("bio")}
                    ></textarea>
                    <div
                      className="position-absolute text-danger"
                      style={{ top: "-25px" }}
                    >
                      {errors?.bio?.message}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-10 col-sm-12 d-flex align-items-stretch">
                <div className="row no-gutters">
                  <div className="col-12 col-sm-7">
                    <div className="member" data-aos="fade-up">
                      <div className="form-group m-3 mb-4">
                        <div className="position-relative">
                          <input
                            type="text"
                            className={`form-control ${
                              errors?.fullName && "is-invalid"
                            }`}
                            defaultValue={fullName}
                            placeholder="Enter Short Bio"
                            {...register("fullName")}
                          />
                          <div
                            className="position-absolute text-danger"
                            style={{ bottom: "-25px" }}
                          >
                            {errors?.fullName?.message}
                          </div>
                        </div>
                      </div>
                      <div className="form-group m-3 mb-4">
                        <div
                          style={{ textAlign: "left" }}
                          className="position-relative"
                        >
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              value="male"
                              id="male"
                              {...register("gender")}
                              defaultChecked={gender == "male" ? true : false}
                              name="gender"
                              onChange={handleImageByGender}
                            />
                            <label className="form-check-label" htmlFor="male">
                              Male
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              value="female"
                              id="female"
                              {...register("gender")}
                              defaultChecked={gender == "female" ? true : false}
                              name="gender"
                              onChange={handleImageByGender}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="female"
                            >
                              Female
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              value="other"
                              id="other"
                              {...register("gender")}
                              defaultChecked={gender == "other" ? true : false}
                              name="gender"
                              onChange={handleImageByGender}
                            />
                            <label className="form-check-label" htmlFor="other">
                              Other
                            </label>
                          </div>
                          <div
                            className="position-absolute text-danger"
                            style={{ top: "-25px" }}
                          >
                            {errors?.gender?.message}
                          </div>
                        </div>
                      </div>
                      <div className="form-group m-3 mb-2">
                        <div className="position-relative">
                          <select
                            defaultValue={designation}
                            className={`form-control form-control-sm ${
                              errors?.designation && "is-invalid"
                            }`}
                            {...register("designation")}
                          >
                            <option value="" disabled>
                              Select Designation
                            </option>
                            <option>Chief Executive Officer</option>
                            <option>Managing Director</option>
                            <option>Product Manager</option>
                            <option>Project Manager</option>
                            <option>Chief Training Officer</option>
                            <option>Administrator</option>
                            <option>Web Designer</option>
                            <option>Web Developer</option>
                            <option>UI/UX Designer</option>
                            <option>Graphic Designer</option>
                          </select>
                          <div
                            className="position-absolute text-danger"
                            style={{ top: "-25px" }}
                          >
                            {errors?.designation?.message}
                          </div>
                        </div>
                      </div>
                      <div className="form-group m-3 mb-2">
                        <button
                          type="submit"
                          className="btn btn-primary btn-sm form-control"
                        >
                          {memberFound?.id ? "Update" : "Insert New"}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-5">
                    <div className="member" data-aos="fade-up">
                      <div className="member-img">
                        <ImageFluid imageName={memberImage} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
