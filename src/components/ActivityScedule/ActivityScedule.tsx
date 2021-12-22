

import { IonPage, IonContent, IonThumbnail, IonCheckbox, IonHeader, IonIcon, IonFooter, IonInput, IonButton ,IonChip,IonAvatar,IonGrid,IonRow,IonCol}  from '@ionic/react';
import React from 'react';

import withStyles from 'react-jss';
import ActivitySceduleStyle from './ActivitySceduleStyle';
const ActivityScedule: React.FC = (props:any) => {
// const ActivityScedule = (props:any) => {
  return (
    <IonPage>
<IonHeader className={props.classes.header}>
     <a href='/home'> <IonIcon className="fas fa-chevron-left"></IonIcon></a>
    <h4>
      {/* <i className={props.classes.fas fa-chevron-left}></i> */}
      Online Activity</h4>
  </IonHeader>
  
  <IonContent style={{background:"#f9f9f9"}}  className={props.classes.container}>
    <div className={props.classes.mainDiv}>
      <div className={props.classes.ScheduleSet}>
        <div className={props.classes.DateTimeDiv}>
          <h2 className={props.classes.dFlex}>Wed, December 15</h2>
           {/* <i className={props.classes.fas fa-angle-down mr-1}></i> */}
        </div>
        <div className={props.classes.dFlex+" "+ props.classes.UserData}>
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
  
      <div className={props.classes.ScheduleSet}>
       <div className={props.classes.dAlign}>
         <h3>10:00 AM</h3><IonCheckbox className={props.classes.checkBoxS}></IonCheckbox>
        </div>
        <IonGrid>
              <IonRow>
                <IonCol>
                  <IonThumbnail>
                    <img src="../../assets/Screenshot1.png"></img>
                  </IonThumbnail>
                    <h5><span  className={props.classes.dFlex}><IonCheckbox></IonCheckbox> 10:15 AM</span>  <span className={props.classes.addTime}>+1m</span></h5>
                </IonCol>
                <IonCol>
                  <IonThumbnail>
                    <img src="../../assets/Screenshot1.png"></img>
                  </IonThumbnail>
                  <h5><span  className={props.classes.dFlex}><IonCheckbox></IonCheckbox> 10:26</span>  <span className={props.classes.addTime}>+7m</span></h5>
                </IonCol>
                <IonCol>
                  <IonThumbnail>
                    <img src="../../assets/Screenshot1.png"></img>
                  </IonThumbnail>
                  <h5><span className={props.classes.dFlex}><IonCheckbox></IonCheckbox> 10:36</span> <span className={props.classes.addTime}>+4m</span> </h5>
                </IonCol>
                </IonRow>
              <IonRow>
                <IonCol>
                  <IonThumbnail>
                    <img src="../../assets/Screenshot1.png"></img>
                  </IonThumbnail>
                    <h5><span  className={props.classes.dFlex}><IonCheckbox></IonCheckbox> 10:45 AM</span>  <span className={props.classes.addTime}>+2m</span></h5>
                </IonCol>
                <IonCol>
                  <IonThumbnail>
                    <img src="../../assets/Screenshot1.png"></img>
                  </IonThumbnail>
                  <h5><span  className={props.classes.dFlex}><IonCheckbox></IonCheckbox> 10:52</span>  <span className={props.classes.addTime}>+5m</span></h5>
                </IonCol>
                <IonCol>
                  <IonThumbnail>
                    <img src="../../assets/Screenshot1.png"></img>
                  </IonThumbnail>
                  <h5><span className={props.classes.dFlex}><IonCheckbox></IonCheckbox> 10:59</span> <span className={props.classes.addTime}>+8m</span> </h5>
                </IonCol>
                </IonRow>
  
            </IonGrid>
  
       </div>
     <div className={props.classes.ScheduleSet}>
      <div className={props.classes.dAlign}>
      <h3>11:00 AM</h3>
      <IonCheckbox className={props.classes.checkBoxS}></IonCheckbox>
      </div>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonThumbnail>
                  <img src="../../assets/Screenshot1.png"></img>
                </IonThumbnail>
                  <h5><span  className={props.classes.dFlex}><IonCheckbox></IonCheckbox> 11:15 AM</span>  <span className={props.classes.addTime}>+1m</span></h5>
              </IonCol>
              <IonCol>
                <IonThumbnail>
                  <img src="../../assets/Screenshot1.png"></img>
                </IonThumbnail>
                  <h5><span  className={props.classes.dFlex}><IonCheckbox></IonCheckbox> 11:25 AM</span>  <span className={props.classes.addTime}>+3m</span></h5>
              </IonCol>
              <IonCol>
                <IonThumbnail>
                  <img src="../../assets/Screenshot1.png"></img>
                </IonThumbnail>
                <h5><span className={props.classes.dFlex}><IonCheckbox></IonCheckbox> 11:36</span> <span className={props.classes.addTime}>+4m</span> </h5>
              </IonCol>
              </IonRow>
            <IonRow>
              <IonCol>
                <IonThumbnail>
                  <img src="../../assets/Screenshot1.png"></img>
                </IonThumbnail>
                  <h5><span  className={props.classes.dFlex}><IonCheckbox></IonCheckbox> 11:45 AM</span>  <span className={props.classes.addTime}>+2m</span></h5>
              </IonCol>
              <IonCol>
                <IonThumbnail>
                  <img src="../../assets/Screenshot1.png"></img>
                </IonThumbnail>
                <h5><span  className={props.classes.dFlex}><IonCheckbox></IonCheckbox> 11:52</span>  <span className={props.classes.addTime}>+5m</span></h5>
              </IonCol>
              <IonCol>
                <IonThumbnail>
                  <img src="../../assets/Screenshot1.png"></img>
                </IonThumbnail>
                <h5><span className={props.classes.dFlex}><IonCheckbox></IonCheckbox> 11:59</span> <span className={props.classes.addTime}>+8m</span> </h5>
              </IonCol>
              </IonRow>
  
          </IonGrid>
  
     </div>
  
    </div>
  </IonContent>
  
  </IonPage>
 
 )
}

// export default ActivityScedule;
export default withStyles(ActivitySceduleStyle)(ActivityScedule);
