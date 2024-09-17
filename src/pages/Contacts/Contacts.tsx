import Locations from "../../components/Locations/Locations";
import map from "../../assets/contacts/map.png";

function Contacts() {
  return (
    <>
      <div
        className="flex justify-center items-center flex-col mt-14"
        style={{ backgroundImage: `url(${map})` }}
      >
        <Locations />
      </div>
      <div className="flex flex-1 items-center ml-20 mt-20">
        <h2>If you have any queries please feel free to leave us a message</h2>
      </div>
    </>
  );
}

export default Contacts;
