import { IonPage, IonContent, IonHeader, IonIcon, IonFooter, IonInput, IonButton } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
  <div className="header">
    <div className="d-flex">

      <div className="div-avatar">
        <div>
      
               </div>

      </div>
      <div>
        <IonIcon className="icon-notification" name="notifications-outline"></IonIcon>
      </div>
    </div>
    <span className="head-1">Hi William</span>
    <h3 className="head-2">Good Morning</h3>
   </div>
 </IonHeader>

 <IonContent>
 <div className="main-div">
  <div className="d-flex btn-div">
  <IonButton color="success">Check-in</IonButton>
  <IonButton color="primary">Check-out</IonButton>
   </div>
  <div className="d-flex">
    <div className="box-div">
      <i className="fas fa-envelope-open-text"></i>
      Requests
    </div>
    <div className="box-div">
      <i className="fas fa-calendar-alt"></i>
      Leaves
    </div>
  </div>
  <div className="d-flex">
    <div className="box-div">
      <i className="fas fa-calendar-week"></i>
      Attendance
    </div>
    <div className="box-div">
      <i className="fas fa-chalkboard-teacher"></i>
      Project Task</div>
 </div>
 </div>
 </IonContent>
 <IonFooter style={{background:'white',padding:' 20px 0px 0px 0px'}}>
  <div className="d-flex">
  <IonInput className='input-1'>
  </IonInput>
  <i className="fas fa-play"></i>
</div>
  <div className="footer-div">
    <a href="/welcome-page"><i className="fas fa-home active"></i></a>
    <a href="/timer-clock"><i className="far fa-clock"></i></a>
    <a href="/attendance-box"><i className="far fa-calendar"></i></a>
    <a href="/attendance-profile"><i className="far fa-user"></i></a>
</div>
 </IonFooter>
    </IonPage>
    
  );
};

export default Home;
