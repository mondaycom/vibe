import React, { useCallback, useState } from "react";
import Skeleton, { SkeletonProps } from "../Skeleton";
import Avatar from "../../Avatar/Avatar";
import person from "./assets/person.png";
import Button from "../../Button/Button";
import { Replay, ThumbsUp } from "../../Icon/Icons";
import "./Skeleton.stories.scss";

export default {
  title: "Feedback/Skeleton",
  component: Skeleton
};

const skeletonTemplate = (args: SkeletonProps) => {
  return (
    <div className="monday-storybook-skeleton_rules-column">
      <div className="monday-storybook-skeleton_rules-row">
        <Skeleton type={args.typeCircle} />
        <Skeleton type={args.typeText} width={110} size={args.smallSize} />
      </div>
      <div className="monday-storybook-skeleton_article">
        <div>
          <Skeleton />
        </div>
        <div className="monday-storybook-skeleton_aside">
          <Skeleton type={args.typeText} size={args.sizeH1} />
          <Skeleton type={args.typeText} size={args.sizeH4} />
          <Skeleton type={args.typeText} size={args.sizeH4} />
          <Skeleton type={args.typeText} size={args.sizeH4} />
          <Skeleton type={args.typeText} size={args.sizeH4} width={82} />
        </div>
      </div>
    </div>
  );
};

export const Overview = {
  render: skeletonTemplate.bind({}),
  name: "Overview",

  args: {
    typeText: Skeleton.types.TEXT,
    typeCircle: Skeleton.types.CIRCLE,
    smallSize: Skeleton.sizes.TEXT.SMALL,
    sizeH4: Skeleton.sizes.TEXT.H4,
    sizeH1: Skeleton.sizes.TEXT.H1
  }
};

export const Shapes = {
  render: () => (
    <div className="monday-storybook-skeleton_row-box">
      <div className="monday-storybook-skeleton_column-box">
        <Skeleton type={Skeleton.types.CIRCLE} />
        <>Circle</>
      </div>
      <div className="monday-storybook-skeleton_column-box">
        <Skeleton />
        <>Square</>
      </div>
      <div className="monday-storybook-skeleton_column-box">
        <Skeleton width={112} height={46} />
        <>Rectangle</>
      </div>
    </div>
  ),

  name: "Shapes"
};

export const Text = {
  render: () => (
    <div className="monday-storybook-skeleton_row-box">
      <div className="monday-storybook-skeleton_column-box">
        <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.H1} />
        <>H1</>
      </div>
      <div className="monday-storybook-skeleton_column-box">
        <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.H2} />
        <>H2</>
      </div>
      <div className="monday-storybook-skeleton_column-box">
        <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.SMALL} />
        <>Paragraph</>
      </div>
    </div>
  ),

  name: "Text"
};

export const UpdateInTheSystem = {
  render: () => {
    const [showSkeleton, setShowSkeleton] = useState(false);
    const [showBlock, setSHowBlock] = useState(false);
    const [showReload, setshowReload] = useState(true);

    const onClickCallback = useCallback(() => {
      setshowReload(false);
      setSHowBlock(false);
      setShowSkeleton(true);

      setTimeout(() => {
        setShowSkeleton(false);
      }, 4000);

      setTimeout(() => {
        setSHowBlock(true);
      }, 4000);
    }, [setShowSkeleton, setSHowBlock]);

    return (
      <div className="monday-storybook-skeleton_row">
        {showBlock && (
          <div className="monday-storybook-skeleton_box">
            <div className="monday-storybook-skeleton_main">
              <div className="monday-storybook-skeleton_header">
                <Avatar src={person} type={Avatar.types.IMG} />
                <h5>Hadas Farhi</h5>
              </div>
              <p className="monday-storybook-skeleton_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="monday-storybook-skeleton_btn-group">
              <Button className="monday-storybook-skeleton_btn" leftIcon={ThumbsUp} kind={Button.kinds.SECONDARY}>
                Like
              </Button>
              <Button className="monday-storybook-skeleton_btn" leftIcon={Replay} kind={Button.kinds.SECONDARY}>
                Reply
              </Button>
            </div>
          </div>
        )}
        {showSkeleton && (
          <div className="monday-storybook-skeleton_box">
            <div className="monday-storybook-skeleton_main">
              <div className="monday-storybook-skeleton_header">
                <Skeleton type={Skeleton.types.CIRCLE} width={50} height={50} />
                <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.H5} width={110} />
              </div>
              <p className="monday-storybook-skeleton_text-wrapper">
                <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.SMALL} width={655} />
                <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.SMALL} width={680} />
                <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.SMALL} width={670} />
                <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.SMALL} width={675} />
                <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.SMALL} width={400} />
              </p>
            </div>
            <div className="monday-storybook-skeleton_btn-group-skeleton">
              <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.h2} width={60} />
              <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.h2} width={60} />
            </div>
          </div>
        )}
        <Button kind={Button.kinds.SECONDARY} onClick={onClickCallback}>
          {showReload ? "Load update" : "Reload update"}
        </Button>
      </div>
    );
  },

  name: "Update in the system"
};
