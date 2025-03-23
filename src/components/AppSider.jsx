import {  Layout } from 'antd';

const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#16744ff',
    height:'100vh'
  };

const AppSider = () =>{
    return(
        <Layout.Sider width="25%" style={siderStyle}>
                Sider
        </Layout.Sider>
    )
}

export default AppSider