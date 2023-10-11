import { DropdownDirection } from "@/shared/types/ui"

import cls from "./Popups.module.scss"

export const mapDirectionClass: Record<DropdownDirection, string> = {
  "bottom-left": cls["bottom-left"],
  "bottom-right": cls["bottom-right"],
  "top-left": cls["top-left"],
  "top-right": cls["top-right"],
}
