import user__logo from "./user_logo.png";
import down from "./down.png";
import logo from "./logo.png";
import needforspeed from "./need_for_speed.png";
import scroll1 from "./scroll1.png";
import scroll2 from "./scroll2.png";
import lightning from './lightning.png'
import top_four from './topfour.png'

export const GlobalImages = ({ id }) => {
    switch (id) {
        case "user_logo":
            return <img src={user__logo} alt="" />;
        case "down":
            return <img src={down} alt="" />;
        case "logo":
            return <img src={logo} alt="" />;
        case "needforspeed":
            return <img src={needforspeed} alt="" />;
        case "scroll1":
            return <img src={scroll1} alt="" />;
        case "scroll2":
            return <img src={scroll2} alt="" />;
        case 'lightning':
            return <img src={lightning} alt="" />
        case 'top-four':
            return <img src={top_four} alt="" />
        default:
            return null;
    }
};
