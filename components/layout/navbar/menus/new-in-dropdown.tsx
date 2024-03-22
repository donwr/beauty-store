import { newInDropdownCategories, newInDropdownSeasons } from '@/data/menu-dropdown-info';

export const NewInDropdown = () => {
  return (
    <div className="flex h-[15rem] w-full flex-col">

    <div className="flex h-full bg-white">
      <div className="left flex h-full w-1/2 flex-col border-r border-neutral-100 p-8 ">
        <h4 className="mb-4 text-sm font-semibold uppercase text-black">categories</h4>
        <div className="choice-container flex h-full gap-x-4">
          <div className="grid grid-cols-2 gap-x-8 overflow-y-auto">
            {newInDropdownCategories.map((category, index) => {
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
          {newInDropdownSeasons.map((season, index) => {
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
  )
}
