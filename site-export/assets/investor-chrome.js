/* Conrad Investor Centre — shared chrome behaviour (ticker) */
(function(){
  var track = document.getElementById('tickerTrack');
  if(!track) return;
  var items = [
    {l:"ASX", v:"CRD"},
    {l:"Aceh PSCs — Prospective Resources", v:"&gt;11 Tcf Net"},
    {l:"Duyung PSC — Conrad Interest", v:"76.5%"},
    {l:"FID March 2026 — First Gas Target", v:"4Q27"},
    {l:"Mako 2C Resources", v:"330 bfc"}
  ];
  function build(){
    return items.map(function(it){
      return '<span class="ticker-item"><span class="lbl">'+it.l+'</span> <span class="val">'+it.v+'</span></span><span class="ticker-sep"></span>';
    }).join('');
  }
  track.innerHTML = build()+build();
})();
