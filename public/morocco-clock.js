(function(){
  var TZ='Africa/Casablanca';
  var root=document.getElementById('ma-clock');
  if(!root||!window.Intl||!Intl.DateTimeFormat){return;}
  var $=function(s){return root.querySelector(s);};
  var L=root.dataset||{};var loc=(document.documentElement.lang||'en').slice(0,2);
  var T=function(k,d){return L[k]||d;};
  var digital=$('[data-digital]'),dateEl=$('[data-date]'),offEl=$('[data-offset]'),noteEl=$('[data-note]');
  var hh=$('[data-hh]'),mm=$('[data-mm]'),ss=$('[data-ss]');
  var rows=root.querySelectorAll('[data-city]');
  function parts(tz,d){
    var f=new Intl.DateTimeFormat('en-GB',{timeZone:tz,hour12:false,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'});
    var o={};f.formatToParts(d).forEach(function(p){o[p.type]=p.value;});
    if(o.hour==='24'){o.hour='00';}
    return o;
  }
  function offsetMin(tz,d){
    var p=parts(tz,d);
    var asUTC=Date.UTC(+p.year,+p.month-1,+p.day,+p.hour,+p.minute,+p.second);
    return Math.round((asUTC-Math.floor(d.getTime()/1000)*1000)/60000);
  }
  function fmtOff(m){var s=m<0?'-':'+';m=Math.abs(m);var h=Math.floor(m/60),r=m%60;return 'GMT'+s+h+(r?':'+('0'+r).slice(-2):'');}
  function tick(){
    var now=new Date(),p=parts(TZ,now);
    var h=+p.hour,m=+p.minute,s=+p.second;
    digital.textContent=p.hour+':'+p.minute+':'+p.second;
    var dd=new Intl.DateTimeFormat(loc==='en'?'en-GB':loc,{timeZone:TZ,weekday:'long',day:'numeric',month:'long',year:'numeric'}).format(now);
    dateEl.textContent=dd;
    var off=offsetMin(TZ,now);
    offEl.textContent=fmtOff(off);
    if(noteEl){noteEl.textContent=off===0?T('lRamadan','Ramadan time: Morocco is on GMT+0 for the holy month.'):T('lStandard','Standard time: Morocco is on GMT+1 all year, except during Ramadan.');}
    hh.setAttribute('transform','rotate('+((h%12)*30+m*0.5)+' 100 100)');
    mm.setAttribute('transform','rotate('+(m*6+s*0.1)+' 100 100)');
    ss.setAttribute('transform','rotate('+(s*6)+' 100 100)');
    for(var i=0;i<rows.length;i++){
      var tz=rows[i].getAttribute('data-city'),q=parts(tz,now);
      rows[i].querySelector('[data-t]').textContent=q.hour+':'+q.minute;
      var diff=Math.round((offsetMin(tz,now)-off)/60*100)/100;
      rows[i].querySelector('[data-d]').textContent=diff===0?T('lSame','Same time'):(diff>0?'+':'')+diff+' '+T('lVs','h vs Morocco');
      var dayDiff=Date.UTC(+q.year,+q.month-1,+q.day)-Date.UTC(+p.year,+p.month-1,+p.day);
      rows[i].querySelector('[data-day]').textContent=dayDiff>0?T('lTomorrow','Tomorrow'):(dayDiff<0?T('lYesterday','Yesterday'):T('lToday','Today'));
    }
  }
  tick();setInterval(tick,1000);
})();
