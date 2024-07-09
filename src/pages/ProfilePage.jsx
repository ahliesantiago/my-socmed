import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { uploadData } from 'aws-amplify/storage'
import { Button, Flex, Image, message, Upload } from 'antd'
import ImgCrop from 'antd-img-crop'
import { EditFilled, UploadOutlined } from '@ant-design/icons'

import { SessionContext } from "../components/contexts/SessionContext"
import ProfilePhoto from '../components/ProfilePhoto'
import PostsList from "../components/PostsList"

const ProfilePage = () => {
    const [file, setFile] = useState(null)
    const params = useParams()
    const photoSrc = ProfilePhoto(params.username)
    const session = useContext(SessionContext)
    const isOwnProfile = session.username === params.username

    const editBio = () => {
        console.log('Edit bio')
    }

    const props = {
        multiple: false,
        /* eslint-disable-next-line no-unused-vars */
        beforeUpload: (file) => {
            setFile(file)
            return false
        }
    }

    const handleUpload = async () => {
        try {
            const fileName = file.name
            const fileExtension = fileName.split('.').pop()
            /* eslint-disable-next-line no-unused-vars */
            const result = await uploadData({
                path: `protected/profilePhotos/${session.username}.${fileExtension}`,
                data: file,
                options: {
                    metadata: {
                        username: session.username,
                        type: 'Profile Picture'
                    },
                }
            }).result
            message.success('Photo uploaded successfully')
            console.log('Photo uploaded successfully')
        } catch (error) {
            message.error('Error uploading file, see console for details')
            console.error('Error uploading file:', error)
        }
    }

    return (
        <>
        <Flex className="m-4">
            <Flex vertical justify="center" flex={'flex-shrink: 0'}>
                <Image width={80} src={photoSrc}
                    preview={{
                        destroyOnClose: true,
                        imageRender: () => (
                            <img src={photoSrc} />
                        ),
                        toolbarRender: () => (
                            isOwnProfile ? (
                                <>
                                <ImgCrop>
                                    <Upload accept='image/*' {...props}>
                                        <Button icon={<UploadOutlined />}>Choose photo</Button>
                                    </Upload>
                                </ImgCrop>
                                <Button
                                    type="primary"
                                    onClick={handleUpload}
                                    disabled={!file}
                                    // loading={uploading}
                                    style={{
                                        marginTop: 16,
                                    }}
                                >
                                    Save new profile picture
                                </Button>
                                </>                          
                            )
                            : null
                        ),
                    }}
                />
            </Flex>
            <Flex vertical justify="space-around" className="m-4">
                <Flex justify="space-between">
                    <h1 className="text-lg font-semibold">Ahli S. (@{params.username})</h1>
                    {isOwnProfile && <EditFilled onClick={editBio} />}
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