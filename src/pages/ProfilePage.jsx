import { useContext } from "react"
import { useParams } from 'react-router-dom'
import { Image, Flex } from "antd"
import { EditFilled } from "@ant-design/icons"

import { SessionContext } from "../components/contexts/SessionContext"
import PlaceholderGirl from "../assets/images/PlaceholderGirl.jpg"
import PostsList from "../components/PostsList"

const ProfilePage = () => {
    const params = useParams()
    const session = useContext(SessionContext)
    const isOwnProfile = session.username === params.username

    return (
        <>
        <Flex className="m-4">
            <Flex vertical justify="center" flex={'flex-shrink: 0'}>
                <Image width={80} src={PlaceholderGirl} />
            </Flex>
            <Flex vertical justify="space-around" className="m-4">
                <Flex justify="space-between">
                    <h1 className="text-lg font-semibold">Ahli S. (@{params.username})</h1>
                    {isOwnProfile && <EditFilled />}
                </Flex>
                <p>About here
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentes
                </p>
            </Flex>
        </Flex>
        <div className="posts">
            <PostsList />
        </div>
        </>
    )
}

export default ProfilePage