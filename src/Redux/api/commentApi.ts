import { IComment } from "@/types/newsfeed";
import { baseApi } from "./baseApi";

const commentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    submitComment: build.mutation({
      query: (comment: IComment) => ({
        url: "/comment",
        method: "POST",
        data: comment,
      }),
      invalidatesTags: ["comment"],
    }),

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

export const { useSubmitCommentMutation, useGetAllCommentQuery } = commentApi;
