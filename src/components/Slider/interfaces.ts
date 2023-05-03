import { Dispatch, ReactNode, SetStateAction } from "react";

import { SliderDirectionVariant } from "../../constants/slider";

export interface SliderProps<T> {
  data: T[];
  direction?: SliderDirectionVariant;
  index: number;
  children: ReactNode;

  setIndex: Dispatch<SetStateAction<number>>;
}

export interface SliderItemsWrapperProps {
  direction?: SliderDirectionVariant;
}

export type SliderWrapperProps = SliderItemsWrapperProps;
