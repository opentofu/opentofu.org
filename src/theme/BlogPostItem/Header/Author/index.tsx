import React from "react";
import Link, { type Props as LinkProps } from "@docusaurus/Link";

import type { Props } from "@theme/BlogPostItem/Header/Author";

function MaybeLink(props: LinkProps) {
  if (props.href) {
    return <Link {...props} />;
  }
  return <>{props.children}</>;
}

export default function BlogPostItemHeaderAuthor({ author }: Props) {
  const { name, title, url, imageURL, email } = author;
  const link = url || (email && `mailto:${email}`) || undefined;
  return (
    <div className="flex gap-4 items-center">
      {imageURL && (
        <MaybeLink href={link} className="shrink-0">
          <img src={imageURL} alt={name} className="w-14 h-14 rounded-full" />
        </MaybeLink>
      )}

      {name && (
        <div
          itemProp="author"
          itemScope
          itemType="https://schema.org/Person"
          className="flex flex-col"
        >
          <MaybeLink href={link} itemProp="url" className="font-bold">
            <span itemProp="name">{name}</span>
          </MaybeLink>

          {title && (
            <span itemProp="description" className="text-sm">
              {title}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
