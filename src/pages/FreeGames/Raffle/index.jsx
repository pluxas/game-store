import styles from '../HeaderBlock/HeaderBlock.module.scss'
import Comments from './Comments'

const Raffle = () => {
  return (
    <div>
        <div className={styles.raffleGameBlock}>
            <h1 className="font-fontFamily font-semibold text-4xl text-center text-white">Сегодня у каждого есть шанс получить бесплатно ключ <br /> от игры Cities in Motion 2</h1>
            <p className='font-fontFamily font-medium text-2xl text-center text-clear'>Ежедневные <span className='text-white'>бесплатные раздачи</span> лицензионных ключей для игр <span className='text-white'>Steam, Origin, Uplay, GOG на <br /> Playnchill в 19:00 по МСК</span></p>
        </div>
        <div className='my-28 ml-14 flex flex-col gap-5'>
          <h1 className='font-fontFamily font-semibold text-4xl text-white'>Как участвовать в конкурсе</h1>
          <p className='font-fontFamily font-medium text-2xl text-white'>На одной раздаче - один победитель и один приз. Одна раздача игры длится 24 часа. Начало новой раздачи steam игр в 19:00 по Москве. Конкурс ежедневный - шансы выиграть есть у каждого! Победитель выбирается случайно нашим ботом, который честен и непредвзят в любое время года. Бота нельзя подкупить, договориться с ним или понравиться.</p>
        </div>
        <Comments/>
    </div>
  )
}

export default Raffle