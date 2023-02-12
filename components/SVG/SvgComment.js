import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComment = () => (
  <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 8.5a8.38 8.38 0 0 0 .9 3.8A8.5 8.5 0 0 0 8.5 17a8.38 8.38 0 0 0 3.8-.9L18 18l-1.9-5.7a8.38 8.38 0 0 0 .9-3.8A8.5 8.5 0 0 0 12.3.9 8.38 8.38 0 0 0 8.5 0H8a8.48 8.48 0 0 0-8 8v.5Z"
      fill="#FF6C00"
    />
  </Svg>
);

export default SvgComment;
