import { Avatar } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
export const UserChatWindow = (props) => {
  const { user, setSelectedUser } = props;
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <>
      <div>
        <div className="chat-window-default action">
          <div
            className="chat-window-section1"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div>
              <Avatar
                src={user?.profilepicture}
                sx={{ width: 25, height: 25 }}
              />
            </div>
            <div style={{ fontSize: "small", padding: "5px" }}>
              {user?.name}
            </div>
          </div>
          <div>
            {isExpanded ? (
              <KeyboardArrowUpIcon
                onClick={() => setIsExpanded(!isExpanded)}
                className="uparrow"
              />
            ) : (
              <ExpandMoreIcon
                onClick={() => setIsExpanded(!isExpanded)}
                className="uparrow"
              />
            )}
            <CloseIcon
              onClick={() => setSelectedUser([])}
              style={{ width: "20px", height: "20px" }}
            />
          </div>
        </div>
      </div>
      {isExpanded && <div style={{ height: "200px" }} class="chat"></div>}
    </>
  );
};
