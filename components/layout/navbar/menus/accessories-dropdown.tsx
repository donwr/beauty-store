import { accessoryDropdownCategories, accessoryDropdownSeasons } from '@/data/menu-dropdown-info';

export const AccessoriesDropdown = () => {
  return (
    <div className="flex h-[36rem] w-full flex-col">
      <div className="overflow-hidden bg-white px-8 py-4">
        <div className="relative h-[12.5rem] w-full overflow-hidden bg-gradient-to-br from-[#C5C8D1] to-[#C3C7D6] p-4">
          <p className="text-lg font-semibold italic tracking-widest text-black">/ Autumn Sale</p>
          <p className="text-8xl font-bold italic leading-[3rem] text-gray-400/50">warmth</p>
          <p className="pt-6 text-xs">Up to 50% discount with “SEASON2021” promocode </p>

          <img
            src="/images/accessories-dropdown.png"
            alt=""
            className="absolute left-0 top-0 z-[1] h-full w-full object-cover"
          />
          <img
            src="/images/accessories-text-01.png"
            alt=""
            className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2  -translate-y-1/2 object-cover"
          />

          <img
            src="/images/accessories-text-02.png"
            alt=""
            className="absolute left-1/2 top-[30%] z-[3] -translate-x-1/2  -translate-y-1/2 object-cover"
          />
        </div>
      </div>

      <div className="flex h-full bg-white">
        <div className="left flex h-full w-1/2 flex-col border-r border-neutral-100 p-8 ">
          <h4 className="mb-4 text-sm font-semibold uppercase text-black">categories</h4>
          <div className="choice-container flex h-full gap-x-4">
            <div className="grid grid-cols-2 gap-x-8 overflow-y-auto">
              {accessoryDropdownCategories.map((category, index) => {
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
          <h4 className="mb-4 text-sm font-semibold uppercase text-black">shop seasons</h4>
          <div className="flex flex-col space-y-4">
            {accessoryDropdownSeasons.map((season, index) => {
              return (
                <div
                  key={index}
                  className="cursor pointer flex h-[4rem] w-full items-center bg-[#FAFAFA] transition-all duration-300 hover:bg-[#d8d8d8]"
                >
                  <img src={season.image} alt={season.alt} className="h-full w-auto object-cover" />
                  <div className="content flex w-full items-center justify-center">
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
