import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'

const MainLayout = () => {
    return (
        <Layout>
            <Layout.Header>
                <Navbar />
            </Layout.Header>
            <Layout.Content>
                <Outlet />
            </Layout.Content>
        </Layout>
    )
}

export default MainLayout