import { SpaceProps, FlexboxProps, LayoutProps } from "./CSSUtilsTypes";

export const space = <T extends SpaceProps & { [key: string]: any }>(props: T) => {
  const { mt, mb, ml, mr, mx, m, p, pt, pb, pl, pr } = props;
  const toCSSValue = (value: number | string) =>
    typeof value === "number" ? `${value}px` : value;
  return `
    ${mt !== undefined ? `margin-top: ${toCSSValue(mt)};` : ""}
    ${mb !== undefined ? `margin-bottom: ${toCSSValue(mb)};` : ""}
    ${ml !== undefined ? `margin-left: ${toCSSValue(ml)};` : ""}
    ${mr !== undefined ? `margin-right: ${toCSSValue(mr)};` : ""}
    ${mx !== undefined ? `margin-left: ${toCSSValue(mx)}; margin-right: ${toCSSValue(mx)};` : ""}
    ${m !== undefined ? `margin: ${toCSSValue(m)};` : ""}
    ${p !== undefined ? `padding: ${toCSSValue(p)};` : ""}
    ${pt !== undefined ? `padding-top: ${toCSSValue(pt)};` : ""}
    ${pb !== undefined ? `padding-bottom: ${toCSSValue(pb)};` : ""}
    ${pl !== undefined ? `padding-left: ${toCSSValue(pl)};` : ""}
    ${pr !== undefined ? `padding-right: ${toCSSValue(pr)};` : ""}
  `;
};

export const flexbox = (props: FlexboxProps) => {
  const { flexDirection, alignItems, justifyContent, flexWrap, flexGrow } = props;
  return `
    ${flexDirection ? `flex-direction: ${flexDirection};` : ""}
    ${alignItems ? `align-items: ${alignItems};` : ""}
    ${justifyContent ? `justify-content: ${justifyContent};` : ""}
    ${flexWrap ? `flex-wrap: ${flexWrap};` : ""}
    ${flexGrow !== undefined ? `flex-grow: ${flexGrow};` : ""}
  `;
};

export const layout = (props: LayoutProps) => {
  const { width, height, maxWidth, minWidth } = props;
  return `
    ${width !== undefined ? `width: ${width}px;` : ""}
    ${height !== undefined ? `height: ${height}px;` : ""}
    ${maxWidth !== undefined ? `max-width: ${maxWidth}px;` : ""}
    ${minWidth !== undefined ? `min-width: ${minWidth}px;` : ""}
  `;
};
