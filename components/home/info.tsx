const infoData = [
    {
        title: "Free shipping",
        description: "Mini dress with gather at the sides. Button fastening and slightly dropped shoulder line"
    },
    {
        title: "Secure payment",
        description: "Vertical panels and gather in combination with voluminous sleeves visually adjust the silhouette"
    },
    {
        title: "Best CEO quality",
        description: "Mini dress with gather at the sides. Button fastening and slightly "
    },
]

export const Info = () => {
  return (
    <section className="info hidden md:block border-b border-[#F0F0F0]">
        <div className="info-wrapper mx-auto max-w-[85.25rem] px-4 py-16 h-[20rem]">
            <div className="grid grid-cols-3 space-x-4 h-full">
                {infoData.map((item, index) =>{
                    return(
                        <div key={index} className="px-8 flex flex-col justify-center h-full">
                            <h3 className="text-center font-bold text-black text-sm mb-4">{item.title}</h3>
                            <p className="text-center text-[#7E7B77] font-light text-sm">{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}
