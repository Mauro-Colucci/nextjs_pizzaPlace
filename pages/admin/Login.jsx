import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../../styles/Login.module.css'

const Login = () => {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(null)
    const router = useRouter()

    const handleclick = async() =>{
        try {
            await axios.post(process.env.BASE_API + 'login',{
                username,
                password
            })
            router.push("/admin")
        } catch (err) {
            console.error(err)
            setError(true)
        }
    }


  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h1>Admin dashboard</h1>
            <input className={styles.input} placeholder="username"  onChange={(e)=>setUsername(e.target.value)}/>
            <input type="password" className={styles.input} placeholder="password"  onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleclick} className={styles.button}>Sign In</button>
            {error && <span className={styles.error}>Wrong credentials!</span>}
        </div>
    </div>
  )
}

export default Login