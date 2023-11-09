"use client";

import { cc } from "@/utility/css";
import { usePathname } from "next/navigation";
import SiteGrid from "./SiteGrid";
import ViewSwitcher from "@/photo/ViewSwitcher";
import AnimateItems from "./AnimateItems";

export default function Nav({ gallery }: { gallery?: any }) {
  return (
    <SiteGrid
      contentMain={
        <AnimateItems
          distanceOffset={10}
          items={[
            <div
              key="nav"
              className={cc(
                "flex items-center",
                "w-full min-h-[4rem]",
                "leading-none"
              )}
            >
              <div className="flex flex-grow items-center gap-4">
                <ViewSwitcher gallery={gallery} />
              </div>
            </div>,
          ]}
        />
      }
    />
  );
}
