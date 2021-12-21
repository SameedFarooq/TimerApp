
import { IonPage, IonContent, IonToggle, IonHeader, IonIcon, IonFooter, IonInput, IonButton } from '@ionic/react';
import withStyles from 'react-jss';
import settingsStyle from './settingsStyle';


const Settings = (props:any) => {
  return (
   <>
   <IonHeader className={props.classes.header}>
  <h4>

    Settings</h4>
</IonHeader>

<IonContent style={{background:"#f9f9f9"}}  className={props.classes.container}>
  <div className={props.classes.mainDiv}>

    <h4 className={props.classes.titleDiv}>Your Profile</h4>
    <div className={props.classes.dateDiv}>
     <div className={props.classes.tableBox}>
    <h2>
      WorkSpace
    </h2>
    <h5>
     Sameed Farooq
    </h5>
     </div>
     <div className={props.classes.tableBox}>
    <h2>
      Name
    </h2>
    <h5>
     Sameed Farooq
    </h5>
     </div>
     <div className={props.classes.tableBox}>
    <h2>
      Email Address
    </h2>
    <h5>
     Samidfarooq.sf@gmail.com
    </h5>
     </div>
   </div>

    <h4 className={props.classes.titleDiv}>Date and Time</h4>
    <div className={props.classes.dateDiv}>
     <div className={props.classes.tableBox}>
    <h2>
      Date format
    </h2>
    <h5>
      MM/DD/YYYY
    </h5>
     </div>
     <div className={props.classes.tableBox} style={{display: 'flex',alignItems: 'center',justifyContent: "space-between",width: "100%"}}>
    <h2>
      Use 24 hour clock
    </h2>
     <IonToggle color="primary"></IonToggle>
     </div>

   </div>

    <h4 className={props.classes.titleDiv}>General</h4>
    <div className={props.classes.dateDiv}>
     <div className={props.classes.tableBox}>
    <h2>
        Submit Feedback
    </h2>
    <h5>
       Tap to Submit
    </h5>
     </div>
     <div className={props.classes.tableBox}>
    <h2>
        About
    </h2>
     </div>
     <div className={props.classes.tableBox}>
    <h2>
        Help
    </h2>
     </div>

   </div>
    <div className={props.classes.dateDiv}>
      <IonButton expand="full" fill="outline" color="danger">Sign Out</IonButton>
   </div>


  </div>
</IonContent>

   </>
  );
};

// export default Settings;
export default withStyles(settingsStyle)(Settings)

