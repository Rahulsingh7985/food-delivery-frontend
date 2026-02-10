import { FaBorderAll } from "react-icons/fa";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { GiHamburger } from "react-icons/gi";
import { TbSoup } from "react-icons/tb";
const Categories = [
    {
        id:1,
        name:"All",
        icon:<FaBorderAll className="w-[60px] h-[60px] text-green-600" />,
    },
    {
        id:2,
        name:"breakfast",
        icon:<MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-600" />,
    },
    {
        id:3,
        name:"burger",
        icon:<GiHamburger className="w-[60px] h-[60px] text-green-600" />,
    },
    {
        id:4,
        name:"soups",
        icon:<TbSoup className="w-[60px] h-[60px] text-green-600" />,
    },
    {
        id:5,
        name:"pasta",
        icon:<FaBorderAll className="w-[60px] h-[60px] text-green-600" />,
    },
    {
        id:6,
        name:"pizza",
        icon:<FaBorderAll className="w-[60px] h-[60px] text-green-600" />,
    },
    

]

export default Categories;