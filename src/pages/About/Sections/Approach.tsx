
import approach1 from "../../../assets/About/Approach/approach-1.png";
import approach2 from "../../../assets/About/Approach/approach-2.png";
import approach3 from "../../../assets/About/Approach/approach-3.png";
import approach4 from "../../../assets/About/Approach/approach-4.png";
import approach5 from "../../../assets/About/Approach/approach-5.png";
import approach6 from "../../../assets/About/Approach/approach-6.png";

function Approach() {
  const approaches = [
    {
      id: 1,
      images: approach1,
      heading: "Unique Methodology",
      content: "In-depth study of client requirements",
    },
    {
      id: 2,
      images: approach2,
      heading: "Our Team",
      content: "Customized expertise to match requirements",
    },
    {
      id: 3,
      images: approach3,
      heading: "Partner",
      content:
        "Work as a partner, but your project always remains under your control",
    },
    {
      id: 4,
      images: approach4,
      heading: "Proficiency",
      content: "Deliver effective & efficient business solutions, quickly",
    },
    {
      id: 5,
      images: approach5,
      heading: "Proactive",
      content: "Optimize current system performance and added value",
    },
    {
      id: 6,
      images: approach6,
      heading: "Personable",
      content:
        "Build successful relationships with high level of customer satisfaction",
    },
  ];

  return (
    <div className="bg-[#41ba8e] p-10 mt-8">
      <h1 className="text-center text-4xl font-bold mb-10 text-white">Our Approach</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {approaches.map((approach) => (
          <div
            key={approach.id}
            className="flex flex-col items-center p-1 "
          >
            <img
              src={approach.images}
              alt={approach.heading}
              className="w-10 h-10 mb-4 "
            />
            <h2 className="text-xl font-bold text-white">{approach.heading}</h2>
            <p className="text-center text-white">{approach.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Approach;
