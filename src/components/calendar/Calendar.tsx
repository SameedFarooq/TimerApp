import { IonPage, IonContent, IonHeader, IonIcon, IonFooter, IonInput, IonButton ,IonChip,IonAvatar} from '@ionic/react';

import React from "react";
import * as dateFns from "date-fns";
import './Calendar.css'

class Calendar extends React.Component {
  
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };

  // 

  renderHeader() {
    const dateFormat = "MMMM YYYY";

      
    return (
     <>
    
     <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span style={{whiteSpace:"nowrap"}}>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
      </>
    );
  }

  renderDays() {
    const dateFormat = "dddd";
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
        
      );
    }

    return <div className="days row size-rows">{days}<div className="col col-center">
           <span >week</span> 
  </div></div>;
  }

  renderCells() {
    // debugger
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);
    let data = {date:'',totalHours:""};
    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        data.date = formattedDate;
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day+"0"}
            // onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="time">00:00</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day+"9"}>
          {days}
          <div className="col cell">
          <span className="time" >00:00</span>
        </div>
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick = (day:any) => {
    this.setState({
      selectedDate: day
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  render() {
    return (
     <>
     <IonHeader>
      <h4>
        Timer Start</h4>
    </IonHeader>
     <IonContent className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
        <div></div>
      </IonContent>
      <IonFooter style={{backgroundColor:'white'}}>
  <div className="footer-div">
    <a href="/welcome-page"><i className="fas fa-home"></i></a>
    <a href="/timer-clock"><i className="far fa-clock  "></i></a>
    <a href="/calendar"><i className="far fa-calendar active"></i></a>
    <a href="/attendance-profile"><i className="far fa-user  "></i></a>
</div>
 </IonFooter>
     </>
    );
  }
}

export default Calendar;
