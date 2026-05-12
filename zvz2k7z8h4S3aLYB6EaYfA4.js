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

setEvent('may-15', `
    <div class="event" onclick="may15idmaking()">
      <p>🏫 I.D. Making<br>
      <span class="time">8:15 a.m.</span></p>
<br>
    </div>
  `);
  
setEvent('jun-08', `
    <div class="event">
      <p>🎆 Opening 2026<br>
      <span class="time">7:00 a.m.</span></p>
    </div>
  `);

  setEvent('may-11', `
    <div class="event" onclick="may11enrolment()">
      <p>📝 Enrolment SHS<br>
      <span class="time">8:00 a.m.</span></p>
<div class="chp chp-r c-green"><span class="c-txt2">● Done<span></div><br>
    </div>
  `);

// add here

});

// SHORTCUT:ACTIVITY INFO - group 3 dito ang inyong assigned task

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
document.getElementById("cagxuxgvyjavcjq").innerHTML = "";
document.getElementById("cgclpiciqeakpf").innerHTML = "🏫 I.D. Making";
  document.getElementById("cgaxhu+dgwkt").innerHTML = "8:15 a.m.";
document.getElementById("gdmvgjmogvcjk").innerHTML = "May 15, 2026";
document.getElementById("ukjbqb+ldad").innerHTML = "";
  document.getElementById("cgaxhu+vgzkb").innerHTML = "";
document.getElementById("cahgxu+gjuakyg").innerHTML = "";
document.getElementById("fxhcck+tlnz").innerHTML = "Go to school and help feliz make the ids - 8:15 am calltime"
}

function may11enrolment() {
document.getElementById('activitymodal').style.display='block';
document.getElementById("cagxuxgvyjavcjq").innerHTML = "";
document.getElementById("cgclpiciqeakpf").innerHTML = "📝 Enrolment SHS";
  document.getElementById("cgaxhu+dgwkt").innerHTML = "8:00 a.m.";
document.getElementById("gdmvgjmogvcjk").innerHTML = "May 11, 2026";
document.getElementById("ukjbqb+ldad").innerHTML = "";
  document.getElementById("cgaxhu+vgzkb").innerHTML = createChip("Activity", "c-yellow");
document.getElementById("cahgxu+gjuakyg").innerHTML = createChip2("● Done", "c-green");
document.getElementById("fxhcck+tlnz").innerHTML = ""
}

// add here

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
  document.getElementById('coursemodal').style.display='block';

document.getElementById("jvbyzlolhkly").innerHTML = "🧠 Introduction to the Philosophy of the Human Person";
document.getElementById("iuaxykzozrk").innerHTML = "🧠 Introduction to the Philosophy of the Human Person";
document.getElementById("kwczamlmbiqta").innerHTML = "";
document.getElementById("gmizivlamumabmz").innerHTML = createChip("A.Y. 2025-2026 FIRST SEMESTER", "c-gray");
  document.getElementById("wyvmlzzvy").innerHTML = "Rev. Stephen Anthony Croos, IVE";
  document.getElementById("lxdabnblqnmdun").innerHTML = "Fri - 10:20am - 11:20am";
  document.getElementById("ltrlrrzeoyk").innerHTML = "";

document.getElementById('trow1').style.display='table-row';
document.getElementById("trow1").innerHTML = createTrow("1", "FINAL EXAM REVIEWER", "December 23, 2025", "https://example.com/");

document.getElementById('crow1').style.display='table-row';
document.getElementById("crow1").innerHTML = createCrow("green", "● Submit...", "Final Project in Philosophy - Saint Carlo Acutis", "gray", "Individual", "purple", "Project", "90/100", "February 27, 2026");

}

// add here

// MISCELLANEOUS

document.addEventListener("DOMContentLoaded", function () {

  function refresh() { 
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0'); // if it breaks it's this
    const month = now.toLocaleString('en-US', { month: 'short' }).toLowerCase(); 
 
    const targetClass = month + "-" + day;

    const container = document.getElementById("todayevent");
    if (!container) return;

    container.innerHTML = "";

    const dateEl = document.querySelector("." + targetClass);
    if (!dateEl) return;

    const td = dateEl.closest("td");
    if (!td) return;

    const eventDivs = td.querySelectorAll(".event");
    if (!eventDivs.length) return;

    eventDivs.forEach(eventDiv => {
      const clone = eventDiv.cloneNode(true);
      container.appendChild(clone);
    });
  }

  refresh();

});
