import { IonPage, IonContent, IonThumbnail, IonCheckbox, IonHeader, IonIcon, IonFooter, IonInput, IonButton ,IonChip,IonAvatar,IonGrid,IonRow,IonCol} from '@Ionic/react';

// import ExploreContainer from '../components/ExploreContainer';
import './signin.css';
// import React from 'React';

const ActivityScedule: React.FC = () => {
  return (
 <>

<IonContent className="ion-content">

  <div className="btn-div">
    <div>
      <h2>Welcome back!</h2>
      <h2 style={{fontSize: '15px',marginBottom:'12px'}}>Login To your Account and start tracking again.</h2>
      <h2 className="div-flex-align">Don't have an account? <span className="signup-link">Sign up <IonIcon name="caret-forward-outline"></IonIcon></span></h2>
    </div>
    <span className="label">
      Email Address
    </span>
    <IonInput className='inputs'></IonInput>
    <span className="label">
    Password
    </span>
    <IonInput className='inputs' type="password"></IonInput>
  <IonButton  color="light" className="btn-login">Login</IonButton>
  <h2 className="div-flex-align" style={{marginTop: "16px"}}>Forgot your Password? <span className="signup-link">Reset </span></h2>

</div>
</IonContent>

  </>
 
 )
}

export default ActivityScedule;
