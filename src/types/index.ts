import { ReactElement } from "react";

export interface IWidget {
    copy: (content: string) => void;
}

export interface INavitem {
   count: string
   name: string
   link: string
}

export interface IIntroduction {
    title: string
}

export interface IBody {
    count: string;
    component: JSX.Element;
    copyCode?: string;
}