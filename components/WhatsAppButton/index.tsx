import React from "react";
import Image from "next/image";

function createWhatsAppLink(phoneNumber: string, message?: string): string {
  const baseLink = "https://wa.me/";
  const formattedNumber = phoneNumber.replace(/\s|-/g, "");
  let link = baseLink + formattedNumber;
  if (message) {
    link += "?text=" + encodeURIComponent(message);
  }
  return link;
}

const WhatsAppButton: React.FC<{ phoneNumber: string; message?: string }> = ({
  phoneNumber,
  message,
}) => {
  const whatsAppLink = createWhatsAppLink(phoneNumber, message);

  return (

      <Image
        src="/images/logo/whatsapp-logo-png-green-square.png"
        alt="logo"
        className="rounded-full fixed right-0 top-2/4"
        width={60}
        height={60}
        onClick={() => window.open(whatsAppLink, "_blank")}
      />
  
  );
};

export default WhatsAppButton;
