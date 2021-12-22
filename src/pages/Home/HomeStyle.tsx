const HomeStyle={

 header:{
   
   minHeight: '166px',
       height: '18vh',
     background:'#ebebeb6e'
  },
  innerHeader:{
    background:'var(--backCol)',
    height: '100%',
    paddingTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    borderBottomLeftRadius: '4px',
    borderBottomRightRadius: '4px',
    '& svg':{
      marginLeft: '0!important',
    },
    '& div':{
      textAlign: 'center',
      color: '#fff',
    },
    '& .icon-notification':{
      width: '25px',
      height: '25px',
  },
  },
  btnDiv:{
    padding:' 0px 28px!important',
   "&  ion-button":{
    '--borderRadius':'20px',
   },
  },

  head1:{
    fontSize: '23px',
    marginRight: '5px',
    padding:'20px 0px 0 28px',
    fontWeight: '400',
    color: 'white',
  },
  
  head2:{
    fontSize: '27px',
    marginTop: '4px',
    marginRight: '5px',
    padding:'0px 0px 0 28px',
    fontWeight: '500',
    color: 'white',
    h2:{
      fontSize: '55px',
    },
  },
  // .fa-chevron-down:{
  //  margin: '5px 0px 0px 5px',
  // },
  

  divAvatar:{
    display: 'flex',
    alignItems: 'center',
  },
  dFlex:{
  display: 'flex',
  justifyContent: 'space-between',
  padding:' 0px 20px',
  },
  ionIcons:{
    width: '24px',
    height: '24px',
  },
 
  lastIcon:{
    display: 'flex',
  padding: '15px 0px',
  margin: '30px 20px 0px 20px',
  borderRadius:' 20px',
  justifyContent: 'center',
  background: '#92e6eb29',
  fontWeight: 500,
  },
  container:{
    position: 'relative',
    background:'#f5f5f56e!important',
    '--padding-top': '30px!important',
    boxShadow: 'inset 0px -7px 20px 0px #97979738',
  },
  mainDiv:{
  margin: 'auto',
  },
  boxDiv:{
    flexGrow: 1,
      width: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      margin: '14px 8px',
      backgroundColor: 'white',
      borderRadius: '21px',
      flexDirection: 'column',
      fontSize: '18px',
      padding:' 20px 10px 25px 10px',
      color: 'grey',
      fontWeight: 500,
      boxShadow: '0px 2px 21px 0px #007fa51f',
 
      "& .fas":{
       fontSize: '21px',
       padding: '18px',
       borderRadius: '20px',
       color: 'white',
       margin:' 10px 0px',
      },
      "& .fa-envelope-open-text":{
        background:' #5d93f4',
      },
      "& .fa-calendar-alt":{
        background:' rgb(250, 75, 75)',
      },
      "& .fa-calendar-week":{
        background: 'rgba(255, 166, 0, 0.884)',
      },
      "& .fa-chalkboard-teacher":{
        background:'salmon',
        padding: '18px 15px!important',
      },
    
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
    "&  a":{
        textAlign: 'center',
         flexGrow: 1,
      },

  },
    footer:{

    //  '& .fa-play:before ':{
    //     display: 'flex',
    //   },
      '& .fa-play:before ':{
      
        background:' #ff4646',
        padding: '16px 16px 16px 18px',
        borderRadius: '30px',
         bottom: '19px',
         color: 'white',
         fontSize: '16px',
      },
    },
    input:{
      width: '81%',
        borderRadius: '20px',
        background: '#f1f1f1',
        flex: 'inherit',
    },

    
  
}
export default HomeStyle;