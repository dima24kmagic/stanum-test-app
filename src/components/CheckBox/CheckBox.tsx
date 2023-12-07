"use client"
import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface ICheckBoxProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

/**
 * Checkbox
 */
function CheckBox(props: ICheckBoxProps) {
  return <input {...props} />;
}

export default CheckBox;
