import { useState } from "react"
import { Button, Flex } from "antd"

const PostAdd = () => {
    const [remaining, setRemaining] = useState(500)
    const [exceeded, setExceeded] = useState(false)

    const adjustTextboxHeight = (e) => {
        setRemaining(500 - e.target.value.length)

        if(remaining > 0){
            setExceeded(false)
            if(e.target.scrollHeight > 74) {
                document.getElementById('post').style.height = e.target.scrollHeight + 'px'
            }
            if(e.target.value.length < 200) {
                document.getElementById('post').style.height = '74px'
            }
        }else{
            setExceeded(true)
        }
    }

    const styles = {
        textarea: {
            width: '95%',
            resize: 'none',
            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
            margin: '1rem',
            marginBottom: '0',
            padding: '1rem',
            fontFamily: 'Arial',
            backgroundColor: '#f0f0f0',
        },
        remaining: {
            color: exceeded ? 'red' : 'black',
        }
    }

    return (
        <form action="">
            <textarea name="post" id="post" rows="2" style={styles.textarea} onChange={adjustTextboxHeight}></textarea>
            <Flex className="mr-6" justify="flex-end" style={styles.remaining}>{remaining}/500</Flex>
            <Flex className="mr-6" justify="flex-end"><Button type="primary" disabled={remaining < 0}>Post</Button></Flex>
        </form>
    )
}

export default PostAdd