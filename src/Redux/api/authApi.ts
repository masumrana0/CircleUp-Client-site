import { ILoginUserResponse } from "@/types/auth";
import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<ILoginUserResponse, unknown>({
      query: (user) => ({
        url: "/auth/register",
        method: "POST",
        data: user,
      }),
    }),
    login: build.mutation<ILoginUserResponse, unknown>({
      query: (loginData: any) => ({
        url: "/auth/login",
        method: "POST",
        data: loginData,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useRegisterMutation, useLoginMutation } = authApi;
