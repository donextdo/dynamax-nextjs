import ImageSmall from '@/components/Gallery/ImageSmall';

export default function PhotoSmall({
  photo,
}: {
  photo: any
}) {
  return (
      <ImageSmall
        src={photo}
        href={`/image-viewer?src=${photo}`}
        className="lg:w-full h-[288px] object-contain"
        alt='title'
      />
  );
};
