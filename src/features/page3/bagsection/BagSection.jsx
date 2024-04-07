import { useDispatch, useSelector } from 'react-redux'
import css from './BagSection.module.css'
import { useEffect, } from 'react'
import { Getbag, } from '../../reducerhome/reducerbag/reducerbag'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Getbagtwo } from '../../reducerhome/Reducerbagtwo'
import { Getbagcount, Gumar } from '../../reducerhome/Reducerbagcount'
function BagSection() {
    const { bag } = useSelector((state) => {
        return state.bag
    })
    const { gumar, } = useSelector((state) => {
        return state.BagcountSlice
    })
    const dispatch = useDispatch()
    const urll = "http://localhost:3006/bag/"
    useEffect(() => {
        if ((gumar[0].gumar1 < 0 )|| (bag == [] && bagtwo == [])) {
            axios.patch(urllll + 1, { gumar1: 0 }).then(() => {
                dispatch(Getbagcount())
                dispatch(Gumar({ type: "ee" }))

            })
        }
    }, [gumar[0].gumar1])
    useEffect(() => {
        dispatch(Getbag())
        dispatch(Getbagtwo())
        dispatch(Getbagcount())
    }, [])
    const { colortwoo } = useSelector((state) => {
        return state.Slicecolortwoo
    })
    const { bagtwo } = useSelector((state) => {
        return state.BagtwoSlice
    })
    const bagtwo1 = 'http://localhost:3006/bagtwoarr/'
    const urllll = "http://localhost:3006/bagcount/"

    return (
        <div className={css.content}>


            <div className={css.box}>
                {bag.map(({ id, sellary, url, name, size, count }) => {

                    return (

                        <div key={id} className={css.box1}>
                            <div className={css.icondel}>
                                <i class="fa fa-trash-o" aria-hidden="true" style={{ color: "white", fontSize: "23px", cursor: "pointer" }} onClick={() => {

                                    axios.delete(urll + id).then(() => {
                                        dispatch(Getbag())
                                        dispatch(Getbagcount())
                                        if (gumar[0].gumar1 >= 0) {
                                            dispatch(Gumar(
                                                {
                                                    type: "ee"
                                                }
                                            ))
                                            axios.patch(urllll + 1, { gumar1: gumar[0].gumar1 - Number(sellary) * count }).then(() => {
                                                dispatch(Getbagcount())
                                                dispatch(Gumar({ type: "ee" }))

                                            })
                                        }


                                    })

                                }}></i>
                            </div>
                            <div className={css.imagesbg}>
                                <div className={css.imgcomp1}>
                                    <img src={url} alt="" srcset="" className={css.myimages1} />
                                </div>
                                <div className={css.box10} style={{ justifyContent: "center", width: "150px" }}>
                                    <p>Custom Name Bracelet</p>
                                    <div className={css.wid}>
                                        <p className={css.bord}>{name}</p>
                                        <p>{size}</p>
                                    </div>
                                </div>
                                <div className={css.radio5}>
                                    <div className={css.contentradio1}>
                                        <div className={css.bgcolor}></div>
                                    </div>
                                    <div className={css.contentradio1}>
                                        <div className={css.bgcolor}></div>
                                    </div>
                                    <div className={css.contentradio1}></div>
                                </div>
                                <div className={css.count}>

                                    <span className={css.min} onClick={() => {
                                        if (count >= 1) {
                                            axios.patch(urll + id, { count: count - 1 }).then(() => {
                                                dispatch(Getbag())
                                                if (count >= 0) {
                                                    if (gumar[0].gumar1 == 0) {
                                                        axios.patch(urll + id, { count: 0 }).then(() => {
                                                            dispatch(Getbag())
                                                            dispatch(Getbagcount())

                                                        })

                                                    } else {
                                                        dispatch(Gumar({ type: "ee" }))
                                                        axios.patch(urllll + 1, { gumar1: gumar[0].gumar1 - Number(sellary) }).then(() => {
                                                            dispatch(Getbagcount())
                                                            dispatch(Gumar({ type: "ee" }))

                                                        })
                                                    }

                                                }

                                            })
                                        }

                                    }}>-</span>{count}<span className={css.numbe}></span><span className={css.min1} onClick={() => {
                                        axios.patch(urll + id, { count: count + 1 }).then(() => {
                                            dispatch(Getbag())
                                            dispatch(Getbagcount())
                                            dispatch(Gumar({
                                                count: count + 1,
                                                type: "count",
                                                sellary
                                            }))
                                            axios.patch(urllll + 1, { gumar1: gumar[0].gumar1 + Number(sellary) }).then(() => {
                                                dispatch(Getbagcount())
                                            })

                                        })
                                    }}>+</span>

                                </div>
                            </div>
                            <div className={css.selr}>
                                <p className={css.man}>{sellary} $</p>
                                <p className={css.x} onClick={() => {
                                    axios.delete(urll + id).then(() => {
                                        dispatch(Getbag())
                                        dispatch(Getbag())
                                        if (gumar[0].gumar1 >= 0) {
                                            dispatch(Gumar({ type: "ee" }))
                                            axios.patch(urllll + 1, { gumar1: gumar[0].gumar1 - Number(sellary) * count }).then(() => {
                                                dispatch(Getbagcount())
                                                dispatch(Gumar({ type: "ee" }))

                                            })
                                        }
                                    })
                                }}>x</p>
                            </div>

                        </div>
                    )
                })}
                {bagtwo.map(({ id, url, name, size, sellary, count, color }) => {
                    return (
                        <div key={id} className={css.box1} style={{ height: "120px" }}>

                            <div className={css.icondel}>
                                <i class="fa fa-trash-o" aria-hidden="true" style={{ color: "white", fontSize: "23px", cursor: "pointer" }} onClick={() => {

                                    axios.delete(bagtwo1 + id).then(() => {
                                        dispatch(Getbagtwo())
                                        if (gumar[0].gumar1 >= 0) {
                                            dispatch(Gumar({ type: "ee" }))
                                            axios.patch(urllll + 1, { gumar1: gumar[0].gumar1 - Number(sellary) * count }).then(() => {
                                                dispatch(Getbagcount())
                                                dispatch(Gumar({ type: "ee" }))

                                            })
                                        }



                                    })


                                }}></i>
                            </div>
                            <div className={css.imagesbg1}>
                                <div className={css.imgcomp8}>
                                    <div className={css.imgcomp3}>
                                        <div className={css.myimages11} style={color == "blue" ? { filter: 'invert(11%) sepia(95%) saturate(5696%) hue-rotate(239deg) brightness(90%) contrast(105%)' } : color == "brown" ? { filter: "invert(27%) sepia(71%) saturate(332%) hue-rotate(339deg) brightness(94%) contrast(92%)" } : color == "green" ? { filter: "invert(88%) sepia(18%) saturate(587%) hue-rotate(335deg) brightness(90%) contrast(91%)" } : color == "yellow" ? { filter: 'invert(70%) sepia(84%) saturate(498%) hue-rotate(347deg) brightness(105%) contrast(98%)' } : color == "black" || color == "#3F4249" ? { filter: 'invert(100%) sepia(2%) saturate(0%) hue-rotate(173deg) brightness(103%) contrast(101%)' } : color == "white" ? {
                                            filter: " brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)"
                                        } : null} />
                                    </div>
                                </div>

                                <div className={css.imgpx}>
                                    <div className={css.box10} style={{ justifyContent: "center", width: "200px" }}>

                                        <p>Custom Name Bracelet</p>
                                        <div className={css.wid} style={{ width: "190px", height: "30px" }}>
                                            <p className={css.bord}>{name}</p>
                                            <p>{size}</p>
                                        </div>
                                    </div>
                                    <div className={css.contentradio}>
                                        <div className={css.radioo}>
                                            <div className={css.radiored}></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className={css.count}>

                                <span className={css.min} onClick={() => {
                                    if (count >= 1) {
                                        axios.patch(bagtwo1 + id, { count: count - 1 }).then(() => {
                                            dispatch(Getbagtwo())
                                            if (count >= 0) {
                                                if (gumar[0].gumar1 == 0) {
                                                    axios.patch(bagtwo1 + id, { count: 0 }).then(() => {
                                                        dispatch(Getbagtwo())
                                                    })

                                                } else {
                                                    dispatch(Gumar({ type: "ee" }))
                                                    axios.patch(urllll + 1, { gumar1: gumar[0].gumar1 - Number(sellary) }).then(() => {
                                                        dispatch(Getbagcount())
                                                        dispatch(Gumar({ type: "ee" }))

                                                    })
                                                }

                                            }

                                        })
                                    }

                                }}>-</span>{count}<span className={css.numbe}></span><span className={css.min1} onClick={() => {
                                    axios.patch(bagtwo1 + id, { count: count + 1 }).then(() => {
                                        dispatch(Getbagtwo())
                                        dispatch(Gumar({ type: "count" }))
                                        axios.patch(urllll + 1, { gumar1: gumar[0].gumar1 + Number(sellary) }).then(() => {
                                            dispatch(Getbagcount())
                                            dispatch(Gumar({ type: "count" }))

                                        })
                                    })
                                }}>+</span>

                            </div>
                            <div className={css.selr2}>
                                <p className={css.man}>{sellary} $</p>
                                <p className={css.x} onClick={() => {
                                    axios.delete(bagtwo1 + id).then(() => {
                                        dispatch(Getbagtwo())
                                        if (gumar[0].gumar1 >= 0) {
                                            dispatch(Gumar({ type: "ee" }))
                                            axios.patch(urllll + 1, { gumar1: gumar[0].gumar1 - Number(sellary) * count }).then(() => {
                                                dispatch(Getbagcount())
                                                dispatch(Gumar({ type: "ee" }))

                                            })
                                        }
                                    })
                                }}>x</p>
                            </div>
                        </div>
                    )
                })}
                <div className={css.ord}>
                    <div className={css.ord1}>
                        <Link to="/wishlist" className={css.add}>Add product</Link>
                    </div>
                    <div className={css.order}>
                        <p className={css.order1}> Order price: {gumar[0].gumar1} $</p>
                        <button className={css.butt}>order</button>
                    </div>
                </div>


            </div>


        </div>
    )
}
export default BagSection