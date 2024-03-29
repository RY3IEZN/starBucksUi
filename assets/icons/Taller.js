/** @format */

import React from "react";
import { SvgXml } from "react-native-svg";

export default function SvgTest() {
  const tall = `<svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 4H15L13.5 25.5C9.24045 26.1172 6.73439 26.1472 2 25.5L0 4Z" fill="#DED5C8"/>
        <rect y="1" width="15" height="2" rx="1" fill="#DED5C8"/>
        <path d="M2.74808 0.16795C2.91234 0.0584381 3.10535 0 3.30278 0H11.6492C11.8763 0 12.0966 0.0772808 12.2739 0.219131V0.219131C13.0121 0.809641 12.5945 2 11.6492 2H3.30278C2.31337 2 1.92484 0.716775 2.74808 0.16795V0.16795Z" fill="#DED5C8"/>
        <circle cx="7.5" cy="13.5" r="4.5" fill="#1D724D"/>
        </svg>`;
  const TallSvg = () => <SvgXml xml={tall} width="400%" height="20%" />;

  return <TallSvg />;
}
