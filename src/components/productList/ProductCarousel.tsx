import React, { useRef } from "react";

export const ProductCarousel = (props:React.PropsWithChildren) => {
  const scroll:any = useRef();
  const scrollHandler = (e: React.WheelEvent) => {
    if (e.deltaY > 0) scroll.current.scrollLeft += 200;
    else scroll.current.scrollLeft -= 200;
  };
  return (
    <div className="w-full px-2 max-w-[100vw]">
      <h3 className="text-3xl p-4">Products</h3>
    <div onWheel={scrollHandler} ref={scroll} className="w-full px-2 max-w-[100vw] overflow-hidden flex items-center justify-start scroll-smooth	">
        {props.children}
    </div>
    </div>
  );
};
