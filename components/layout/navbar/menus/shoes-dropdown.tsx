import { shoesDropdownBrands, shoesDropdownCategories } from '@/data/menu-dropdown-info';

export const ShoesDropdown = () => {
  return (
    <div className="flex h-[33.5rem] w-full flex-col">
      <div className="first overflow-hidden bg-white p-8">
        <div className="relative h-[12.5rem] w-full overflow-hidden bg-gradient-to-br from-[#C5C8D1] to-[#C3C7D6] p-4">
          <p className="text-2xl font-semibold italic tracking-widest text-black">
            Season Discount
          </p>
          <p className="text-8xl font-bold italic text-gray-400/50">sneakers</p>

          {/* Ellipse */}
          <img
            src="/images/shoes-dropdown-ellipse-01.png"
            alt=""
            className="absolute -top-[100%] left-[40%]"
          />
          <img
            src="/images/shoes-dropdown-ellipse-02.png"
            alt=""
            className="absolute -bottom-[70%] -right-[200px]"
          />
          <img src="/images/shoes-dropdown-sample.png" alt="" className="absolute right-0 top-0" />
        </div>
      </div>
      {/* This div now takes up the remaining space */}
      <div className="flex h-full bg-white">
        <div className="left flex h-full w-1/2 flex-col border-r border-neutral-100 p-8 ">
          <h4 className="mb-4 text-sm font-semibold uppercase text-black">categories</h4>
          <div className="choice-container flex h-full gap-x-4">
            <div className="grid grid-cols-2 gap-x-8 overflow-y-auto">
              {shoesDropdownCategories.map((category, index) => {
                return (
                  <div key={index} className="category-option flex items-center space-x-4 py-2">
                    <p className="text-sm">{category.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="right h-full w-1/2 flex-col p-8">
          <h4 className="mb-4 text-sm font-semibold uppercase text-black">brands</h4>
          <div className="grid grid-cols-2 gap-4 overflow-y-auto">
            {shoesDropdownBrands.map((brand, index) => {
              return (
                <div
                  key={index}
                  className="brand flex items-center "
                >
                  <img src={brand.image} alt={brand.alt} className="h-8 w-auto object-cover" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
