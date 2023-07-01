import { Avatar } from "@mui/material";
import Popup from "./Popup";

export const SwitchProfile = (props) => {
    const { user, data, togglePopup, setTogglePopup } = props;
  return (
    <div
      style={{ display: "flex" }}
      className="action"
      onClick={() => {
        setTogglePopup(!togglePopup);
      }}
    >
      <Avatar
        src={user?.profilepicture}
        sx={{ width: 30, height: 30, margin: "10px" }}
      />
      <p>{user?.name}</p>
      {togglePopup && <Popup user={user} data={data} />}
    </div>
  );
};
