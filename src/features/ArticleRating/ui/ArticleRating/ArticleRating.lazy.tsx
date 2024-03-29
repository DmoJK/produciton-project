import { Suspense, lazy } from "react"

import { Skeleton } from "@/shared/ui/deprecated/Skeleton"

import { ArticleRatingProps } from "./ArticleRating"

const ArticleRatingLazy = lazy(() => import("./ArticleRating"))

export const ArticleRatingLazySuspense = (props: ArticleRatingProps) => (
  <Suspense fallback={<Skeleton width="100%" height={120} />}>
    <ArticleRatingLazy {...props} />
  </Suspense>
)
