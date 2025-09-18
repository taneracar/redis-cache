export type TMediaLayoutSidebarDockPages = {
  title: string;
  pageLink: string;
  pageTitle: string;
  description: string;
};

export type TMediaLayoutSidebarDock = {
  pages: TMediaLayoutSidebarDockPages[];
};

export type TMediaLayout = {
  sidebar_dock: TMediaLayoutSidebarDock;
};
