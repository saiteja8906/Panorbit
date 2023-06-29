import React, { useEffect, useState } from "react";
import { getUsers } from "./Services";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const loadUsers = () => {
    getUsers()
      .then((res) => {
        setData(res?.data?.users);
        console.log(res?.data?.users);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadUsers();
  }, []);

  const pageRedirect = (item) => {
    navigate("/profile", { state: { user: item, data: data } });
  };
  return (
    <>
      <div className="container">
        <div className="header">
          <span>
            <h2>Select an Account</h2>
          </span>
          {data?.map((item, index) => {
            return (
              <div className="user-section" onClick={() => pageRedirect(item)}>
                <div>
                  <Avatar
                    src={item?.profilepicture}
                    sx={{ width: 40, height: 40 }}
                  />
                </div>
                <p>{item?.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Home;
