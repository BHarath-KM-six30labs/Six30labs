import React from "react";


interface CardProps {
  title: string;
  children: React.ReactNode;
}


const Card: React.FC<CardProps> = ({ title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4 text-[#41B98C]">{title}</h2>
    <p className="text-sm leading-6">{children}</p>
  </div>
);

const AboutSection: React.FC = () => {
  return (
    <section className="p-6 md:p-12 lg:p-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto">
        <div className="space-y-6">
          <Card title="About Six30labs">
            At Six30labs, we bridge the gap between cutting-edge innovation
            and practical solutions by merging our deep expertise with a
            client-first approach. As a leading Software Development and
            Creative agency, our mission revolves around delivering premium
            quality products and solutions tailored to our clients’ needs.
            With over a decade of versatile experience and a solid reputation,
            we are committed to high performance and excellence, ensuring our
            solutions drive our clients' success at every step. Our team is
            empowered to think outside the box, fostering creativity to tackle
            complex problems and deliver innovative solutions.
          </Card>

          <Card title="Our Services">
            Six30labs offers a comprehensive suite of high-quality services
            designed to meet diverse client needs. Our offerings include
            Design Thinking strategy, Customer Journey Redesign, Digital
            Business Transformation, Integrated Suite, Data Analytics, IoT
            Edge, and more. Each service is crafted to provide exceptional
            value and drive meaningful results.
          </Card>

          <Card title="Our Promise">
            We are dedicated to providing our clients with premium products
            and solutions that align with their goals and requirements. Our
            passion lies in delivering the right solutions to elevate
            businesses and achieve global success. At Six30labs, we stand by
            our promise to ensure that every project contributes to our
            clients' growth and success.
          </Card>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
