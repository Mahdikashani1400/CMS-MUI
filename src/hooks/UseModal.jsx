import React, { useState } from "react";

export default function UseModal(setInfo, ...callStates) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    callStates.forEach((func) => {
      func("");
    });

    setInfo({});
    setOpen(false);
  };
  return [open, handleOpen, handleClose];
}
