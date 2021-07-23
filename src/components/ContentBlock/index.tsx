import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import IntroBlock from "./IntroBlock";
import { ContentBlockProps } from "./types";

const ContentBlock = (props: ContentBlockProps) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "intro") return <IntroBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  return null;
};

export default ContentBlock;
