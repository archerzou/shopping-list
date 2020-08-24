import React from 'react';
import './LoadingScreen.css';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  background: {
    width: '100%',
    height: '100%',
    background: theme.palette.primary.dark,
    position: 'absolute',
  },
}));

const LoadingScreen = () => {
  const classes = useStyles();
  return(
    <>
      <div className={classes.background}>
        <div className="container">
          <div className="bear">
            <div className="head">
              <div className="head-copy"></div>
              <div className="left-ear">
                <div className="inner-ear"></div>
              </div>
              <div className="right-ear">
                <div className="inner-ear"></div>
              </div>
              <div className="left-eye">
                <div className="left-pupil"></div>
              </div>
              <div className="right-eye">
                <div className="right-pupil"></div>
              </div>
              <div className="snout">
                <div className="nose"></div>
                <div className="upper-lip"></div>
                <div className="lip-left"></div>
                <div className="lip-right"></div>
              </div>
            </div>
            <div className="torso">
              <div className="right-arm">
                <div className="claws"></div>
              </div>
              <div className="left-arm">
                <div className="claws"></div>
              </div>
            </div>
            <div className="legs">
              <div className="right-leg">
                <div className="toes"></div>
              </div>
              <div className="left-leg">
                <div className="toes"></div>
              </div>
            </div>
          </div>  
          <div className="plumes">
            <div className="plume-1"></div>
            <div className="plume-2"></div>
            <div className="plume-3"></div>
            <div className="plume-4"></div>
            <div className="plume-5"></div>
          </div>
          <div className="shopping-cart">
            <div className="handle"></div>
            <div className="back"></div>
            <div className="body-top"></div>
            <div className="body-front"></div>
            <div className="body-bottom"></div>
            <div className="body-vertical-stripes"></div>
            <div className="body-horizontal-stripes"></div>
            <div className="body-to-base"></div>
            <div className="base-curve"></div>
            <div className="base-bottom"></div>
            <div className="wheels">
              <div className="back-wheel">
                <div className="wheel-inner"></div>
              </div>
                <div className="front-wheel">
                <div className="wheel-inner"></div>
              </div>
            </div>
          </div>
          <div className="fumes">
            <div className="fume-1"></div>
            <div className="fume-2"></div>
            <div className="fume-3"></div>
            <div className="fume-4"></div>
            <div className="fume-5"></div>
            <div className="fume-6"></div>
          </div>
          <div className="text">
            Get ready to zoom along while I fetch your lists! 
          </div>
        </div>
      </div>
    </>
  )
}

export default LoadingScreen;