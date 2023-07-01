import { SwitchProfile } from "./SwitchProfile";
export const Gallery = (props) => {
  const { user, data, togglePopup, setTogglePopup } = props;
  return (
    <>
      <div className="sectionHeader">
        <div>Gallery</div>
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
