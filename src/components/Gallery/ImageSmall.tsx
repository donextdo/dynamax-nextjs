import { IMAGE_SMALL_WIDTH } from "@/site";
import Image from "next/image";
import Link from "next/link";

export default function ImageSmall({
  className,
  src,
  href,
  alt,
}: {
  className?: string;
  src: string;
  href: string;
  alt: string;
}) {
  const aspectRatio = 1.5;
  return (
    <Link href={href} className="active:brightness-75">
      <Image
        {...{
          className,
          src,
          alt,
          // placeholder: "blur",
          width: IMAGE_SMALL_WIDTH,
          height: 288,
        }}
        style={{height: '288px',}}
      />
    </Link>
  );
}
