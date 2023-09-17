import { SpaceProps } from "../../util/CSSUtilsTypes";

export interface ContainerProps {
  width: number;
  height: number;
  responsive?: boolean;
}

export interface ImageProps extends ContainerProps, SpaceProps {
  src: string;
  alt?: string;
}
