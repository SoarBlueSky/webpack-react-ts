import React, { useState, useCallback } from "react";
import { Form, Input, Button, Select } from "antd";
import AntdSelect from "./AntdSelect";
function AntdForm() {
  const [count, setCount] = useState(1);
  const [num, setNum] = useState(1);
  const [form] = Form.useForm();
  const handleCount = () =>{
    setCount(count +1)
  }
  const handleCountCallback = useCallback(() =>{
    setCount(count +1)
  },[])
  // console.log(form.getFieldValue(),'form');
  return (
    <Form
      form={form}
      onFinish={(e) => {
        console.log(e, "eeee");
      }}
    >
      {"count:" + count}
      <br/>
      {"num:" + num}
      <br/>
      <button onClick={handleCount}></button>
      <Form.Item name="text">
        <Input placeholder="请输入账号" />
      </Form.Item>
      <Form.Item name="type">
        <AntdSelect
          options={[
            { name: 1, value: 1 },
            { name: 2, value: 2 },
            { name: 3, value: 3 },
            { name: 4, value: 4 },
          ]}
        ></AntdSelect>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
export default AntdForm;
