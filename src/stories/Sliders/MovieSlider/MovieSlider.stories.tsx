import { useArgs, useState } from "@storybook/client-api";
import React, { Meta, StoryFn } from "@storybook/react";

import MovieSliderItem from "@/components/MovieSliderItem";
import Slider from "@/components/Slider";
import SliderItems from "@/components/Slider/SliderItems";
import { SliderDirectionVariant } from "@/constants/slider";

import { sliderMovieData } from "../config";

export default {
  title: "components/Sliders/MovieSlider",
  component: Slider,
  args: { direction: SliderDirectionVariant.VERTICAL },
} as Meta<typeof Slider>;

const MovieSliderTemplate: StoryFn<typeof Slider> = (args) => {
  const [state, setState] = useState<number>(0);
  const [{ direction }] = useArgs();
  return (
    <Slider
      {...args}
      index={state}
      setIndex={setState}
      children={
        <SliderItems
          data={sliderMovieData}
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
            <MovieSliderItem
              bot={bot!}
              center={center!}
              left={left!}
              direction={direction}
              prevLeft={prevLeft!}
              prevRight={prevRight!}
              right={right!}
              top={top!}
              id={item.id}
              src={item.image}
            />
          )}
        />
      }
    ></Slider>
  );
};

export const movieSlider = MovieSliderTemplate.bind({});
movieSlider.args = {
  data: sliderMovieData,
};
