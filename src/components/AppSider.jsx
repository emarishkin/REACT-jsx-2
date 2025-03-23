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



const AppSider = () =>{

const [loading,setLoading] = useState(false)
const [crypto,setCrypto] = useState([])
const [assets,setAssets] = useState([])

useEffect(()=>{
   async function preload(){
      setLoading(true)
      const crypto = await fakeFetchCrypto()
      const assets = await fakeAssetsCrypto()
     
      
      setAssets(assets.map((asset)=>{
        const coin = crypto.find((c)=>c.id === asset.id)
        return{
            grow: asset.price>coin.price,
            totalAmound:asset.amount * coin.price,
            totalProfit: asset.amount * coin.price - asset.amount * asset.price,
            ...asset
        }
   }))
      setCrypto(crypto)     
      setLoading(false)
    }
    preload()
},[])

    if(loading){
       return <Spin indicator={<LoadingOutlined spin />} size="large" fullscreen />
    }    


    return(
        <Layout.Sider width="25%" style={siderStyle}>
          {assets.map(asset=>(
            <Card>
            <Statistic
            title={asset.id}
            value={11.28}
            precision={2}
            valueStyle={{color:asset.grow ? '#3f8600': 'red'}}
            prefix={asset.grow ?<ArrowUpOutlined />: <ArrowDownOutlined />}
            suffix="$"
          />
          <List
          size='small'
        bordered
        dataSource={[
            {title: 'Total profit',value:asset.totalProfit},
            {title: 'Asset Amound',value:asset.amount},
        ]}
        renderItem={(item) => (
            <List.Item>
            <span>{item.title}</span>
            <span>
              {item.withTag && <Tag color={asset.grow? 'green':'red' }>{asset.growPercent}%</Tag>}
            {item.isPlain && item.value}
            {!item.isPlain && (
              <Typography.Text type={asset.grow ? 'success': 'danger'}>{item.value}$</Typography.Text>)}
          </span>
          </List.Item>
        )}
      />
            </Card>
          ))}

          
        </Layout.Sider>
    )
}

export default AppSider