import { ReactNode } from "react";
import { SliderProps } from "./interfaces";
declare const Slider: <T>({ direction, index, setIndex, children, data, }: SliderProps<T> & {
    children?: ReactNode;
}) => JSX.Element;
export default Slider;
