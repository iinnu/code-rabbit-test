export type Favicon = {
  src: string;
  sizes?: string;
};

export type SiteConfig = {
  title: string;
  subtitle: string;
  lang: string;
  toc: {
    enable: boolean;
    depth: 1 | 2 | 3;
  };
  favicon: Favicon[];
};

export type ProfileConfig = {
  name: string;
  avatar?: string;
  bio?: string;
  links: {
    name: string;
    url: string;
    icon: string;
  }[];
};
