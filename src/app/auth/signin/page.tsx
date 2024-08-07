"use client";
import { useRouter } from "next/navigation";
import { Form, Input, Button, Checkbox } from "antd";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { auth } from "@hooks";
import { supabase } from "@store";

export default function SignIn() {
  const router = useRouter();
  const signIn: any = auth.useSignIn();
  const { authReducer, dispatch } = auth.useAuth();

  const onFinish = async (values: any) => {
    let postData: any = {
      email: values.username,
      password: values.password,
    };

    signIn.mutate(postData, {
      onSuccess: async (data: any) => {
        if (data.error) {
          console.error(data.error);
          return;
        }
        document.cookie = `sb-auth-token=${data?.data?.session.access_token}; path=/;`;
        dispatch(authReducer.setAuth({ logInData: data }));
        router.replace("/");
      },
      onError: (error: any) => {
        console.log("error", error);
      },
    });

    // router.replace("/");
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center my-10">
        <div className="w-full md:w-1/2 lg:w-1/2 p-5">
          <Form
            name="normal_login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <h1 className="flex items-center justify-center font-bold text-[24px]">
              MPayment
            </h1>
            <h3 className="font-semibold text-[18px] mb-[5px]">SignIn</h3>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input prefix={<AiOutlineUser />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input.Password
                prefix={<AiOutlineLock />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a href="/auth/forgotPassword">Forgot password</a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={signIn.isLoading}
                className="w-full"
              >
                Log in
              </Button>
              Or <a href="/auth/signup">register now!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
