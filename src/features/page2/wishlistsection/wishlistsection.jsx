import css from './wishlistsection.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Gethome } from '../../reducerhome/Reducerhome'
import { Getimages } from '../../reducerhome/Reducerimages'
import { useDispatch, useSelector } from 'react-redux'
import { GetWishlist, Modalimage } from '../../reducerhome/reducerwhishlist/Reducerwishlist'
import { Getbag } from '../../reducerhome/reducerbag/reducerbag'
import { Getbagcount, Gumar } from '../../reducerhome/Reducerbagcount'
function Wishlistsection({ handleOpen }) {
    const { homearr } = useSelector((state) => {
        return state.home
    })
    const images = useSelector((state) => {
        return state.images.images
    })
    const { bag} = useSelector((state) => {
        return state.bag
    })
    const { page} = useSelector((state) => {
        return state.wishlist
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(Gethome())
        dispatch(Getimages())
    }, [])
    const { gumar , cou } = useSelector((state) => {
        return state.BagcountSlice
    })
    const [bgid, setbgid] = useState(null)
    const bagurl = "http://localhost:3006/bag/"
    const urllll = "http://localhost:3006/bagcount/"
    return (
        <div className={css.box9}>
            <div className={css.box6}>
                {homearr.map(({ id, title, buy, sellary, url, status ,  col, color, color1,col1,color2 , usersid }) => {
                    return (status &&  usersid == page &&
                        <div key={id} className={css.bg} style={id == bgid ? { backgroundColor: "#202226" } : null} onClick={() => {
                            setbgid(id)
                        }}>

                            <div className={css.returcategory}>
                                <div className={css.imgretur}>
                                    <div className={css.icon} >

                                        {status ? <i class="fa fa-heart" aria-hidden="true" style={{ fontSize: "25px", color: "white" }}></i> : <i class="fa fa-heart-o" aria-hidden="true" style={{ fontSize: "25px", color: "white" }} ></i>}

                                    </div>
                                    <div className={css.img5} style={ id == 1 && col == true?{backgroundColor:"gold"}: id == 1 && color == true ?{backgroundColor:"gold"}: id==1 &&color1 == true ?{backgroundColor:"grey"}: id == 2 && col1 == true ? {backgroundColor:"gold"}: id == 2 && color2 == true ? {backgroundColor:"grey"}:null}  onClick={() => {

                                        dispatch(Modalimage({ url: url, id: id, sellary: +sellary, title: title }))
                                        handleOpen()
                                    }}>
                                        <img src={url} alt="" className={css.img2} />
                                    </div>
                                    <div className={css.radio}>
                                        {id == 1 || id == 2 ? <div className={css.radio1}>
                                            <div className={css.radio2} style={col == true || col1 == true ?  {transform:"scale(1.4)"}:null}></div>
                                            {id == 1 ? <div className={css.radio2} style={color == true ? {transform:"scale(1.4)"}:null}></div> : null}
                                            <div className={css.radio3} style={color1 == true || color2 == true ? {transform:"scale(1.4)"}:null}></div>


                                        </div> : null}
                                    </div>
                                </div>
                                <div className={css.sellary} style={id == bgid ? { backgroundColor: "#202226" } : null}>
                                    <div className={css.titl}>
                                        <p>{title}</p>
                                        <p className={css.addtobag} onClick={() => {


                                            if (bag.every(val => val.id !== id)) {
                                                axios.post(bagurl, { title: title, sellary: +sellary, url: url, count: 0, id: id, idd: id }).then(() => {
                                                    dispatch(Getbag())
                                                    axios.patch(bagurl + id, { count: 1 }).then(() => {
                                                        dispatch(Getbag())
                                                        dispatch(Gumar({
                                                            count: 1,
                                                            type: "count",
                                                            sellary: +sellary
                                                        }))
                                                        dispatch(Getbagcount())

                                                        axios.patch(urllll +1,{ gumar1:gumar[0].gumar1 + Number(sellary)  }).then(()=>{
                                                            dispatch(Getbagcount())
                                                            dispatch(Gumar({
                                                                count: 1,
                                                                type: "count",
                                                                sellary: +sellary
                                                            }))
                                                        })
                                                    })

                                                })



                                            } else {
                                                axios.patch(bagurl + id, { count: cou + 1 }).then(() => {
                                                    dispatch(Getbag())
                                                    dispatch(Getbagcount()) 
                                                   
                                                    axios.patch(urllll +1,{ gumar1:gumar[0].gumar1 + Number(sellary)  }).then(()=>{
                                                        dispatch(Getbagcount()) 
                                                        dispatch(Gumar({
                                                        count: cou + 1,
                                                        type: "count",
                                                        sellary: +sellary
                                                    }))
                                                    })
                                                })

                                            }

                                        }}>Add  to bag</p>
                                    </div>
                                    <div className={css.sellr} >
                                        <p className={css.many}>{sellary}</p>
                                        <a href="#" className={css.by}>{buy}</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>
           


            
        </div>
    )
}
export default Wishlistsection