google.maps.__gjsload__('overlay', function(_){var gy=function(a){this.i=a},hy=function(){},iy=function(a){a.lh=a.lh||new hy;return a.lh},jy=function(a){this.La=new _.Ai(function(){var b=a.lh;if(a.getPanes()){if(a.getProjection()){if(!b.qg&&a.onAdd)a.onAdd();b.qg=!0;a.draw()}}else{if(b.qg)if(a.onRemove)a.onRemove();else a.remove();b.qg=!1}},0)},ky=function(a,b){function c(){return _.Bi(e.La)}var d=iy(a),e=d.Sf;e||(e=d.Sf=new jy(a));_.A(d.Ha||[],_.M.removeListener);var f=d.Pa=d.Pa||new _.tu,g=b.__gm;f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("center",
g,"projectionCenterQ");f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);f=d.nj=d.nj||new gy(f);f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);a.bindTo("projection",f,"outProjection");a.bindTo("panes",g);d.Ha=[_.M.addListener(a,"panes_changed",c),_.M.addListener(g,"zoom_changed",c),_.M.addListener(g,"offset_changed",c),_.M.addListener(b,"projection_changed",c),_.M.addListener(g,"projectioncenterq_changed",c)];c();b instanceof _.xf&&(_.sg(b,
"Ox"),_.sn("Ox","-p",a))},ny=function(a){if(a){var b=a.getMap(),c=a.__gmop;if(c){if(c.map==b)return;a.__gmop=null;_.tn("Ox","-p",c.nb);c.nb.unbindAll();c.nb.set("panes",null);c.nb.set("projection",null);_.ib(c.Cn.j,c);c.Hf&&(c.Hf=!1,c.nb.onRemove?c.nb.onRemove():c.nb.remove())}if(b&&b instanceof _.xf){var d=b.__gm;d.overlayLayer?a.__gmop=new ly(b,a,d.overlayLayer):d.j.then(function(e){e=e.rb;var f=new my(b,e);e.xc(f);d.overlayLayer=f;ny(a)})}}},ly=function(a,b,c){this.map=a;this.nb=b;this.Cn=c;this.Hf=
!1;_.sg(this.map,"Ox");_.sn("Ox","-p",this.nb);c.j.push(this);c.i&&oy(this,c.i);c.o.Zg()},oy=function(a,b){a.nb.get("projection")!=b&&(a.nb.bindTo("panes",a.map.__gm),a.nb.set("projection",b))},my=function(a,b){this.H=a;this.o=b;this.i=null;this.j=[]};_.z(gy,_.N);gy.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.ge(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.i:null))};_.z(jy,_.N);ly.prototype.draw=function(){this.Hf||(this.Hf=!0,this.nb.onAdd&&this.nb.onAdd());this.nb.draw&&this.nb.draw()};my.prototype.dispose=function(){};my.prototype.Pb=function(a,b,c,d,e,f,g,h){var k=this.i=this.i||new _.Xo(this.H,this.o,function(){});k.Pb(a,b,c,d,e,f,g,h);a=_.p(this.j);for(b=a.next();!b.done;b=a.next())b=b.value,oy(b,k),b.draw()};_.df("overlay",{Rh:function(a){if(a){var b=a.getMap();if(b&&b instanceof _.xf||a.__gmop)ny(a);else{b=a.getMap();var c=iy(a),d=c.Mm;c.Mm=b;d&&(c=iy(a),(d=c.Pa)&&d.unbindAll(),(d=c.nj)&&d.unbindAll(),a.unbindAll(),a.set("panes",null),a.set("projection",null),_.A(c.Ha,_.M.removeListener),c.Ha=null,c.Sf&&(c.Sf.La.Nb(),c.Sf=null),_.tn("Ox","-p",a));b&&ky(a,b)}}},preventMapHitsFrom:function(a){_.rp(_.Tp(a,{onClick:function(b){return _.mp(b.event)},Fb:function(b){return _.jp(b)},yd:function(b){return _.kp(b)},
Xb:function(b){return _.kp(b)},Lb:function(b){return _.lp(b)}}),!0)},preventMapHitsAndGesturesFrom:function(a){a.addEventListener("click",_.hf);a.addEventListener("contextmenu",_.hf);a.addEventListener("dblclick",_.hf);a.addEventListener("mousedown",_.hf);a.addEventListener("mousemove",_.hf);a.addEventListener("MSPointerDown",_.hf);a.addEventListener("pointerdown",_.hf);a.addEventListener("touchstart",_.hf);a.addEventListener("wheel",_.hf)}});});
