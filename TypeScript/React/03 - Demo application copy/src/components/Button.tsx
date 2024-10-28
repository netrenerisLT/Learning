// import { ComponentPropsWithoutRef } from "react";

// type ButtonProps = {
//   el: "button";
// } & ComponentPropsWithoutRef<"button">;

// type AnchorProps = {
//   el: "anchor";
// } & ComponentPropsWithoutRef<"a">;

// export default function Button(props: ButtonProps | AnchorProps) {
//   //   const { el, ...otherProps } = props;

//   if (props.el === "anchor") {
//     return <a className="button" {...props}></a>;
//   }

//   return <button className="button" {...props}></button>;
// }

import { ComponentPropsWithoutRef } from "react";

type buttonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

type anchorProps = {
  el: "link";
} & ComponentPropsWithoutRef<"a">;

export default function Button(props: buttonProps | anchorProps) {
  if (props.el === "link") {
    return <a className="button" {...props}></a>;
  }
  return <button className="button" {...props}></button>;
}
