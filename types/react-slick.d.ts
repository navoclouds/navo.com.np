declare module "react-slick" {
  import { Component, type ReactNode } from "react";

  export interface Settings {
    slidesToShow?: number;
    slidesToScroll?: number;
    infinite?: boolean;
    dots?: boolean;
    arrows?: boolean;
    adaptiveHeight?: boolean;
  }

  export default class Slider extends Component<Settings & { children?: ReactNode }> {
    slickPrev(): void;
    slickNext(): void;
  }
}
