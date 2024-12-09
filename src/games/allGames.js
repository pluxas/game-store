import firstImg from '../assets/images/shape of the world.png'
import second from '../assets/images/journey.png'
import third from '../assets/images/minecraft.png'
import fourth from '../assets/images/short hike.png'
import first from '../assets/images/catalogImages/1.png'
import secondImg from '../assets/images/catalogImages/2.png'
import thirdImg from '../assets/images/catalogImages/3.png'
import fourthImg from '../assets/images/catalogImages/4.png'
import eighth from '../assets/images/catalogImages/8.png'
import ninth from '../assets/images/catalogImages/9.png'
import tenth from '../assets/images/catalogImages/10.png'
import eleventh from '../assets/images/catalogImages/11.png'

export const AllGames = [
    {
        new: 'Новинка',
        id: 1,
        images: first,
        priceBecome: 500,
        price: '525 P',
        title: 'Удостоенная наград игра Flower вышла для PC! Получив власть над ветром, любуйтесь дивными пейзажами и пускайтесь в управляемый полет над буйной растительностью.',        
        name: 'Flower',
        system_required: {
            id: '5',
            OC: 'Windows 7',
            CPU: 'Intel Core i3-2125 или AMD A8-5600K',
            RAM: '4 GB ОЗУ',
            videoCard: 'GeForce GTX 650 или Radeon R7 250.'
        },
        quantity: 1,
    },
    {
        // position: 'Хит продаж',
        new: 'Новинка',
        id: 2,
        images: secondImg,
        priceBecome: 510,
        price: '600 P',
        title: 'Управляйте любопытным, похожим на воздушного змея существом и побывайте в ярких интересных мирах, где всё только и ждет вашего прибытия.',
        name: 'Honokum',
        system_required: {
            id: '6',
            OC: 'Windows 10',
            CPU: 'Intel Core i3',
            RAM: '2 GB ОЗУ',
            videoCard: 'Intel HD Graphics 4000 с поддержкой OpenGL 4.4.'
        },
        quantity: 1,
    },
    {
        id: 3,
        position: 'TopFour',
        images: second,
        priceBecome: 699,
        priceDollar: 6.7,
        priceEuro: 6.4,
        price: '822 P',
        radioButtonFirst: "Ключ",
        title: `Journey — компьютерная игра в жанре приключенческой игры, разработанная компанией Thatgamecompany. Игроку предстоит совершить путешествие к очень далёкой горе`,
        radioButtonSecond: "Аккаунт Steam",
        name: 'Journey',
        system_required: {
            id: '2',
            OC: 'Windows 10',
            CPU: 'Intel Core i3-2120 | AMD FX-4350',
            RAM: '4 GB ОЗУ',
            videoCard: 'Nvidia GTS 450 | AMD Radeon HD 5750'
        },
        quantity: 1,
    },
    {
        id: 4,
        images: thirdImg,
        priceBecome: 600,
        price: '700 P',
        title: 'Вы просыпаетесь в одиночестве на острове, полном сложных и удивительных загадок.',
        name: 'E Witne',
        system_required: {
            id: '7',
            OC: 'Windows 7',
            CPU: 'Intel Core i3-3210.',
            RAM: '8 GB ОЗУ',
            videoCard: 'GeForce 780'
        },
        quantity: 1,
    },
    {
        id: 5,
        position: 'TopFour',
        images: firstImg,
        priceBecome: 620,
        priceDollar: 5.9,
        priceEuro: 5.7,
        price: '730 P',
        title: `Shape of the World — это игра-исследование, в которой насыщенный и яркий мир вырастает вокруг вас, расслабляющий побег от реальности и взаимодействие с окружающей средой, где так хочется потеряться. Проходя по фантастическим лесам, водным пещерам и безмятежным побережьям, вы понимаете, что ваше присутствие — это движущая сила развития окружающего мира.`,
        radioButtonFirst: "Буст",
        radioButtonSecond: "Origin",
        name: 'Shape of world',
        system_required: {
            id: '1',
            OC: 'Windows 7, 64-bit',
            CPU: '2.4GHz CPU Quad Core',
            RAM: '8 GB ОЗУ',
            videoCard: 'Geforce GTX 780 / Radeon R9 290X'
        },
        quantity: 1,
    },
    {
        id: 6,
        images: fourthImg,
        priceBecome: 510,
        price: '600 P',
        title: 'Вы – художник, путешествующий по острову Ист-Шейд. Запечатлейте неописуемую красоту природы на своем мольберте. Знакомьтесь с местными жителями, посещайте города, взбирайтесь на вершины, раскрывайте тайны и находите всеми забытые уголки!',
        name: 'Eastshade',
        system_required: {
            id: '8',
            OC: 'Windows 8.1, 10;',
            CPU: 'Intel i5-750/AMD Phenom II X4-945',
            RAM: '6 GB ОЗУ',
            videoCard: 'Nvidia GTX 560 Ti/Radeon HD 6950'
        },
        quantity: 1,
    },
    {
        id: 7,
        images: eighth,
        priceBecome: 1681,
        price: '1 990 P',
        title: 'LittleBigPlanet — это серия видеоигр-платформеров-головоломок, созданная и выпущенная британским разработчиком Media Molecule и изданная Sony Interactive Entertainment. В большинстве игр серии особое внимание уделяется пользовательскому контенту, и они основаны на слогане серии «Играй, создавай, делись».',
        name: 'Little Big Planet',
        system_required: {
            id: '9',
            OC: 'Windows XP (SP3) / Vista (SP2) / 7.',
            CPU: 'Intel Core 2 Duo с тактовой частотой 2,0 ГГц или эквивалентный AMD процессор',
            RAM: '1 GB ОЗУ',
            videoCard: 'NVIDIA GeForce 7600 GT или ATI Radeon X700 XT с 256 МБ видеопамяти'
        },
        quantity: 1,
    },
    {
        id: 8,
        images: ninth,
        priceBecome: 1600,
        price: '1 740 P',
        title: 'Unravel – это физический платформер-головоломка о Ярни, персонаже, созданного из одной-единственной нити.',
        name: 'Unravel',
        system_required: {
            id: '10',
            OC: 'Windows 7, Windows 8.1, Windows 10 64-bit.',
            CPU: 'Intel Core 2 Duo @ 2.4GHz or AMD Athlon Phenom X2 @ 2.8Ghz AMD.',
            RAM: '4 GB ОЗУ',
            videoCard: 'GeForce 450GT or Radeon HD 5750 or better, with 512Mb or greater.'
        },
        quantity: 1,
    },
    {
        id: 9,
        images: fourth,
        position: 'TopFour',
        priceBecome: 387,
        priceDollar: 3.7,
        priceEuro: 3.5,
        price: '456 P',
        radioButtonFirst: "Ключ",
        title: `A Short Hike — это приключенческая инди-игра, выпущенная 30 июля 2019 года для персональных компьютеров. Она была разработана и опубликована канадским дизайнером Адамом Робинсоном, известным, как adamgryu`,
        radioButtonSecond: "EpicGames",
        name: 'A Short Hike',
        system_required: {
            id: '4',
            OC: 'Windows 7 SP1+',
            CPU: 'Intel or AMD Dual Core at 2 GHz or better',
            RAM: '2 GB ОЗУ',
            videoCard: 'Intel Graphics 4400 or better'
        },
        quantity: 1,
    },
    {
        id: 10,
        images: tenth,
        priceBecome: 700,
        price: '740 P',
        title: 'Seasons After Fall is a 2D platform-puzzler game that will let you dive into a captivating universe and explore a land governed by magic and nature.',
        name: 'Seasons After Fall',
        system_required: {
            id: '11',
            OC: 'Windows 7/8/10.',
            CPU: 'Intel Core 2 Duo E4500 (2.2GHz)/AMD Athlon 64 X2 5600+ (2.8GHz)',
            RAM: '4 GB ОЗУ',
            videoCard: '1 GB, DirectX 11, AMD Radeon HD 6750/NVIDIA GeForce GT 640.'
        },
        quantity: 1,
    },
    {
        id: 11,
        images: eleventh,
        priceBecome: 600,
        price: '650 P',
        title: 'Визуальный роман о паре, воссоединившейся после трехлетней разлуки. Продвинулись ли эти двое за время, проведенное в разлуке? Или старые страсти возродятся?',
        name: 'Yonder',
        system_required: {
            id: '12',
            OC: 'Windows 7 SP1, Windows 8.1, Windows 10 (64-bit versions only) ',
            CPU: 'Intel Core i5-2400S @ 2.5 GHz or AMD FX-4320 @ 4 GHz or equivalent.',
            RAM: '6 GB ОЗУ',
            videoCard: 'NVIDIA GeForce GTX660 / AMD R9 270X (2GB VRAM with Shader Model 5.0 or better)'
        },
        quantity: 1,
    },
    {
        id: 12,
        position: 'TopFour',
        images: third,
        priceBecome: 2329,
        priceDollar: 22.48,
        priceEuro: 21.43,
        price: "2740 P",
        radioButtonFirst: "Аккаунт",
        title: `Minecraft — компьютерная инди-игра в жанре песочницы, созданная шведским программистом Маркусом Перссоном и выпущенная его студией Mojang AB`,
        radioButtonSecond: "Аккаунт Steam",
        name: 'Minecraft',
        system_required: {
            id: '3',
            OC: 'Windows 7, 8.1, 10;',
            CPU: 'Intel Core i3-3210.',
            RAM: '2 GB ОЗУ',
            videoCard: 'Intel HD Graphics 4000 с поддержкой OpenGL 4.4.'
        },
        quantity: 1,
    },
];
