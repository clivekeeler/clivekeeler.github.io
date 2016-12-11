function myFunction() {
  var dis, min, sec, w, ds, t, sc, scm, scs, P, f, at, atm, ats, wt, wm, ws, ad, sp, spm, sps, pt, pm, ps;

  // Get the value of the input field by id
  dis = document.getElementById("distance").value;
  min = document.getElementById("min").value;
  sec = document.getElementById("sec").value;
  w = document.getElementById("weight").value;
  ds = document.getElementById("setDist").value;

  t = (min * 60) + (sec / 1);

  sc  = t / dis * 500;
  scm = Math.floor(sc / 60);
  scs = sc % 60;

  P  = 2.8 / Math.pow(t / dis, 3);

  f  = Math.pow(w / 122.47, .222);

  at = f * sc;
  atm = Math.floor(at / 60);
  ats = at % 60;

  wt = at * dis / 500;
  wm = Math.floor(wt / 60);
  ws = wt % 60;

  ad = dis / f;

  sp = 5*((Math.log(ds / dis)) / (Math.log(2))) + sc;
  spm = Math.floor(sp / 60);
  sps = sp % 60;

  pt = sp * ds / 500;
  pm = Math.floor(pt / 60);
  ps = pt % 60;

  document.getElementById("dist").innerHTML = "Distance : " + dis;
  if (sec < 10) {
    document.getElementById("time").innerHTML = "Time : " + min + ":0" + sec;
  }
  else {
    document.getElementById("time").innerHTML = "Time : " + min + ":" + sec;
  }
  if (scs < 10) {
    document.getElementById("split").innerHTML = "Split : " + scm + ":0" + scs.toFixed(1);
  }
  else {
    document.getElementById("split").innerHTML = "Split : " + scm + ":" + scs.toFixed(1);
  }

  document.getElementById("power").innerHTML = "Power      : " + P.toFixed();

  if (ats < 10) {
    document.getElementById("adTime").innerHTML = "Adj. time : " + wm + ":0" + ws.toFixed(1);
  }
  else {
    document.getElementById("adTime").innerHTML = "Adj. time : " + wm + ":" + ws.toFixed(1);
  }

  if (ats < 10) {
    document.getElementById("adSplit").innerHTML = "Adj. split : " + atm + ":0" + ats.toFixed(1);
  }
  else {
    document.getElementById("adSplit").innerHTML = "Adj. split : " + atm + ":" + ats.toFixed(1);
  }

  document.getElementById("preDist").innerHTML = "Distance : " + ds;

  if (ps < 10) {
    document.getElementById("preTime").innerHTML = "Predicted time : " + pm + ":0" + ps.toFixed(1);
  }
  else {
    document.getElementById("preTime").innerHTML = "Predicted time : " + pm + ":" + ps.toFixed(1);
  }

  if (sps < 10) {
    document.getElementById("preSplit").innerHTML = "Predicted split : " + spm + ":0" + sps.toFixed(1);
  }
  else {
    document.getElementById("preSplit").innerHTML = "Predicted split : " + spm + ":" + sps.toFixed(1);
  }

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
