import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import css from './Modalwishlist.module.css'
import { useSelector } from 'react-redux';
const style = {
    position: 'absolute',
    top: '58%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    height: 360,
    bgcolor: 'red.paper',
    boxShadow: 24,
    p: 4,
    padding: 0,
    margin: 0,
    borderRadius: '8px',
    background:'red'
};
function Modalwishlist({ open1, setOpen1 }) {
    const handleClose = () => setOpen1(false);
    const { images } = useSelector((state) => {
        return state.wishlist
    })
    return (
        <div className={css.modal2}>
            <Modal
                open={open1}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={css.modal4}>  {images.map(({ id, url , sellary , title }) => {
                        return (
                            <div className={css.modal5} key={id}>
                                <div className={css.header}>
                                    <p className={css.p} onClick={() => {
                                        handleClose()
                                    }}>x</p>
                                </div>

                                <div className={css.section1}>
                                    <div className={css.imgmodal}>
                                        <div className={css.like}>
                                            <i class="fa fa-heart-o" aria-hidden="true" style={{ color: 'white', fontSize: "17px" }}></i>
                                        </div>
                                        <div className={css.imgcontent}>
                                            <img src={url} alt="" srcset="" key={id} className={css.imgbg} />

                                        </div>
                                    </div>
                                    <div className={css.textt}>
                                        <p className={css.many}>{title}</p>
                                        <p className={css.dolors}>{sellary}  $</p>
                                        <p className={css.lorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae non iaculis non non. Tristique vel tellus urna blandit sed gravida posuere tellus diam. Venenatis nunc enim ac condimentum facilisis rutrum rhoncus sagittis sed. Adipiscing odio lectus purus in id id. Lorem enim molestie commodo fusce dolor cras.</p>
                                    </div>
                                </div>
                                <div className={css.twoimg}>
                                    <div className={css.tryimg}>
                                    <div className={css.bord}><img src={url}alt="" srcset="" className={css.bord1}/></div>
                                    <div className={css.bord}><img src={url}alt="" srcset="" className={css.bord1}/></div>
                                    <div className={css.bord}><img src={url}alt="" srcset="" className={css.bord1}/></div>
                                        
                                        
                                        
                                    </div>
                                </div>


                            </div>
                            )
                    })}
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default Modalwishlist