export const Brands = () => {
  const brandImages = Array.from({ length: 6 }, (_, i) => `/images/brand-0${i + 1}.png`);

  return (
    <section className="brands">
      <div className="brands-wrapper mx-auto max-w-[85.25rem] px-4 py-16">
        <h2 className="mb-8 text-center text-2xl uppercase">Our Brands</h2>
        <div className="flex flex-col md:flex-row md:justify-between items-center flex-wrap gap-4">
          {brandImages.map((imagePath, index) => (
            <div key={index} className="p-4">
              <img
                src={imagePath}
                alt={`Brand ${index + 1}`}
                className="w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
