import React from "react";
import { CiLocationOn } from "react-icons/ci";

const locations = [
  {
    city: "BENGALURU",
    address:
      "4F CA-02 BHIVE Platinum Indiranagar, No. 271, 6th Main Road, Indiranagar, Bengaluru",
    mapUrl:
      "https://www.google.co.in/maps/place/BHIVE+Workspace+Platinum+Indiranagar/@12.9732248,77.6380799,17z/data=!4m10!1m2!2m1!1s4F+CA-02+BHIVE+Platinum+Indiranagar,+No.+271,+6th+Main+Road,+Indiranagar,+Bengaluru!3m6!1s0x3bae17a87c89b05b:0x310e3359eaf1ee4f!8m2!3d12.9732196!4d77.6406548!15sClM0RiBDQS0wMiBCSElWRSBQbGF0aW51bSBJbmRpcmFuYWdhciwgTm8uIDI3MSwgNnRoIE1haW4gUm9hZCwgSW5kaXJhbmFnYXIsIEJlbmdhbHVydSIDiAEBkgEPY293b3JraW5nX3NwYWNl4AEA!16s%2Fg%2F11twc4hrk3?hl=en&amp;entry=ttu",
  },
  {
    city: "MELBOURNE",
    address: "17, Birdwood Court, Doreen, VIC 3754",
    mapUrl:
      "https://www.google.co.in/maps/place/17+Birdwood+Ct,+Doreen+VIC+3754,+Australia/@-37.6045499,145.1116469,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad64aeb17036919:0x150cee33dc318c38!8m2!3d-37.6045499!4d145.1138356",
  },
  {
    city: "VANCOUVER",
    address: "9630, Queens Place, Surrey, BC. Canada V3V 2S2",
    mapUrl:
      "https://www.google.co.in/maps/place/9630+Queens+Pl,+Surrey,+BC+V3V+2S2,+Canada/@49.177639,-122.9130233,17z/data=!3m1!4b1!4m5!3m4!1s0x5485d8f8f14a411d:0xb6a834b0eeb14f20!8m2!3d49.177639!4d-122.9108293",
  },
  {
    city: "LONDON",
    address: "27 Old Gloucester Street, LONDON, WC1N 3AX, UNITED KINGDOM.",
    mapUrl:
      "https://www.google.co.in/maps/place/27+Old+Gloucester+St,+London+WC1N+3AX,+UK/@51.5206343,-0.1243985,17z/data=!3m1!4b1!4m5!3m4!1s0x48761b36a38947e9:0x5267951cbc0ad430!8m2!3d51.5206343!4d-0.1222098",
  },
  {
    city: "UAE",
    address:
      "G094D, Technohub 1 Building, Ground Floor, Dubai Technology Entrepreneur Campus, Dubai Silicon Oasis, Dubai",
    mapUrl:
      "https://www.google.com/maps/place/49CG%2B69F+DSOA+Techno+Hub+2+-+Dubai+Silicon+Oasis+-+Industrial+Area+-+Dubai+-+United+Arab+Emirates/data=!4m2!3m1!1s0x3e5f65146c5a5243:0x280aee39b3121969?utm_source=mstt_1&amp;entry=gps&amp;coh=199385&amp;g_ep=CAESCjExLjEwNy4xMDEYACDXggMqGzQ3MDY4NjE1LCw0NzA4NzAxMiw0NzA3NTkxNUICSU4%3D",
  },
];

const Locations: React.FC = () => {
  return (
    <>
      <h3 className="mt-8 font-semibold text-center text-xl">GET DIRECTIONS</h3>
      <div className="flex flex-wrap justify-center gap-4 mt-5 p-4">
        {locations.map((location, index) => (
          <div
            key={index}
            className="flex flex-col bg-white shadow-lg border justify-center items-center rounded-lg p-4 max-w-64 h-[200px] transition transform ease-in-out hover:scale-105"
          >
            <CiLocationOn className="text-3xl mb-2 text-[#41B98C]" />
            <h3 className="font-semibold mb-2">{location.city}</h3>
            <p className="text-gray-600 flex-1 text-[13px] mb-4 text-center">
              {location.address}
            </p>
            <a
              href={location.mapUrl}
              className="text-[#41B98C] mt-auto transition transform ease-in-out hover:scale-95 uppercase text-[11px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              view on maps
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Locations;
