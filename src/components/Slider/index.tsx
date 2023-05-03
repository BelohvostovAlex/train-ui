import React, { KeyboardEvent, ReactNode, WheelEvent } from "react";

import { DownSvg } from "@/assets/svg/DownSvg";
import { UpSvg } from "@/assets/svg/UpSvg";
import { KeyButtonVariant } from "@/constants/keyboard";
import { SliderDirectionVariant } from "@/constants/slider";

import { SliderProps } from "./interfaces";
import { SliderControls, SliderItemsWrapper, SliderWrapper } from "./styles";

const Slider = <T,>({
  direction = SliderDirectionVariant.VERTICAL,
  index,
  setIndex,
  children,
  data,
}: SliderProps<T> & { children?: ReactNode }) => {
  const dataLength = data.length;

  const prevSlide = () => {
    if (index > 0) {
      setIndex((index - 1) % dataLength);
    } else {
      setIndex(dataLength - 1);
    }
  };

  const nextSlide = () => {
    if (index > dataLength + 1) {
      setIndex(0);
    } else {
      setIndex((index + 1) % dataLength);
    }
  };

  const keyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (direction === SliderDirectionVariant.VERTICAL) {
      if (e.key === KeyButtonVariant.ARROW_DOWN) {
        nextSlide();
      }
      if (e.key === KeyButtonVariant.ARROW_UP) {
        prevSlide();
      }
    }

    if (direction === SliderDirectionVariant.HORIZONTAL) {
      if (e.key === KeyButtonVariant.ARROW_RIGHT) {
        nextSlide();
      }
      if (e.key === KeyButtonVariant.ARROW_LEFT) {
        prevSlide();
      }
    }
  };

  const onMouseWheel = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      nextSlide();
    }
    if (e.deltaY < 0) {
      prevSlide();
    }
  };
  return (
    <SliderWrapper
      onKeyDown={keyDownHandler}
      tabIndex={0}
      onWheel={onMouseWheel}
      direction={direction}
    >
      {direction === SliderDirectionVariant.HORIZONTAL && (
        <>
          <UpSvg onClick={prevSlide} />
          <SliderItemsWrapper direction={direction}>
            {children}
          </SliderItemsWrapper>
          <DownSvg onClick={nextSlide} />
        </>
      )}
      {direction === SliderDirectionVariant.VERTICAL && (
        <>
          <SliderItemsWrapper direction={direction}>
            {children}
          </SliderItemsWrapper>
          <SliderControls>
            <UpSvg onClick={prevSlide} />
            <DownSvg onClick={nextSlide} />
          </SliderControls>
        </>
      )}
    </SliderWrapper>
  );
};

export default Slider;
