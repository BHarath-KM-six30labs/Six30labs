
import { FaUser, FaPhoneAlt, FaEnvelope, FaRegEdit } from 'react-icons/fa';

function ContactForm() {
  return (
    <div className="max-w-md mx-auto p-4">
      <form className="space-y-4">
       
        <label className="flex items-center gap-2 border rounded p-2">
          <FaUser className="text-gray-500" />
          <input
            type="text"
            className="grow border-none p-2 outline-none"
            placeholder="Name"
          />
        </label>

      
        <label className="flex items-center gap-2 border rounded p-2">
          <FaPhoneAlt className="text-gray-500" />
          <input
            type="text"
            className="grow border-none p-2 outline-none"
            placeholder="Contact"
          />
        </label>

        
        <label className="flex items-center gap-2 border rounded p-2">
          <FaEnvelope className="text-gray-500" />
          <input
            type="email"
            className="grow border-none p-2 outline-none"
            placeholder="Email"
          />
        </label>

       
        <label className="flex flex-col gap-2 border rounded p-2">
          <FaRegEdit className="text-gray-500" />
          <textarea
            className="border-none p-2 outline-none resize-none"
            placeholder="Message"
            rows={4}
          />
        </label>

        
        <button
          type="submit"
          className="w-full bg-[#41B98C] text-white py-2 rounded hover:bg-[#36a77c] transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
