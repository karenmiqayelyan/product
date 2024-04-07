import { useDispatch, useSelector } from 'react-redux'
import css from './Sectionpage.module.css'
import { Getmyaccaunt } from '../../../reducerhome/myaccaunt/Myaccaunt'
import { useEffect, useState } from 'react'
function Page4section({ categorQuery, collectionQuery, materialQuery, finishQuery, handleOpen, setimageid }) {
    const dispatch = useDispatch()
    const [bgid, setbgid] = useState(null)
    const { myaccaunt, arrcomp } = useSelector((state) => {
        return state.accaunt
    })
    useEffect(() => {
        dispatch(Getmyaccaunt())
    }, [])
    const [item, setitem] = useState(null)
    return (
        <div className={css.kid}>
            <div className={css.comp}>
                {arrcomp.map(({ id, url, name, url1, url2 }) => {
                    return ( id <6 &&

                        <div key={id} className={css.comp1}>

                            {id == 4 ? <div style={item == id ? {
                                opacity: "1",

                            } : null} onClick={() => {
                                setitem(id)
                            }} className={css.img3}>
                                <img src={url} className={css.imgbg}></img>
                                <img src={url1} className={css.imgbg}></img>
                                <img src={url2} className={css.imgbg}></img>
                            </div> : <img src={url} alt="" className={css.compimg} style={item == id ? {
                                opacity: "1",
                                background: "transparent"
                            } : null} onClick={() => {
                                setitem(id)
                            }} />}
                            <div className={css.compnam}>
                                <p className={css.comp4}>{name}</p>
                            </div>
                        </div>
                    )
                })}
            </div>




            {myaccaunt.filter(val => (val.subkategory == categorQuery || val.kids == categorQuery || val.animals == categorQuery) || (val.collectionQuery == collectionQuery) || (val.materialQuery == materialQuery) || (val.finishQuery == finishQuery)).map(({ id, url, title, sellary }) => {
                return (
                    <div className={css.box1} key={id} onClick={() => {
                        handleOpen()
                        setbgid(id)
                        setimageid(url)
                    }} style={id == bgid ? { backgroundColor: "#202226" } : null}>
                        <div className={css.box2}>
                            <div className={css.box3}>
                                <img src={url} alt="" srcset="" className={css.myimage} />
                                <div className={css.like}>
                                    <i class="fa fa-heart-o" aria-hidden="true" style={{ fontSize: "25px", color: "red" }}></i>
                                    <div className={css.radi}>
                                        {id == 1 || id == 5 || id == 2 || id == 6 ? <div className={css.radio1}>
                                            <div className={css.radio2}></div>
                                            {id == 1 || id == 5 ? <div className={css.radio2}></div> : null}
                                            <div className={css.radio3}></div>
                                        </div> : null}
                                    </div>
                                </div>
                            </div>
                            <div className={css.dat}>
                                <div className={css.selar}>
                                    <p className={css.titl}>{title}</p>
                                    <p className={css.dolor}>{sellary} $</p>
                                </div>
                                <div className={css.add}>
                                    <p className={css.add1}>Add  to bag</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Page4section