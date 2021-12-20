import { IonPage, IonContent, IonThumbnail, IonCheckbox, IonHeader, IonIcon, IonFooter, IonInput, IonButton ,IonChip,IonAvatar,IonGrid,IonRow,IonCol} from '@Ionic/react';

// import ExploreContainer from '../components/ExploreContainer';
import './activity-scedule.css';
// import React from 'React';

const ActivityScedule: React.FC = () => {
  return (
 <>
<IonHeader>
    <h4>
      <i className="fas fa-chevron-left"></i>
      Online Activity</h4>
  </IonHeader>
  
  <IonContent style={{background:"#f9f9f9"}}>
    <div className="main-div">
      <div className="Schedule-set">
        <div className="Date-time-div">
          <h2 className="d-flex ">Wed, December 15 <i className="fas fa-angle-down mr-1"></i></h2>
        </div>
        <div className="d-flex User-Data">
          <div>
            <h5>User</h5>
          <h5>M.Usman</h5>
        </div>
        <div>
          <h5>Total Time</h5>
          <h5>4h 12min</h5>
        </div>
        <div>
          <h5>Active</h5>
          <h5>3h 12min</h5>
        </div>
      </div>
      </div>
  
      <div className="Schedule-set">
       <div className="d-align">
         <h3>10:00 AM</h3><IonCheckbox className="checkBox-S"></IonCheckbox>
        </div>
        <IonGrid>
              <IonRow>
                <IonCol>
                  <IonThumbnail>
                    <img src="../../assets/Screenshot1.png"></img>
                  </IonThumbnail>
                    <h5><span  className="d-flex"><IonCheckbox></IonCheckbox> 10:15 AM</span>  <span className="add-time">+1m</span></h5>
                </IonCol>
                <IonCol>
                  <IonThumbnail>
                    <img src="../../assets/Screenshot1.png"></img>
                  </IonThumbnail>
                  <h5><span  className="d-flex"><IonCheckbox></IonCheckbox> 10:26</span>  <span className="add-time">+7m</span></h5>
                </IonCol>
                <IonCol>
                  <IonThumbnail>
                    <img src="../../assets/Screenshot1.png"></img>
                  </IonThumbnail>
                  <h5><span className="d-flex"><IonCheckbox></IonCheckbox> 10:36</span> <span className="add-time">+4m</span> </h5>
                </IonCol>
                </IonRow>
              <IonRow>
                <IonCol>
                  <IonThumbnail>
                    <img src="../../assets/Screenshot1.png"></img>
                  </IonThumbnail>
                    <h5><span  className="d-flex"><IonCheckbox></IonCheckbox> 10:45 AM</span>  <span className="add-time">+2m</span></h5>
                </IonCol>
                <IonCol>
                  <IonThumbnail>
                    <img src="../../assets/Screenshot1.png"></img>
                  </IonThumbnail>
                  <h5><span  className="d-flex"><IonCheckbox></IonCheckbox> 10:52</span>  <span className="add-time">+5m</span></h5>
                </IonCol>
                <IonCol>
                  <IonThumbnail>
                    <img src="../../assets/Screenshot1.png"></img>
                  </IonThumbnail>
                  <h5><span className="d-flex"><IonCheckbox></IonCheckbox> 10:59</span> <span className="add-time">+8m</span> </h5>
                </IonCol>
                </IonRow>
  
            </IonGrid>
  
       </div>
     <div className="Schedule-set">
      <div className="d-align">
      <h3>11:00 AM</h3>
      <IonCheckbox className="checkBox-S"></IonCheckbox>
      </div>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonThumbnail>
                  <img src="../../assets/Screenshot1.png"></img>
                </IonThumbnail>
                  <h5><span  className="d-flex"><IonCheckbox></IonCheckbox> 11:15 AM</span>  <span className="add-time">+1m</span></h5>
              </IonCol>
              <IonCol>
                <IonThumbnail>
                  <img src="../../assets/Screenshot1.png"></img>
                </IonThumbnail>
                <h5><span  className="d-flex"><IonCheckbox></IonCheckbox> 11:26</span>  <span className="add-time">+7m</span></h5>
              </IonCol>
              <IonCol>
                <IonThumbnail>
                  <img src="../../assets/Screenshot1.png"></img>
                </IonThumbnail>
                <h5><span className="d-flex"><IonCheckbox></IonCheckbox> 11:36</span> <span className="add-time">+4m</span> </h5>
              </IonCol>
              </IonRow>
            <IonRow>
              <IonCol>
                <IonThumbnail>
                  <img src="../../assets/Screenshot1.png"></img>
                </IonThumbnail>
                  <h5><span  className="d-flex"><IonCheckbox></IonCheckbox> 11:45 AM</span>  <span className="add-time">+2m</span></h5>
              </IonCol>
              <IonCol>
                <IonThumbnail>
                  <img src="../../assets/Screenshot1.png"></img>
                </IonThumbnail>
                <h5><span  className="d-flex"><IonCheckbox></IonCheckbox> 11:52</span>  <span className="add-time">+5m</span></h5>
              </IonCol>
              <IonCol>
                <IonThumbnail>
                  <img src="../../assets/Screenshot1.png"></img>
                </IonThumbnail>
                <h5><span className="d-flex"><IonCheckbox></IonCheckbox> 11:59</span> <span className="add-time">+8m</span> </h5>
              </IonCol>
              </IonRow>
  
          </IonGrid>
  
     </div>
  
    </div>
  </IonContent>
  
  </>
 
 )
}

export default ActivityScedule;
