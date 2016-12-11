function myFunction() {
  var d, min, sec, w, ds, t, sc, scm, scs, p, P, f, at, atm, ats, ad, sp;

  // Get the value of the input field by id
  d = document.getElementById("distance").value;
  min = document.getElementById("min").value;
  sec = document.getElementById("sec").value;
  w = document.getElementById("weight").value;
  ds = document.getElementById("setDist").value;

  t = (min * 60) + (sec / 1);
  sc  = t / d * 500;
  scm = Math.floor(sc / 60);
  scs = sc % 60;
  p  = t / d;
  P  = 2.8 / Math.pow(t/d, 3);
  f  = Math.pow(w / 122.47, .222);
  at = f * t;
  atm = Math.floor(at / 60);
  ats = at % 60;
  ad = d / f;
  sp = 5*((Math.log(ds/d))/(Math.log(2))) + sc;
  spm = Math.floor(sp / 60);
  sps = sp % 60;

  document.getElementById("dist").innerHTML = "Distance : " + d;
  if (sec < 10) {
    document.getElementById("time").innerHTML = "Time : " + min + ":0" + sec;
  }
  else {
    document.getElementById("time").innerHTML = "Time : " + min + ":" + sec;
  }
  if (scs < 10) {
    document.getElementById("split").innerHTML = "Split time : " + scm + ":0" + scs.toFixed(1);
  }
  else {
    document.getElementById("split").innerHTML = "Split time : " + scm + ":" + scs.toFixed(1);
  }
  //document.getElementById("pace").value = p;
  document.getElementById("power").innerHTML = "Power      : " + P.toFixed();
  //if weight blank ...
  //document.getElementById("wf").innerHTML = "Weight factor : " + f.toFixed(3);
  //document.getElementById("mass").innerHTML = "Weight : " + w;
  if (ats < 10) {
    document.getElementById("adTime").innerHTML = "Adj. Split : " + atm + ":0" + ats.toFixed(1);
  }
  else {
    document.getElementById("adTime").innerHTML = "Adj. Split : " + atm + ":" + ats.toFixed(1);
  }
  //document.getElementById("adTimeSec").innerHTML = ats.toFixed(1);
  document.getElementById("adDist").innerHTML = "Adj. distance : " + ad.toFixed();
  //if set dist blank ...
  if (sps < 10) {
    document.getElementById("preSplit").innerHTML = "For " + ds + " m, predicted split : " + spm + ":0" + sps.toFixed(1);
  }
  else {
    document.getElementById("preSplit").innerHTML = "For " + ds + " m, predicted split : " + spm + ":" + sps.toFixed(1);
  }
  //document.getElementById("preSplitSec").innerHTML = sps.toFixed(1);

  if (document.getElementById("inputSection").style.display == "none") {
    document.getElementById("inputSection").style.display = "block";
    document.getElementById("resultsSection").style.display = "none";
    document.getElementById("button").innerHTML = "Calculate";
  }
  else {
    document.getElementById("inputSection").style.display = "none";
    document.getElementById("resultsSection").style.display = "block";
    document.getElementById("button").innerHTML = "Reset";
  }


}
