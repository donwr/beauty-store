export const Discount = () => {
  return (
    <section className="discount pt-16 pb-0 md:pb-16 h-full w-full md:h-auto">
      <div className="discount-wrapper relative mx-auto max-w-[85.25rem] bg-[#F2E4D5] px-4 py-16 md:flex md:px-0 md:py-0">
        <img
          src="/images/discount-01.png"
          alt="background svg"
          className="absolute -left-[40%] top-0 z-[2] md:left-20"
        />
        <div className="image-wrap relative mx-auto aspect-square w-[80%] md:order-2 md:h-[24rem] md:w-[30%]">
          <img
            src="/images/discount-02.png"
            alt="woman in comfortable clothing"
            className="absolute left-0 top-0 z-[1] h-full w-full object-cover object-center"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <p className="pb-4 pt-8 text-center uppercase tracking-widest text-black">get 20% off</p>
          <p className="text-center text-xs text-[#818181]">Leave your email and get a discount</p>
          <div className="mt-4 flex justify-center">
            <form className="mx-auto flex w-full max-w-[400px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 text-sm text-black placeholder-[#818181] focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-[#F4A482] px-6 uppercase text-white transition-colors duration-200 ease-in-out hover:bg-[#e0916f]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
