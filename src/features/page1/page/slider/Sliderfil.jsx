// import { MobileStepper } from '@material-ui/core';
import css from "./Sliderfil.module.css"
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 1,
        id: 0,
        imgPath: ''
    },
    {
        label: 2,
        imgPath: "",
        id: 1
    }
];
function Sliderfil() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };



    return (
        <div className={css.cont}>
            <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>

                <div style={{ width: "100%", height: "500px" }}>
                    {images.filter(val => val.id == activeStep).map((step, index) => (

                        <div key={index} className={css.box7}>
                            {activeStep == 0 || activeStep== 1? (
                                activeStep == 0 ? <div style={{ backgroundColor: "#3F4249" }} className={css.bgimg}>
                                    <div className={css.box1}>
                                        <div className={css.box3}>
                                            <p className={css.braclet}>BRACLET</p>
                                            <p className={css.yournext}>YOUR NEXT FAVE IS HERE</p>
                                        </div>
                                        <button className={css.btn22}>Design your own</button>
                                    </div>
                                    <div className={css.box2}>
                                        <div className={css.box6}>
                                            <div className={css.img1}>
                                                <div className={css.img11}></div>
                                            </div>


                                            <div className={css.img2}>
                                                <div className={css.img22}></div>
                                                <div className={css.img23}></div>
                                                <div className={css.imgu}></div>
                                            </div>
                                            <div className={css.aruje}>
                                                <div className={css.imga}></div>
                                                <div className={css.aruje1}></div>
                                            </div>
                                            <div className={css.bo20}>
                                                <div className={css.image1}></div>
                                                <div></div>
                                            </div>
                                        </div>

                                    </div>
                                    <ul className={css.mymenu}>
                                        <li className={css.menu2}>braclet colection</li>
                                        <li className={css.menu2}>new colection</li>
                                        <li className={css.menu2}>Sale colection</li>
                                    </ul>

                                </div> : <div className={css.cont10}>
                                    <div className={css.contection}></div>
                                    <div className={css.contection1}></div>
                                </div>
                            ) : null}

                        </div>
                    ))}
                </div>
                <MobileStepper
                    className="mobileStepper"
                    style={{ background: "transparent", display: "flex", flexFlow: "row", alignItems: 'end', justifyContent: "end", padding: "50px", position: "absolute", width: "95%", top: "10%", height: '500px' }}
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={() => {
                                handleNext()
                            }}
                            disabled={activeStep === maxSteps - 1}
                            className={css.butt2}
                        >
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft style={{ width: "100px", height: "100px" }} />
                            ) : (
                                <KeyboardArrowRight style={{ width: "100px", height: "100px" }} />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={() => {
                            handleBack()
                        }} disabled={activeStep === 0} className={css.butt1} >
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight style={{ width: "100px", height: "100px" }} />
                            ) : (
                                <KeyboardArrowLeft style={{ width: "100px", height: "100px" }} />
                            )}
                        </Button>


                    }

                />
            </Box>
        </div>
    )
}
export default Sliderfil