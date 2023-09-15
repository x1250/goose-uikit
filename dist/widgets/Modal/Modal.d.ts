import React from "react";
import { InjectedProps } from "./types";
export interface Props extends InjectedProps {
    title: string;
    hideCloseButton?: boolean;
    onBack?: () => void;
    bodyPadding?: string;
    children?: React.ReactNode;
}
declare const Modal: React.FC<Props>;
export default Modal;
