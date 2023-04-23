function calculateCycle() {
  var startDate = document.getElementById("start-date").value;
  var cycleLength = parseInt(document.getElementById("cycle-length").value);
  var lutealPhase = parseInt(document.getElementById("luteal-phase").value);
  var ovulationDay = Math.floor((cycleLength - lutealPhase) / 2) + lutealPhase;
  var fertileStart = ovulationDay - 5;
  var fertileEnd = ovulationDay + 4;

  // Output the results
  var output = document.getElementById("output");
  output.innerHTML =
    "<p>Your estimated ovulation day is day " +
    ovulationDay +
    " of your cycle.</p>" +
    "<p>Your fertile window is days " +
    fertileStart +
    " to " +
    fertileEnd +
    " of your cycle.</p>";
}
