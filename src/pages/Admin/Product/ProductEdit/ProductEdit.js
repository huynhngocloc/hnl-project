import { Form, Input, Select, notification, Space, Button  } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react';
import { newProductActions, newProductSelectors } from '../../../../store/modules/news-product';
import { useParams  } from 'react-router-dom';
import BackProductEdit from './BackProductEdit';

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}

function ProductEdit (){



    const dispatch = useDispatch()
    const params = useParams()
    const item = useSelector(newProductSelectors.selectItem)
    const [form] = Form.useForm();
    const onFinish = (values) => {
        dispatch(newProductActions.update(values))
        console.log(values);
       
      };
      useEffect(() => {
        dispatch(newProductActions.getById(params.id))
    }, [dispatch, params.id])

    useEffect(() => {
        form.setFieldsValue({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            info: item.info,
            description: item.description,
            category: item.category
        })
    }, [item, form])




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


  /* notification  */
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {


    const key = `open${Date.now()}`;
    const btn = (
      <Space>
        <button type="link" size="small" onClick={() => api.destroy()}>
          Tiếp tục chỉnh sửa
        </button>
        <BackProductEdit></BackProductEdit>
      </Space>
    );
    api.open({
        type: 'success',
      message: 'Update Product Thành Công ',
      description:
        'Bấm Ok quay về trang danh sách sản phẩm',
      btn,
      key,
    });
  };;




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
                value={params.id}
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
                <Form.Item name="description"label="Description">
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
                    onClick={openNotification}
                    class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-4 py-2 border rounded-md text-white font-medium">
                    Submit
                </button>
                
                </Form.Item>
            </Form>
        </>
    );
};

export default ProductEdit;