import React from "react";

export interface Progress {
    lvl: number,
    current: number,
    max: number
}

export const PROGRESS:Progress =
    {lvl: 7 ,current: 40, max: 400}