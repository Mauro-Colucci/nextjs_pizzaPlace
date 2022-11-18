import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>BEST PIZZA ON THE BLOCK!</h1>
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum distinctio dolorem praesentium expedita. Ut odio at ullam et. Corporis delectus quae minima voluptatem repellat earum eius illum, quasi dolorum, rerum.
        </p>
        <div className={styles.wrapper}>
          {pizzaList.map(pizza=>
            <PizzaCard key={pizza._id} pizza={pizza}/>
          )}
        
        </div>
    </div>
  )
}

export default PizzaList