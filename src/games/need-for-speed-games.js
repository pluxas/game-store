import First from '../assets/images/swiperImg/need-for-speed-2013.jpg'
import Second from '../assets/images/swiperImg/need-for-speed.png'
import Third from '../assets/images/swiperImg/need-for-speed-payback.jpg'

export const SwiperGames = [
    {
        id: 1,
        className: 'first',
        images: First,
        title: '10',
        priceBecome: 2200,
        priceDollar: 22.06,
        priceEuro: 21.24,
        price: 3000,
        priceBecomeDollar: 30.08,
        priceBecomeEuro: 28.92,
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
        title: '11',
        priceBecome: 3300,
        priceDollar: 33.09,
        priceEuro: 31.86,
        price: 5000,
        priceBecomeDollar: 50.13,
        priceBecomeEuro: 48.21,
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
        title: '12',
        priceBecome: 2000,
        priceDollar: 20.05,
        priceEuro: 19.31,
        price: 2700,
        priceBecomeDollar: 27.07,
        priceBecomeEuro: 26.03,
        name: 'Need-for-speed-payback',
        system_required: {
            id: '5',
            OC: 'Windows 10',
            CPU: 'Intel i5 4690K @ 3.5GHz or AMD FX 8350 @ 4.0GHz with 4 hardware threads',
            RAM: '8 GB ОЗУ',
            videoCard: 'AMD Radeon™ RX 480 4GB, NVIDIA GeForce® GTX 1060 6GB'
        },
        quantity: 1,
    },
]