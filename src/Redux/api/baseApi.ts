/**
 * Title: 'Redux RTK query setup by Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 21-01-2024
 *
 */

import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: (builder) => ({}),
  tagTypes: [
    "user",
    "profile",
    "post",
    "comment",
    "comment_reply",
    "reaction",
    "story",
  ],
});
