// For academic demo purposes - bsit basic coding lessons / personal project example data

// SHORTCUT:CALENDAR

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

// MAY 9 -----------------
  setEvent('dt-9', `
    <div class="event">
      <p>🎹 SRDCC - Anticipated Mass<br>
      <span class="time">3:30 p.m.</span></p>
      <div class="chp c-brown"><a class="c-txt2">Service</a></div><br>
    </div>
  `);
      
// MAY 16 -----------------
  setEvent('dt-16', `
    <div class="event">
      <p>🎹 SRDCC - Anticipated Mass<br>
      <span class="time">3:30 p.m.</span></p>
      <div class="chp c-brown"><a class="c-txt2">Service</a></div><br>
    </div>
  `);
      
      // APR 30 -----------------
  setEvent('dt-30', `
    <div class="event">
      <p>🎬 Miraculous Ladybug - The Chained Titans<br><span class="time">7:00 a.m.</span></p><div class="chp c-purple">
        <a class="c-txt2">Premiere</a>
      </div><br>
    </div> <div class="event ev-mb" onclick="document.getElementById('activitymodal').style.display='block'; apr30idmaking();">
      <p>🏫 I.D. Making @ LPCA<br>
      <span class="time">8:00 a.m.</span></p>
      <div class="chp chp-r c-green"><a class="c-txt2">● Done</a></div><br>
    </div>
  `);

// MAY 1 -----------------
  setEvent('dt-1', `
    <div class="event" onclick="document.getElementById('activitymodal').style.display='block'; may1lineup();">
      <p>⛪ SRDCC - DPP Novena Mass<br>
      <span class="time">4:00 p.m.</span></p>
      <div class="chp c-brown"><a class="c-txt2">Service</a></div><br>
    </div>
  `);

// APR 29 -----------------
  setEvent('dt-29', `
    <div class="event">
      <p>📝 Registration - BSKE (Robinsons)<br>
      <span class="time">9:00 a.m.</span></p>
      <div class="chp chp-r c-green"><a class="c-txt2">● Done</a></div><br>
    </div>
  `);

});


// SHORTCUT:ACTIVITY INFO - fictitious data for juan dl cruz for testing purposes capstone project

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

// APRIL 30 =====

function apr30idmaking() {
  setActivity({
    header: "🏫 I.D. Making @ LPCA",
    time: "8:00 a.m.",
    instruction: `
    <b>I.D. Making</b> w/ feliz - conference room 8:00 a.m.
`
  });
}

// MAY 1 =====

function may1lineup() {
  setActivity({
    header: "⛪ SRDCC - DPP Novena Mass",
    time: "4:00 p.m.",
    type: { text: "Service", class: "c-brown" },
    format: { text: "Individual", class: "c-yellow" },
    instruction: `
<h5 class="bd">🤍 MAY 1 LINEUP</h5> 🤍<b> Entrance</b>: MAGALAK TAYONG LAHAT <br><br> KYRIE - JUBILEE <br><br> <b>SALMONG TUGUNAN</b><br>Poon kami’y pagpalain<br>at iyong pagtagumpayin. <br><br> <b>ALLELUIA</b> (Panganiban)<br>Manunubos naming mahal,<br>salamat sa ‘yong patnubay<br>at paglingap araw-araw. <br><br> 🤍<b>OFFERTORY</b><br> - Tanggapin Mo, O Panginoon <br><br> 🤍 SANTO/AKLAMASYON/AMEN/AMA NAMIN/SAPAGKAT/KORDERO - Jubilee <br><br> 🤍<b>COMMUNION</b><br> - Mapag-iisang Bayan <br> - Ito ang Araw <br><br> <b>🕯CANDLE OFFERING</b><br> Dalit sa Mahal na Birhen Divina Pastora (Delgado) <br></br>🤍<b>RECESSIONAL</b><br> 
-Viva La Virgen Divina Pastora!
`
  });
}

// SHORTCUT:COURSES INFO - fictitious for testing purposes capstone project

/*
INDIVIDUAL - default/gray/black
GROUPINGS - green

 YELLOW:
 - Activity
 - Assignment
 - Paper
 ORANGE: Quiz
 EXAM: Red
 VIDE & PRESENTATION: Brown
 MEETING: Black/Gray
 PROJECT/PT: Purple
*/

// COURSE:PHILOSOPHY ========================

function philosophy() {
  setCourse({
    crsheader: "🧠 Introduction to the Philosophy of the Human Person",
    crstitle: "Title",
    crsdetails: "Details",
    professor: "Bro. Stephen Anthony Croos, IVE",
    crsschedule: "Fri - 10:20am - 11:20am",
    tasks: [
      {
        name: "FINAL EXAM REVIEWER",
        date: "12/23/25",
        link: `
        <div class="chp c-gray"> <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="c-icn"> <use href="#linc"></use> </svg> <a target="_blank" href="https://biccbolpenn.netlify.app/7dNyMDBU30qYVqD/FINAL-EXAM-philosophy.pdf" class="c-txt2">Link</a></div>
        `
      },
    ],
    works: [
      {
        status: createChip2("● Submit...", "c-green"),
        actname: "Final Project in Philosophy - Saint Carlo Acutis",
	format: createChip("Individual", "c-gray"),
	type: createChip("Project", "c-purple"),
        score: "90/100",
        due: "February 27, 2026"
      }
    ]
   });
}

// SHORTCUT:EXPENSE

document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("bdg").innerHTML = `
  <table style="border-collapse: collapse;">
    <tbody>
        <tr><th class="mdl nbrd w30"><h6 class="k6 j2"><svg width="15" height="15" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icn" viewBox="0 0 24 24">
  <use href="#menu-icon"></use>
</svg> Expense</h6></th><th class="mdl nbrd w30"><h6 class="k6 j2"><svg width="15" height="15" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icn" viewBox="0 0 24 24">
  <line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>
</svg> Description</h6></th><th class="mdl nbrd w20"><h6 class="k6 j2">Date</h6></th><th class="mdl nbrd w20"><h6 class="k6 j2">Amount</h6></th></tr>
<tr>
<th class="mdl m-l w30"><p class="k9 j12">Transportation<br>Mr. Donut<br>Woonmart<br>National Bookstore</p></th>
<th class="mdl w30"></th>
<th class="mdl w20"><p class="k9 j12">April 29, 2026</p></th>
<th class="mdl w20 m-r"><p class="k9 j12">₱ 33.00<br>₱ 60.00<br>₱ 95.00<br>₱ 39.00</p><hr><p class="k9 j12 bd">₱ 227.00</p></th>
</tr>
</tbody>
</table>
`;

});
