import { IPost } from "@/types/newsfeed";
import { baseApi } from "./baseApi";

const postApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    submitPost: build.mutation({
      query: (post: IPost) => ({
        url: "/post",
        method: "POST",
        data: post,
      }),
      invalidatesTags: ["post"],
    }),

    getAllPost: build.query({
      query: () => ({
        url: "/post",
        method: "GET",
      }),
      providesTags: ["post"],
    }),
  }),
  overrideExisting: false,
});

export const { useSubmitPostMutation, useGetAllPostQuery } = postApi;
