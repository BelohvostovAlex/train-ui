import { useArgs, useState } from "@storybook/client-api";
import React, { Meta, StoryFn } from "@storybook/react";

import BookSliderItem from "@/components/BookSliderItem";
import Slider from "@/components/Slider";
import SliderItems from "@/components/Slider/SliderItems";
import { SliderDirectionVariant } from "@/constants/slider";

import { sliderDateData } from "../config";

export default {
  title: "components/Sliders/DateSlider",
  component: Slider,
  args: { direction: SliderDirectionVariant.VERTICAL },
} as Meta<typeof Slider>;

const DateSliderTemplate: StoryFn<typeof Slider> = (args) => {
  const [state, setState] = useState<number>(0);
  const [{ direction }] = useArgs();
  return (
    <Slider
      {...args}
      index={state}
      setIndex={setState}
      children={
        <SliderItems
          data={sliderDateData}
          index={state}
          renderItem={(
            item,
            top,
            center,
            bot,
            left,
            right,
            prevLeft,
            prevRight,
          ) => (
            <BookSliderItem
              bot={bot}
              center={center!}
              left={left!}
              item={item.date}
              direction={direction}
              prevLeft={prevLeft!}
              prevRight={prevRight!}
              right={right!}
              top={top}
              month={item.month}
            />
          )}
        />
      }
    ></Slider>
  );
};

export const bookingSlider = DateSliderTemplate.bind({});
bookingSlider.args = {
  data: sliderDateData,
};
