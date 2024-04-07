import css from "./Page5section.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Getmyaccaunt } from "../../reducerhome/myaccaunt/Myaccaunt"
import { useSearchParams } from "react-router-dom"
import axios from "axios"
import { Getrefreshtwo, Sumtwo } from "../../reducerhome/reducerrefreshtwo/Reducerrefreshtwo"

function Page5Section() {
    const { listarr, arrcomp, myaccaunt } = useSelector((state) => {
        return state.accaunt
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(Getmyaccaunt())
        dispatch(Getrefreshtwo())
    }, [])
    const [searchcategor, setsearchcategor] = useSearchParams()
    const categorQuery = +searchcategor.get("category")


    const [collection, setcollection] = useSearchParams()
    const collectionQuery = +collection.get("collection")

    const [material, setmaterial] = useSearchParams()
    const materialQuery = +material.get("material")

    const [finish, setfinish] = useSearchParams()
    const finishQuery = +finish.get("material")
    const [item, setitem] = useState(null)
    const [bgid, setbgid] = useState(null)
    const urll = " http://localhost:3007/refreshtwo/"

    return (
        <div className={css.cont}>
            <div className={css.boxnav}>
                <ul className={css.categor1}>
                    <p className={css.textbox}>for?</p>
                    {listarr[0].arr.map(({ id, name }) => {
                        return (
                            <li key={id} className={css.navli} onClick={() => {
                                setsearchcategor({
                                    category: id
                                })
                            }}>{name}</li>
                        )
                    })}
                </ul>

                <ul className={css.categor2}>
                    <p className={css.textbox}>collection</p>
                    {listarr[1].arr.map(({ id, name }) => {
                        return (
                            <li key={id} className={css.navli} onClick={() => {
                                setcollection({
                                    category: searchcategor.get("category"),
                                    collection: id
                                })
                            }}>{name}</li>
                        )
                    })}
                </ul>
                <ul className={css.categor3}>
                    <p className={css.textbox}>material</p>
                    {listarr[2].arr.map(({ id, name }) => {
                        return (
                            <li key={id} className={css.navli} onClick={() => {
                                setmaterial({
                                    category: searchcategor.get("category"),
                                    collection: collection.get('collection'),
                                    material: id

                                })
                            }}>{name}</li>
                        )
                    })}
                </ul>
                <ul className={css.categor4}>
                    <p className={css.textbox}>Finish</p>
                    {listarr[3].arr.map(({ id, name }) => {
                        return (
                            <li key={id} className={css.navli} onClick={() => {
                                setfinish({
                                    category: searchcategor.get("category"),
                                    collection: collection.get('collection'),
                                    material: material.get("material"),
                                    finish: id
                                })
                            }}>{name}</li>
                        )
                    })}
                </ul>
            </div>
            <div className={css.box2section}>
                <div className={css.catigorybox}>
                    <div className={css.categorybox2}>
                        {arrcomp.map(({ id, url, name, url1, url2 }) => {
                            return (

                                id == 1 || id == 5 || id == 6 ? <div key={id} className={css.comp1}>

                                    {id > 5 ? <div style={item == id ? {
                                        opacity: "1",

                                    } : null} onClick={() => {
                                        setitem(id)
                                    }} className={css.img3}>
                                        <img src={url} alt="" className={css.compimg} style={item == id ? {
                                            opacity: "1",
                                            background: "transparent"
                                        } : null} onClick={() => {
                                            setitem(id)
                                        }} />
                                    </div> : <img src={url} alt="" className={css.compimg} style={item == id ? {
                                        opacity: "1",
                                        background: "transparent"
                                    } : null} onClick={() => {
                                        setitem(id)
                                    }} />}
                                    <div className={css.compnam}>
                                        <p className={css.comp4}>{name}</p>
                                    </div>
                                </div> : null
                            )
                        })}
                    </div>


                    <div className={css.inital1}>
                        <p className={css.personal}>Personal information</p>
                        <p className={css.logout}>change password</p>
                        <p className={css.logout}>log out</p>
                    </div>

                </div>


                <div className={css.sort}>
                    <span className={css.by}>sort by <i class="fa fa-chevron-right" aria-hidden="true" style={{ color: "white", fontSize: "18px" }}></i></span>
                    <span className={css.drop}>3  / 35</span>
                </div>
                <div className={css.addbox}>
                    {myaccaunt.filter(val => (val.subkategory == categorQuery || val.kids == categorQuery || val.animals == categorQuery) || (val.collectionQuery == collectionQuery) || (val.materialQuery == materialQuery) || (val.finishQuery == finishQuery)).map(({ id, url, title, sellary }) => {
                        return (
                            <div className={css.box1} key={id} onClick={() => {

                                setbgid(id)
                            }} style={id == bgid ? { backgroundColor: "#202226" } : null}>
                                <div className={css.box2}>
                                    <div className={css.box3}>
                                        <img src={url} alt="" srcset="" className={css.myimage} onClick={()=>{
                                             axios.post(urll, { url: url, sellary: sellary, title: title, color: "#4A4A4A", myid: id,item1:true , count:1}).then(() => {
                                                dispatch(Getrefreshtwo())
                                                dispatch(Sumtwo(sellary))
                                            })
                                        }}/>
                                        <div className={css.like}>
                                            <i class="fa fa-heart-o" aria-hidden="true" style={{ fontSize: "25px", color: "#FFFFFF" }}></i>
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
            </div>

        </div>
    )
}
export default Page5Section