import Link from 'next/link';

const CategoriesData = [
  {
    image: '/images/category-01.png',
    title: 'Outerwear',
    shortDescription: 'Raincoats, sweaters, etc.',
    link: '/'
  },
  {
    image: '/images/category-02.png',
    title: 'Leather shoes',
    shortDescription: 'Shoes, sandals, etc.',
    link: '/'
  },
  {
    image: '/images/category-03.png',
    title: 'Light dresses',
    shortDescription: 'Evening, casual, home',
    link: '/'
  }
];

export const Categories = () => {
  return (
    <section className="categories">
      <div className="categories-wrapper mx-auto max-w-[85.25rem] px-4 py-16">
        <h2 className="mb-8 text-center text-2xl uppercase">Actual Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:space-x-4">
          {CategoriesData.map((item, index) => {
            return (
              <div key={index} className="group relative mb-8">
                {' '}
                {/* Added group class */}
                <div className="relative mb-8 h-[24rem] w-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute left-0 top-0 h-full w-full object-cover"
                  />
                  {/* Update Link/Button class to hide by default and only show on hover */}
                  <Link
                    href={item.link}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white px-8 py-4 text-sm font-bold uppercase text-white opacity-0 group-hover:opacity-100 hover:bg-white hover:text-black transition-all duration-300" // Added opacity and group-hover
                  >
                    explore
                  </Link>
                </div>
                <h3 className="mb-2 text-center font-bold">{item.title}</h3>
                <h4 className="text-center text-sm text-[#A1A1A1]">{item.shortDescription}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
