import React from "react";
import Shimmer from "../Loading/Shimmer";

type AvatarProps = {
  src: string;
};

const Avatar: React.FC<AvatarProps> = (props) => {
  const [isLoaded, setIsloaded] = React.useState(false);
  return (
    <div className="h-[35px] min-h-[35px] w-[35px] min-w-[35px] overflow-hidden rounded-full md:h-[40px] md:min-h-[40px] md:w-[40px] md:min-w-[40px]">
      {!isLoaded && (
        <div className="relative h-full w-full bg-slate-100">
          <Shimmer />
        </div>
      )}
      <img
        className="h-full w-full"
        src={props.src}
        onLoad={() => setIsloaded(true)}
      />
    </div>
  );
};

export default Avatar;
