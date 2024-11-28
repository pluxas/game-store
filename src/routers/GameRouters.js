import Main from '../components/UI/Main';
import CatalogPage from '../pages/Catalog';
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
  }
];

export default routes;