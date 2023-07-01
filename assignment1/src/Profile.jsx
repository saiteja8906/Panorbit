import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { UserDetails } from "./UserDetails";
import { Gallery } from "./Gallery";
import { Posts } from "./Posts";
import { Todo } from "./Todo";
import MessageIcon from "@mui/icons-material/Message";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

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
  console.log(toggleChatPopup)
  return (
    <>
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
          <div id="chat-container" >
            {!toggleChatPopup && (
              <div onClick={() => toggleChatWindow()}> 
                <div className="chat-window-default">
                  <div className="chat-window-section1">
                    <div>
                      <MessageIcon />
                    </div>
                    <div>Chats</div>
                  </div>
                  <div>
                    <KeyboardArrowUpIcon className="uparrow" />
                  </div>
                </div>
              </div>
            )}
            {toggleChatPopup && (
              <div class="chat" >
                <div class="title" onClick={() => toggleChatWindow()}>This is the chat title</div>
                <div class="text" style={{ height: "250px" }}>
                  <p>Text 1</p>
                  <p>Text 2</p>
                  <p>Text 3</p>
                </div>
                <div class="chatbox">
                  <input type="text" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
