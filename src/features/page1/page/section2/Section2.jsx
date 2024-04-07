
import { useEffect, useState } from "react"
import css from "./Section2.module.css"
import { useDispatch, useSelector } from "react-redux"
import { GetClos } from "../../../reducerhome/Reducerclos"
import axios from "axios"
import { Getcolortwo } from "../../../reducertwo/Reducercolortwo"
function Section2() {
  const [clouse, setclouse] = useState(true)
  const close = useSelector((state) => {
    return state.clos.clos
  })
  const urll = "http://localhost:3007/colortwo/"
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetClos())
    dispatch(Getcolortwo())
  }, [])
  const [bgid, setbgid] = useState(null)
  
  if (clouse == true) {
    return (
      <div className={css.content}>

        <div className={css.box}>
          <div className={css.atmenit}>
            <h1 className={css.belt}>belt</h1>
            <p className={css.x} onClick={() => {
              setclouse(false)
            }}>X</p>
          </div>
          <div className={css.box1}>
            {close.map(({ url, title, dollars, id, color, sellary }) => {
              return (
                <div className={css.box2} key={id} style={bgid == id ? {
                  borderRadius: "5px",
                  background: "#202226",
                  boxShadow: "0px 0px 15px 2px rgba(0, 0, 0, 0.25)"
                } : null} onClick={() => {
                  setbgid(id)
                  axios.patch(urll + 1 ,{color:color , colorsum:sellary}).then(()=>{
                      dispatch(Getcolortwo())
                  })
                }}>
                  <div className={css.boximage}>
                    <img src={url} alt="" className={css.imgcatigory} />
                  </div>
                  <div className={css.box3}>
                    <p className={css.dollars}>{title}</p>
                    <p className={css.dollars}>{dollars}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

}
export default Section2