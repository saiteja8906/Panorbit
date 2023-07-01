import { Avatar } from "@mui/material";
import GoogleMapReact from "google-map-react";
import { SwitchProfile } from "./SwitchProfile";
export const AnyReactComponent = ({ text }) => <div>{text}</div>;
export const UserDetails = (props) => {
  const { user, data, togglePopup, setTogglePopup } = props;
  return (
    <>
      <div className="sectionHeader">
        <div>Profile</div>
        <SwitchProfile
          user={user}
          data={data}
          togglePopup={togglePopup}
          setTogglePopup={setTogglePopup}
        />
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
          <h3 style={{ color: "#aeaeae" }}>Company</h3>
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
          <h3 style={{ marginBottom: "0px", color: "#aeaeae" }}>Address</h3>
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
  );
};
