import WebMoney from '../assets/images/typeofpaymentsimg/WebMoney.png'
import Qiwi from '../assets/images/typeofpaymentsimg/Logo_qiwi.png'
import MasterCard from '../assets/images/typeofpaymentsimg/mastercard.png'
import Visa from '../assets/images/typeofpaymentsimg/Visa.png'
import Mir from '../assets/images/typeofpaymentsimg/mir.png'
import Ethereum from '../assets/images/typeofpaymentsimg/ETHEREUM-YOUTUBE-PROFILE-PIC 1.png'
import Bitcoin from '../assets/images/typeofpaymentsimg/Bitcoin.png'
import SamsungPay from '../assets/images/typeofpaymentsimg/Samsung_Pay.png'

export const paymentMethods = [
    {
        id: 1,
        name: '128',
        image_one: WebMoney,
        image_two: Qiwi,
    },
    {
        id: 2,
        name: '129',
        image_one: MasterCard,
        image_two: Visa,
        image_three: Mir,
    }, 
    {
        id: 3,
        name: '130',
        image_one: Ethereum,
        image_two: Bitcoin,
    },
    {
        id: 4,
        name: 'Samsung Pay',
        image_one: SamsungPay,
    }
]