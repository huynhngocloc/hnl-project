import React, {useEffect} from 'react';
import {Space, Table,Popconfirm, message} from 'antd';
import { Link } from 'react-router-dom'; 
import{useDispatch, useSelector} from 'react-redux'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { newProductActions, newProductSelectors } from '../../../../../store/modules/news-product';
import './styled.css'

function getColumns ({onDelete}){

    const confirm = (e) => {
        console.log(e);
        message.success('Click on Yes');
      };
      const cancel = (e) => {
        console.log(e);
        message.error('Click on No');
      };


    return [
        {
            title: 'id',
            width: 50,
            dataIndex: 'id',
            key: 'id',
            fixed: 'left',
            },
          {
            title: 'Name',
            width: 150,
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
          },
          {
            title: 'price',
            width: 100,
            dataIndex: 'price',
            key: 'price',
            fixed: 'left',
          },
          {
            title: 'image',
            dataIndex: 'image',
            key: '1',
            width: 150,
            render: (image) => (
              <img src={image} alt="Product Image" style={{ maxWidth: '100%', maxHeight: '100px' }} />
            ),
          },
          {
            title: 'info',
            dataIndex: 'info',
            key: '2',
            width: 150,
            render: (text) => (
              <div style={{ maxHeight: '150px', overflow: 'auto' }}>
                {text}
              </div>)
          },
          {
            title: 'description',
            dataIndex: 'description',
            key: '3',
            width: 400,
            render: (text) => (
              <div style={{ maxHeight: '150px', overflow: 'auto' }}>
                {text}
              </div>)
          },
          {
            title: 'category',
            dataIndex: 'category',
            key: '4',
            width: 100,
          },
        
          {
            title: 'createdAt',
            dataIndex: 'createdAt',
            key: '6',
            width: 150,
          },
        
          {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 170,
            render: (_, record) => (
                <Space size="middle">
                    <Link to={`../edit/${record.id}`}>
                    <a className='text-blue-500'><EditOutlined /><span className='pl-2'>Edit</span></a>
                    </Link>
                    <Popconfirm
                        className='ant-popconfirm-buttons '
                        onConfirm={() =>  onDelete(record.id) }
                        title="Delete Sản Phẩm"
                        onCancel={cancel}
                        description="Bạn có chắc chắn muốn xóa?" >           
                        <a className='text-red-500 '><DeleteOutlined /><span className='pl-1'>Delete</span></a>
                    </Popconfirm>
                </Space>
              ),
          },
    ]
}
    



const ProductListTable = () => {
    const dispatch = useDispatch()
    const data = useSelector(newProductSelectors.selectData)
  
    useEffect(()=>{
      dispatch(newProductActions.fetchData())
    },[dispatch])

    const handleDelete=(id)=>{
        dispatch(newProductActions.remove(id))
        message.success('Xóa thành công')
    }

    const columns = getColumns({onDelete:handleDelete})
    return (
        <div>
            <Table
            columns={columns}
            dataSource={data}
            scroll={{
            x: 1500,
            y: 500,
            }}
        />
        </div>
    );
};

export default ProductListTable;