import { IStory } from "@/types/newsfeed";
import { baseApi } from "./baseApi";

const storyApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createStory: build.mutation({
      query: (story: IStory) => ({
        url: "/story",
        method: "POST",
        data: story,
      }),
      invalidatesTags: ["story"],
    }),

    getAllStory: build.query({
      query: () => ({
        url: "/story",
        method: "GET",
      }),
      providesTags: ["story"],
    }),
  }),
  overrideExisting: false,
});

export const { useCreateStoryMutation, useGetAllStoryQuery } = storyApi;
