import React from 'react';
import {  Form, Input,Select, message,  } from 'antd';
import { useDispatch,  } from 'react-redux';
import { newProductActions } from '../../../../../../store/modules/news-product';


const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};




const FormProduct = () => {

    /* message */

    const [messageApi, contextHolder] = message.useMessage();
    const dispatch = useDispatch() 
    const [form] = Form.useForm();
    const success = () => {
      messageApi.open({
        type: 'success',
        content: 'Thêm Thành Công',
      });
    };

    const onFinish =async (values) => {
      await dispatch(newProductActions.add(values)); // Thêm trường createdAt vào sản phẩm
      form.resetFields();
      console.log(values);
     
    };

    const onGenderChange = (value) => {
      switch (value) {
        case 'Iphone':
          form.setFieldsValue({
            note: 'Hi, man!',
          });
          break;
        case 'Samsung':
          form.setFieldsValue({
            note: 'Hi, lady!',
          });
          break;
        case 'Oppo':
          form.setFieldsValue({
            note: 'Hi there!',
          });
          break;
        default:
      }
    };




    return (

      <>
       {contextHolder}
        <Form
            {...layout}
            form={form}
            name="nest-messages"
            onFinish={onFinish}
            style={{
            maxWidth: 600,
            }}
        >
             <Form.Item
            name="id"
            className='invisible'
            label="Id"
            rules={[
                {
                required: false,
                },
            ]}
            >
            <Input />
            </Form.Item>


            <Form.Item
            name="name"
            label="Name"
            rules={[
                {
                required: true,
                },
            ]}
            >
            <Input />
            </Form.Item>


            <Form.Item
            name="price"
            label="Price"
            rules={[
                {
                  required: true,
                },
            ]}
            >
            <Input />
            </Form.Item>
            <Form.Item
                label="Hình Ảnh"
                name="image"
                rules={[{ required: true, message: 'Vui lòng nhập URL hình ảnh!' }]}
            >
                <Input/>
            </Form.Item>

            {/* info */}
            <Form.Item
            name="info"
            label="Info"
            rules={[
                {
                required: true,
                },
            ]}
            >
            <Input.TextArea />
            </Form.Item>


            {/* description */}
            <Form.Item 
              name="description"
              label="Description">

              <Input.TextArea />
            </Form.Item>




            {/* category */}
            <Form.Item
               name="category"
                label="Category"
                rules={[
                {
                    required: true,
                },
                ]}
            >
                <Select
                placeholder="Select a option and change input text above"
                onChange={onGenderChange}
                allowClear
                >
                <Option value="iphone">Iphone</Option>
                <Option value="samsung">Samsung</Option>
                <Option value="oppo">Oppo</Option>
                </Select>
            </Form.Item>

            <Form.Item
            wrapperCol={{
                ...layout.wrapperCol,
                offset: 8,
            }}
            >
            <button 
            htmlType="submit" 
            class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-4 py-2 border rounded-md text-white font-medium"
            onClick={success}>
                    Submit
            </button>
            </Form.Item>
        </Form>
      </>
  );
}
export default FormProduct;