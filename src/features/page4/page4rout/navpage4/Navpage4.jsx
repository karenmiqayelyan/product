import { useDispatch, useSelector } from 'react-redux'
import css from './Navpage4.module.css'
import { useEffect } from 'react'
import { Getmyaccaunt } from '../../../reducerhome/myaccaunt/Myaccaunt'

function Nav({searchcategor , setsearchcategor ,collection, setcollection ,material,setmaterial,finish,setfinish}) {
    const { myaccaunt, listarr } = useSelector((state) => {
        return state.accaunt
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(Getmyaccaunt())
    }, [])
    

    return (
        <div className={css.nav1}>
            <div className={css.nav2}>
                <div className={css.nav3}>
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
                                        material:id
                                        
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
                                        material:material.get("material"),
                                        finish:id
                                    })
                                }}>{name}</li>
                            )
                        })}
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Nav