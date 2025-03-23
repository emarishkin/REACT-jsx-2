import './App.css'
import React from 'react';
import {  Layout } from 'antd';
import AppHeader from './components/AppHeader';
import AppSider from './components/AppSider';
import AppContent from './components/AppContent.Jsx';


const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: '100%',
  
};

function App() {
  return (
    <>
      <Layout style={layoutStyle}>
      <AppSider />
      <Layout>
        <AppHeader />
        <AppContent />
      </Layout>
    </Layout>
    </>
  )
}

export default App
