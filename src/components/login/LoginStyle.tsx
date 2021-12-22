
const settingsStyle = {
container:{
   ' --background':"var(--backCol)",
  },
  btnDiv:{
    position: 'absolute',
    top: '50%',
    bottom: '42px',
    width: '90%',
    left: '50%',
  
  transform: 'translate(-50%,-81%)',
   margin: 'auto',
   color: 'white',
  
  },
   signupLink:{
    textDecoration: 'underline',
    marginLeft: '5px',
    display: 'flex',
    alignItems: 'center',
  },
   inputs:{
    background: "#00000026",
    borderRadius: '4px',
    margin: '10px 0px',
    height: '40px',
  },
  label:{
    marginBottom: '10px',
    fontSize: '17px',
  },
  btnLogin:{
    position: 'relative',
    left: '50%',
    transform: 'translate(-50%,0%)',
    width: '100%',
    marginTop: '20px',
    '--ion-color-contrast':'#006eff !important',
    fontWeight: 600,
    fontSize: '17px',
  
  },
   divFlexAlign:{
    display: 'flex',
    alignItems: 'center',
    fontSize: '15px',
     margin:'0px 0px 20px 0px',
  },
}
export default settingsStyle;