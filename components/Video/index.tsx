"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Empowering Your Business with AHO Tech."
          paragraph="AHO Tech empowers your business with custom software solutions. Our dedicated team collaborates closely with you to craft software that perfectly fits your unique needs. We prioritize a deep understanding of your business and its challenges. Our solutions are not just for today but designed to scale with your growth. We believe in rigorous testing, ensuring the reliability and robustness of your software."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src="/images/video/video.jpg" alt="video image" fill />
                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                  <button
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
      {/* <div className="relative overflow-hidden pt-4 ">
        <iframe
          src="https://share.synthesia.io/embeds/videos/ff11a1b4-981d-4e5a-a354-23e4b53138da"
          loading="lazy"
          title="Synthesia video player - Your AI video"
          allow="encrypted-media; fullscreen;"
          className="absolute left-0 top-0 m-0  w-full overflow-hidden border-none p-0 "
          // style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0; overflow:hidden;"
        ></iframe>
      </div> */}
      <div className="absolute bottom-0 left-0 right-0 z-[-1]"></div>
    </section>
  );
};

export default Video;
