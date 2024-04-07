import { Route, Routes } from "react-router-dom"
import { Arr } from "../header/arr/Arr"
import css from './Routfil.module.css'
function Routfil(){
    return(
        <div className={css.content}>
            <Routes>
                {Arr.map(({ id , element , path})=>{
                    return(
                        <Route key={id} path={path} element={element}/>
                    )
                })}
            </Routes>
        </div>
    )
}
export default Routfil