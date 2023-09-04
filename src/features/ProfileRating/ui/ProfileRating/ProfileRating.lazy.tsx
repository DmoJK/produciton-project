import { Suspense, lazy } from "react"
import { ProfileRatingProps } from "./ProfileRating"
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton"

const ProfileRatingLazy = lazy(() => import("./ProfileRating"))

export const ProfileRatingLazySuspense = (props: ProfileRatingProps) => (
  <Suspense fallback={<Skeleton width="100%" height={120} />}>
    <ProfileRatingLazy {...props} />
  </Suspense>
)