import React, { useEffect, useState } from "react";
import { getUsers } from "./Services";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    getUsers()
      .then((res) => {
        setData(res?.data?.users);
        console.log(res?.data?.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const pageRedirect = (item) => {
    navigate("/profile", { state: { user: item, data: data } });
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="header1">
            <h2>Select an account</h2>
          </div>
          <div className="header2">
            <table style={{ width: "inherit", padding: "5px 30px 30px 30px" }}>
              {data?.map((item, index) => {
                return (
                  <tr>
                    <td>
                      <div
                        className="user-section"
                        onClick={() => pageRedirect(item)}
                      >
                        <div>
                          <Avatar
                            src={item?.profilepicture}
                            sx={{ width: 40, height: 40 }}
                          />
                        </div>
                        <p>{item?.name}</p>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
