
import { servicesData } from './Sections/Data-sets/services-data';

function Service() {
  return (
    <div className='max-w-6xl mx-auto '>
      {servicesData.map((service, index) => (
        <div
          key={service.id}
          className={`flex items-center p-8 mt-8  ${index % 2 === 0 ? 'flex-row bg-[bg-[#F9F9F9]' : 'flex-row-reverse'}`}
        >
          <div className='flex-1'>
            <img
              src={service.image}
              alt={service.heading}
              className='w-40 h-auto max-w-md mx-auto'
            />
          </div>
          <div className='flex-1 px-6 '>
            <h2 className='text-xl font-bold mb-4'>{service.heading}</h2>
            <p className='mb-1 text-sm leading-6'>{service.para1}</p>
            <p className='mb-1 text-sm leading-6'>{service.para2}</p>
            <p className='text-sm leading-6'>{service.para3}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Service;
