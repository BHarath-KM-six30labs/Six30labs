DegitalMarketing

function DesignAndDevelopment() {
  return (
    <div className="bg-[#f7f7f7]  text-white py-5">
      <div className="flex justify-center items-center gap-6">
        <span className="flex items-center gap-2">
          <hr className="w-8 border-[#41B98C] " />
          <span className="text-sm uppercase text-[#41B98C] font-semibold">
           Design &amp; Development
          </span>
          <hr className="w-8 border-[#41B98C] " />
        </span>
      </div>
      <div className="max-w-6xl mx-auto ">
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            className={`flex items-center py-10 mt-5 bg-white   ${
              index % 2 === 0 ? "flex-row " : "flex-row-reverse"
            }`}
          >
            <div className="flex-1">
              <img
                src={service.image}
                alt={service.heading}
                className="w-64 h-auto max-w-md mx-auto"
              />
            </div>
            <div className="flex-1 px-6 ">
              <h2 className="text-xl font-bold mb-4 bg-[#41ba8e] text-white p-2">
                {service.heading}
              </h2>
              <p className="mb-1 text-sm  text-black leading-8">
                {service.para1}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DesignAndDevelopment