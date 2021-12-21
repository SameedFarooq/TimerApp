const ActivitySceduleStyle = {

header:{
    minHeight: '83px',
    height: '10vh',
    display: 'flex',
      alignItems: 'center',
      padding: '12px',
  }, 
  container:{
    position: 'relative',
    background:'#f5f5f56e!important',
    paddingTop: '22px!important',
    boxShadow:' inset 0px -7px 20px 0px #97979738',
   "& h2,h3, h5":{
    color:'#2a2828d9',
  }
  },

 
  dAlign:{
    display: 'flex',
      justifyContent:' space-between',
      alignItems: 'center',
      padding: '0px 14px',
      "& h3":{
        fontSize: '19px',
      },
  },
  ScheduleSet:{
    background: 'white',
    padding:' 10px 0px',
    marginBottom: '20px',
    boxShadow: '0px 0px 2px 2px #d8d8d859',
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '12px',
  '&  ion-col ion-thumbnail':{
      width: '90%',
      height: '83px',
      margin: 'auto',
      borderRadius: '8px',
      boxShadow: '0px 0px 2px 0px black',
    },
    '&  ion-col ion-checkbox':{
      width: '20px',
      height: '20px',
    },
    '&   ion-col': {
      textAlign: 'center',
    },
    '& ion-col h5':{
      display: 'flex',
    justifyContent: 'space-around',
      alignItems: 'center',
      fontSize: '13px',
    },
    '& ion-col h5 .addTime':{
      fontSize: '9px',
      color:' #8f8f8f',
    },
    '& ion-checkbox':{
      marginRight: '4px',
    },
    '& ion-col ion-checkbox':{
      width: '20px',
      height: '20px',
    },
    '& ion-checkbox.checkBoxS': {
      boxShadow: 'inset 0px 0px 11px 1px #0000004f!important',
      borderRadius:'3px!important' ,
      backgroundChecked:'#17ea27',
      borderColorChecked:'#17ea27',
    },
    '& ion-checkbox path':{
    strokeWidth:' 2.5px',
  },
  },
   dFlex:{
    display: 'flex',
      alignItems: 'center',
  },
  UserData:{
    justifyContent:' space-around',
    "& >div>h5":{
      fontSize: '16px',
      fontWeight: '400',
      },
      "& >div:nth-child(1)>h5:nth-child(1)":{
        color:' #00cf00',
      },
      "& >div:nth-child(2)>h5:nth-child(1)":{
        color: '#ffa600e1',
      },
      "& >div:nth-child(3)>h5:nth-child(1)":{
        color: 'red',
      },
      "& >div>h5:nth-child(2)":{
        color: '#9f9f9f',
        fontSize: '16px',
        fontWeight: '400',
      },
  },
  // .mr-1{
  //   marginLeft: 10px,
  // }
  DateTimeDiv:{
   "& h2": {
      marginLeft: '10px',
      fontSize: '19px',
      
    }
  },
 
}
export default ActivitySceduleStyle;