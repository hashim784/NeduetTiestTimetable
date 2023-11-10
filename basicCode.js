function clicked() {
  // Change the URL of the timetable
  var timetableImage = document.getElementById("timeTable");
  timetableImage.style.backgroundImage = "url('imgs/fir.jpg')";
};
 function clicked2() {
  // Change the URL of the timetable
  var timetableImage = document.getElementById("timeTable");
  timetableImage.style.backgroundImage = "url('imgs/sec.jpg')";
};
 function clicked3() {
  // Change the URL of the timetable
  var timetableImage = document.getElementById("timeTable");
  timetableImage.style.backgroundImage = "url('imgs/thr.jpg')";
};
 function clicked4() {
  // Change the URL of the timetable
  var timetableImage = document.getElementById("timeTable");
  timetableImage.style.backgroundImage = "url('imgs/fou.jpg')";
};

setInterval(() => {
  d = new Date();
  htime = d.getHours(); 
  mtime = d.getMinutes(); 
  stime = d.getSeconds(); 
  hrotation = 30*htime + mtime/2;
  mrotation = 6*mtime;
  srotation = 6*stime;
  
  hour.style.transform = `rotate(${hrotation}deg)`;
  min.style.transform = `rotate(${mrotation}deg)`;
  sec.style.transform = `rotate(${srotation}deg)`;
}, 1000);
