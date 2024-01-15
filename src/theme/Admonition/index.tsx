import React, { type ReactNode } from "react";
import clsx from "clsx";
import type { Props } from "@theme/Admonition";

function NoteIcon() {
  return (
    <svg viewBox="0 0 14 16">
      <path
        fillRule="evenodd"
        d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
      />
    </svg>
  );
}

function DangerIcon() {
  return (
    <svg viewBox="0 0 12 16">
      <path
        fillRule="evenodd"
        d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"
      />
    </svg>
  );
}

function CautionIcon() {
  return (
    <svg viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
      />
    </svg>
  );
}

type AdmonitionConfig = {
  iconComponent: React.ComponentType;
  className: string;
  label: ReactNode;
};

const AdmonitionConfigs: Record<string, AdmonitionConfig> = {
  note: {
    className:
      "bg-sky-100 border-sky-300 text-sky-800 dark:bg-sky-950 dark:border-sky-700 dark:text-sky-100",
    iconComponent: NoteIcon,
    label: "Note",
  },
  danger: {
    className:
      "bg-red-100 border-red-300 text-red-800 dark:bg-red-950 dark:border-red-700 dark:text-red-100",
    iconComponent: DangerIcon,
    label: "Danger",
  },
  warning: {
    className:
      "bg-yellow-100 border-yellow-500 text-yellow-800 dark:bg-yellow-950 dark:border-yellow-700 dark:text-yellow-100",
    iconComponent: CautionIcon,
    label: "Warning",
  },
};

function getAdmonitionConfig(type: string) {
  const config = (AdmonitionConfigs as { [key: string]: AdmonitionConfig })[
    type
  ];

  if (config) {
    return config;
  }

  return AdmonitionConfigs.note;
}

// Workaround because it's difficult in MDX v1 to provide a MDX title as props
// See https://github.com/facebook/docusaurus/pull/7152#issuecomment-1145779682
function extractMDXAdmonitionTitle(children: ReactNode): {
  mdxAdmonitionTitle: ReactNode | undefined;
  rest: ReactNode;
} {
  const items = React.Children.toArray(children);
  const mdxAdmonitionTitle = items.find(
    (item) =>
      React.isValidElement(item) &&
      (item.props as { mdxType: string } | null)?.mdxType ===
        "mdxAdmonitionTitle",
  );
  const rest = <>{items.filter((item) => item !== mdxAdmonitionTitle)}</>;
  return {
    mdxAdmonitionTitle,
    rest,
  };
}

function processAdmonitionProps(props: Props): Props {
  const { mdxAdmonitionTitle, rest } = extractMDXAdmonitionTitle(
    props.children,
  );
  return {
    ...props,
    title: props.title ?? mdxAdmonitionTitle,
    children: rest,
  };
}

export default function Admonition(props: Props) {
  const {
    children,
    type,
    title,
    icon: iconProp,
  } = processAdmonitionProps(props);

  const typeConfig = getAdmonitionConfig(type);
  const titleLabel = title ?? typeConfig.label;
  const { iconComponent: IconComponent } = typeConfig;
  const icon = iconProp ?? <IconComponent />;
  return (
    <div
      className={clsx(
        "flex flex-col py-2 px-3 not-prose border gap-1 [&+&]:mt-3 [&_a:hover]:text-gray-900 dark:[&_a:hover]:text-gray-50 [&_a>code]:font-bold [&_code]:text-base [&_code]:px-1.5 [&_a]:underline [&_p]:mb-2",
        typeConfig.className,
      )}
      role="alert"
    >
      <div className="flex gap-3 font-bold">
        <span className="flex w-4 fill-current [&>svg]:w-full" aria-hidden>
          {icon}
        </span>
        {titleLabel}
      </div>
      <div className="leading-relaxed">{children}</div>
    </div>
  );
}
