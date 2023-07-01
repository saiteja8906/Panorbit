import { Avatar, Box, Modal, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
const Popup = (props) => {
  const { user, data, handleClose, open } = props;
  const navigate = useNavigate();
  const filteredRecords = data?.filter((item) => item?.name !== user.name);

  const pageRedirect = (item) => {
    navigate("/profile", { state: { user: item, data: data } });
  };

  const handleSignOut = () => {
    navigate("/home", { replace: true });
  };

  return (
    <div className="modal">
      <div className="popup-header">
        <div>
          <Avatar src={user?.profilepicture} sx={{ width: 60, height: 60 }} />
        </div>
        <div>
          <p className="popup-profile-name">{user.name}</p>
          <p className="popup-profile-email">{user.email}</p>
        </div>
        {/* <div>{user.email}</div> */}
        <div className="filteredUsers">
          {filteredRecords?.map((item) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  borderTop: "1px solid #e8e8e8",
                  padding: "5px",
                }}
                onClick={() => pageRedirect(item)}
              >
                <Avatar
                  src={item?.profilepicture}
                  sx={{ width: 25, height: 25 }}
                />
                <p className="popup-profiles">{item?.name}</p>
              </div>
            );
          })}
        </div>
        <div>
          <button className="signout" onClick={() => handleSignOut()}>Sign out</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
