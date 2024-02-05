/**
 * Title: 'Login page design and functionalites implement by Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 26-01-2024
 *
 */

"use client";
import React from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Checkbox, Form, Input } from "antd";
import Notification from "../shared/Notification";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/Redux/hooks";
import { useLoginMutation } from "@/Redux/api/authApi";
import { changeAuthState } from "@/Redux/Slices/authSlice";
import { setToLocalStorage } from "@/utils/local-storage";
import { authKey } from "@/constants/storageKey";

const Login: React.FC = () => {
  const router = useRouter();
  // redux
  const dispatch = useAppDispatch();
  const [setLogin] = useLoginMutation();

  const onFinish = async (values: any) => {
    const res = await setLogin(values);

    if ("data" in res && res.data?.accessToken) {
      setToLocalStorage(authKey, res.data.accessToken);
      router.push("/home");
      Notification({
        description: "User Successfully Logedin",
        placement: "bottomRight",
      });
    } else {
      Notification({
        description: "Something is wrong",
        placement: "bottomLeft",
      });
    }
  };

  return (
    <div className="lg:w-[500px] border p-10 shadow-lg shadow-violet-500 rounded-lg">
      <h2 className="text-center font-bold text-5xl mb-10 ">Login</h2>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input
            type="email"
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <div className="flex justify-between">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </div>
        </Form.Item>

        <Form.Item>
          <button className=" w-full font-semibold text-xl bg-violet-500 hover:bg-violet-800 transition-colors duration-300 px-4 p-1 text-white rounded">
            Log in
          </button>
        </Form.Item>
      </Form>
      <div>
        <span className="font-semibold">
          If you don&apos;t have an account,{"  "}
          <button
            onClick={() => dispatch(changeAuthState())}
            className="text-blue-400 underline "
          >
            Register
          </button>{" "}
        </span>
      </div>
    </div>
  );
};

export default Login;
