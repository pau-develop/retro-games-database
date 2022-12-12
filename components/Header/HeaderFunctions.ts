import React from "react";

export const getElementPos = (event: React.MouseEvent<HTMLElement>) => {
  console.log(event);
  const element = event.target as HTMLElement;
  const elementPositions = element.getBoundingClientRect();
  const elementObject = {
    top: Math.round(elementPositions.y),
    bot: Math.round(elementPositions.y + elementPositions.height),
    left: Math.round(elementPositions.x),
    right: Math.round(elementPositions.x + elementPositions.width),
  };
  return elementObject;
};

export const shouldRenderDropDown = (
  event: React.MouseEvent<HTMLElement>,
  dropDownPosition: any,
  type: "top" | "bot"
) => {
  console.log(event.target);
  const mousePositions = {
    top: event.clientY - 5,
    bot: event.clientY + 5,
    left: event.clientX - 5,
    right: event.clientX + 5,
  };

  if (mousePositions.top < dropDownPosition.top && type === "top") return false;
  if (mousePositions.bot > dropDownPosition.bot && type === "bot") return false;
  if (mousePositions.left < dropDownPosition.left) return false;
  if (mousePositions.right > dropDownPosition.right) return false;

  return true;
};
