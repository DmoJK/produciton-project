import { ProfileRate } from "@/entities/Profile"
import { rtkApi } from "@/shared/api/rtkApi"

interface getProfileRatingArg {
  profileId?: string
  userId?: string
}

interface rateProfileArg {
  profileId?: string
  userId?: string
  rate: number
  feedback?: string
}

const profileRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getProfileRating: build.query<ProfileRate[], getProfileRatingArg>({
      query: ({ profileId, userId }) => ({
        url: "/profile-ratings",
        params: {
          profileId,
          userId,
        },
      }),
    }),
    rateProfile: build.mutation<void, rateProfileArg>({
      query: (arg) => ({
        url: "/profile-ratings",
        method: "POST",
        body: arg,
      }),
    }),
  }),
})

export const useGetProfileRating = profileRatingApi.useGetProfileRatingQuery
export const useRateProfile = profileRatingApi.useRateProfileMutation
