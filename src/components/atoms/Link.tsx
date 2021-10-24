import * as NextLink from "next/link";

export type Props = {
  newTab: boolean;
  text: string;
  href: string;
  styleFormat?: string;
};

export const Link = ({ newTab, text, href, styleFormat }: Props) => {
  return (
    <NextLink.default href={href}>
      <a className={styleFormat} target={newTab ? "_blank" : ""}>
        {text}
      </a>
    </NextLink.default>
  );
};
