import { useDispatch, useSelector } from 'react-redux'
import css from './Section.module.css'
import { useEffect, useState } from 'react'
import { Gethome } from '../../../reducerhome/Reducerhome'
import { GetRefresh, Sum } from '../../../reducerhome/ReducerRefresh'
import axios from 'axios'
import { GetWishlist } from '../../../reducerhome/reducerwhishlist/Reducerwishlist'
import { Getbag } from '../../../reducerhome/reducerbag/reducerbag'
import { Getbagcount, Gumar } from '../../../reducerhome/Reducerbagcount'
import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = [
    {
        label: 'Select campaign settings',
        description: 17
    },
    {
        label: 'Create an ad group',
        description: 22
    },
    {
        label: 'Create an ad',
        description: 27,
    },
];
const steps1 = [
    {
        label: 'Select campaign settings',
        description: 5
    },
    {
        label: 'Create an ad group',
        description: 10
    },
    {
        label: 'Create an ad',
        description: 13,
    },
];
function Section() {
    const [twoactiv, settwoactiv] = useState(13)
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        settwoactiv(twoactiv + 5)
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        settwoactiv(twoactiv - 5)

    };
 /////
 const [twoactiv1, settwoactiv1] = useState(1)
 const theme1 = useTheme();
 const [activeStep1, setActiveStep1] = React.useState(0);
 const maxSteps1 = steps.length;
 const handleNext1 = () => {
     setActiveStep1((prevActiveStep) => prevActiveStep + 1);
     settwoactiv1(twoactiv1 + 5)
 };

 const handleBack1 = () => {
     setActiveStep1((prevActiveStep) => prevActiveStep - 1);
     settwoactiv1(twoactiv1 - 5)

 };

    const { homearr } = useSelector((state) => {
        return state.home
    })
    const { bag } = useSelector((state) => {
        return state.bag
    })
    const { wishlist } = useSelector((state) => {
        return state.wishlist
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(Gethome())
        dispatch(Getbag())
    }, [])
    const res = "http://localhost:3006/refresh"
    const [bgid, setbgid] = useState(null)
    const urlll = "http://localhost:3006/categoryimages/"
    const wish = "http://localhost:3006/wishlist/"
    const myurl = "http://localhost:3006/bag/"
    useEffect(() => {

        dispatch(Gethome())

    }, [])
    const urllll = "http://localhost:3006/bagcount/"
    const { gumar } = useSelector((state) => {
        return state.BagcountSlice
    })
    return (

        <div className={css.content}>
            <div className={css.category1}>

                <div className={css.category1}>
                    <div className={css.Collection}>
                        Collection
                    </div>
                    <div className={css.category2}>
                        <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
                            <Box sx={{ height: "100%", width: '100%', p: 2, display: "flex", justifyContent: "space-around" }}>
                                {homearr.map(({ id, title, buy, sellary, url, status, col, color, color1, col1, color2 }) => {
                                    console.log(twoactiv, "twoactiv", activeStep)
                                    return (id >= 13 && id <= steps[activeStep].description && id >= twoactiv &&
                                        <div key={id} className={css.bg} style={id == bgid ? { backgroundColor: "#202226" } : null}>

                                            <div className={css.returcategory}>
                                                <div className={css.imgretur}>
                                                    <div className={css.icon} >

                                                        {status ? <i class="fa fa-heart" aria-hidden="true" style={{ fontSize: "25px", color: "white" }} onClick={() => {

                                                            axios.patch(urlll + id, { status: false, usersid: 0 }).then(() => {
                                                                dispatch(Gethome())

                                                                if (status) {

                                                                    axios.delete(wish + id).then(() => {
                                                                        dispatch(GetWishlist())
                                                                        if (bag.every(val => val.id == id)) {
                                                                            if (bag.length >= 1) {
                                                                                axios.delete(myurl + id).then(() => {
                                                                                    dispatch(Getbag())

                                                                                    axios.patch(urllll + 1, { gumar1: gumar[0].gumar1 - Number(sellary) }).then(() => {
                                                                                        dispatch(Getbagcount())
                                                                                        dispatch(Gumar({ type: "ee" }))

                                                                                    })

                                                                                })
                                                                            }

                                                                        }
                                                                    })



                                                                }
                                                            })


                                                        }}></i> : <i class="fa fa-heart-o" aria-hidden="true" style={{ fontSize: "25px", color: "white" }} onClick={() => {

                                                            axios.patch(urlll + id, { status: true, usersid: Math.ceil(Math.floor(wishlist.length + 1) / 8) }).then(() => {
                                                                dispatch(Gethome())
                                                                axios.post(wish, { respon: false, id: id, title1: title, }).then(() => {
                                                                    dispatch(GetWishlist())
                                                                })

                                                            })

                                                        }}></i>}

                                                    </div>
                                                    <div className={css.img5} style={id == 1 && col == true ? { backgroundColor: "gold" } : id == 1 && color == true ? { backgroundColor: "gold" } : id == 1 && color1 == true ? { backgroundColor: "grey" } : id == 2 && col1 == true ? { backgroundColor: "gold" } : id == 2 && color2 == true ? { backgroundColor: "grey" } : null} onClick={() => {
                                                        setbgid(id)
                                                        axios.post(res, { url: url, sellary: sellary, color: "#4A4A4A", myid: id, item1: true, count: 1 }).then(() => {
                                                            dispatch(GetRefresh())
                                                            dispatch(Sum(sellary))
                                                        })

                                                    }}>
                                                        <img src={url} alt="" className={css.img2} />
                                                    </div>
                                                    <div className={css.radio}>
                                                        {id == 1 || id == 2 ? <div className={css.radio1} >
                                                            <div className={css.radio2} style={col == true || col1 == true ? { transform: "scale(1.3)" } : null} onClick={() => {
                                                                if (id == 1) {
                                                                    axios.patch(urlll + 1, { col: true, color1: false, color: false }).then(() => {
                                                                        dispatch(Gethome())
                                                                        axios.patch(urlll + 2, { col1: false, color2: false }).then(() => {
                                                                            dispatch(Gethome())

                                                                        })
                                                                    })
                                                                } else {
                                                                    axios.patch(urlll + 2, { col1: true, color2: false }).then(() => {
                                                                        dispatch(Gethome())
                                                                        axios.patch(urlll + 1, { col: false, color: false, color1: false }).then(() => {
                                                                            dispatch(Gethome())
                                                                        })
                                                                    })
                                                                }
                                                            }}></div>
                                                            {id == 1 ? <div className={css.radio2} style={color == true ? { transform: "scale(1.3)" } : null} onClick={() => {
                                                                axios.patch(urlll + 1, { col: false, color: true, color1: false }).then(() => {
                                                                    dispatch(Gethome())
                                                                    axios.patch(urlll + 2, { col1: false, color2: false }).then(() => {
                                                                        dispatch(Gethome())

                                                                    })
                                                                })

                                                            }}></div> : null}
                                                            <div className={css.radio3} style={color1 == true || color2 == true ? { transform: "scale(1.3)" } : null} onClick={() => {
                                                                if (id == 1) {
                                                                    axios.patch(urlll + 1, { col: false, color: false, color1: true }).then(() => {
                                                                        dispatch(Gethome())
                                                                        axios.patch(urlll + 2, { col1: false, color2: false }).then(() => {
                                                                            dispatch(Gethome())

                                                                        })
                                                                    })
                                                                } else {
                                                                    axios.patch(urlll + 2, { col1: false, color2: true }).then(() => {
                                                                        dispatch(Gethome())
                                                                        axios.patch(urlll + 1, { col: false, color: false, color1: false }).then(() => {
                                                                            dispatch(Gethome())
                                                                        })
                                                                    })
                                                                }
                                                            }}></div>


                                                        </div> : null}
                                                    </div>
                                                </div>
                                                <div className={css.sellary} style={id == bgid ? { backgroundColor: "#202226" } : null}>
                                                    <div className={css.titl}>
                                                        <p>{title}</p>
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
                            </Box>
                            <MobileStepper
                                variant="text"
                                steps={maxSteps}
                                position="static"
                                activeStep={activeStep}
                                nextButton={
                                    <Button
                                        size="small"
                                        onClick={handleNext}
                                        disabled={activeStep === maxSteps - 1}
                                    >
                                        Next
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowLeft />
                                        ) : (
                                            <KeyboardArrowRight />
                                        )}
                                    </Button>
                                }
                                backButton={
                                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowRight />
                                        ) : (
                                            <KeyboardArrowLeft />
                                        )}
                                        Back
                                    </Button>
                                }
                            />
                        </Box>

                    </div>
                </div>




                <div className={css.page2}>
                    <div className={css.CHArms}>
                        CHArms
                    </div>
                    <div className={css.category2}>
                        <Box sx={{ width: "100%", flexGrow: 1 }}>
                            <Box sx={{ height: "100%", width: '100%', p: 2, display: "flex", justifyContent: "space-around" }}>
                                {homearr.map(({ id, title, buy, sellary, url, status, col, color, color1, col1, color2 }) => {
                                    return (id < 13 && id <= steps1[activeStep1].description && id >= twoactiv1 &&
                                        <div className={css.bg} style={id == bgid ? { backgroundColor: "#202226" } : null} key={id}>
                                            <div className={css.returcategory}>
                                                <div className={css.imgretur}>
                                                    <div className={css.icon} >
                                                        {status ? <i class="fa fa-heart" aria-hidden="true" style={{ fontSize: "25px", color: "white" }} onClick={() => {

                                                            axios.patch(urlll + id, { status: false, usersid: 0 }).then(() => {
                                                                dispatch(Gethome())

                                                                if (status) {
                                                                    axios.delete(wish + id).then(() => {
                                                                        dispatch(GetWishlist())
                                                                        if (bag.every(val => val.id == id)) {
                                                                            if (bag.length >= 1) {
                                                                                axios.delete(myurl + id).then(() => {
                                                                                    dispatch(Getbag())
                                                                                    dispatch(Gumar({ type: "ee" }))
                                                                                    axios.patch(urllll + 1, { gumar1: gumar[0].gumar1 - Number(sellary) }).then(() => {
                                                                                        dispatch(Getbagcount())
                                                                                        dispatch(Gumar({ type: "ee" }))

                                                                                    })
                                                                                })
                                                                            }
                                                                        }

                                                                    })

                                                                }
                                                            })


                                                        }}></i> : <i class="fa fa-heart-o" aria-hidden="true" style={{ fontSize: "25px", color: "white" }} onClick={() => {


                                                            axios.patch(urlll + id, { status: true, usersid: Math.ceil(Math.floor(wishlist.length + 1) / 8) }).then(() => {
                                                                dispatch(Gethome())

                                                                axios.post(wish, { respon: false, id: id, title1: title }).then(() => {
                                                                    dispatch(GetWishlist())
                                                                })
                                                            })

                                                        }}></i>}

                                                    </div>
                                                    <div className={css.img5} style={id == 7 && col == true ? { backgroundColor: "gold" } : id == 7 && color == true ? { backgroundColor: "gold" } : id == 7 && color1 == true ? { backgroundColor: "grey" } : id == 8 && col1 == true ? { backgroundColor: "gold" } : id == 8 && color2 == true ? { backgroundColor: "grey" } : null} onClick={() => {
                                                        setbgid(id)

                                                        axios.post(res, { url: url, sellary: sellary, title: title, color: "#4A4A4A", myid: id, item1: true, count: 1 }).then(() => {
                                                            dispatch(GetRefresh())
                                                            dispatch(Sum(sellary))
                                                        })
                                                    }}>
                                                        <img src={url} alt="" className={css.img2} />
                                                    </div>
                                                    <div className={css.radio}>
                                                        {id == 7 || id == 8 ? <div className={css.radio1}  >
                                                            <div className={css.radio2} style={col == true || col1 == true ? { transform: "scale(1.3)" } : null} onClick={() => {
                                                                if (id == 7) {
                                                                    axios.patch(urlll + 7, { col: true, color1: false, color: false }).then(() => {
                                                                        dispatch(Gethome())
                                                                        axios.patch(urlll + 8, { col1: false, color2: false }).then(() => {
                                                                            dispatch(Gethome())

                                                                        })
                                                                    })
                                                                } else {
                                                                    axios.patch(urlll + 8, { col1: true, color2: false }).then(() => {
                                                                        dispatch(Gethome())
                                                                        axios.patch(urlll + 7, { col: false, color: false, color1: false }).then(() => {
                                                                            dispatch(Gethome())
                                                                        })
                                                                    })
                                                                }
                                                            }}></div>
                                                            {id == 7 ? <div className={css.radio2} style={color == true ? { transform: "scale(1.3)" } : null} onClick={() => {
                                                                axios.patch(urlll + 7, { col: false, color: true, color1: false }).then(() => {
                                                                    dispatch(Gethome())
                                                                    axios.patch(urlll + 8, { col1: false, color2: false }).then(() => {
                                                                        dispatch(Gethome())

                                                                    })
                                                                })

                                                            }}></div> : null}
                                                            <div className={css.radio3} style={color1 == true || color2 == true ? { transform: "scale(1.3)" } : null} onClick={() => {
                                                                if (id == 7) {
                                                                    axios.patch(urlll + 7, { col: false, color: false, color1: true }).then(() => {
                                                                        dispatch(Gethome())
                                                                        axios.patch(urlll + 8, { col1: false, color2: false }).then(() => {
                                                                            dispatch(Gethome())

                                                                        })
                                                                    })
                                                                } else {
                                                                    axios.patch(urlll + 8, { col1: false, color2: true }).then(() => {
                                                                        dispatch(Gethome())
                                                                        axios.patch(urlll + 7, { col: false, color: false, color1: false }).then(() => {
                                                                            dispatch(Gethome())
                                                                        })
                                                                    })
                                                                }
                                                            }}></div>
                                                        </div> : null}
                                                    </div>
                                                </div>
                                                <div className={css.sellary} style={id == bgid ? { backgroundColor: "#202226" } : null}>
                                                    <div className={css.titl}>
                                                        <p>{title}</p>
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

                            </Box>
                            <MobileStepper
                                variant="text"
                                steps={maxSteps1}
                                position="static"
                                activeStep={activeStep1}
                                nextButton={
                                    <Button
                                        size="small"
                                        onClick={handleNext1}
                                        disabled={activeStep1 === maxSteps1 - 1}
                                    >
                                        Next
                                        {theme1.direction === 'rtl' ? (
                                            <KeyboardArrowLeft />
                                        ) : (
                                            <KeyboardArrowRight />
                                        )}
                                    </Button>
                                }
                                backButton={
                                    <Button size="small" onClick={handleBack1} disabled={activeStep1 === 0}>
                                        {theme1.direction === 'rtl' ? (
                                            <KeyboardArrowRight />
                                        ) : (
                                            <KeyboardArrowLeft />
                                        )}
                                        Back
                                    </Button>
                                }
                            />
                        </Box>

                    </div>

                </div>
            </div>

        </div >
    )
}
export default Section