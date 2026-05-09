// For academic demo purposes - bsit coding lessons / personal project example data

// SHORTCUT:CALENDAR - group 2 this is your assigned

document.addEventListener("DOMContentLoaded", () => {

  function setEvent(dateClass, html) {
    document.querySelectorAll('.' + dateClass).forEach(el => {
      const h6 = el.closest('h6');
      const target = h6 ? h6.nextElementSibling : null;

      if (target && target.classList.contains('fl')) {
        target.innerHTML = html;
      }
    });
  }

/*
INDIVIDUAL - default/gray/black
GROUPINGS - green

 YELLOW:
 - Activity
 - Assignment
 - Paper
 ORANGE: Quiz
 EXAM: Red
 VIDEO & PRESENTATION: Brown
 MEETING: Black/Gray
 PROJECT/PT: Purple
*/

// MAY 09 -----------------
  setEvent('may-09', `
    <div class="event">
      <p>🎹 SRDCC - Anticipated Mass<br>
      <span class="time">3:30 p.m.</span></p>
      <div class="chp c-brown"><a class="c-txt2">Service</a></div><br>
    </div>
  `);


// MAY 16 -----------------
  setEvent('may-16', `
    <div class="event">
      <p>🎹 SRDCC - Anticipated Mass & Practice<br>
      <span class="time">3:00 p.m.</span></p>
      <div class="chp c-brown"><a class="c-txt2">Service</a></div><br>
    </div>
  `);

// MAY 23 -----------------
  setEvent('may-23', `
    <div class="event">
      <p>🎹 SRDCC - Anticipated Mass & Practice<br>
      <span class="time">3:00 p.m.</span></p>
      <div class="chp c-brown"><a class="c-txt2">Service</a></div><br>
    </div>
  `);

// MAY 20 -----------------
  setEvent('may-20', `
    <div class="event">
      <p>🎹 SRDCC - Triduum Mass<br>
      <span class="time">6:00 p.m.</span></p>
      <div class="chp c-brown"><a class="c-txt2">Service</a></div><br>
    </div>
  `);

// MAY 21 -----------------
  setEvent('may-21', `
    <div class="event">
      <p>🎹 SRDCC - Triduum Mass<br>
      <span class="time">6:00 p.m.</span></p>
      <div class="chp c-brown"><a class="c-txt2">Service</a></div><br>
    </div>
  `);

// MAY 22 -----------------
  setEvent('may-22', `
    <div class="event">
      <p>⛪ Feast of Saint Rita of Cascia Mass<br>
      <span class="time">9:00 a.m.</span></p>
      <div class="chp c-brown"><a class="c-txt2">Service</a></div><br>
    </div>
  `);
      
// MAY 15 -----------------
  setEvent('may-15', `
    <div class="event" onclick="may15idmaking()">
      <p>🏫 I.D. Making @ LPCA<br>
      <span class="time">8:15 a.m.</span></p>
      <div class="chp c-yellow"><a class="c-txt2">Activity</a></div><br>
    </div>
<div class="event ev-mb" onclick="may15idmaking()">
      <p>🎤 Practice - SRDCC<br>
      <span class="time">5:00 p.m.</span></p>
    </div>
  `);
	
// MAY 11 -----------------
  setEvent('may-11', `
    <div class="event">
      <p>📇 Resumption of Office Transactions<br>
      <span class="time">7:00 a.m.</span></p>
    </div>
  `);
	
});

// SHORTCUT:ACTIVITY INFO - fictitious data - group 3 dito ang inyong assigned task

/*
INDIVIDUAL - default/gray/black
GROUPINGS - green

 YELLOW:
 - Activity
 - Assignment
 - Paper
 ORANGE: Quiz
 EXAM: Red
 VIDEO & PRESENTATION: Brown
 MEETING: Black/Gray
 PROJECT/PT: Purple
*/

function may15idmaking() {
document.getElementById('activitymodal').style.display='block';
document.getElementById("activityheader").innerHTML = "🏫 I.D. Making @ LPCA";
  document.getElementById("activitytime").innerHTML = "8:15 a.m.";
  document.getElementById("activitytype").innerHTML = `
    <div class="chp c-yellow">
      <a class="c-txt2">Activity</a>
    </div>
  `;
document.getElementById("activityinstruction").innerHTML = "Go to lpca help feliz make the id"
}


// SHORTCUT:COURSES INFO - group 4 dito niyo ilalagay ang courses information

/*
INDIVIDUAL - default/gray/black
GROUPINGS - green

 YELLOW:
 - Activity
 - Assignment
 - Paper
 ORANGE: Quiz
 EXAM: Red
 VIDEO & PRESENTATION: Brown
 MEETING: Black/Gray
 PROJECT/PT: Purple
*/

// COURSE:PHILOSOPHY ========================

function philosophy() {
  document.getElementById('coursemodal').style.display='block'

document.getElementById("courseheader").innerHTML = "🧠 Introduction to the Philosophy of the Human Person";
  document.getElementById("professor").innerHTML = "Rev. Stephen Anthony Croos, IVE";
  document.getElementById("courseschedule").innerHTML = "Fri - 10:20am - 11:20am";

document.getElementById('trow1').style.display='table-row';
document.getElementById("tname1").innerHTML = "FINAL EXAM REVIEWER";
document.getElementById("tdate1").innerHTML = "December 23, 2025";
document.getElementById("tlink1").innerHTML = createLink("https://biccbolpenn.netlify.app/7dNyMDBU30qYVqD/FINAL-EXAM-philosophy.pdf");

document.getElementById('crow1').style.display='table-row';
document.getElementById("cstatus1").innerHTML = createChip2("● Submit...", "c-green");
document.getElementById("cname1").innerHTML = "Final Project in Philosophy - Saint Carlo Acutis";
document.getElementById("cformat1").innerHTML = createChip("Individual", "c-gray");
document.getElementById("ctype1").innerHTML = createChip("Project", "c-purple");
document.getElementById("cscore1").innerHTML = "90/100";
document.getElementById("cdue1").innerHTML = "February 27, 2026";
}