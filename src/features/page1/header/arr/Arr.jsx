
import Wishlist from "../../../page2/whishlist/Whishlist";
import Bag from "../../../page3/bag/Bag";
import Myaccaunt from "../../../page4/page4rout/page4route";
import Page5 from "../../../page5/Page5";
import Page from "../../page/page";

 export const Arr = [
    {
        id:Math.random(),
        path:'/',
        name:'Composet',
        element:<Page/>
    },
    {
        id:Math.random(),
        path:'/home',
        name:'Home',
        element:<Page/>
    },
    {
        id:Math.random(),
        path:'/wishlist',
        name:'Wishlist',
        element:<Wishlist/>
    },
    {
        id:Math.random(),
        path:'/bag',
        name:'Bag',
        element:<Bag/>
    },
    {
        id:Math.random(),
        path:'/myaccaunt',
        name:'My Accaunt',
        element:<Myaccaunt/>
    },
    {
        id:Math.random(),
        path:'/information',
        name:'Personal information',
        element:<Page5/>
    }
 ]