import { Avatar, Grid, ListItem } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { useLocation } from "react-router-dom";
import Popup from "./Popup";
export const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Profile = () => {
  const location = useLocation();
  const { user, data } = location?.state;
  const [seletecdItem, setSelectedItem] = useState({
    profile: true,
    posts: false,
    gallery: false,
    todo: false,
  });

  const [togglePopup, setTogglePopup] = useState(false);
  const [toggleChatPopup, setToggleChatPopup] = useState(false);
  const MenuHeaders = {
    profile: "Profile",
    posts: "Posts",
    gallery: "Gallery",
    todo: "ToDo",
  };

  const handleSelecteditem = (tabName) => {
    let obj = seletecdItem;
    Object.entries(obj)?.map(([key, value]) => {
      if (key === tabName) {
        obj[key] = true;
      } else {
        obj[key] = false;
      }
    });
    console.log(obj);
    setSelectedItem({ ...obj });
  };

  return (
    <>
      <div className="container2">
        <div className="sidebar activeindex">
          <span className="menuList">
            {Object.entries(MenuHeaders)?.map(([key, value]) => {
              return (
                <span
                  className={seletecdItem?.[key] ? "activeIndex menu" : "menu"}
                  onClick={() => handleSelecteditem(key)}
                >
                  {value}
                </span>
              );
            })}
          </span>
        </div>
        <div className="section">
          {console.log(seletecdItem)}
          {seletecdItem?.profile && (
            <>
              <div className="sectionHeader">
                <div>Profile</div>
                <div
                  style={{ display: "flex" }}
                  onClick={() => {
                    setTogglePopup(!togglePopup);
                  }}
                >
                  <Avatar
                    src={user?.profilepicture}
                    sx={{ width: 40, height: 40 }}
                  />
                  <p>{user?.name}</p>
                  {togglePopup && <Popup user={user} data={data} />}
                </div>
              </div>

              <div className="profileSection">
                <div className="firstSection">
                  <Avatar
                    style={{ marginLeft: "30%" }}
                    src={user?.profilepicture}
                    sx={{ width: 160, height: 160 }}
                  />
                  <h3>{user?.name}</h3>
                  <table style={{ marginLeft: "5%" }}>
                    <tr>
                      <td>Username:</td>
                      <td>{user?.username}</td>
                    </tr>
                    <tr>
                      <td>e-mail:</td>
                      <td>{user?.email}</td>
                    </tr>
                    <tr>
                      <td>Phone:</td>
                      <td>{user?.phone}</td>
                    </tr>
                    <tr>
                      <td>website:</td>
                      <td>{user?.website}</td>
                    </tr>
                  </table>
                  <div className="line"></div>
                  <h3>Company</h3>
                  <table>
                    <tr>
                      <td>Name:</td>
                      <td>{user?.company?.name}</td>
                    </tr>
                    <tr>
                      <td>catchPhrase:</td>
                      <td>{user?.company?.catchPhrase}</td>
                    </tr>
                    <tr>
                      <td>bs:</td>
                      <td>{user?.company?.bs}</td>
                    </tr>
                  </table>
                </div>
                <div className="secondSection">
                  <h3 style={{ marginBottom: "0px" }}>Address</h3>
                  <table style={{ marginLeft: "5%" }}>
                    <tr>
                      <td>street:</td>
                      <td>{user?.address?.street}</td>
                    </tr>
                    <tr>
                      <td>suite:</td>
                      <td>{user?.address?.suite}</td>
                    </tr>
                    <tr>
                      <td>city:</td>
                      <td>{user?.address?.city}</td>
                    </tr>
                    <tr>
                      <td>zipcode:</td>
                      <td>{user?.address?.zipcode}</td>
                    </tr>
                  </table>
                  <div style={{ height: "60%", width: "100%" }}>
                    <GoogleMapReact
                      bootstrapURLKeys={{ key: "" }}
                      defaultCenter={{
                        lat: +user?.address?.geo?.lat,
                        lng: +user?.address?.geo?.lng,
                      }}
                      defaultZoom={11}
                    >
                      <AnyReactComponent
                        lat={user?.address?.geo?.lat}
                        lng={user?.address?.geo?.lng}
                        text="My Marker"
                      />
                    </GoogleMapReact>
                  </div>
                </div>
              </div>
            </>
          )}
          {!seletecdItem?.profile && <div>Comming Soon</div>}
        </div>
      </div>
    </>
  );
};
export default Profile;
