import { baseApi } from "./baseApi";

const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    profileCommonData: build.query({
      query: () => ({
        url: `profile/common`,
        method: "GET",
      }),
      providesTags: ["profile"],
    }),
  }),
  overrideExisting: false,
});

export const { useProfileCommonDataQuery } = profileApi;
