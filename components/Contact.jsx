import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";

import Link from "next/link";

export default function Contact() {
  return (
    <div className="space-y-8 px-4 md:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-medium text-center">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 md:w-5/6 gap-x-8 gap-y-0 md:mx-auto justify-items-center justify-center items-center text-center">
        <div className="flex flex-col w-full justify-center items-center border m-4 rounded-md shadow-md p-4 space-y-3 hover:bg-primary-foreground">
          <FaPhoneVolume className="h-10 w-10" />
          <h1 className="text-lg font-medium">Phone</h1>
          <p className=" text-muted-foreground">+91 9491785809</p>
        </div>
        <div className="flex flex-col w-full justify-center items-center border m-4 rounded-md shadow-md p-4 space-y-3 hover:bg-primary-foreground">
          <SiGmail className="h-10 w-10" />
          <h1 className="text-lg font-medium">Mail</h1>
          <Link
            className="text-primary"
            href="mailto:'aadhyanthaacademy@gmail.com'"
          >
            aadhyanthaacademy@gmail.com
          </Link>
        </div>
        <div className="flex flex-col w-full justify-center items-center border m-4 rounded-md shadow-md p-4 space-y-3 hover:bg-primary-foreground">
          <FaSquareWhatsapp className="h-10 w-10" />
          <h1 className="text-lg font-medium">Whatsapp</h1>
          <Link href="https://wa.me/9491785809" className=" text-primary">
            +91 9491785809
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:w-1/2 mx-auto justify-center items-center border rounded-md shadow-md p-4 space-y-3 hover:bg-primary-foreground">
        <FaMapLocationDot className="h-10 w-10" />
        <h1 className="text-lg font-medium">Location</h1>
        <Link
          href="https://www.google.com/maps/place/Aadhyantha+yoga+studio/@13.0308267,77.5501274,15z/data=!4m6!3m5!1s0x3bae3d0e5083297f:0x57fe837661260660!8m2!3d13.0345896!4d77.5538932!16s%2Fg%2F11t2qrckkt?entry=ttu"
          className="text-center text-primary"
        >
          12,Srinivas Murthy Road,opp. JP Park, Brindavan Nagar, Mathikere,
          Bengaluru, Karnataka 560054
        </Link>
      </div>
    </div>
  );
}
