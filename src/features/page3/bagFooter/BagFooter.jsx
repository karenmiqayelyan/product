import { useSelector } from 'react-redux'
import css from './BagFooter.module.css'

function BagFooter(){
    const { gumar, } = useSelector((state) => {
        return state.BagcountSlice
    })
    return (
        <div className={css.content}>
            <div className={css.kid}>

                <div className={css.ord}>
                    <p className={css.footetext}>Order price: {gumar[0].gumar1} $</p>
                    <button className={css.order}>order</button>
                </div>
            </div>
            <div className={css.foote}>
                <p className={css.foote1}>© 2020 Composet . All rights reserved.</p>
            </div>
        </div>
    )
}
export default BagFooter