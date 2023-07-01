import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserDetails } from "./UserDetails";
import { Gallery } from "./Gallery";
import { Posts } from "./Posts";
import { Todo } from "./Todo";
import { ChatWindow } from "./ChatWindow";

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location?.state?.user;
  const data = location?.state?.data;
  console.log(location?.state);
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

  const toggleChatWindow = () => {
    setToggleChatPopup(!toggleChatPopup);
  };

  const handleSelecteditem = (tabName) => {
    let obj = seletecdItem;
    Object.entries(obj)?.map(([key, value]) => {
      if (key === tabName) {
        obj[key] = true;
      } else {
        obj[key] = false;
      }
      return obj;
    });
    setSelectedItem({ ...obj });
  };

  useEffect(() => {
    if (!user || user?.length === 0) {
      navigate("/home");
    }
  }, [user, navigate]);

  return (
    <>
      {user && (
        <div className="container2">
          <div className="sidebar activeindex">
            <span className="menuList">
              {Object.entries(MenuHeaders)?.map(([key, value]) => {
                return (
                  <span
                    className={
                      seletecdItem?.[key]
                        ? "activeIndex menu action"
                        : "menu action"
                    }
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
          <div>
            <ChatWindow
              user={user}
              data={data}
              toggleChatPopup={toggleChatPopup}
              toggleChatWindow={toggleChatWindow}
            />
          </div>
        </div>
      )}
    </>
  );
};
export default Profile;
