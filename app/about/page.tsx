import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Your Trusted Partner in Building Exceptional Software"
        description="Founded in 2019 by a group of passionate software developers, AHO Tech was born from a vision to bridge the gap between cutting-edge technology and real-world business needs. Today, we're a team dedicated to empowering clients wit."
      />
       <Breadcrumb
        pageName="Culture and Values"
        description="At AHO Tech, we foster a collaborative and results-oriented environment where innovation meets dedication. We value open communication, continuous learning, and a commitment to exceeding client expectations."
      />
       <Breadcrumb
        pageName="Work Process"
        description="A We take a client-centric approach to software development, ensuring close collaboration at every step. Our process involves in-depth consultation, meticulous planning, agile development, and ongoing support and maintenance.."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
