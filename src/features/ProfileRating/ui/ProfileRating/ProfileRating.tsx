import { memo, useCallback } from "react"

import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

import { RatingCard } from "@/entities/Rating"
import { useUserAuthData } from "@/entities/User"
import { Skeleton } from "@/shared/ui/deprecated/Skeleton"

import { useGetProfileRating, useRateProfile } from "../../api/profileRatingApi"
import { getProfileExist } from "../../selectors/getProfileExist"

export interface ProfileRatingProps {
  className?: string
  profileId?: string
}

const ProfileRating = memo(({ className, profileId }: ProfileRatingProps) => {
  const { t } = useTranslation()
  const isProfileExist = useSelector(getProfileExist)
  const userData = useUserAuthData()
  const {
    data,
    isLoading,
    error: getError,
  } = useGetProfileRating({
    profileId,
    userId: userData?.id,
  })
  const [rateProfile, { error: rateError }] = useRateProfile()

  const handleRate = useCallback(
    (starsCount: number, feedback?: string) => {
      rateProfile({
        profileId,
        userId: userData?.id,
        rate: starsCount,
        feedback,
      })
    },
    [profileId, rateProfile, userData?.id]
  )

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRate(starsCount, feedback)
    },
    [handleRate]
  )

  const onCancel = useCallback(
    (starsCount: number) => {
      handleRate(starsCount)
    },
    [handleRate]
  )

  if (!isProfileExist) {
    return null
  }

  if (getError || rateError || !data) {
    return null
  }

  if (isLoading) {
    return <Skeleton width="100%" height={120} />
  }

  const rating = data.length > 0 ? data[0].rate : 0

  return (
    <RatingCard
      onAccept={onAccept}
      onCancel={onCancel}
      className={className}
      title={t("Оцените профиль")}
      feedbackTitle={t("Оставьте свой отзыв о профиле пользователя")}
      rate={rating}
    />
  )
})

export default ProfileRating
