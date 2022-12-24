import React, { useEffect, useState } from "react";
import axios from "axios";
function HomePage() {
  const [data, setData] = useState([]);
  const CheckAuth = async () => {
    axios
      .post(
        "http://localhost:3000/dashboard",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then(function (response) {
        setData(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log(data);
  useEffect(() => {
    CheckAuth();
  }, [0]);

  return (
    <div>
      <h2>Hello {data.length == 0 ? <></> : data.data.name} </h2>
      <h1>welcome ho gaya!</h1>
    </div>
  );
}

export default HomePage;
