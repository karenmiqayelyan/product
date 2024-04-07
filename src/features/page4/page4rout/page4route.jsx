import { Link, useSearchParams } from 'react-router-dom'
import Footerpage4 from './footerbage4/Footerpage4'
import Nav from './navpage4/Navpage4'
import css from './page4route.module.css'
import Page4section from './sectionpage4/Sectionpage'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 840,
    height: 550,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    background: 'rgba(0, 0, 0, 0.525)',
    p: 4,
    border: 'none',
    borderRadius: '16px',
    margin: 0,
    padding: 0,
};
function Myaccaunt() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [searchcategor, setsearchcategor] = useSearchParams()
    const categorQuery = +searchcategor.get("category")


    const [collection, setcollection] = useSearchParams()
    const collectionQuery = +collection.get("collection")

    const [material, setmaterial] = useSearchParams()
    const materialQuery = +material.get("material")

    const [finish, setfinish] = useSearchParams()
    const finishQuery = +finish.get("material")
    const [imageid, setimageid] = React.useState('')
    const [bgid , setbgid] = React.useState(null)
    return (
        <div className={css.parent}>
            <div className={css.box}>
                <Nav searchcategor={searchcategor} setsearchcategor={setsearchcategor} collection={collection} setcollection={setcollection} material={material} setmaterial={setmaterial} finish={finish} setfinish={setfinish} />
                <Page4section categorQuery={categorQuery} collectionQuery={collectionQuery} materialQuery={materialQuery} finishQuery={finishQuery} handleOpen={handleOpen} setimageid={setimageid} />
            </div>
            <Footerpage4 />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={css.mod}>
                        <div className={css.modimg}>
                            <div className={css.imgcont}>
                                <img src={imageid} alt="" srcset="" className={css.returimg} />
                            </div>
                            <div className={css.duble}>
                            <i class="fa fa-chevron-left" aria-hidden="true" style={{color:"#D0D0D0" , fontSize:"18px" , marginRight:"10px"}}></i>
                                <img src={imageid} alt="" srcset="" className={css.cont4} style={bgid ==1?{transform:"scale(1.5)" }:null} onClick={()=>{
                                    setbgid(1)
                                }}/>
                                <img src={imageid} alt="" srcset="" className={css.cont4} style={bgid==2 ?{transform:"scale(1.5)" }:null} onClick={()=>{
                                    setbgid(2)
                                }}/>
                                <img src={imageid} alt="" srcset="" className={css.cont4} style={bgid ==3?{transform:"scale(1.5)" }:null} onClick={()=>{
                                    setbgid(3)
                                }}/>
                                <img src={imageid} alt="" srcset="" className={css.cont4} style={bgid ==4?{transform:"scale(1.5)" }:null} onClick={()=>{
                                    setbgid(4)
                                }}/>
                            <i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#D0D0D0" , fontSize:"18px" ,marginLeft:"10px"}}></i>

                            </div>
                        </div>
                        <div className={css.kid1}>
                            <div className={css.kid2}>
                                <h2 className={css.col}>silver platinum Bracelet Woman</h2>
                                <p className={css.col}>7,89$</p>
                                <p className={css.col}>С НДС</p>
                                <div className={css.kid3}>
                                    <p className={css.col}>Размер:</p>
                                    <p className={css.l}>M</p>
                                    <p className={css.l}>L</p>
                                </div>
                                <div className={css.kid3}>
                                    <p className={css.col}>Цвет</p>
                                    <p className={css.col1}></p>
                                </div>
                                <div className={css.kid3}>
                                    <p className={css.col}>Огранка</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="26" viewBox="0 0 16 26" fill="none">
                                        <path d="M9.98065 3.99354L11.2194 3.21934M15.0904 13.0774C14.264 14.4077 12.9742 16.4838 12.9742 16.4838L15.0904 13.0774ZM15.0904 13.0774C14.3043 11.727 13.0774 9.61935 13.0774 9.61935L15.0904 13.0774ZM15.0904 13.0774C14.9914 11.5884 14.6223 9.36591 14.5226 9.41289L15.0904 13.0774ZM15.0904 13.0774C15.028 14.5017 14.9495 15.2961 14.5742 16.6903L15.0904 13.0774ZM12.9742 16.4838C12.9742 16.4838 13.9494 16.6097 14.5742 16.6903L12.9742 16.4838ZM12.9742 16.4838L13.2839 19.7355L12.9742 16.4838ZM12.9742 16.4838L10.3936 18.6517L12.9742 16.4838ZM12.9742 16.4838L11.5806 13.0774L12.9742 16.4838ZM14.5742 16.6903C14.1126 17.968 13.8332 18.6416 13.2839 19.7355L14.5742 16.6903ZM13.2839 19.7355L9.87743 22.1097L13.2839 19.7355ZM13.2839 19.7355C12.5456 21.0623 12.121 21.7877 11.2194 22.8323L13.2839 19.7355ZM9.87743 22.1097L11.2194 22.8323L9.87743 22.1097ZM9.87743 22.1097L8.12259 25L9.87743 22.1097ZM9.87743 22.1097L8.12259 21.1806L9.87743 22.1097ZM9.87743 22.1097L10.3936 18.6517L9.87743 22.1097ZM11.2194 22.8323C10.0833 24.0026 9.42068 24.5454 8.12259 25L11.2194 22.8323ZM8.12259 25V21.1806V25ZM8.12259 25L6.2129 22.1097L8.12259 25ZM8.12259 25C6.52084 24.6203 5.818 24.1151 4.81936 22.8323L8.12259 25ZM8.12259 21.1806L6.2129 22.1097L8.12259 21.1806ZM8.12259 21.1806L5.8 18.6517L8.12259 21.1806ZM8.12259 21.1806L10.3936 18.6517L8.12259 21.1806ZM6.2129 22.1097L4.81936 22.8323L6.2129 22.1097ZM6.2129 22.1097L5.8 18.6517L6.2129 22.1097ZM6.2129 22.1097L2.96129 20.0451L6.2129 22.1097ZM4.81936 22.8323C3.89231 21.7326 3.53725 21.1254 2.96129 20.0451L4.81936 22.8323ZM5.8 18.6517L3.11613 16.4838L5.8 18.6517ZM5.8 18.6517L4.50968 13.0774L5.8 18.6517ZM2.96129 20.0451L3.11613 16.4838L2.96129 20.0451ZM2.96129 20.0451C2.28775 18.782 1.91795 18.1066 1.56774 16.742L2.96129 20.0451ZM3.11613 16.4838L4.50968 13.0774L3.11613 16.4838ZM3.11613 16.4838L1.56774 16.742L3.11613 16.4838ZM3.11613 16.4838L1 13.0774L3.11613 16.4838ZM4.50968 13.0774L3.11613 9.72257L4.50968 13.0774ZM4.50968 13.0774L5.8 7.4L4.50968 13.0774ZM1.56774 16.742C1.14228 15.3186 1.03599 14.4745 1 13.0774L1.56774 16.742ZM1 13.0774L3.11613 9.72257L1 13.0774ZM1 13.0774C1.07469 11.6505 1.09938 10.8489 1.61936 9.46451L1 13.0774ZM3.11613 9.72257L1.61936 9.46451L3.11613 9.72257ZM3.11613 9.72257L5.8 7.4L3.11613 9.72257ZM3.11613 9.72257L2.96129 6.16128L3.11613 9.72257ZM1.61936 9.46451C2.06801 8.12032 2.35854 7.39494 2.96129 6.16128L1.61936 9.46451ZM10.3936 18.6517L11.5806 13.0774L10.3936 18.6517ZM11.5806 13.0774L13.0774 9.61935L11.5806 13.0774ZM11.5806 13.0774L10.3936 7.50322L11.5806 13.0774ZM5.8 7.4L6.2129 3.99354L5.8 7.4ZM5.8 7.4C5.81002 7.31741 7.31816 5.67956 8.07098 4.87096L5.8 7.4ZM2.96129 6.16128L6.2129 3.99354L2.96129 6.16128ZM2.96129 6.16128C3.61181 4.88215 4.02221 4.22735 4.87097 3.21934L2.96129 6.16128ZM6.2129 3.99354L8.07098 4.87096L6.2129 3.99354ZM6.2129 3.99354C6.2129 3.99354 7.34535 2.12875 8.07098 1L6.2129 3.99354ZM6.2129 3.99354L4.87097 3.21934L6.2129 3.99354ZM8.07098 4.87096C8.07098 4.87096 8.07098 2.47139 8.07098 1V4.87096ZM8.07098 4.87096L10.3936 7.50322L8.07098 4.87096ZM8.07098 4.87096L9.98065 3.99354L8.07098 4.87096ZM8.07098 1C8.81674 2.12875 9.98065 3.99354 9.98065 3.99354L8.07098 1ZM8.07098 1C7.12115 1.15931 5.13599 2.62985 4.87097 3.21934L8.07098 1ZM8.07098 1C9.65002 1.50849 10.3167 2.09567 11.2194 3.21934L8.07098 1ZM10.3936 7.50322L13.0774 9.61935L10.3936 7.50322ZM10.3936 7.50322L9.98065 3.99354L10.3936 7.50322ZM13.0774 9.61935L14.5226 9.41289L13.0774 9.61935ZM13.0774 9.61935L13.2839 6.16128L13.0774 9.61935ZM14.5226 9.41289C14.1266 8.12548 13.8405 7.41652 13.2839 6.16128L14.5226 9.41289ZM13.2839 6.16128L9.98065 3.99354L13.2839 6.16128ZM13.2839 6.16128C12.5431 4.92459 12.1193 4.24272 11.2194 3.21934L13.2839 6.16128Z" stroke="#B0B0B0" stroke-width="0.5" />
                                    </svg>
                                </div>
                                <div className={css.kid6}>
                                    <p className={css.col}>Количество</p>
                                    <p className={css.col}>1</p>
                                    <div className={css.chac}>
                                        <i class="fa fa-chevron-up" aria-hidden="true" style={{ color: "white", width: "6px", height: "10px", background: "#4A4A4A" }}></i>
                                        <i class="fa fa-chevron-down" aria-hidden="true" style={{ color: "white", width: "6px", height: "10px", background: "#4A4A4A" }}></i>
                                    </div>

                                    <Link className={css.karzin} to="/wishlist">в корзину</Link>
                                    <p className={css.nalich}>Нет в наличии</p>
                                </div>
                                <div className={css.kid3} style={{ justifyContent: "space-around", width: "50%" }}>
                                    <p className={css.col}>Поделиться</p>
                                    <i class="fa fa-facebook" aria-hidden="true" style={{ color: "white" }}></i>
                                    <i class="fa fa-instagram" aria-hidden="true" style={{ color: "white" }}></i>
                                    <i class="fa fa-linkedin" aria-hidden="true" style={{ color: "white" }}></i>
                                </div>
                            </div>
                            <div className={css.kid10}>
                                <p className={css.col}>Политика безопасности</p>
                                <p className={css.col}>Политика доставки</p>
                                <p className={css.col}>Политика возврата</p>
                            </div>

                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}
export default Myaccaunt