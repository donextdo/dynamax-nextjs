import PhotoSmall from './PhotoSmall';
import { cc } from '@/utility/css';
import AnimateItems from '@/components/Gallery/AnimateItems';

export default function PhotoGrid({
  gallery,
  selectedPhoto,
  fast,
  animate = true,
  animateOnFirstLoadOnly,
  staggerOnFirstLoadOnly = true,
  additionalTile,
  small,
}: {
  gallery: any
  selectedPhoto?: any
  fast?: boolean
  animate?: boolean
  animateOnFirstLoadOnly?: boolean
  staggerOnFirstLoadOnly?: boolean
  additionalTile?: JSX.Element
  small?: boolean
}) {

  // Ensure gallery is an array before using map function
  if (!Array.isArray(gallery)) {
    return <div>Error: Invalid gallery data</div>; 
  }

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '0.5rem',
    width:'max-content',
  };

  return (
    <div className="space-y-4">
      <AnimateItems
        className={cc(
          'grid gap-1',
          small
            ? 'grid-cols-3 xs:grid-cols-6'
            : 'grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4',
          'items-center',
        )}
        customStyles={gridStyles} // Pass custom styles as a prop
        type={animate === false ? 'none' : undefined}
        duration={fast ? 0.3 : undefined}
        staggerDelay={0.075}
        distanceOffset={40}
        animateOnFirstLoadOnly={animateOnFirstLoadOnly}
        staggerOnFirstLoadOnly={staggerOnFirstLoadOnly}
        items={gallery.map((photo: any, index:number) =>
          <PhotoSmall
            key={index}
            photo={photo}
          />).concat(additionalTile ?? [])}
      />
    </div>
  );
};
