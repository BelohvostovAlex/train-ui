/// <reference types="react" />
import { FunctionComponent, ReactNode, Dispatch, SetStateAction } from 'react';
import { SliderDirectionVariant as SliderDirectionVariant$1 } from '@/constants/slider';
import { ButtonVariants, ButtonTypes } from '@/constants/buttons';
import { TypographyVariant } from '@/constants/styles/typography';
import { Colors } from '@/constants/styles/colors';

interface BookSliderItemProps {
    center: boolean;
    left: boolean;
    right: boolean;
    prevLeft: boolean;
    prevRight: boolean;
    item: number;
    month: string;
    top?: boolean;
    bot?: boolean;
    direction: SliderDirectionVariant$1;
}

declare const BookSliderItem: FunctionComponent<BookSliderItemProps>;

interface ButtonProps {
    children?: ReactNode;
    variant?: ButtonVariants;
    buttonTypes?: ButtonTypes;
    width?: string;
    height?: string;
    margin?: string;
    typography: TypographyVariant;
    fontSize?: string;
    backgroundColor?: string;
    color?: string;
    icon?: ReactNode;
    onClick?: () => void;
}

declare const Button: FunctionComponent<ButtonProps>;

interface ChipProps {
    text: string;
    background?: string;
}

declare const Chip: FunctionComponent<ChipProps>;

interface DividerProps {
    color?: Colors;
    height?: string;
    width?: string;
}

declare const Divider: FunctionComponent<DividerProps>;

declare const FacebookButton: FunctionComponent<ButtonProps>;

declare const GithubButton: FunctionComponent<ButtonProps>;

declare const GoogleButton: FunctionComponent<ButtonProps>;

interface MovieHallBadgeProps {
    isActive: boolean;
    time: string;
    hallNumber: string;
    available: number;
    onClick: () => void;
}

declare const MovieHallBadge: FunctionComponent<MovieHallBadgeProps>;

interface MovieSliderItemProps {
    center: boolean;
    top: boolean;
    bot: boolean;
    src: string;
    id: string;
    left: boolean;
    right: boolean;
    prevLeft: boolean;
    prevRight: boolean;
    direction: SliderDirectionVariant$1;
}

declare const MovieSliderItem: FunctionComponent<MovieSliderItemProps>;

interface ReviewProps {
    author: string;
    text: string;
}

declare const Review: FunctionComponent<ReviewProps>;

interface RounduttonProps {
    children?: ReactNode;
    width?: string;
    height?: string;
    background?: string;
    color?: string;
    extra?: string;
    onClick: () => void;
}

declare const RoundButton: FunctionComponent<RounduttonProps>;

declare enum SliderDirectionVariant {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical"
}

interface SliderProps<T> {
    data: T[];
    direction?: SliderDirectionVariant;
    index: number;
    children: ReactNode;
    setIndex: Dispatch<SetStateAction<number>>;
}

declare const Slider: <T>({ direction, index, setIndex, children, data, }: SliderProps<T> & {
    children?: ReactNode;
}) => JSX.Element;

interface SliderItemsProps<T> {
    data: T[];
    index: number;
    renderItem: (item: T, top?: boolean, center?: boolean, bot?: boolean, left?: boolean, right?: boolean, prevLeft?: boolean, prevRight?: boolean) => ReactNode;
}

declare const SliderItems: <T>({ data, index, renderItem }: SliderItemsProps<T>) => JSX.Element;

export { BookSliderItem, Button, Chip, Divider, FacebookButton, GithubButton, GoogleButton, MovieHallBadge, MovieSliderItem, Review, RoundButton, Slider, SliderItems };
