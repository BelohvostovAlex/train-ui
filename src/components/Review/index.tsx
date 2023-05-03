import React, { FunctionComponent, useState } from "react";

import { ArrowDownSvg } from "@/assets/svg/ArrowDownSvg";
import { ArrowUpSvg } from "@/assets/svg/ArrowUpSvg";
import RoundButton from "@/components/RoundButton";

import { readMoreRoundBtnExtraStyles, textLimit } from "./config";
import { handleReviewText } from "./config/handleReviewText";
import { useReviewText } from "./config/useReviewText";
import { ReviewProps } from "./interface";
import {
  ReadMoreTitle,
  ReadMoreWrapper,
  ReviewFrom,
  ReviewInfo,
  ReviewText,
  ReviewTitle,
  ReviewWrapper,
} from "./styles";

const Review: FunctionComponent<ReviewProps> = ({ author, text }) => {
  const { from, readMore, title, hide } = useReviewText();
  const [isMoreOpen, setIsMoreOpen] = useState<boolean>(false);

  const onReadMoreClick = () => {
    setIsMoreOpen((prev) => !prev);
  };
  return (
    <ReviewWrapper>
      <ReviewInfo>
        <ReviewTitle>{title}</ReviewTitle>
        <ReviewFrom>
          {from} {author}
        </ReviewFrom>
        <ReviewText isOpen={isMoreOpen}>
          {isMoreOpen ? text : handleReviewText(text, textLimit)}
        </ReviewText>
      </ReviewInfo>
      <ReadMoreWrapper>
        <ReadMoreTitle onClick={onReadMoreClick}>
          {isMoreOpen ? hide : readMore}
        </ReadMoreTitle>
        <RoundButton
          onClick={onReadMoreClick}
          extra={readMoreRoundBtnExtraStyles}
        >
          {isMoreOpen ? <ArrowUpSvg /> : <ArrowDownSvg />}
        </RoundButton>
      </ReadMoreWrapper>
    </ReviewWrapper>
  );
};

export default Review;
