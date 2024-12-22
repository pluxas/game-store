import styles from './Reviews.module.scss'
import starsImg from '../../assets/images/stars.png'
import ReviewsGames from './ReviewsGames'

const Reviews = () => {
  return (
    <div>
        <div className={styles.block}>
            <img src={starsImg} alt="" />
            <button>Отзывы о магазине</button>
        </div>
        <ReviewsGames/>
        <ReviewsGames/>
    </div>
  )
}

export default Reviews