import styles from '../styles/Add.module.css'

const AddButton = ({setOpen}) => {
  return (
    <div className={styles.mainAddButton} onClick={()=>setOpen(true)}>
        Add new Pizza
    </div>
  )
}

export default AddButton