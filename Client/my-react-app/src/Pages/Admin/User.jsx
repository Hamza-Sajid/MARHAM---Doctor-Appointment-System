import React from "react";
import { useSelector } from "react-redux";
import UserList from "../../Components/Admin/UserList";
import AdminNavigationMenu from "../../Components/AdminNavigationMenu";
import Header from "../../Components/Header";
import NavigationMenu from "../../Components/NavigationMenu";
import HomePage from "../HomePage";

function User() {
  const user = useSelector((state) => state.user);
  var stat = false;

  const checkNavigation = () => {
    if (user.user) {
      user.user.isAdmin ? (stat = true) : (stat = false);
    } else {
    }
  };

  checkNavigation();
  return (
    <div>
      {/* <h2>Hello {data.length == 0 ? <></> : data.data.name} </h2> */}

      {/* LAYOUT */}
      <div className="flex bg-slate-400 p-3">
        {/* NAVIGATION MENUE */}

        <div className="bg-white w-1/5 h-screen mr-4">
          {stat == true ? <AdminNavigationMenu /> : <NavigationMenu />}
          {/* <NavStatus /> */}
        </div>

        <div className="bg-blue-300 w-full">
          {/* 1ST HEADER */}
          <div className="bg-white h-12">
            <Header />
          </div>
          {/* CONTENT PANNEL OR FEED */}
          <div>
            <UserList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
