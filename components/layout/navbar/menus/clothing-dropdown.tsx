import { clothingDropdownCategories, clothingDropdownSeasons } from '@/data/menu-dropdown-info';

export const ClothingDropdown = () => {
  return (
    <div className="flex h-[36rem] w-full flex-col">
      <div className="first overflow-hidden bg-white px-8 py-4">
        <div className="relative h-[12.5rem] w-full overflow-hidden bg-gradient-to-br from-[#C5C8D1] to-[#C3C7D6] p-4">
          <p className="text-lg font-semibold italic tracking-widest text-black">
            / Autumn Sale
          </p>
          <p className="leading-[3rem] text-8xl font-bold italic text-gray-400/50">warmth</p>
          <p className="text-xs pt-6">Up to 50% discount with “SEASON2021” promocode </p>
          {/* Ellipse */}
          <img
            src="/images/shoes-dropdown-ellipse-02.png"
            alt=""
            className="absolute -top-[100%] left-[40%]"
          />
          <img src="/images/clothing-dropdown-sample.png" alt="" className="absolute right-0 top-0" />
        </div>
      </div>
      {/* This div now takes up the remaining space */}
      <div className="flex h-full bg-white">
        <div className="left flex h-full w-1/2 flex-col border-r border-neutral-100 p-8 ">
          <h4 className="mb-4 text-sm font-semibold uppercase text-black">categories</h4>
          <div className="choice-container flex h-full gap-x-4">
            <div className="grid grid-cols-2 gap-x-8 overflow-y-auto">
              {clothingDropdownCategories.map((category, index) => {
                return (
                  <div key={index} className="category-option flex items-center space-x-4 py-2">
                    <p className="text-xs">{category.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="right h-full w-1/2 flex-col p-8">
          <h4 className="mb-4 text-sm font-semibold uppercase text-black">brands</h4>
          <div className="flex flex-col space-y-4">
            {clothingDropdownSeasons.map((season, index) => {
              return (
                <div
                  key={index}
                  className="brand h-[4rem] w-full flex items-center bg-[#FAFAFA]"
                >
                  <img src={season.image} alt={season.alt} className="h-full w-auto object-cover" />
                  <div className="content flex justify-center items-center w-full">
                    <p>{season.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
