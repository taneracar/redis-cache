export type THeaderButtons = {
  title: string;
  link: string;
};

export type THeaderMenuMainPagesSubPages = {
  title: string;
  link: string;
};

export type THeaderMenuMainPages = {
  title: string;
  link: string;
  hasSubPage: boolean;
  subPages: THeaderMenuMainPagesSubPages[];
};

export type THeaderMenuSocial = {
  title: string;
  link: string;
  hasHeader: boolean;
};

export type THeaderMenuSecondarySubPages = {
  title: string;
  link: string;
};

export type THeaderMenu = {
  mainPages: THeaderMenuMainPages[];
  social: THeaderMenuSocial[];
  secondarySubPages: THeaderMenuSecondarySubPages[];
};

export type THeaderData = {
  menuTitle: string;
  buttons: THeaderButtons[];
  menu: THeaderMenu;
};
