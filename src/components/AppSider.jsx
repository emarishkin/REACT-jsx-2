import {  Layout,Card,Statistic,List,Typography,Spin  } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined,LoadingOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { fakeAssetsCrypto, fakeFetchCrypto } from '../api';

const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#16744ff',
    height:'100vh',  
  };

  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];



const AppSider = () =>{

const [loading,setLoading] = useState(false)

useEffect(()=>{
   async function preload(){
      setLoading(true)
      await fakeFetchCrypto()
      await fakeAssetsCrypto()
      
      setLoading(false)
    }
    preload()
},[])

    if(loading){
       return <Spin indicator={<LoadingOutlined spin />} size="large" fullscreen />
    }    


    return(
        <Layout.Sider width="25%" style={siderStyle}>
          <Card>
          <Statistic
          title="Active"
          value={11.28}
          precision={2}
          valueStyle={{
            color: '#3f8600',
          }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
        <List
        size='small'
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
          </Card>

          <Card>
          <Statistic
          title="Idle"
          value={9.3}
          precision={2}
          valueStyle={{
            color: '#cf1322',
          }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
          </Card>
        </Layout.Sider>
    )
}

export default AppSider