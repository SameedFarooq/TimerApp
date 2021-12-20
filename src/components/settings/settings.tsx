
import { IonPage, IonContent, IonHeader, IonIcon, IonFooter, IonInput, IonButton ,IonChip,IonAvatar,IonToggle} from '@Ionic/react';

import '../attendance-profile/attendance-profile.css';
const Settings: React.FC = () => {
  return (
<div>
<IonHeader>
  <h4>
    <i className="fas fa-chevron-left"></i>
    Settings</h4>
</IonHeader>

<IonContent style={{background:"#f9f9f9"}}>
  <div className="main-div">

    <h4 className="title-div">Your Profile</h4>
    <div className="date-div">
     <div className="table-b">
    <h2>
      WorkSpace
    </h2>
    <h5>
     Sameed Farooq
    </h5>
     </div>
     <div className="table-b">
    <h2>
      Name
    </h2>
    <h5>
     Sameed Farooq
    </h5>
     </div>
     <div className="table-b">
    <h2>
      Email Address
    </h2>
    <h5>
     Samidfarooq.sf@gmail.com
    </h5>
     </div>
   </div>

    <h4 className="title-div">Date and Time</h4>
    <div className="date-div">
     <div className="table-b">
    <h2>
      Date format
    </h2>
    <h5>
      MM/DD/YYYY
    </h5>
     </div>
     <div className="table-b" style={{display: 'flex',alignItems: 'center',justifyContent: "space-between",width: "100%"}}>
    <h2>
      Use 24 hour clock
    </h2>
     <IonToggle color="primary"></IonToggle>
     </div>

   </div>

    <h4 className="title-div">General</h4>
    <div className="date-div">
     <div className="table-b">
    <h2>
        Submit Feedback
    </h2>
    <h5>
       Tap to Submit
    </h5>
     </div>
     <div className="table-b">
    <h2>
        About
    </h2>
     </div>
     <div className="table-b">
    <h2>
        Help
    </h2>
     </div>

   </div>
    <div className="date-div">
      <IonButton expand="full" fill="outline" color="danger">Sign Out</IonButton>
   </div>


  </div>
</IonContent>

</div>
  )
}

export default Settings;
