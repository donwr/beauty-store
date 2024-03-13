import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'react-feather';

const About = () => {
  return (
    <div className="about h-full">
      <section className="mx-auto grid h-full max-w-[85.25rem] grid-cols-1 px-4 pt-[2rem] md:grid-cols-12 md:pt-[5rem]">
        <div className="first flex flex-col md:col-span-5">
          <h1 className="cormorant mb-[2rem] text-6xl md:mb-[4rem]">About us.</h1>
          <div className="relative min-h-[20rem] flex-grow pr-8 pt-8 max-sm:mb-[2rem]">
            <img
              src="/images/about-us.png"
              alt=""
              className="object-center-+ absolute left-0 top-0 h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="hidden md:col-span-2 md:block"></div>
        <div className="second md:col-span-5">
          <p className="mb-[2rem] text-sm md:mb-[4rem]">
            Garment production is an organized activity consisting of sequential processes such as
            laying, marking, cutting, stitching, checking, finishing, pressing and packaging. This
            is a process of converting raw materials into finished products. It will be difficult to
            maintain the industry if production is not, up to the mark if the preproduction phase of
            preparation of material is not properly carried out.
          </p>
          <div className="relative mb-[2rem] flex h-[24rem] w-full grow md:mb-[4rem]">
            <img
              src="/images/about-us-02.png"
              alt=""
              className="absolute left-0 top-0 h-full w-full object-cover object-center"
            />
          </div>
          <p className="mb-8 text-sm">
            Ready to wear apparel or garment manufacturing involves many processing steps, beginning
            with the idea or design concept and ending with a finished product. Apparel
            manufacturing process involves Product Design, Fabric Selection and Inspection,
            Patternmaking, Grading, Marking, Spreading, Cutting, Bundling, Sewing, Pressing or
            Folding, Finishing and Detailing, Dyeing and Washing, QC etc.
          </p>
        </div>
      </section>
      <section className="relative flex h-screen flex-col justify-between bg-[#1D1D20] pt-[4rem]">
        <img
          src="/images/about-background-vector.png"
          alt=""
          className="absolute left-1/2 z-[1] -translate-x-1/2"
        />
        <p className="relative z-[3] mx-auto max-w-[24rem] bg-[#1D1D20] p-4 text-white">
          LOOMI is designed for the most memorable moments of your life so you can feel yourself
          unique
        </p>
        <img
          src="/images/about-section-02-01.png"
          alt=""
          className="absolute right-[20%] top-0 z-[2]"
        />
        <p className="cormorant absolute left-1/2 top-1/2 z-[4] -translate-x-1/2 -translate-y-1/2 text-7xl text-white">
          Our <span className="cormorant text-[#AEA094]">ideology</span> is about comfort and
          aesthetics
        </p>
        <img
          src="/images/about-section-02-02.png"
          alt=""
          className="absolute bottom-0 left-0 z-[2]"
        />
        <p className="relative z-[3] max-w-[24rem] -translate-y-[2rem] translate-x-[2rem] bg-[#1D1D20] p-4 text-white md:-translate-y-[100%] md:translate-x-[75%]">
          Our garment manufacturing do all the stuff you need to feel comfortable every day. We do
          the hard work, you look amazing… deal?
        </p>
        <img
          src="/images/about-section-02-03.png"
          alt=""
          className="absolute bottom-0 right-0 z-[3] hidden md:block"
        />
      </section>
      <section className="mx-auto grid max-w-[85.25rem] grid-cols-1 px-4 py-16 md:grid-cols-12">
        <div className="socials col-span-1 flex h-full justify-center md:col-span-2 md:flex-col">
          <div className="flex md:block space-x-4 md:space-x-0 pb-8 md:space-y-4">
            <Twitter className="h-5 w-5 text-black" />
            <Instagram className="h-5 w-5 text-black" />
            <Facebook className="h-5 w-5 text-black" />
          </div>
        </div>
        <div className="image-block col-span-1 md:col-span-3 max-sm:mb-8">
          <img src="/images/about-section-03-01.png" alt="" className="mx-auto" />
        </div>
        <div className="col-span-1 hidden md:block"></div>
        <div className="details col-span-1 space-y-16 md:col-span-4">
          <p className="mb-8 text-sm text-[#222326]">
            We&apos;re not happy till you are. So we continually strive to make your experience with
            us as seamless as possible. Or in real speak, we're on it with free delivery and returns
            (Ts&Cs and country exclusions apply).
          </p>

          <div className="line h-[2px] w-[4.5rem] bg-[#E09C7F]"></div>

          <div className="space-y-4">
            <div className="group flex space-x-8">
              <Phone className="h-5 w-5 text-[#222326]" />
              <p className="text-sm">+1 148 928 42 43</p>
            </div>
            <div className="group flex space-x-8">
              <Mail className="h-5 w-5 text-[#222326]" />
              <p className="text-sm">info@loomi.com</p>
            </div>

            <div className="group flex space-x-8">
              <MapPin className="h-5 w-5 text-[#222326]" />
              <p className="text-sm">2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
            </div>
          </div>
        </div>

        <div className="map col-span-1 md:col-span-12">
          <img
            src="/images/about-section-03-02.png"
            alt=""
            className="w-full object-cover py-16 "
          />
        </div>
      </section>
    </div>
  );
};

export default About;
