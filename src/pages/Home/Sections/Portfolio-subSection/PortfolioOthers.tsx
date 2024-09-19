import { others } from "./Data-sets/others";
interface CardProps {
  name: string;
  details: string;
  details1?: string;
  image: string;
}
const Card = ({ name, details, details1, image }: CardProps) => (
  <div className="border bg-white shadow-lg rounded-lg overflow-hidden p-4">
    <img src={image} alt={name} className="w-full " />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2 ">{name}</h3>
      <p className="text-gray-700 text-base leading-7 tracking-wide">
        {details}
      </p>
      <p className="text-gray-700 text-base leading-7 tracking-wide">
        {details1}
      </p>
    </div>
  </div>
);

function PortfolioOthers() {
  return (
    // <>
    //   <div className="mt-8 bg-[#ededed] md:px-32 px-5  py-3">
    //     <h3 className="text-2xl font-semibold mt-10 uppercase">others</h3>
    //     <div
    //       className="p-6 flex flex-col gap-5
    // "
    //     >
    //       {others.map((item, index) => (
    //         <Card
    //           key={index}
    //           name={item.name}
    //           details={item.details}
    //           details1={item.details1}
    //           image={item.image}
    //         />
    //       ))}
    //     </div>
    //   </div>
    // </>
    <div className="mt-8 bg-[#ededed] px-4 sm:px-8 md:px-16 pmd:px-32  py-3">
      <h3 className="text-xl sm:text-2xl font-semibold mt-10 uppercase ">Others</h3>
      <div className="grid grid-cols-1  gap-6 mt-8">
        {others.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            details={item.details}
            details1={item.details1}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default PortfolioOthers;
