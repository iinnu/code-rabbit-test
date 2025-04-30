export type Favicon = {
  src: string;
  sizes?: string;
};

export type SiteConfig = {
	title: string;
	subtitle: string;
	toc: {
		enable: boolean;
		depth: 1 | 2 | 3;
	};
	favicon: Favicon[];
};