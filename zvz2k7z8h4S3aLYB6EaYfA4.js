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
  }});

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

document.getElementById("courseheader").innerHTML = "🧠 Introduction to the Philosophy of the Human Person";
  document.getElementById("professor").innerHTML = "Rev. Stephen Anthony Croos, IVE";
  document.getElementById("courseschedule").innerHTML = "Fri - 10:20am - 11:20am";

document.getElementById('trow1').style.display='table-row';
document.getElementById("trow1").innerHTML = createTrow("1", "FINAL EXAM REVIEWER", "December 23, 2025", "https://example.com/");

document.getElementById('crow1').style.display='table-row';
document.getElementById("crow1").innerHTML = createCrow("green", "● Submit...", "Final Project in Philosophy - Saint Carlo Acutis", "gray", "Individual", "purple", "Project", "90/100", "February 27, 2026");

}