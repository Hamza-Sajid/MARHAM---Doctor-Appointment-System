import React, { useEffect, useState } from "react";
import axios from "axios";
import NavigationMenu from "../Components/NavigationMenu";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../Redux/Features/userSlice";
import Header from "../Components/Header";
import AdminNavigationMenu from "../Components/AdminNavigationMenu";
function HomePage() {
  const [data, setData] = useState([]);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  var stat = false;

  const checkNavigation = () => {
    if (user.user) {
      user.user.isAdmin ? (stat = true) : (stat = false);
    } else {
    }
  };

  const CheckAuth = async () => {
    axios
      .post(
        "http://localhost:3000/dashboard",
        {},
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then(function (response) {
        console.log(response);
        dispatch(setUser(response.data));
        setData(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    CheckAuth();
  }, [0]);

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
          <div>content</div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
