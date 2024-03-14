// components/likes/OpenLikes.js or .tsx
import { Heart } from 'react-feather';
import LikesCount from './likes-count'; // Make sure to import the new component

export default function OpenLikes({ className }: { className?: string }) {
  return (
    <div className="relative flex items-center justify-center">
      <Heart className="h-4 text-black hover:scale-110" />
      <LikesCount />
    </div>
  );
}
