import { useDispatch, useSelector } from "react-redux"
import css from "./Page5footer.module.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { Getrefreshtwo, Sumtwo } from "../../reducerhome/reducerrefreshtwo/Reducerrefreshtwo"
import { Getbagtwo } from "../../reducerhome/Reducerbagtwo"
import { Getbagcount, Gumar } from "../../reducerhome/Reducerbagcount"
import { Getbag } from "../../reducerhome/reducerbag/reducerbag"
import { Getcolortwoo } from "../../reducertwo/Reducercolortwoo"

function Page5footer({handleOpen}) {
    const { refreshtwo, sumtwo } = useSelector((state) => {
        return state.SliceREfreshtwo
    })
    const { gumar, } = useSelector((state) => {
        return state.BagcountSlice
    })
   
    const {colortwoo} = useSelector((state)=>{
        return state.Slicecolortwoo
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(Getrefreshtwo())
        dispatch(Getbag())
        dispatch(Getbagtwo())
        dispatch(Getbagcount())
        dispatch(Getcolortwoo())
    }, [])
    const url = " http://localhost:3007/refreshtwo/"
    const myurl = "http://localhost:3006/bag/"
    const urllll = "http://localhost:3006/bagcount/"
    const bagtwo1 = 'http://localhost:3006/bagtwoarr/'
    const urllmy = "http://localhost:3007/colortwoo/"

    const [item, setitem] = useState(false)
    const [item1, setitem1] = useState(false)
    const [siz, setsiz] = useState("size 25x10")
    const [siz1, setsiz1] = useState("width 25x10")

    return (
        <div className={css.hed}>
            <div className={css.hed2}>
                <div className={css.refresh}>
                    <i class="fa fa-repeat" aria-hidden="true" style={{ color: "white", fontSize: "25px", cursor: "pointer" }} onClick={() => {
                        refreshtwo.map(({ id }) => {
                            axios.delete(url + id).then(() => {
                                dispatch(Getrefreshtwo())
                                dispatch(Sumtwo({ type: "sum", summ: 0 }))
                            })

                        })
                        axios.patch(urllmy + 1, { color: "#3F4249", colorsum: 4900 }).then(() => {
                            dispatch(Getcolortwoo())
                        })
                    }}></i>
                </div>
                <div style={{width:"100%" , height : "100px" , display:"flex" , justifyContent:"center" , alignItems:"center" , position:"relative"}}>
                    <div className={css.bgimg} onClick={()=>{
                   
                }} style={colortwoo[0].color == "blue" ? { filter: 'invert(11%) sepia(95%) saturate(5696%) hue-rotate(239deg) brightness(90%) contrast(105%)' } : colortwoo[0].color == "brown" ? { filter: "invert(27%) sepia(71%) saturate(332%) hue-rotate(339deg) brightness(94%) contrast(92%)" } : colortwoo[0].color == "green" ? { filter: "invert(88%) sepia(18%) saturate(587%) hue-rotate(335deg) brightness(90%) contrast(91%)" } : colortwoo[0].color == "yellow" ? { filter: 'invert(70%) sepia(84%) saturate(498%) hue-rotate(347deg) brightness(105%) contrast(98%)' } : colortwoo[0].color == "black" || colortwoo[0].color == "#3F4249" ? { filter: 'invert(100%) sepia(2%) saturate(0%) hue-rotate(173deg) brightness(103%) contrast(101%)' } : colortwoo[0].color == "white" ? {
                    filter:" brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)"
                } : null} >

                   
                </div> 
                <div style={{width:"100%" , height:"100px" , display:"flex" , justifyContent:"center" , alignItems:"center", position:"absolute" , cursor:"pointer"}} onClick={()=>{
                     handleOpen()
                }}>
                    {refreshtwo.map(({ id, url }) => {
                        return (
                            <img src={url} alt="" key={id} className={css.imgretur} />
                        )
                    })}
                </div>
                
                </div>
                
                <div className={css.belt}>belt</div>
                <div className={css.beltt}>
                    <div className={css.mayn}>
                        <ul className={css.categor5}>
                            <li className={css.categorsize}>size <i class="fa fa-chevron-down" aria-hidden="true" style={{ color: "white", cursor: "pointer" }} onClick={() => {
                                setitem1(!item1)
                            }}></i>

                            </li>
                            <ul className={css.displa2} style={item == true ? { display: "flex" } : { display: "none" }}>
                                <li className={css.size30} onClick={() => {
                                    setsiz(" size 15 sm")
                                    setitem(false)

                                }}>15 sm</li>
                                <li className={css.size30} onClick={() => {
                                    setsiz(" size 16 sm")
                                    setitem1(false)

                                }}>16 sm</li>
                                <li className={css.size30} onClick={() => {
                                    setsiz(" size 17 sm")
                                    setitem(false)

                                }}>17 sm</li>
                                <li className={css.size30} onClick={() => {
                                    setsiz(" size 18 sm")
                                    setitem(false)

                                }}>18 sm</li>
                            </ul>
                            <li className={css.categorsize}>width <i class="fa fa-chevron-down" aria-hidden="true" onClick={() => {
                                setitem(!item)
                            }} style={{ cursor: "pointer" }}></i></li>
                            <ul className={css.displa} style={item1 == true ? { display: "flex" } : { display: "none" }}>
                                <li className={css.size30} onClick={() => {
                                    setsiz1("width 15 sm")
                                    setitem1(false)

                                }}>15 sm</li>
                                <li className={css.size30} onClick={() => {
                                    setsiz1("width 16 sm")
                                    setitem1(false)

                                }}>16 sm</li>
                                <li className={css.size30} onClick={() => {
                                    setsiz1("width 17 sm")
                                    setitem1(false)

                                }}>17 sm</li>
                                <li className={css.size30} onClick={() => {
                                    setsiz1("width 18 sm")
                                    setitem1(false)

                                }}>18 sm</li>
                            </ul>
                            <li className={css.categorsize}>Belts</li>
                            <li className={css.radio19}></li>
                        </ul>
                    </div>

                    <p className={css.price}>Belt price:</p>
                    <p className={css.dollars}>400,00 $</p>
                </div>
                <div className={css.kid}>
                    <div className={css.box}>
                        {
                            refreshtwo.map(({ id, url, sellary }) => {
                                return (
                                    <div className={css.cont} key={id}>
                                        <div key={id} className={css.bgretur}>
                                            <img src={url} alt="" className={css.bg} />
                                        </div>
                                        <p className={css.sellr}>
                                            {sellary}
                                        </p>

                                    </div>


                                )
                            })
                        }
                    </div>
                    <div className={css.total}>
                        <p className={css.text1}>total price:</p>
                        <p className={css.text2}>{sumtwo}$</p>

                    </div>
                    <div className={css.addtobag}>
                        <div className={css.addtobag2}>
                            <div className={css.addtobagwidth}>
                                <Link to="/bag" className={css.add} onClick={() => {

                                    refreshtwo.map(({ url, sellary, title, color }) => {
            
                                            axios.post(myurl, { url: url, color: color, sellary: +sellary, title: title, count: 1 }).then(() => {
                                            dispatch(Getbag())
                                        })
                          
                                    })

                                    axios.patch(urllll + 1, { gumar1: gumar[0].gumar1 + Number(sumtwo) + 4900 }).then(() => {
                                        dispatch(Getbagcount())
                                        dispatch(Gumar({
                                            type: "count",
                                        }))
                                    })

                                    colortwoo.map(({ color, colorsum }) => {
                                        axios.post(bagtwo1, { color: color, count: 1, sellary: colorsum, size: siz, name: siz1 }).then(() => {
                                            dispatch(Getbagtwo())
                                            dispatch(Getcolortwoo())
                                        })

                                    })
                                }}>Add  to bag</Link>

                            </div>
                            <button className={css.order20}>order</button>
                        </div>
                    </div>
                    <div className={css.version}>© 2020 Composet . All rights reserved.</div>
                </div>
            </div>

        </div>
    )
}
export default Page5footer