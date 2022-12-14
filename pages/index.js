import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Add from '../components/Add'
import AddButton from '../components/AddButton'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'
import styles from '../styles/Home.module.css'

export default function Home({pizzaList, admin}) {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizzeria</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      {admin && <AddButton setOpen={setOpen}/>}
      <PizzaList pizzaList={pizzaList}/>
      {open && <Add setOpen={setOpen}/>}
    </div>
  )
}


export const getServerSideProps = async (context) => {
  const myCookie = context.req?.cookies || ""
  let admin = false
  if(myCookie.token === process.env.TOKEN){
   admin = true
  }
  const res = await axios.get(process.env.BASE_API + "products")
  return{
    props:{
      pizzaList: res.data,
      admin
    }
  }
}