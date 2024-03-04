import { defineConfig } from "@twind/core";
import presetTailwind from "@twind/preset-tailwind";
import presetAutoprefix from "@twind/preset-autoprefix";

//https://github.com/tw-in-js/twind/issues/437#issue-1532077112

const presetRemToPx = ({ baseValue = 16 } = {}) => {
  return {
    finalize(rule: any) {
      return {
        ...rule,
        d: rule.d?.replace(
          /"[^"]+"|'[^']+'|url\([^)]+\)|(-?\d*\.?\d+)rem/g,
          (match: any, p1: any) => {
            if (p1 === undefined) return match;
            return `${p1 * baseValue}${p1 == 0 ? "" : "px"}`;
          }
        )
      };
    },
  };
}



export default defineConfig({
  presets: [presetAutoprefix(), presetTailwind(/* options */), presetRemToPx()]
  /* config */
});