import First from '../assets/images/swiperImg/need-for-speed-2013.jpg'
import Second from '../assets/images/swiperImg/need-for-speed.png'
import Third from '../assets/images/swiperImg/need-for-speed-payback.jpg'

export const SwiperGames = [
    {
        id: 1,
        className: 'first',
        images: First,
        title: 'Готовы править на улицах? Покоряйте оживлённые улицы Вентуры-Бей за рулём легендарных машин.',
        priceBecome: 2200,
        price: '3 000 P',
        name: 'Need-for-speed',
        system_required: {
            id: '5',
            OC: 'Windows 7',
            CPU: 'Intel Quad Core or AMD Six Core',
            RAM: '8 GB ОЗУ',
            videoCard: 'Nvidia GeForce GTX 660 3GB or AMD Radeon HD 7870'
        },
        quantity: 1,
    },
    {
        id: 2,
        className: 'second',
        images: Second,
        title: 'Тотальная война нового поколения началась! Сыграйте в Battlefield™ 2042 уже сегодня. Адаптируйтесь и процветайте!',
        priceBecome: 3300,
        price: '5 000 P',
        name: 'Need-for-speed-2013',
        system_required: {
            id: '5',
            OC: 'Windows 7',
            CPU: 'Intel Quad Core or AMD Six Core',
            RAM: '8 GB ОЗУ',
            videoCard: 'Nvidia GeForce GTX 660 3GB or AMD Radeon HD 7870'
        },
        quantity: 1,
    },
    {
        id: 3,
        className: 'third',
        images: Third,
        title: 'К омпьютерная игра серии Need for Speed в жанре аркадных автогонок, разработанная студией Ghost Games',
        priceBecome: 2000,
        price: '2 700 P',
        name: 'Need-for-speed-payback',
        system_required: {
            id: '5',
            OC: 'Windows 10',
            CPU: 'ntel i5 4690K @ 3.5GHz or AMD FX 8350 @ 4.0GHz with 4 hardware threads',
            RAM: '8 GB ОЗУ',
            videoCard: 'AMD Radeon™ RX 480 4GB, NVIDIA GeForce® GTX 1060 6GB'
        },
        quantity: 1,
    },
]