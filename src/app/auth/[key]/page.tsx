"use client";
import { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { general } from "@hooks";

export default function Key({ params }: { params: { key: string } }) {
  const { queryParams } = general.useGeneral();
  const [form] = Form.useForm();
  const [defaultValues, setDefaultValues] = useState<any>({});
  const [inputData, setInputData] = useState<any[]>([]);

  useEffect(() => {
    if (params.key === "forgotpassword") {
      setDefaultValues({ email: "" });

      setInputData([
        {
          label: "Email",
          placeholder: "Email",
          name: "email",
          type: "email",
          required: true,
        },
      ]);
    } else if (params.key === "changepassword") {
      setDefaultValues({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setInputData([
        {
          label: "Old Password",
          placeholder: "Old Password",
          name: "oldPassword",
          type: "password",
          required: true,
        },
        {
          label: "New Password",
          placeholder: "New Password",
          name: "newPassword",
          type: "password",
          required: true,
        },
        {
          label: "Confirm Password",
          placeholder: "Confirm Password",
          name: "confirmPassword",
          type: "password",
          required: true,
        },
      ]);
    } else if (params.key === "resetpassword") {
      setDefaultValues({ newPassword: "", confirmPassword: "" });
      setInputData([
        {
          label: "New Password",
          placeholder: "New Password",
          name: "newPassword",
          type: "password",
          required: true,
        },
        {
          label: "Confirm Password",
          placeholder: "Confirm Password",
          name: "confirmPassword",
          type: "password",
          required: true,
        },
      ]);
    }
  }, [params.key]);

  const onSubmit = async (data: any) => {
    if (params.key === "forgotpassword") {
    } else if (params.key === "resetpassword") {
    } else if (params.key === "changepassword") {
    }
  };

  return (
    <>
      <div className="w-full flex items-center justify-center py-7 bg-primary-50 border-b border-border">
        <h3 className="text-typo uppercase">{params.key}</h3>
      </div>
      <div className="container mx-auto">
        <div className="flex items-center justify-center my-10">
          <div className="w-full md:w-1/2 lg:w-1/2 p-5">
            <Form
              form={form}
              initialValues={defaultValues}
              onFinish={onSubmit}
              layout="vertical"
            >
              {inputData?.length > 0 &&
                inputData.map((item: any, index: number) => (
                  <Form.Item
                    key={index}
                    label={item.label}
                    name={item.name}
                    rules={[
                      {
                        required: item.required,
                        message: `Please enter your ${item.label.toLowerCase()}`,
                      },
                    ]}
                  >
                    <Input placeholder={item.placeholder} type={item.type} />
                  </Form.Item>
                ))}
              <Button
                type="primary"
                htmlType="submit"
                className="bg-[#141414] text-white px-4 py-[9px] focus:outline-none hover:bg-[#22272a] mb-3"
              >
                SUBMIT
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
