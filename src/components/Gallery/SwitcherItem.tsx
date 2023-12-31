import Link from "next/link";
import { cc } from "@/utility/css";
import { ParsedUrlQueryInput } from "querystring";

export default function SwitcherItem({
  icon,
  href,
  onClick,
  active,
  noPadding,
}: {
  icon: JSX.Element;
  href?: { pathname?: string; query?: ParsedUrlQueryInput };
  onClick?: () => void;
  active?: boolean;
  noPadding?: boolean;
}) {
  const className = cc(
    "py-0.5 px-1.5",
    "cursor-pointer",
    "hover:bg-gray-50 active:bg-gray-100 active:text-gray-400",
    // eslint-disable-next-line max-len
    "dark:hover:bg-gray-950 dark:active:bg-gray-900/75 dark:active:text-gray-600",
    active ? "text-black dark:text-white" : "text-gray-300 dark:text-gray-700"
  );

  const renderIcon = () =>
    noPadding ? (
      icon
    ) : (
      <div className="w-[28px] h-[24px] flex items-center justify-center">
        {icon}
      </div>
    );

  let formattedHref = href;
  if (href && href.query) {
    const query: ParsedUrlQueryInput = {};
    for (const key in href.query) {
      if (typeof href.query[key] === "string") {
        query[key] = href.query[key] as string;
      }
    }
    formattedHref = { ...href, query };
  }

  return formattedHref ? (
    <Link {...{ href: formattedHref, className }}>{renderIcon()}</Link>
  ) : (
    <div {...{ onClick, className }}>{renderIcon()}</div>
  );
}
