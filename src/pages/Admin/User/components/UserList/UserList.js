import React, { useEffect } from 'react';
import { Popconfirm, Space, Table, Tag, message } from 'antd';
import{useDispatch, useSelector} from 'react-redux'
import { userActions, userSelectors } from '../../../../../store/modules/User';
import { DeleteOutlined } from '@ant-design/icons';

function getColumns ({onDelete}) {
    const confirm = (e) => {
        console.log(e);
        message.success('Click on Yes');
      };
      const cancel = (e) => {
        console.log(e);
        message.error('Click on No');
      };
    return[
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
          },
          {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
          },
          {
            title: 'Password',
            dataIndex: 'password',
            key: 'password',
          },
      
          {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
              <Space size="middle">
                  <Popconfirm
                      className='ant-popconfirm-buttons '
                      onConfirm={() =>  onDelete(record.id) }
                      title="Delete User"
                      onCancel={cancel}
                      description="Bạn có chắc chắn muốn xóa?" >           
                      <a className='text-red-500 '><DeleteOutlined /><span className='pl-1'>Delete</span></a>
                  </Popconfirm>
              </Space>
            ),
          },
    ]

};


const UserList = () => {

    const dispatch = useDispatch()
    const data = useSelector(userSelectors.selectDataUser)

    useEffect(()=>{
        dispatch(userActions.fetchDataUser())
    },[dispatch])

    const handleDelete=(id)=>{
        dispatch(userActions.remove(id))
        message.success('Xóa thành công')
    }

    const columns = getColumns({onDelete:handleDelete})
    return (
        <div>
           <Table columns={columns} dataSource={data} />;
        </div>
    );
};

export default UserList;