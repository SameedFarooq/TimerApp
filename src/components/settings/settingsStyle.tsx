
const settingsStyle = {

 header:{
       minHeight: "83px",
       height: '10vh',
       display: 'flex',
         alignItems: 'center',
         padding: '12px',
           "& h4":{
             margin: 0,
            },
            "& div":{
              textAlign:" center",
              color: '#fff',
            }
          },
    dateDiv:{
            boxShadow: "0px 0px 20px 2px #0000000d",
            width: "100%",  
            background:"white",
            margin:"10px 0px 20px 0px",
          },
    tableBox: {
            "& h2":{    
      fontSize: '16px',
      color: '#2a2828d9',
      fontWeight: 'bold',
      margin:'6px 0px!important',
    },
       "& h5":{
            fontSize: '14px',
            margin: '3px 0px',
            fontWeight: 'normal',
          },
              padding:"10px 15px",
              color: "gray",
              borderBottom:"1px solid #D3D4D3",
              margin: "0px 10px",
},
container:{
    position: "relative",
    background:"#f5f5f56e!important",
    paddingTop:" 20px!important",
    boxShadow: "inset 0px -7px 20px 0px #97979738",
     height: '89vh',
},
  
  mainDiv:{
   width: "100%",
    margin: "auto",
  },
  
  titleDiv:{
    marginLeft: '15px'
  } ,
}
export default settingsStyle; 