import { useTranslation } from 'react-i18next'
import styles from '../HeaderBlock/HeaderBlock.module.scss'
import Comments from './Comments'

const Raffle = () => {
  const {t} = useTranslation()
  
  return (
    <div>
        <div className={styles.raffleGameBlock}>
            <h1 className="font-fontFamily font-semibold text-4xl text-center text-white w-[1001px]">{t('114')}</h1>
            <p className='font-fontFamily font-medium text-2xl text-center text-white w-[1100]'>{t('115')}</p>
        </div>
        <div className='my-28 ml-14 flex flex-col gap-5'>
          <h1 className='font-fontFamily font-semibold text-4xl text-white'>{t('116')}</h1>
          <p className='font-fontFamily font-medium text-2xl text-white'>{t('117')}</p>
        </div>
        <Comments/>
    </div>
  )
}

export default Raffle