import TimeInterval from'./time-interval.js';import{durationDay,durationMinute}from'./durations.js';const day=new TimeInterval('day',a=>a.setHours(0,0,0,0),(a,b)=>a.setDate(a.getDate()+b),(a,b)=>(b-a-(b.getTimezoneOffset()-a.getTimezoneOffset())*durationMinute)/durationDay,a=>a.getDate()-1);export default day;