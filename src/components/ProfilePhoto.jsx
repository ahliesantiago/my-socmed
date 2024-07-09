import { useEffect, useState } from 'react'
import { getProperties } from 'aws-amplify/storage'

import PlaceholderGirl from "../assets/images/PlaceholderGirl.jpg"

const ProfilePhoto = (username) => {
    const [photo, setPhoto] = useState(PlaceholderGirl)

    useEffect(() => {
        const checkProfilePicture = async () => {
            try {
                const result = await getProperties({
                    path: `protected/profilePhotos/${username}.jpg`,
                })
                // console.log('File exists with properties', result)
                setPhoto(`https://mysocmedauthverificationbucket-dev.s3.ap-southeast-1.amazonaws.com/${result.path}`)
            } catch (error) {
                // console.log("No existing profile picture found in database")
                setPhoto(PlaceholderGirl)
            }
        }

        checkProfilePicture()
    }, [photo])

    return photo
}

export default ProfilePhoto