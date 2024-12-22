import Main from '../components/UI/Main';
import Cart from '../pages/Cart';
import CatalogPage from '../pages/Catalog';
import FreeGames from '../pages/FreeGames';
import AShirtHike from '../pages/GamePage/A Short Hike';
import EWitne from '../pages/GamePage/EWitne';
import Eastshade from '../pages/GamePage/Eastshade';
import Flower from '../pages/GamePage/Flower';
import Honokum from '../pages/GamePage/Honokum';
import Journey from '../pages/GamePage/Journey';
import LittleBigPlanet from '../pages/GamePage/LittleBigPlanet';
import Minecraft from '../pages/GamePage/Minecraft';
import NeedForSpeed from '../pages/GamePage/NeedForSpeed';
import NeedForSpeedPayback from '../pages/GamePage/NeedForSpeedPayback';
import NeedForSpeedTwo from '../pages/GamePage/NeedForSpeedTwo';
import SeasonsAfterFall from '../pages/GamePage/SeasonsAfterFall';
import ShapeOfTheWorld from '../pages/GamePage/ShapeOfTheWorld';
import Unravel from '../pages/GamePage/Unravel';
import Yonder from '../pages/GamePage/Yonder';
import Reviews from '../pages/Reviews';
import Support from '../pages/Support';
import OurAdvantages from '../pages/ourAdvantages';

const routes = [
  {
    path: '/',
    element: Main,
  },
  {
    path: '/Shape of world/*',
    element: ShapeOfTheWorld,
  },
  {
    path: '/Journey/*',
    element: Journey,
  },
  {
    path: '/Minecraft/*',
    element: Minecraft
  },
  {
    path: '/A Short Hike/*',
    element: AShirtHike
  },
  {
    path: '/Flower/*',
    element: Flower
  },
  {
    path: '/Honokum/*',
    element: Honokum
  },
  {
    path: '/E Witne/*',
    element: EWitne
  },
  {
    path: '/Eastshade/*',
    element: Eastshade
  },
  {
    path: '/Little big planet/*',
    element: LittleBigPlanet
  },
  {
    path: '/Unravel/*',
    element: Unravel
  },
  {
    path: '/Seasons After FAll/*',
    element: SeasonsAfterFall
  },
  {
    path: '/Yonder/*',
    element: Yonder
  },
  {
    path: '/Need-for-speed/*',
    element: NeedForSpeed
  },
  {
    path: '/Need-for-speed-2013/*',
    element: NeedForSpeedTwo
  },
  {
    path: '/Need-for-speed-payback/*',
    element: NeedForSpeedPayback
  },
  {
    path: '/Catalog/*',
    element: CatalogPage
  },
  {
    path: '/Cart/*',
    element: Cart
  },
  {
    path: '/Free',
    element: FreeGames
  },
  {
    path: '/Reviews',
    element: Reviews
  }, 
  {
    path: '/Support',
    element: Support
  },
  {
    path: '/OurAdvantages',
    element: OurAdvantages
  }
];

export default routes;