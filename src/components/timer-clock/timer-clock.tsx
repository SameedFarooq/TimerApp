import { IonPage, IonContent, IonHeader, IonIcon, IonFooter, IonInput, IonButton } from '@ionic/react';

// import ExploreContainer from '../components/ExploreContainer';
import './timer-clock.css';

const TimerClock: React.FC = () => {
  return (
   <>
   <IonHeader>
  <h4>

    Timer Start</h4>
</IonHeader>

<IonContent style={{background:"#f9f9f9"}}>
  <div className="main-div">
   <div className="clock-div">
         <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.8 595.8"><defs><style>.cls-1</style></defs><title>Untitled-12</title><path className="cls-1" d="M306.8,28.1a4,4,0,0,1-4-3.9V12.6a4,4,0,0,1,4-4,3.9,3.9,0,0,1,3.9,4V24.2A3.9,3.9,0,0,1,306.8,28.1Z" transform="translate(-8.9 -8.6)"/><path className="cls-1" d="M306.8,604.4a3.9,3.9,0,0,1-4-3.9V588.9a3.9,3.9,0,0,1,4-3.9,3.8,3.8,0,0,1,3.9,3.9v11.6A3.8,3.8,0,0,1,306.8,604.4Z" transform="translate(-8.9 -8.6)"/><path className="cls-1" d="M165.6,65.9a3.9,3.9,0,0,1-3.4-1.9l-5.8-10.1a3.8,3.8,0,0,1,1.4-5.3,3.9,3.9,0,0,1,5.4,1.4L169,60a4,4,0,0,1-1.4,5.4A3.7,3.7,0,0,1,165.6,65.9Z" transform="translate(-8.9 -8.6)"/><path className="cls-1" d="M453.8,565.1a4.1,4.1,0,0,1-3.5-2l-5.8-10a4,4,0,0,1,1.5-5.4,3.9,3.9,0,0,1,5.4,1.4l5.8,10a4,4,0,0,1-1.5,5.4A3.5,3.5,0,0,1,453.8,565.1Z" transform="translate(-8.9 -8.6)"/><path className="cls-1" d="M62.2,169.3a4.5,4.5,0,0,1-1.9-.5L50.2,163a3.9,3.9,0,0,1-1.4-5.4,4,4,0,0,1,5.4-1.5l10,5.8a4,4,0,0,1-2,7.4Z" transform="translate(-8.9 -8.6)"/><path className="cls-1" d="M561.4,457.5a3.6,3.6,0,0,1-2-.6l-10.1-5.8a3.9,3.9,0,0,1-1.4-5.3,4,4,0,0,1,5.4-1.5l10,5.8a4,4,0,0,1,1.5,5.4A4,4,0,0,1,561.4,457.5Z" transform="translate(-8.9 -8.6)"/><path className="cls-1" d="M24.4,310.5H12.8a4,4,0,0,1,0-7.9H24.4a4,4,0,0,1,0,7.9Z" transform="translate(-8.9 -8.6)"/><path className="cls-1" d="M600.7,310.5H589.1a4,4,0,0,1,0-7.9h11.6a4,4,0,1,1,0,7.9Z" transform="translate(-8.9 -8.6)"/><path className="cls-1" d="M52.2,457.5a3.8,3.8,0,0,1-3.4-2,3.9,3.9,0,0,1,1.4-5.4l10.1-5.8a3.9,3.9,0,1,1,3.9,6.8l-10,5.8A3.9,3.9,0,0,1,52.2,457.5Z" transform="translate(-8.9 -8.6)"/><path className="cls-1" d="M551.3,169.3a3.9,3.9,0,0,1-3.4-2,4,4,0,0,1,1.4-5.4l10.1-5.8a4,4,0,0,1,5.4,1.5,4,4,0,0,1-1.5,5.4l-10,5.8A4.6,4.6,0,0,1,551.3,169.3Z" transform="translate(-8.9 -8.6)"/><path className="cls-1" d="M159.8,565.1a3.6,3.6,0,0,1-2-.6,3.9,3.9,0,0,1-1.4-5.4l5.8-10a3.9,3.9,0,0,1,5.4-1.4,4,4,0,0,1,1.4,5.4l-5.8,10A3.8,3.8,0,0,1,159.8,565.1Z" transform="translate(-8.9 -8.6)"/><path className="cls-1" d="M448,65.9a3.5,3.5,0,0,1-2-.5,4,4,0,0,1-1.5-5.4l5.8-10a3.9,3.9,0,0,1,5.4-1.4,3.8,3.8,0,0,1,1.5,5.3L451.4,64A4.2,4.2,0,0,1,448,65.9Z" transform="translate(-8.9 -8.6)"/><rect className="cls-1" x="280.7" y="13.7" width="2" height="11.59" transform="translate(-9.5 16) rotate(-5)"/><polygon className="cls-1" points="322.5 590.8 321.5 579.3 323.5 579.1 324.5 590.7 322.5 590.8"/><rect className="cls-1" x="140.5" y="64.7" width="2" height="11.59" transform="translate(-23.7 85.3) rotate(-35)"/><rect className="cls-1" x="471.1" y="536.8" width="2" height="11.59" transform="matrix(0.82, -0.57, 0.57, 0.82, -234.7, 360.17)"/><rect className="cls-1" x="44.6" y="179" width="2" height="11.59" transform="translate(-150 139.4) rotate(-65)"/><rect className="cls-1" x="567" y="422.5" width="2" height="11.59" transform="translate(-69.2 753.3) rotate(-65)"/><rect className="cls-1" x="13.9" y="330.7" width="11.6" height="1.97" transform="translate(-38 -5.6) rotate(-5)"/><polygon className="cls-1" points="579.3 274.3 579.1 272.3 590.7 271.3 590.8 273.3 579.3 274.3"/><rect className="cls-1" x="64.9" y="470.8" width="11.6" height="1.97" transform="translate(-266.7 117.2) rotate(-35)"/><rect className="cls-1" x="537" y="140.3" width="11.6" height="1.97" transform="matrix(0.82, -0.57, 0.57, 0.82, 8.44, 328.71)"/><rect className="cls-1" x="179.2" y="566.7" width="11.6" height="1.97" transform="translate(-416.6 487.2) rotate(-65)"/><rect className="cls-1" x="422.8" y="44.4" width="11.6" height="1.97" transform="translate(197.7 406.1) rotate(-65)"/><rect className="cls-1" x="255.8" y="17" width="2" height="11.59" transform="translate(-8.9 36.3) rotate(-10)"/><polygon className="cls-1" points="348 587.6 346 576.2 347.9 575.8 349.9 587.2 348 587.6"/><rect className="cls-1" x="120.6" y="80" width="2" height="11.59" transform="translate(-35.6 89.6) rotate(-40)"/><polygon className="cls-1" points="486.1 523.7 478.7 514.8 480.2 513.6 487.6 522.5 486.1 523.7"/><rect className="cls-1" x="35" y="202.2" width="2" height="11.59" transform="translate(-180.6 162) rotate(-70)"/><rect className="cls-1" x="576.6" y="399.3" width="2" height="11.59" transform="matrix(0.34, -0.94, 0.94, 0.34, -9.52, 800.65)"/><rect className="cls-1" x="17.2" y="355.6" width="11.6" height="1.97" transform="translate(-70.5 0.8) rotate(-10)"/><polygon className="cls-1" points="576.1 249.8 575.8 247.9 587.2 245.9 587.6 247.8 576.1 249.8"/><rect className="cls-1" x="80.2" y="490.8" width="11.6" height="1.97" transform="translate(-304.9 161.8) rotate(-40)"/><polygon className="cls-1" points="514.8 117.2 513.6 115.6 522.5 108.2 523.7 109.7 514.8 117.2"/><polygon className="cls-1" points="198.3 574.5 196.4 573.8 200.4 562.9 202.3 563.6 198.3 574.5"/><rect className="cls-1" x="399.5" y="34.8" width="11.6" height="1.97" transform="translate(224.5 395.9) rotate(-70)"/><rect className="cls-1" x="231.2" y="22.4" width="2" height="11.59" transform="translate(-8.3 52.4) rotate(-15)"/><rect className="cls-1" x="380.4" y="579.1" width="2" height="11.59" transform="translate(-147.2 110) rotate(-15)"/><rect className="cls-1" x="102" y="97" width="2" height="11.59" transform="translate(-51.4 94.3) rotate(-45)"/><rect className="cls-1" x="509.6" y="504.5" width="2" height="11.59" transform="translate(-220.2 501.8) rotate(-45)"/><rect className="cls-1" x="27.4" y="226.2" width="2" height="11.59" transform="translate(-211.9 190.7) rotate(-75)"/><rect className="cls-1" x="584.1" y="375.3" width="2" height="11.59" transform="translate(56.7 839.1) rotate(-75)"/><rect className="cls-1" x="22.6" y="380.1" width="11.6" height="1.97" transform="translate(-106.3 11.6) rotate(-15)"/><polygon className="cls-1" points="570.9 225.8 570.4 223.9 581.6 220.9 582.1 222.8 570.9 225.8"/><rect className="cls-1" x="97.2" y="509.3" width="11.6" height="1.97" transform="translate(-339.6 213.7) rotate(-45)"/><rect className="cls-1" x="504.7" y="101.8" width="11.6" height="1.97" transform="translate(68 382.5) rotate(-45)"/><polygon className="cls-1" points="222.8 582.1 220.9 581.6 223.9 570.4 225.8 570.9 222.8 582.1"/><rect className="cls-1" x="375.6" y="27.2" width="11.6" height="1.97" transform="translate(246.8 380.7) rotate(-75)"/><rect className="cls-1" x="207.2" y="30" width="2" height="11.59" transform="translate(-8.5 64.7) rotate(-20)"/><polygon className="cls-1" points="397.5 574.5 393.5 563.6 395.4 562.9 399.4 573.8 397.5 574.5"/><rect className="cls-1" x="85" y="115.5" width="2" height="11.59" transform="translate(-71.1 100.6) rotate(-50)"/><polygon className="cls-1" points="522.5 487.6 513.6 480.2 514.8 478.7 523.7 486.1 522.5 487.6"/><rect className="cls-1" x="22" y="250.7" width="2" height="11.59" transform="translate(-242.5 226) rotate(-80)"/><polygon className="cls-1" points="587.2 349.9 575.8 347.9 576.1 346 587.6 348 587.2 349.9"/><rect className="cls-1" x="30.2" y="404.1" width="11.6" height="1.97" transform="translate(-145 28) rotate(-20)"/><polygon className="cls-1" points="563.6 202.3 562.9 200.4 573.8 196.4 574.5 198.3 563.6 202.3"/><polygon className="cls-1" points="109.7 523.7 108.2 522.5 115.6 513.6 117.2 514.8 109.7 523.7"/><rect className="cls-1" x="486.2" y="84.8" width="11.6" height="1.97" transform="translate(101.1 398.9) rotate(-50)"/><polygon className="cls-1" points="247.8 587.6 245.9 587.2 247.9 575.8 249.8 576.2 247.8 587.6"/><rect className="cls-1" x="351" y="21.8" width="11.6" height="1.97" transform="translate(263.5 361.5) rotate(-80)"/><rect className="cls-1" x="184" y="39.6" width="2" height="11.59" transform="translate(-10.7 73.8) rotate(-25)"/><rect className="cls-1" x="427.6" y="561.9" width="2" height="11.59" transform="translate(-208.6 225.5) rotate(-25)"/><rect className="cls-1" x="69.7" y="135.5" width="2" height="11.59" transform="translate(-94.4 109.5) rotate(-55)"/><rect className="cls-1" x="541.8" y="466" width="2" height="11.59" transform="matrix(0.57, -0.82, 0.82, 0.57, -163.91, 637.16)"/><rect className="cls-1" x="18.7" y="275.6" width="2" height="11.59" transform="translate(-271.2 267.9) rotate(-85)"/><rect className="cls-1" x="592.9" y="325.9" width="2" height="11.59" transform="translate(202.9 885.8) rotate(-85)"/><rect className="cls-1" x="39.8" y="427.3" width="11.6" height="1.97" transform="translate(-185.4 50.6) rotate(-25)"/><rect className="cls-1" x="562.1" y="183.8" width="11.6" height="1.97" transform="translate(-33.8 248.3) rotate(-25)"/><rect className="cls-1" x="135.7" y="541.6" width="11.6" height="1.97" transform="translate(-392.8 338.2) rotate(-55)"/><rect className="cls-1" x="466.3" y="69.5" width="11.6" height="1.97" transform="translate(134.7 408.2) rotate(-55)"/><polygon className="cls-1" points="273.3 590.8 271.3 590.7 272.3 579.1 274.3 579.3 273.3 590.8"/><rect className="cls-1" x="326.1" y="18.5" width="11.6" height="1.97" transform="translate(274.5 339.7) rotate(-85)"/></svg>
           <div className="inner-clock">
             <h5>Focus</h5>
             <h4>25:00</h4>
             <h5 className="dialer-2">Ready?</h5>
           </div>
        </div>
        <i className="fas fa-volume-up"></i>
        <IonButton className="btn-start" shape="round" expand="full">Start Session</IonButton>
    <div></div>
  </div>
</IonContent>
<IonFooter style={{backgroundColor:'white'}}>
  <div className="footer-div">
    <a href="/welcome-page"><i className="fas fa-home"></i></a>
    <a href="/timer-clock"><i className="far fa-clock active "></i></a>
    <a href="/attendance-box"><i className="far fa-calendar"></i></a>
    <a href="/attendance-profile"><i className="far fa-user  "></i></a>
</div>
 </IonFooter>

   </>
  );
};

export default TimerClock;
