import React from "react";
import { useSelector } from "react-redux";
import AdminNavigationMenu from "../Components/AdminNavigationMenu";
import DoctorApplyForm from "../Components/DoctorApplyForm";
import Header from "../Components/Header";
import NavigationMenu from "../Components/NavigationMenu";

function ApplyDoctor() {
  const user = useSelector((state) => state.user);
  var id;
  if (user.user) {
    console.log(user);
    const status = user.user.isAdmin;
    const name = user.user.name;
    id = user.user._id;
  }

  return (
    <div className="bg-white">
      {/* LAYOUT */}
      <div className="flex bg-slate-400 p-3">
        {/* NAVIGATION MENUE */}

        <div className="bg-white w-1/5 h-screen mr-4">
          {status == true ? <AdminNavigationMenu /> : <NavigationMenu />}
          {/* <NavStatus /> */}
        </div>

        <div className="bg-white w-full">
          {/* 1ST HEADER */}

          <div className="bg-white h-12">
            <Header />
          </div>
          {/* CONTENT PANNEL OR FEED */}
          <div className="w-2/4 block m-auto p-4">
            <DoctorApplyForm id={id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyDoctor;
