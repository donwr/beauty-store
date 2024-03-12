const GiftsDropdown = () => {
  return (
    <div className="gifts-menu flex h-[20rem] flex-col bg-white">
      <div className="gifts-menu-wrapper flex-grow">
        <div className="flex h-full">
          <div className="flex h-full w-1/2 flex-col bg-[#FCFCFB] p-4">
            <div className="top relative w-full flex flex-grow items-end overflow-hidden bg-[#F2E4D5]">
              <img
                src="/images/gifts-vector-01.png"
                alt=""
                className="absolute left-0 top-0 z-[1]"
              />
              <div className="relative z-[2] w-full flex items-end justify-between h-full">
                <p className="p-4 text-lg font-medium uppercase text-black">
                  gifts for her
                </p>
                <img src="/images/gift-dropdown-01.png" alt="" className="flex h-full" />
              </div>
            </div>
            <div className="bottom w-full bg-white">
              <div className="flex p-4 text-base">Face&Body faves, accessories & more</div>
            </div>
          </div>
          <div className="flex h-full w-1/2 flex-col bg-[#FCFCFB] p-4">
            <div className="top relative flex flex-grow items-end overflow-hidden bg-[#F2E4D5]">
              <img
                src="/images/gifts-vector-02.png"
                alt=""
                className="absolute left-0 top-0 z-[1]"
              />
              <div className="relative z-[2] w-full flex items-end justify-between h-full">
                <p className="p-4 text-lg font-medium uppercase text-black">
                  gifts for him
                </p>
                <img src="/images/gift-dropdown-02.png" alt="" className="flex h-full" />
              </div>
            </div>
            <div className="bottom bg-white">
              <div className="flex p-4 text-base">Fashion, gadgets, sneakers. He&apos;d like!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftsDropdown;
