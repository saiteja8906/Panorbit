import { SwitchProfile } from "./SwitchProfile";
export const Posts = (props) => {
  const { user, data, togglePopup, setTogglePopup } = props;
  return (
    <>
      <div className="sectionHeader">
        <div>Posts</div>
        <SwitchProfile
          user={user}
          data={data}
          togglePopup={togglePopup}
          setTogglePopup={setTogglePopup}
        />
      </div>

      <div className="commingSoon">Comming Soon</div>
    </>
  );
};
