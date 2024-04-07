import { useEffect, useState } from "react"

import css from "./Page5.module.css"
import Page5Section from "./Page5section/Page5section"
import Page5footer from "./page5footer/Page5footer"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { GetClos } from "../reducerhome/Reducerclos";
import { Getcolortwoo } from "../reducertwo/Reducercolortwoo";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height: 260,
    padding:0,
    margin:0
};

function Page5() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [clouse, setclouse] = useState(true)
    const close = useSelector((state) => {
      return state.clos.clos
    })
    const urll = "http://localhost:3007/colortwoo/"
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(GetClos())
    }, [])
    const [bgid, setbgid] = useState(null)
    
    return (
        <div className={css.cont}>
            <div className={css.cont2}>
                <Page5Section />

            </div>
            <Page5footer handleOpen={handleOpen}/>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={css.box}>
                        <div className={css.atmenit}>
                            <h1 className={css.belt}>belt</h1>
                            <p className={css.x} onClick={() => {
                              handleClose()
                            }}>X</p>
                        </div>
                        <div className={css.box1}>
                            {close.map(({ url, title, dollars, id, color, sellary }) => {
                                return (
                                    <div className={css.box2} key={id} style={bgid == id ? {
                                        borderRadius: "5px",
                                        background: "#202226",
                                        boxShadow: "0px 0px 15px 2px rgba(0, 0, 0, 0.25)"
                                    } : null} onClick={() => {
                                        handleClose()
                                        setbgid(id)
                                        axios.patch(urll + 1, { color: color, colorsum: sellary }).then(() => {
                                            dispatch(Getcolortwoo())
                                        })
                                    }}>
                                        <div className={css.boximage}>
                                            <img src={url} alt="" className={css.imgcatigory} />
                                        </div>
                                        <div className={css.box3}>
                                            <p className={css.dollars}>{title}</p>
                                            <p className={css.dollars}>{dollars}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}
export default Page5