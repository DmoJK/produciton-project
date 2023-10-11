import { Suspense, lazy } from "react"

import { Skeleton } from "@/shared/ui/deprecated/Skeleton"

import { ProfileRatingProps } from "./ProfileRating"

const ProfileRatingLazy = lazy(() => import("./ProfileRating"))

export const ProfileRatingLazySuspense = (props: ProfileRatingProps) => (
  <Suspense fallback={<Skeleton width="100%" height={120} />}>
    <ProfileRatingLazy {...props} />
  </Suspense>
)
