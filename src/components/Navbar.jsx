import { useContext } from "react"
import { SessionContext } from "./contexts/SessionContext"
import { signOut } from 'aws-amplify/auth'
import { Link } from "react-router-dom"
import { Menu } from 'antd'

const Navbar = () => {
    const session = useContext(SessionContext)
    let profileLink = "/profile/"
    if(session){
        profileLink = "/profile/" + session.username
    }
    
    async function handleSignOut(e){
        console.log('Signed out successfully.')
        e.preventDefault()
        await signOut()
        localStorage.clear()
    }

    const navItems = [
        {
            label: (<Link to="/">Home</Link>),
        },
        session && {
            label: (<Link to={profileLink}>Profile</Link>),
        },
        !session && {
            label: (<Link to="/join">Join</Link>),
        },
        session &&{
            label: (<Link to="/signout" onClick={handleSignOut}>Sign-out</Link>),
        }
    ]

    return <Menu items={navItems} mode="horizontal" theme="dark" />
}

export default Navbar