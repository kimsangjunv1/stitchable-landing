export type MegaMenuLink = {
    label: string;
    description: string;
    href: string;
    icon: string;
};

export type MegaMenuGroup = {
    eyebrow: string;
    title: string;
    links: MegaMenuLink[];
    viewAll?: MegaMenuLink;
};

export type MegaMenuConfig = {
    id: string;
    label: string;
    href: string;
    groups: MegaMenuGroup[];
};
