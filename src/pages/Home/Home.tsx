import { IonPage, IonContent, IonHeader, IonIcon, IonFooter, IonInput, IonButton } from '@ionic/react';

import withStyles from 'react-jss';
import HomeStyle from './HomeStyle';


const Home = (props:any) => {

  return (
    <IonPage>
        <IonHeader className={props.classes.header}>
  <div className={props.classes.innerHeader}>
    <div className={props.classes.dFlex}>

      <div className={props.classes.divAvatar}>
        <div>
      
               </div>

      </div>
      <div>
        <IonIcon className="icon-notification" name="notifications-outline"></IonIcon>
      </div>
    </div>
    <span className={props.classes.head1}>Hi William</span>
    <h3 className={props.classes.head2}>Good Morning</h3>
   </div>
 </IonHeader>

 <IonContent className={props.classes.container}>
 <div className={props.classes.mainDiv}>
  <div className={props.classes.dFlex+" "+ props.classes.btnDiv}>
  <IonButton color="success">Check-in</IonButton>
  <IonButton color="primary">Check-out</IonButton>
   </div>
  <div className={props.classes.dFlex}>
    <div className={props.classes.boxDiv}>
      <i className="fas fa-envelope-open-text"></i>
      Requests
    </div>
    <div className={props.classes.boxDiv}>
      <i className="fas fa-calendar-alt"></i>
      Leaves
    </div>
  </div>
  <div className={props.classes.dFlex}>
    <div className={props.classes.boxDiv}>
      <i className="fas fa-calendar-week"></i>
      Attendance
    </div>
    <div className={props.classes.boxDiv}>
      <i className="fas fa-chalkboard-teacher"></i>
      Project Task</div>
 </div>
 </div>
 </IonContent>
 <IonFooter style={{background:'white',padding:' 20px 0px 0px 0px'}} className={props.classes.footer}>
  <div className={props.classes.dFlex}>
  <IonInput className={props.classes.input}>
  </IonInput>
  <i className="fas fa-play"></i>
</div>
  <div className={props.classes.footerDiv}>
    <a href="/welcome-page"><i className="fas fa-home active"></i></a>
    <a href="/timer-clock"><i className="far fa-clock"></i></a>
    <a href="/attendance-box"><i className="far fa-calendar"></i></a>
    <a href="/attendance-profile"><i className="far fa-user"></i></a>
</div>
 </IonFooter>
    </IonPage>
    
  );
};

export default withStyles(HomeStyle)(Home);

