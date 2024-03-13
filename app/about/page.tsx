const About = () => {
  return (
    <div className="about h-full">
      <section className="mx-auto grid h-full max-w-[85.25rem] grid-cols-1 pt-[2rem] md:pt-[5rem] md:grid-cols-12 px-4">
        <div className="first flex flex-col md:col-span-5">
          <h1 className="cormorant mb-[2rem] md:mb-[4rem] text-6xl">About us.</h1>
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
          <p className="mb-[2rem] md:mb-[4rem] text-sm">
            Garment production is an organized activity consisting of sequential processes such as
            laying, marking, cutting, stitching, checking, finishing, pressing and packaging. This
            is a process of converting raw materials into finished products. It will be difficult to
            maintain the industry if production is not, up to the mark if the preproduction phase of
            preparation of material is not properly carried out.
          </p>
          <div className="relative mb-[2rem] md:mb-[4rem] flex h-[24rem] w-full grow">
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
        <p className="relative z-[3] max-w-[24rem] bg-[#1D1D20] p-4 text-white -translate-y-[2rem] translate-x-[2rem] md:-translate-y-[100%] md:translate-x-[75%]">
          Our garment manufacturing do all the stuff you need to feel comfortable every day. We do
          the hard work, you look amazing… deal?
        </p>
        <img
          src="/images/about-section-02-03.png"
          alt=""
          className="hidden md:block absolute bottom-0 right-0 z-[3]"
        />
      </section>
    </div>
  );
};

export default About;
