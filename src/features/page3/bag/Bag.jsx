import BagFooter from "../bagFooter/BagFooter"
import BagSection from "../bagsection/BagSection"
import css from './Bag.module.css'
function Bag(){
    return(
        <div className={css.content}>
            
            <BagSection/>
            <BagFooter/>
        </div>
    )
}
export default Bag