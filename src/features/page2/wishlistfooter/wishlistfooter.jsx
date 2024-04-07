import { useEffect, useState } from 'react'
import css from './wishlist.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { Pageniation } from '../../reducerhome/reducerwhishlist/Reducerwishlist'

function Wishlistfooter() {
    const [item, setitem] = useState(null)
    const { wishlist } = useSelector((state) => {
        return state.wishlist
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(Pageniation(1))
    }, [])
    return (
        <div className={css.content}>
            <div className={css.box1}>
                <div className={css.page}>
                    {console.log(item)}
                    {new Array(Math.ceil(Math.floor(wishlist.length + 1) / 9)).fill(undefined).map((_, index) => {

                        return (
                            <div key={index} onClick={()=>{
                                dispatch(Pageniation(index + 1))
                            }} className={css.page2}>
                                <div className={css.page1}>{index + 1}</div>
                            </div>

                        )
                    })}
                </div>
            </div>
            <div className={css.box2}>
                <p className={css.footer}>© 2020 Composet . All rights reserved.</p>
            </div>
        </div>
    )
}
export default Wishlistfooter