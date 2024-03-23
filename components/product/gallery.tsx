'use client';
import { GridTileImage } from 'components/grid/tile';
import { createUrl } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'react-feather';
export function Gallery({ images }: { images: { src: string; altText: string }[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const imageSearchParam = searchParams.get('image');
  const imageIndex = imageSearchParam ? parseInt(imageSearchParam) : 0;

  const nextSearchParams = new URLSearchParams(searchParams.toString());
  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0;
  nextSearchParams.set('image', nextImageIndex.toString());
  const nextUrl = createUrl(pathname, nextSearchParams);

  const previousSearchParams = new URLSearchParams(searchParams.toString());
  const previousImageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;
  previousSearchParams.set('image', previousImageIndex.toString());
  const previousUrl = createUrl(pathname, previousSearchParams);

  return (
    <div className="h-full w-full flex-grow lg:flex lg:h-[40rem]">
      <div className="relative order-2 w-full h-[calc(100vh-12.5rem)] lg:flex-1 overflow-hidden lg:px-4 lg:h-full">
        {images.length > 1 ? (
          <>
            <Link
              aria-label="Previous product image"
              href={previousUrl}
              className="absolute left-8 top-1/2 z-[10] -translate-y-1/2 rounded-full border bg-white/40 p-1 backdrop-blur-md"
              scroll={false}
            >
              <ChevronLeft className="h-5 w-5 text-[#757679]" />
            </Link>

            <Link
              aria-label="Next product image"
              href={nextUrl}
              className="absolute right-8 top-1/2 z-[10]  -translate-y-1/2 rounded-full border bg-white/40 p-1 backdrop-blur-md"
              scroll={false}
            >
              <ChevronRight className="h-5 w-5 text-[#757679]" />
            </Link>
          </>
        ) : null}

        <div className="relative h-full w-full">
          {images[imageIndex] && (
            <Image
              className="relative object-cover"
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              alt={images[imageIndex]?.altText as string}
              src={images[imageIndex]?.src as string}
              priority={true}
            />
          )}
        </div>
      </div>
      <div className="order-1">
        {images.length > 1 ? (
          <ul className="no-scrollbar flex flex-shrink-0 overflow-scroll py-1 lg:mb-0 lg:block lg:space-y-4 space-x-4 lg:space-x-0">
            {images.map((image, index) => {
              const isActive = index === imageIndex;
              const imageSearchParams = new URLSearchParams(searchParams.toString());

              imageSearchParams.set('image', index.toString());

              return (
                <li key={image.src} className="h-20 w-20">
                  <Link
                    aria-label="Enlarge product image"
                    href={createUrl(pathname, imageSearchParams)}
                    scroll={false}
                    className="h-full w-full"
                  >
                    <GridTileImage
                      alt={image.altText}
                      src={image.src}
                      width={80}
                      height={80}
                      active={isActive}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
