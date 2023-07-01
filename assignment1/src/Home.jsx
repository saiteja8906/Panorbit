import React, { useEffect, useState } from "react";
import { getUsers } from "./Services";
import { Alert, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    getUsers()
      .then((res) => {
        setData(res?.data?.users);
        setErrorMessage("");
      })
      .catch((err) => {
        setErrorMessage("Unable to load Users");
      });
  }

  const pageRedirect = (item) => {
    navigate("/profile", { state: { user: item, data: data } });
  };

  return (
    <>
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      <div className="container">
        <div className="header">
          <div className="header1">
            <h2>Select an account</h2>
          </div>
          <div className="header2">
            <table style={{ width: "inherit", padding: "5px 30px 30px 30px" }}>
              {data &&
                data?.map((item) => {
                  return (
                    <tr>
                      <td>
                        <div
                          className="user-section action"
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
