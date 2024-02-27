import { ILoginUserResponse } from "@/types/auth";
import { baseApi } from "./baseApi";

const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllComment: build.query({
      query: (postid) => ({
        url: `/comment/${postid}`,
        method: "GET",
      }),
      providesTags: ["comment"],
    }),
  }),
  overrideExisting: false,
});

// export const { useRegisterMutation, useLoginMutation } = profileApi;
