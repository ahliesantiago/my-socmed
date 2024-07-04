import { useContext, useState } from "react"
import { SessionContext } from "./contexts/SessionContext"
import { Card, Dropdown, Flex } from "antd"
import {
    DownCircleOutlined, 
    FlagOutlined,
    LikeOutlined,
    RetweetOutlined,
    SnippetsOutlined,
    SendOutlined
} from "@ant-design/icons"
import PlaceholderGirl from "../assets/images/PlaceholderGirl.jpg"

const Post = (props) => {
    const session = useContext(SessionContext)
    const isOwner = session.username === props.poster
    const [isPublic, setIsPublic] = useState(props.privacy === 'public')
    const isCollapsed = props.content.length > 150

    const cardStyle = {
        margin: '1rem',
    }
    const imgStyle = {
        width: 50,
        borderRadius: '45%',
        marginRight: '1rem'
    }

    const onClick = ({key}) => {
        switch (key) {
            case 'edit':
                console.log('edit')
                break
            case 'delete':
                console.log('delete')
                break
            case 'pin':
                console.log('pin')
                break
            case 'privacy':
                setIsPublic(!isPublic)
                break
            default:
                break
        }
    }

    const items = [
        {
            key: 'edit',
            label: 'Edit post',
        },
        {
            key: 'delete',
            label: 'Delete post',
        },
        {
            key: 'pin',
            label: 'Pin this post',
        },
        {
            key: 'privacy',
            label: isPublic ? 'Set to private' : 'Set to public',
        },
    ]

    return (
        <Card style={cardStyle}
            actions={[
                <LikeOutlined key="like" />,
                <RetweetOutlined key="repost" />,
                <FlagOutlined key="report" />,
                <SnippetsOutlined key="save" />,
                <SendOutlined key="share" />,
            ]}
        >
            <Flex>
                <img style={imgStyle} src={PlaceholderGirl} alt="profile picture" />
                <Flex vertical style={{ width: '100%' }}>
                    <Flex justify="space-between">
                        <h4 className="mt-1">@{props.poster}</h4>
                        {isOwner && (
                            <Dropdown
                                menu={{items, onClick}}
                                placement="bottomRight"
                                arrow={{pointAtCenter: true}}
                                trigger={['click']}
                            >
                                <DownCircleOutlined />
                            </Dropdown>
                        )}
                    </Flex>
                    <p>{props.content}</p>
                </Flex>
            </Flex>
        </Card>
    )
}

export default Post