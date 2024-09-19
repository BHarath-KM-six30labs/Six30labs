import { useState } from "react";



function Carousel() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <h2 className="mt-5 text-2xl font-semibold">Our Happy Clients</h2>
      <div className="carousel w-full py-5">
        <div
          id="item1"
          className="carousel-item w-full text-center flex flex-col items-center"
        >
          <p className="px-4 md:px-20 lg:px-52 ">
            Your team's ideas, responsiveness, and support have been far beyond
            industry norms and our expectations. The new module has benefited us
            by streamlining business development activities of our company on a
            global scale.
          </p>
          <div className="flex flex-col items-center mt-4 px-4 md:px-20 lg:px-52">
            <p className="font-semibold">- Nishanth Kumar</p>
            <p className="text-gray-600 text-sm">Head-Business Development</p>
          </div>
        </div>
        <div
          id="item2"
          className="carousel-item w-full text-center flex flex-col items-center"
        >
          <p className="px-4 md:px-20 lg:px-52 ">
            Your team has been extremely friendly as well as prompt in all their
            responses.
          </p>
          <div className="flex flex-col items-center mt-4 px-4 md:px-20 lg:px-52">
            <p className="font-semibold">- Dr. Prabha Sivaraman</p>
            <p className="text-gray-600 text-sm">Akhila Healthcare</p>
          </div>
        </div>
        <div
          id="item3"
          className="carousel-item w-full text-center flex flex-col items-center"
        >
          <p className="px-4 md:px-20 lg:px-52 ">
            We approached Six30 Labs with a requirement for a premium website,
            SEO and SMM needs. The team at 630 has been ever so helpful in
            fulfilling all our needs and meeting {!toggle && <>...</>}
            <span
              onClick={() => setToggle(!toggle)}
              className={`text-[#41B98C] cursor-pointer ${
                toggle ? "hidden" : "block"
              }`}
            >
              Read more
            </span>
            {toggle && (
              <>
                all the criteria we had. We found it very comfortable and easy
                to communicate with the team and they were always easily
                available to clear our doubts, make amends to meet the picture
                we had in mind. We also had a good experience with their
                Partners at Create Studio who helped us with our products
                photography and videography. The team is very professional and
                they go to great lengths to meet all our requirements and are
                available almost 24x7 to answer our queries and help us out. A
                special shout out to Abraham and Kavya, whom we have closely
                worked with to build the brand that Thistle Bakeville has become
                today!
              </>
            )}
            <span
              onClick={() => setToggle(!toggle)}
              className={`text-[#41B98C] cursor-pointer ${
                toggle ? "block" : "hidden"
              }`}
            >
              Read Less
            </span>
          </p>
          <div className="flex flex-col items-center mt-4 px-4 md:px-20 lg:px-52">
            <p className="font-semibold">- Devika Sankar</p>
            <p className="text-gray-600 text-sm">Thistle Bakeville</p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
}

export default Carousel;
