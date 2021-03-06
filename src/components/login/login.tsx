import { IonPage, IonContent, IonThumbnail, IonCheckbox, IonHeader, IonIcon, IonFooter, IonInput, IonButton ,IonChip,IonAvatar,IonGrid,IonRow,IonCol} from '@ionic/react';

import withStyles from 'react-jss';
import LoginStyle from './LoginStyle';


const Login = (props:any) => {
  return (
 <>

<IonContent className={props.classes.container}>

  <div className={props.classes.btnDiv}>
    <div>
      <h2>Welcome back!</h2>
      <h2 style={{fontSize: '15px',marginBottom:'12px'}}>Login To your Account and start tracking again.</h2>
      <h2 className={props.classes.divFlexAlign}>Don't have an account? <span className={props.classes.signupLink}>Sign up <IonIcon name="caret-forward-outline"></IonIcon></span></h2>
    </div>
    <span className={props.classes.label}>
      Email Address
    </span>
    <IonInput className={props.classes.inputs}></IonInput>
    <span className={props.classes.label}>
    Password
    </span>
    <IonInput className={props.classes.inputs} type="password"></IonInput>
  <IonButton  color="light" className={props.classes.btnLogin}>Login</IonButton>
  <h2 className={props.classes.divFlexAlign} style={{marginTop: "16px"}}>Forgot your Password? <span className={props.classes.signupLink}>Reset </span></h2>

</div>
</IonContent>

  </>
 
 )
}

export default withStyles(LoginStyle)(Login);

