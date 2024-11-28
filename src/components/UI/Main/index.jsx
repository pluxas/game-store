import Catalog from "./Catalog";
import Discount from "./DIscount";
import PlayNow from "./PlayNow";
import Scroll from "./Scroll";
import TopFour from "./TopFour";
import Blogs from "./Blogs";
import Recall from "./Recall";

const Main = () => {
    return (
        <div>
            <Scroll />
            <TopFour />
            <PlayNow />
            <Catalog />
            <Discount />
            <Blogs />
            <Recall />
        </div>
    );
};

export default Main;
