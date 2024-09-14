
import Button from "../../../components/Button/Button";

function KnowMore() {
  return (
    <div className="px-32 py-10 flex gap-10">
      <div className="flex flex-1 flex-col">
        <h3 className="text-3xl font-semibold">
          Precision in Digital Mastery
          <br /> Aligning Technology with Purpose
        </h3>
        <p className=" leading-7 mt-3">
          While the technologies driving our digital world are crucial, simply
          having technical skills isn’t enough. The real value comes from
          merging these technological capabilities with strong business
          insights. True innovation occurs when technologies are applied in the
          right contexts.
        </p>
        <div className="py-6 ">
          <Button text={'Know More'}/>
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        {/* <h3>Our Expertise</h3> */}
        {/* We excel in combining innovative ideas with practical solutions to
        tackle complex challenges. Our team is empowered to think outside the
        box and drive creative problem-solving. Innovation is not just our
        passion—it's our profession. */}
        <img src="" alt="img1"  />
        <img src="" alt="img2" />

      </div>
    </div>
  );
}

export default KnowMore;
