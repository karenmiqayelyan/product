import { useDispatch, useSelector } from 'react-redux'
import css from './Footer.module.css'
import { useEffect, useState } from 'react'
import { GetRefresh, Sum } from '../../../reducerhome/ReducerRefresh'
import axios from 'axios'
import { Getbag, Item, } from '../../../reducerhome/reducerbag/reducerbag'
import { Getbagtwo } from '../../../reducerhome/Reducerbagtwo'
import { Link } from 'react-router-dom'
import { Getbagcount, Gumar } from '../../../reducerhome/Reducerbagcount'
import { Getcolortwo } from '../../../reducertwo/Reducercolortwo'
function Footer() {
    const { refresh, sum } = useSelector((state) => {
        return state.refresh
    })

    const { colortwo } = useSelector((state) => {
        return state.Slicecolortwo
    })
    const sors = "http://localhost:3006/refresh/"
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetRefresh())
        dispatch(Getbag())
        dispatch(Getbagtwo())
        dispatch(Getbagcount())
        dispatch(Getcolortwo())
    }, [])
    const myurl = "http://localhost:3006/bag/"
    const urllll = "http://localhost:3006/bagcount/"
    const bagtwo1 = 'http://localhost:3006/bagtwoarr/'
    const { gumar, } = useSelector((state) => {
        return state.BagcountSlice
    })
    const urll = "http://localhost:3007/colortwo/"
    return (
        <div className={css.content}>
            <div className={css.block}>
                <div className={css.refresh}>
                    <i class="fa fa-repeat" aria-hidden="true" style={{ color: "white", fontSize: "25px", cursor: "pointer" }} onClick={() => {
                        refresh.map(({ id }) => {
                            axios.delete(sors + id).then(() => {
                                dispatch(GetRefresh())
                                dispatch(Sum({ type: "sum", summ: 0 }))
                            })

                        })
                        axios.patch(urll + 1, { color: "#3F4249", colorsum: 4900 }).then(() => {
                            dispatch(Getcolortwo())
                        })
                    }}></i>
                </div>
                <div style={{ position: "relative", width: "90%", height: "120px" , display:"flex" , justifyContent:"center" , alignItems:"center"}}>
                    <div style={colortwo[0].color == "blue" ? { filter: 'invert(11%) sepia(95%) saturate(5696%) hue-rotate(239deg) brightness(90%) contrast(105%)' } : colortwo[0].color == "brown" ? { filter: "invert(27%) sepia(71%) saturate(332%) hue-rotate(339deg) brightness(94%) contrast(92%)" } : colortwo[0].color == "green" ? { filter: "invert(88%) sepia(18%) saturate(587%) hue-rotate(335deg) brightness(90%) contrast(91%)" } : colortwo[0].color == "yellow" ? { filter: 'invert(70%) sepia(84%) saturate(498%) hue-rotate(347deg) brightness(105%) contrast(98%)' } : colortwo[0].color == "black" || colortwo[0].color == "#3F4249" ? { filter: 'invert(100%) sepia(2%) saturate(0%) hue-rotate(173deg) brightness(103%) contrast(101%)' } : colortwo[0].color == "white" ? {
                        filter: " brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)"
                    } : null} className={css.bgimg} >


                    </div>
                    <div style={{ width: "70%", height: "100px", position: "absolute", display: "flex", justifyContent: "center", alignItems: "center" ,  }}>
                        {refresh.map(({ id, url }) => {
                            return (
                                <img src={url} alt="" key={id} className={css.imgretur} />
                            )
                        })}
                    </div>
                </div>

                <div className={css.belt}>belt</div>
                <div className={css.beltt}>
                    <p className={css.price}>Belt price:</p>
                    <p className={css.dollars}>400,00 $</p>
                </div>
                <div className={css.kid}>
                    <div className={css.box}>
                        {
                            refresh.map(({ id, url, sellary }) => {
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
                        <p className={css.text2}>{sum}$</p>
                        <Link to="/bag" className={css.add} onClick={() => {

                            refresh.map(({ url, sellary, title, color }) => {
                                axios.post(myurl, { url: url, color: color, sellary: +sellary, title: title, count: 1 }).then(() => {
                                    dispatch(Getbag())
                                })
                            })

                            axios.patch(urllll + 1, { gumar1: gumar[0].gumar1 + Number(sum) + 4900 }).then(() => {
                                dispatch(Getbagcount())
                                dispatch(Gumar({
                                    type: "count",
                                }))
                            })

                            colortwo.map(({ color, colorsum }) => {
                                axios.post(bagtwo1, { color: color, count: 1, sellary: colorsum, size: "size 25x10", name: "width 25x10" }).then(() => {
                                    dispatch(Getbagtwo())
                                    dispatch(Getcolortwo())
                                })

                            })
                        }}>Add  to bag</Link>
                    </div>
                    <div className={css.version}>© 2020 Composet . All rights reserved.</div>
                </div>

            </div>
        </div >
    )
}
export default Footer