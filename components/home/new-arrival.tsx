import Link from 'next/link';

export const NewArrival = () => {
  return (
    <section className="new-arrival bg-[#2D2A27] overflow-hidden">
      <div className="new-arrival-wrapper relative mx-auto max-w-[85.25rem] px-4 py-16 md:min-h-[40rem] overflow-hidden md:overflow-visible">
        <div className="relative md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-[3]">
          <h2 className="cormorant  mb-4 text-center text-3xl uppercase text-[#CCBDB2] ">
            <span className="cormorant text-6xl md:text-8xl">new</span>
            <br className="md:hidden" />
            <span className="cormorant text-6xl md:text-8xl">arrival</span>
          </h2>
          <p className="text-center text-sm font-bold uppercase text-[#D4CFCB]">fall 2022</p>
        </div>
        <img
          src="/images/new-arrival.png"
          alt="woman in comfortable clothes"
          className="relative md:absolute md:left-1/2 md:bottom-0 md:-translate-x-1/2 z-[2] mx-auto py-8 md:py-0 md:h-[35rem]"
        />
        <p className="cormorant absolute left-[30%] top-[40%] hidden -translate-x-1/2 text-[120px] font-bold text-[#CCBDB2]  opacity-[2%] md:block">
          NEW A
        </p>
        <div className="text-center">
          <Link
            href="/search/new-arrivals"
            className="inline-block md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-20 bg-white px-8 py-4 text-sm uppercase text-black z-[4]"
          >
            Explore
          </Link>
        </div>
        <img
          src="/images/new-arrival-mask-01.png"
          alt="woman in comfortable clothes"
          className=" block absolute -left-[300px] bottom-[-300px] z-[1]"
        />
                <img
          src="/images/new-arrival-mask-02.png"
          alt="woman in comfortable clothes"
          className=" block absolute -top-[300px] -right-[300px] z-[1]"
        />
      </div>
    </section>
  );
};
