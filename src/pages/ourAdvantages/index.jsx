import { useTranslation } from "react-i18next";
import { GlobalSvgIcons } from "../../assets/icons/GlobalSvgIcons";
import headerImg from "../../assets/images/ourAdvantagesHeaderBg.png";
import styles from '../Support/Support.module.scss'

const OurAdvantages = () => {
    const {t} = useTranslation()

    const data = [
        {
            id: 1,
            image: 'first',
            name: '92',
        },
        {
            id: 2,
            image: 'second',
            name: '93',
        },
        {
            id: 3,
            image: 'third',
            name: '94',
        },
        {
            id: 4,
            image: 'forth',
            name: '95',
        },
        {
            id: 5,
            image: 'fifth',
            name: '96'
        },
        {
            id: 6,
            image: 'sixth',
            name: '97',
        },
        {
            id: 7,
            image: 'seventh',
            name: '98',
        }
    ]

    return (
        <div>
            <div className="flex items-center mt-11 justify-between">
                <h1 className="font-fontFamily font-extrabold text-6xl text-white ">
                    {t('91')}
                </h1>
                <img src={headerImg} alt="" />
            </div>
            <div className={styles.block}></div>
            <div className="grid grid-cols-3 gap-10 mr-8">
                {data.map(block => (
                    <div className="py-16 px-7 flex flex-col items-center gap-9" key={block.id}>
                        <div className="flex items-center gap-7 w-64">
                            <GlobalSvgIcons id={block.image}/>
                            <h2 className="font-fontFamily font-bold text-2xl text-white">{t(`${block.name}`)}</h2>
                        </div>
                        <p className="text-center font-fontFamily font-normal text-base text-white opacity-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis, dictum semper sem a. Justo, eget luctus faucibus vitae tincidunt sit faucibus sollicitudin. Lectus senectus in tempus, amet, nam nec. Enim amet nec cras quis felis nullam porta lorem ante. Odio.</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurAdvantages;
