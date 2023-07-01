import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export const ChatBoxHeader = (props) => {
  const { toggleChatWindow, upArrow } = props;
  return (
    <div onClick={() => toggleChatWindow()}>
      <div className="chat-window-default action">
        <div className="chat-window-section1">
          <div>
            <ChatBubbleOutlineIcon style={{ marginRight: "5px" }} />
          </div>
          <div>Chats</div>
        </div>
        <div>
          {upArrow ? (
            <KeyboardArrowUpIcon className="uparrow" />
          ) : (
            <ExpandMoreIcon className="uparrow" />
          )}
        </div>
      </div>
    </div>
  );
};
