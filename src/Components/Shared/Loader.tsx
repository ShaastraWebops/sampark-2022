import React from "react";
import { ReactComponent as DiceAloneBlackOutline } from "../../Images/Dice_Alone_Outline_Black_animated.svg";

interface Props {}

const Loader = (props: Props) => {
  return (
    <div className="loader">
      <DiceAloneBlackOutline height="100" width="auto" />
    </div>
  );
};

export default Loader;
