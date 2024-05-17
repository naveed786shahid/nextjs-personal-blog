import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Passionate professionals dedicated to your success.24/7 support by phone, email, or chat."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
