import { cc } from "@/utility/css";

export default function SiteGrid({
  className,
  contentMain,
  contentSide,
  sideFirstOnMobile,
  sideHiddenOnMobile,
}: {
  className?: string;
  contentMain: JSX.Element;
  contentSide?: JSX.Element;
  sideFirstOnMobile?: boolean;
  sideHiddenOnMobile?: boolean;
}) {
  return (
    <div
      className={cc(
        className,
        "xl:grid",
        "grid-cols-1",
        "gap-x-4 lg:gap-x-6",
        "gap-y-4",
        "max-w-full",
      )}
    >
      <div
        className={cc(
          "col-span-1 md:col-span-9 w-fit",
          sideFirstOnMobile && "order-2 md:order-none"
        )}
      >
        {contentMain}
      </div>
      {contentSide && (
        <div
          className={cc(
            "col-span-1 md:col-span-3",
            sideFirstOnMobile && "order-1 md:order-none",
            sideHiddenOnMobile && "hidden md:block"
          )}
        >
          {contentSide}
        </div>
      )}
    </div>
  );
}
