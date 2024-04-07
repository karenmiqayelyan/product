import { useState } from "react"
import Modalwishlist from "../modalWishlist/Modalwishlist"
import Wishlistfooter from "../wishlistfooter/wishlistfooter"
import Wishlistheader from "../wishlistheader/wishlistheader"
import Wishlistsection from "../wishlistsection/wishlistsection"
import css from "./Wishlist.module.css"
function Wishlist() {
    const [open1 , setOpen1] = useState(false)
    const handleOpen = () => setOpen1(true);

    return (
        <div className={css.comp1}>
            <div className={css.content}>
                <div className={css.box}>
                    <Wishlistheader />
                    <Wishlistsection handleOpen={handleOpen}/>
                    <Wishlistfooter />
                </div>
            </div>
            <div className={css.comp2}>
                <div className={css.comp3}>
                    <Modalwishlist open1={open1} setOpen1={setOpen1} />
                </div>
              
            </div>
        </div>

    )
}
export default Wishlist