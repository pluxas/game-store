import styles from './Reviews.module.scss'
import starsImg from '../../assets/images/stars.png'
import ReviewsGames from './ReviewsGames'
import { useTranslation } from 'react-i18next'

const Reviews = () => {
  const {t} = useTranslation()

  return (
    <div>
        <div className={styles.block}>
            <img src={starsImg} alt="" />
            <button>{t('99')}</button>
        </div>
        <ReviewsGames/>
        <ReviewsGames/>
    </div>
  )
}

export default Reviews