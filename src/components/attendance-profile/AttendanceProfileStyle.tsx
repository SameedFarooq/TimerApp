const AttendanceProfileStyle = { 
headerBox:{
  background:'var(--backCol)',
  minHeight:'397px',
  paddingTop: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  height: '47vh'  ,
  borderBottomLeftRadius: '4px',
  borderBottomRightRadius: '4px',
   "& div":{
     textAlign: 'center',
     color: '#fff',
    },
   "& h2":{
    fontSize: '55px',
  },
},
header:{
  minHeight: '397px',
    height: '47vh',
},
 head1:{
  fontSize: '21px',
  marginRight: '5px',
},

 avatar1:{
  width: '27px',
      border:' 2.4px solid white',
      height: '27px',
      marginRight: '14px',
},

 divAvatar:{
  display: 'flex',
  alignItems: 'center',

  "& .fa-chevron-down":{
    margin:' 5px 0px 0px 5px',
   },
   "& .icon-notification":{
  width: '25px',
  height: '25px',
},
},
 dFlex:{
display: 'flex',
justifyContent: 'space-between',
padding:' 0px 20px',
},
lastIcon:{
  display: 'flex',
padding: '15px 0px',
margin: '30px 20px 0px 20px',
borderRadius: '20px',
justifyContent: 'center',
background:' #92e6eb29',
fontWeight: 500,
},

//  svg:{
//   width: '20px',
//       overflow: 'hidden',
//       height: '20px',
//       fill:' #fff',
//       margin-left: '15px',
// },
 dFlexSpace:{
  display: 'flex',
  alignItems: 'center',
},
 tableHead:{
  background: "#eaeaea",
  padding: "10px 15px",
  borderRadius: "20px",
  color: "#6c5b5b",
},
 tableB:{
  marginTop: "10px",
  padding: "10px 5px",
  borderRadius: '20px',
  color: 'gray',
},
 tableDP:{
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '10px',
},
 container:{
  position: 'relative',
  "--background":"#f5f5f56e",
  "--padding-top":" 100px!important",
  boxShadow:" inset 0px -7px 20px 0px #97979738",
},

 mainDiv:{
 width: "90%",
margin: "auto",
},
 tableRow:{

marginBottom: '10px',
borderBottom: "1px solid",
    borderColor: '#cdcdcd',
    paddingBottom: '10px',
    justifyContent: "space-between",
"& > div":{
  display: "flex",
  alignItems: "center",
 },
 '& ion-chip':{
  background: "#c3c3c32b",
    boxShadow: 'inset 0px 0px 18px 0px #7c7c7c59',
},
},
 h2:{
  background:" #92e6eb29",
  margin: "8px",
  borderRadius:" 50%",

  display: "inline-block",
  padding:"44px 40px",
  fontSize: "22px",
  boxShadow: "0px 0px 4px 0px #454c4e59"
},
attendanceSheet:{
  boxShadow: "0px 1px 19px 2px #97919159",
  bottom: "-20px",
  color:' #3a3333!important',
padding: '8px 0px',
margin:'0px auto',
borderRadius: '20px',
background: '#fff',
fontWeight: 500,
zIndex: 222,
position: 'relative',
width:' 90%',
},
 sheetDiv:{
  "& div":{
    color:' rgb(29, 28, 28)!important',
  },
  "& .fa-smile":{
    color:'rgb(0, 207, 0)'
   },
   "& .fa-meh":{
    color:'rgba(255, 166, 0, 0.884)'
   },
   "& .fa-frown":{
    color:'red',
   },
   "& .far":{
     fontSize: '22px',
     position: 'relative',
   },
   "& >div":{
     flexGrow: 1,
    },
    "& >div>div:nth-child(2)":{
     color:" #858585!important",
       margin:" 4px 0px",
   },
   "& >div:nth-child(2)":{
    borderLeft: "1px solid #b5b5b5",
    borderRight: "1px solid #b5b5b5",
  },

  padding:" 8px 0px",
  } ,



  shortName:{
    background: "#50cddb",
    padding:"12px 18px",
    borderRadius: "13px",
     color: "white",
     fontSize: "18px",
  
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
  
}
export default AttendanceProfileStyle;