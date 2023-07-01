import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { UserDetails } from "./UserDetails";
import { Gallery } from "./Gallery";
import { Posts } from "./Posts";
import { Todo } from "./Todo";

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
          {seletecdItem?.profile && (
            <UserDetails
              user={user}
              data={data}
              togglePopup={togglePopup}
              setTogglePopup={setTogglePopup}
            />
          )}
          {seletecdItem?.gallery && (
            <Gallery
              user={user}
              data={data}
              togglePopup={togglePopup}
              setTogglePopup={setTogglePopup}
            />
          )}
          {seletecdItem?.posts && (
            <Posts
              user={user}
              data={data}
              togglePopup={togglePopup}
              setTogglePopup={setTogglePopup}
            />
          )}
          {seletecdItem?.todo && (
            <Todo
              user={user}
              data={data}
              togglePopup={togglePopup}
              setTogglePopup={setTogglePopup}
            />
          )}
        </div>
      </div>
    </>
  );
};
export default Profile;
