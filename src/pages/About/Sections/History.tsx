import { motion } from "framer-motion";

function History() {
  return (
    <div className="flex bg-[#f7f7f7]  pb-16 pt-16 mt-8">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-1 flex-col md:ml-20 ml-5 mmd:ml-32 pt-10  mmd:mr-24 mr-3 ">
          <span className="text-sm text-gray-500 mb-3">HISTORY</span>
          <h2 className="mb-8 text-4xl font-bold">Who are we?</h2>
          <p className=" leading-6 mb-2 tracking-wide ">
            Started in 2011,{" "}
            <strong className="text-[#41B98C] text-xl">Six30 Labs</strong>{" "}
            (previously Aspelec Technologies) is an amazing place where there is
            diversity of high quality talent to constantly learn from,
            collaborate and co-create.
          </p>
          <p className=" leading-6 mb-2 tracking-wide">
            Everything we do at{" "}
            <strong className="text-[#41B98C] text-xl">Six30 Labs</strong> is
            design centric. With experience from all parts of the world, you
            know you can’t go wrong.
          </p>
          <p className=" leading-6 mb-2 tracking-wide">
            We are a small team who see ourselves as creative problem solvers
            who striving to deliver unique products and services.
          </p>
          <p className="leading-6 mb-2 tracking-wide">
            Apart from creating world className mobile experiences, we offer
            integrated software solutions for large, medium and small projects.
            We have a suite of B2B web applications like HRMS, CRM, MIS etc.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default History;
