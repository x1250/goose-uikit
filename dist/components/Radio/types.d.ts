import { SpaceProps } from "../../util/CSSUtilsTypes";
export type RadioTheme = {
    handleBackground: string;
};
export declare const scales: {
    readonly SM: "sm";
    readonly MD: "md";
};
export type Scales = (typeof scales)[keyof typeof scales];
export interface RadioProps extends SpaceProps {
    scale?: Scales;
}
