const timerClockStyle ={
header:{
  
  minHeight: '83px',
  height: '10vh',
  display: 'flex',
    alignItems: 'center',
    padding: '12px',
    backgroundColor: 'white',
    "& h4":{
      margin: 0,
      fontWeight: 600,
    },
},

dateDiv:{
  boxShadow:' 0px 0px 20px 2px #0000000d',
  width: '100%',
  height: '83px',
  background: 'white',
  borderRadius: '20px',
  margin:'10px 0px 20px 0px',
  display: 'flex',
  alignSelf: 'center',

},

dFlex:{
display: 'flex',
justifyContent: 'space-between',
padding: '0px 20px',
},

container:{
  position: 'relative',
  ' --background':'#f5f5f56e',
  ' --padding-top':' 10vh!important',
  boxShadow:' inset 0px -7px 20px 0px #97979738',
'&  .fa-volume-up':{
  marginTop: '6vh',
},
'& .fa-volume-up:before ':{
  color: '#1d7cff',
  padding: '16px 16px 16px 16px',
  borderRadius:' 30px',
   bottom: '19px',
   backgroundColor: 'white',
   fontSize: '16px',
   boxShadow: '0px 0px 11px 2px #c6c6c63d',
},
},

mainDiv:{
  width: '100%',
  height: '24vh',
  margin: 'auto',
  padding:' 20px',
  "& svg":{
        fill: '#0b0b0b',
  },
},
 clockDiv :{
  display: 'flex',
  justifyContent:' center',
  alignItems: 'center',
  position: 'relative',
  "& svg":{
  width: "90%",
  height: 'auto',
  margin: 0,
  border: '14px solid #ff8080',
    borderRadius: '50%',
    padding: '10px',}
},
  innerClock :{
  position: 'absolute',
  display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    "& h5":{
      fontSize: "23px",
    },
    "& h4":{
      fontSize: "55px",
      fontWeight: 600,
      letterSpacing: "2px",
    
    },
  },

 dialer2:{
  color:" #818181",
},




 btnStart:{
  marginTop:' 6vh',
  '--background': "#1d7cff",
  marginBottom: "20px",
},
footerDiv:{
  display: 'flex',
  padding: '18px 0px',
  position: 'relative',
  "& .far":{
    fontSize: '22px',
  }, 
  "& i":{
    flexGrow: 1,
  textAlign: 'center',
  fontSize: '25px',
  color: '#3a3a3ab0',
  position: 'relative',
},
  "& a":{
    textAlign: 'center',
     flexGrow: 1,
  },
  "& .active":{
    color:' rgb(22, 22, 22)',
    "&:after":{
      content: '""',
      backgroundColor: '#6565f9',
      width: '23px',
      height: '4px',
      position: 'absolute',
      bottom: '0px',
      left:' 50%',
      transform:' translate(-49%, 7px)',
      borderRadius: '43px',
    },
  } ,


},
// .footer-div:{
//   display: flex,
//   padding: 18px 0px,
// position: relative,
// },


// .footer-div i:{
//   flex-grow: 1,
//   text-align: center,
//   font-size: 25px,
//   color: #3a3a3ab0,
//   position: relative,
// },
// .fa-plus:before :{
//   display: flex,
// },
// .fa-plus:before :{
//   content: "\f067",
//   background: #ff4646,
//   padding: 16px 18px,
//   border-radius: 30px,
//    bottom: 19px,
//    color: white,
//    font-size: 16px,
// },
// .footer-div .active::after:{
//   content: '',
//   background-color: #6565f9,
//   width: 23px,
//   height: 4px,
//   position: absolute,
//   bottom: 0px,
//   left: 50%,
//   transform: translate(-49%, 7px),
//   border-radius: 43px,
// },
// .footer-div .active:{
//   color: rgb(22, 22, 22),
// },
// .short-name:{
//   background: #50cddb,
//   padding:12px 18px,
//   border-radius: 13px,
//    color: white,
//    font-size: 18px,
// },
// ion-footer ion-input:{
//   width: 81%,
//     border-radius: 20px,
//     background: #f1f1f1,
//     flex: inherit,
// },
// .footer-div .active::after:{
//   content: '',
//   background-color: #6565f9,
//   width: 23px,
//   height: 4px,
//   position: absolute,
//   bottom: 0px,
//   left: 50%,
//   transform: translate(-49%, 7px),
//   border-radius: 43px,
// },
// .footer-div .active:{
//   color: rgb(22, 22, 22),
// },
// .footer-div a:{
//   text-align: center,
//    flex-grow: 1,
// },
// ion-footer:{
//   position: absolute,
//   bottom: 0px,
// },
}
export default timerClockStyle;