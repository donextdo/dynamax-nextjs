import SiteGrid from '@/components/Gallery/SiteGrid';
import ImageLarge from '@/components/Gallery/ImageLarge';
import { cc } from '@/utility/css';
import Link from 'next/link';

export default function PhotoLarge({
  photo,
  priority,
}: {
  photo: any
  priority?: boolean
}) {
console.log("photo", photo);

  return (
    <SiteGrid
      contentMain={
        
        <ImageLarge
          className="w-max-[1080]"
          alt='title'
          href={`/image-viewer?src=${photo}`}
          src={photo}
          priority={priority}
        />
        }
    />
  );
};
