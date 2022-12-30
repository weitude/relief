import React from "react";
import { Form, Input, Modal } from "antd";

const PromoteModal = ({ open, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      title="Promote a user to admin"
      okText="Promote"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch(() => {
            window.alert("Input error!");
          });
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Error: Please enter the name of the person to chat!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default PromoteModal;
