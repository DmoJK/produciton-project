import { ReactElement } from "react"

import { FeatureFlags } from "@/shared/types/featureFlags"

import { getFeatureFlags } from "./setGetFeatures"

interface ToggleFeaturesComponentsProps {
  feature: keyof FeatureFlags
  on: ReactElement
  off: ReactElement
}

export const ToggleFeaturesComponents = (
  props: ToggleFeaturesComponentsProps
) => {
  const { on, off, feature } = props

  if (getFeatureFlags(feature)) {
    return on
  }

  return off
}
