import LikedProductsModal from './modal';

const Liked = async () => {
  // const likedProductHandlesString = cookies().get('likedProducts')?.value;
  // console.log('Liked Product Handles String:', likedProductHandlesString);

  // let products: LikedItem[] = [];
  
  // if (likedProductHandlesString) {
  //   const likedProductIds: string[] = JSON.parse(likedProductHandlesString);
  //   console.log('Parsed Liked Product IDs:', likedProductIds);
    
  //   if (likedProductIds.length > 0) {
  //     products = await fetchProductsByIds(likedProductIds);
  //   }
  // }

  return <LikedProductsModal />;
};

export default Liked;
