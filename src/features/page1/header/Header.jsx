import { Link, useLocation } from 'react-router-dom'
import css from './Header.module.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetWishlist } from '../../reducerhome/reducerwhishlist/Reducerwishlist'
function Header() {
    const [item , setitem] =useState("English")
    const [item1 , setitem1] = useState(false)
    const { wishlist} = useSelector((state) => {
        return state.wishlist
    })
    const bag = useSelector((state)=>{
        return state.bag.bag
    })
    const dispatch = useDispatch()
    const b = useLocation()
    const [ itemblock , setitemblock] = useState(false)
    useEffect(()=>{
        dispatch(GetWishlist())
    },[])
    return (
        <div className={css.parent}>
            <ul className={css.Composet}>
                <p style={{textDecoration:"none"}} onClick={()=>{
                    setitem("home")
                }}>
                    <Link to={"/"} className={css.Composet1}>Composet</Link>
                </p>
            </ul>

            <ul className={css.menu}>

                <li className={css.home} style={b.pathname == "/home"?{cursor:"pointer" , borderBottom: "4px solid #3485FF"}:null} >
                    <Link to={"/home"} className={css.menuli}>Home</Link>
                </li>
                <li  className={css.home1} style={b.pathname== "/wishlist"?{cursor:"pointer" , borderBottom: "4px solid #3485FF"}:null}>
                <i class="fa fa-heart-o" aria-hidden="true"  style={{marginRight:"9px" , color: "#FFF"}}></i>
                    <Link to={"/wishlist"} className={css.menuli}>Wishlist  </Link>
                   
                  { wishlist.length !== 0 ? <span className={css.coun}> 
                           {wishlist.length}
                            </span> : null}
                </li>
                <li  className={css.home} style={b.pathname == "/bag"?{cursor:"pointer" , borderBottom: "4px solid #3485FF"}:null} >
                <i class="fa fa-shopping-basket" aria-hidden="true" style={{marginRight:"9px" , color: "#FFF"}}></i>
                    <Link to={"/bag"} className={css.menuli}>Bag</Link>
                    { bag.length !== 0 ? <span className={css.coun}> 
                           {bag.length}
                            </span> : null}
                </li>
                <li  className={css.home22} style={b.pathname == "/myaccaunt"?{cursor:"pointer" , borderBottom: "4px solid #3485FF"}:null} >
                
                    <Link to={"/myaccaunt"} className={css.menuli}>My Accaunt</Link>
                    <i class="fa fa-bars" aria-hidden="true" style={{color:"white" , fontSize:"25px" , cursor:"pointer"}} onClick={()=>{
                        setitemblock(!itemblock)
                    }}></i>
                     {itemblock == true?<ul className={css.information1}>
                        <Link to='/information' style={b.pathname == '/information'?{color:'#3485FF'}:{color:'white'}} className={css.information}>Personal information</Link>
                     </ul>:null}
                </li>
                <li  className={css.home } style={{cursor:"pointer"}} onClick={()=>{
                            setitem1(!item1)
                }}>
                    <p className={css.menuli}>{item}</p>
                    
                    <i class="fa fa-chevron-down" aria-hidden="true" style={{marginLeft:"9px" , color: "#FFF"}}></i>
                    <ul className={css.language} style={item1?{display:"flex"}:null}>
                        <li className={css.language1}style={b.pathname == "/myaccaunt"?{color:"black"}:null} onClick={()=>{
                            setitem1(!item1)
                            setitem("Armenian")
                        }}>Armenian</li>
                        <li className={css.language1}style={b.pathname == "/myaccaunt"?{color:"black"}:null} onClick={()=>{
                            setitem1(!item1)
                            setitem("Russia")
                        }}>Russia</li>
                        <li className={css.language1}style={b.pathname == "/myaccaunt"?{color:"black"}:null} onClick={()=>{
                            setitem1(!item1)
                            setitem("English")
                        }}>English</li>
                    </ul>
                </li>
            </ul>

        </div>

    )
}
export default Header