import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="hero relative h-[40rem] overflow-x-hidden bg-white md:h-full md:px-8 md:py-16">
      <img
        src="/images/home-hero-bg-lines.svg"
        alt="background svg"
        className="absolute -right-10 top-0 z-[1] h-[10rem] w-auto lg:right-2 lg:top-5"
      />
      <div className="hero-wrapper relative mx-auto h-full w-full max-w-[85.25rem] overflow-hidden bg-[#F0F0F0] md:min-h-[36rem]">
        <img
          src="/images/home-hero.png"
          alt="woman making artistic pose"
          className="absolute right-0 top-[4rem] z-[0] h-[19rem] w-auto sm:right-1/2 sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-1/2"
        />

        <img
          src="/images/home-hero-bg-ellipse.png"
          className="absolute -left-40 bottom-0 z-[4] lg:-bottom-24 lg:left-[55%]"
        />

        <div className="cormorant absolute left-[2rem] top-[8rem] z-[2] text-[4rem] uppercase text-[#857559] lg:left-[50%] lg:top-[35%] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:text-[8rem]">
          <h1 className="font-light leading-[3.5rem] lg:leading-[7rem]">
            season <br />
            <span className="ml-[8rem] font-bold italic lg:ml-[24rem]">sale</span>
          </h1>
        </div>
        <div className="block h-[24rem] w-full"></div>
        <button className="relative mx-auto mt-8 h-[5rem] w-full">
          <img
            src="/images/hero-ellipse.svg"
            className="absolute -top-4 left-1/2 z-[3] -translate-x-1/2 md:top-16"
          />
          <span className="absolute -top-1 left-1/2 z-[3] -translate-x-1/2 md:top-20">
            shop now
          </span>
        </button>
        <div className="flex justify-center sm:justify-end">
          <img
            src="/images/home-hero-02.png"
            className="hero-image-position flex h-[8rem] w-full object-cover sm:w-auto md:absolute md:bottom-0 md:right-0 md:h-[12rem]"
          />
        </div>

        <div className="hidden lg:block shop-by absolute bottom-20 left-10">
          <h3 className="uppercase font-bold">Shop By</h3>
          <div className="mt-2 links text-sm text-gray-800 space-y-2">
            <Link href="/" className="block">All</Link>
            <Link href="/" className="block">New In</Link>
            <Link href="/" className="block">Bags & Purses</Link>
            <Link href="/" className="block">Belts</Link>
            <Link href="/" className="block">Hair Accessories</Link>
            <Link href="/" className="block">Hats</Link>
            <Link href="/" className="block">Jewelry</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
