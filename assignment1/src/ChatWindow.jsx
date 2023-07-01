import { Avatar } from "@mui/material";
import { ChatBoxHeader } from "./ChatBoxHeader";
import { useState } from "react";
import { UserChatWindow } from "./UserChatWindow";

export const ChatWindow = (props) => {
  const { user, data, toggleChatPopup, toggleChatWindow } = props;
  const [selectedUser, setSelectedUser] = useState([]);
  console.log(selectedUser);
  const otherUsers = data?.filter((item1) => user?.name !== item1?.name);
  return (
    <>
      <div id="chat-container">
        {!toggleChatPopup && (
          <ChatBoxHeader toggleChatWindow={toggleChatWindow} upArrow={true}/>
        )}
        {toggleChatPopup && (
          <div>
            <ChatBoxHeader toggleChatWindow={toggleChatWindow} upArrow={false}/>
            <div class="chat">
              {otherUsers?.map((item) => {
                return (
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        padding: "2px 2px 2px 10px",
                      }}
                      onClick={() => {
                        setSelectedUser(item);
                      }}
                      className="action"
                    >
                      <Avatar
                        src={item?.profilepicture}
                        sx={{ width: 30, height: 30, marginRight: "5px" }}
                      />
                      <p className="popup-profiles">{item?.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      {selectedUser && Object?.keys(selectedUser)?.length > 0 && (
        <div id="user-chat-container">
          <UserChatWindow
            user={selectedUser}
            setSelectedUser={setSelectedUser}
          />
        </div>
      )}
    </>
  );
};
