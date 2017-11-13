(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/border.png", id:"border"},
		{src:"images/cooler.png", id:"cooler"},
		{src:"images/cooler_sh.png", id:"cooler_sh"},
		{src:"images/cta_sh.png", id:"cta_sh"},
		{src:"images/ctat.png", id:"ctat"},
		{src:"images/desk.jpg", id:"desk"},
		{src:"images/desk_phones.png", id:"desk_phones"},
		{src:"images/mouse.png", id:"mouse"},
		{src:"images/rb.png", id:"rb"},
		{src:"images/t1.png", id:"t1"},
		{src:"images/t2.png", id:"t2"},
		{src:"images/t3.png", id:"t3"},
		{src:"images/v1.png", id:"v1"},
		{src:"images/v2.png", id:"v2"},
		{src:"images/v3.png", id:"v3"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.border = function() {
	this.initialize(img.border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.cooler = function() {
	this.initialize(img.cooler);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,112);


(lib.cooler_sh = function() {
	this.initialize(img.cooler_sh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,214);


(lib.cta_sh = function() {
	this.initialize(img.cta_sh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,36);


(lib.ctat = function() {
	this.initialize(img.ctat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,192,37);


(lib.desk = function() {
	this.initialize(img.desk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);


(lib.desk_phones = function() {
	this.initialize(img.desk_phones);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);


(lib.mouse = function() {
	this.initialize(img.mouse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,24);


(lib.rb = function() {
	this.initialize(img.rb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,171);


(lib.t1 = function() {
	this.initialize(img.t1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,205,128);


(lib.t2 = function() {
	this.initialize(img.t2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,47);


(lib.t3 = function() {
	this.initialize(img.t3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,269,45);


(lib.v1 = function() {
	this.initialize(img.v1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);


(lib.v2 = function() {
	this.initialize(img.v2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);


(lib.v3 = function() {
	this.initialize(img.v3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.t1();
	this.instance.setTransform(-102,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102,-64,205,128);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cta_sh();
	this.instance.setTransform(-78,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-18,156,36);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cooler();
	this.instance.setTransform(-59,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.cooler_sh();
	this.instance_1.setTransform(-85.5,-80.2,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.5,-80.2,171,160.5);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.border();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mouse();
	this.instance.setTransform(-3,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-2,15,24);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.ctat();
	this.instance.setTransform(-67.2,-11.9,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.2,-11.9,134.4,25.9);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E81E00").s().p("ApXCqIAAlTISvAAIAAFTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-17,120,34);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E81E00").s().p("Ah3B4QgygyAAhGQAAhFAygxQAygzBFAAQBGAAAxAzQAzAxAABFQAABGgzAyQgxAyhGAAQhFAAgygyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-17,34,34);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rb();
	this.instance.setTransform(-28,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-85,56,171);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgoEAoAQwlwlAA3bQAA3bQlwqQQpwkXbAAQXcAAQkQkQQqQqAAXbQAAXbwqQlQwkQq3cAAQ3bAAwpwqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-362.6,-362.6,725.3,725.3);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.desk_phones, null, new cjs.Matrix2D(1,0,0,1,-258.1,-130.1)).s().p("AgqB6QgZgGgeAAIgCgEIgJgFIgEgHIgBgFIgEgDIAAgFIgCgBQgBgCgEgDIgGgMIgIgFIACgvIAGgQIAOgQIAEgJQAUgYAYgQQAcgYAngNIACgEQAigMAlgEIAHACQACACAFAAIABACQACACAEAAIACAAQAAAFAHACQAFACAAADIADAAIADACIAAABIAGAEIAJAeQAPAfgGAhIAAABIgDAHIgDADQgCACAAADIgIACIgDAGIgnASIgBACIgXABQgIgCgBAGIgHADIgBAMIgIALQgCAEAAAFQgLAIgIAJIgBAAIgDAJQgSAMgXAAIgGAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,-12.2,27.8,24.5);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.desk_phones, null, new cjs.Matrix2D(1,0,0,1,-295,-139.3)).s().p("AiLByIgEgCIgMAAIgMgFQABgDgDgCIgGgBIgDgCQgHgrAFgwIACgOIAEgDQAFgLALgMQAGgGACgHIANgFQAegXAlgPIAFAAIAjgLIAEgEQBKgQBQAKIABABIACAEIACADQAAAGAEAFIAHAJIARARQAXAVgBAgIAAABIgIANQgHAEgIAEQgHgCgDAGIgGAAQgLAHgKAFIgOAEIgDAEQgtgBguAOIAAAHIgFAKIgJAFQgBAIgIAGQgFACgFAAIgDAEIgOAFQgNAMgTAFQgBAAAAAAQgBAAAAAAQgBABgBAAQAAABgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,-11.5,36.7,23);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.desk_phones, null, new cjs.Matrix2D(1,0,0,1,-336.4,-141.5)).s().p("AicBqIgQgJIgFgMIgEgEIgFgMQgFgCgBgIQgBgDgEgCIgDgHIAIgVIAOgRIACgGIADgDIAGgFIABgBIAVgSIADgFIADgBQAGgBgBgFIARgGIADgEIAfgQIADgDQAWgIAWgMQARgDAOgEQAFgDAEgBQADgDAFgBQAFgBAFAAIAEgDQAogCAsABQAHABADAFIAKAAIAKAGIAJAAIAEAEIAOAHIAKAIQAFANAHANIACADIACABQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABIABADIAFAEIAAAbQgGASgLAWQgCADgEAEIgDACIgGAEQgOACgMAEIgEACQggAKgfgFQgEgBgDgEIgZgCIgIAGIgoAEIAAAMIgDAHQg4AXg/ACIgeAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.1,-10.7,40.3,21.4);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.desk_phones, null, new cjs.Matrix2D(1,0,0,1,-295.2,-161.1)).s().p("AhiBbIgEgDQgPABgNgCQgFgBgCgDQgFABgDgCQgGgEgBgFIgGgBIgBAAIgBgCIgCgCIgCAAIgNgLIgEgIIgCgQIALgYIAWggQAEABABgBIAHgIIAFgBQAQgRAYgEQAygdA9gGQAgABAfgDIAGAGIAKAAIAHAEIAMAAIAYAMIADAIQAFADAEAEQADADAEABIAEAIIAEACIAEAZIAEAEIAAAFIADAEIACAXQAEACAAAJIgBAIQgEABgBAEQgCAEgBAFQgFAHgIACQgCABgCACIgGAAQgPAKgUACIgGAEQgqAEgjgOQgYgGgVgCIgtAXIgDAAIgDABIgCACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.4,-9.1,36.8,18.3);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.desk_phones, null, new cjs.Matrix2D(1,0,0,1,-262.9,-173.3)).s().p("ABSBWQgWgGgYAAIgNAAQgFgBgEAAQgLgFgDAGIgDgNIgeAFIgEAGIgNAGQgGAEgIgCIhbgEIgFgJIgEgDIgKgDIgFgeQgDgFgBgGQgCgLgGgHIAAgWQAIgTAVgJQAGgDAGgEQAbgIAagLIAEgBIAEgEQAtgJAwAAIBngEIAEADIAJAFIACAAIACAFQAGgCABADIADAEIADAEQABAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQABABAAAAQABAAAAAAQABAAABAAIABABQAAAFADACQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAIABAFIAHADQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAFAGAEAIIAIAEIAEAHIAAAGIAEACIAEAbQABAJAAAJIgLASIgFACIgJANIgdAKQgUAGgXABIgNgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-8.7,38.6,17.4);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.desk_phones, null, new cjs.Matrix2D(1,0,0,1,-231,-184.9)).s().p("AApBzIghAAQgIgIgIgDQgFgBgCgDQgLgDgJgGQgGgCgEgFQgRgCgPgGIgDgEIgMgCIgIgCQgcgKgPgVQgHgJAAgJIgFgCIgDgEQgDgNABgPIgBgIIAPgUIAFgDIADgEQAqgLAggWIACgGQAFgBAFgFQAEgEAFAAQABgFAEgBQAGgBAGgDIAGAAIAKgFIAIAAIAZALQASADAPAFIAEABQAQANAZALIANAEIAFAHQAIgBABAHQABAEAFADIACAHIAGADIABAFIADADQAHAMADAPIAAAGIAEAEIACBEIgSASQgqAUg4AAIgFAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-11.5,32.5,23.1);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.desk_phones, null, new cjs.Matrix2D(1,0,0,1,-189.8,-206)).s().p("AgrBpIgHABIgIgDIgFgBQgEgBgEABIgKgHIAAgBIgBAAIgBAAIgEgCIgDAAIgBAAIgPgMIgCgDIgBgDQgBgCgDgBIgEgEIgHgEIgBgDIgBgBIgBgBIgCgCIgEAAIgEgHIgFgBIgGgQIgMgIIgCgkIAEgFIACgQQAFgDAAgFIACgKIACgEQAOgDAPgGIAFgGIAHgBIADgDQAEgDAEgBQAAAAABAAQABAAAAgBQABAAAAAAQABgBAAAAIAFAAIADgEQAKgBAFgEQADgCACgEIAMgBIATgKIAIAAQAWABAQgHIADgFIAfgBIAMASQAiAUAcAWIACADIAMAGIAIAOQAAAIACAHQACAIAAAKQAFAFACAKQADAMAFAOIAAAUIgDAEIgBADIgBADQgCAFgEABIgCAGQgHACgHAFQgNAFgLAJQgpARgpAAQgjAAgmgOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-11.9,32.8,23.8);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.desk_phones, null, new cjs.Matrix2D(1,0,0,1,-176.1,-189.9)).s().p("Ag0BuIgGgDIghgLIgGAAIgCgCQgFAAgBgDIgBgDIgIgEIgFgIIgGgBIgCgEIgLgEIgKgIIgGgXIgEgEIAAgIIARgvQAOgSALgRIACgBQAkgtBDACQAUgGAYgBIAHAFIAFAAQAWAHAQALIAIADIAEAEIAMABIAIADIAHAIIAMAHIABAFIAFAEIAJAQQAEAHgBAIQAJAOgCATQgCAMABAMIgHAKQgSAHgWgBIgIAAIgTAKIgMABQgCAEgDACQgFAEgKABIgDAEIgFAAIgEACQgEABgEADIgDADIgHABIgFAGQgSAIgUAEIgEADg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-11,32,22.1);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.desk_phones, null, new cjs.Matrix2D(1,0,0,1,-143.7,-175.9)).s().p("AgZBrIgTAAIgIgFIgEgIIgGgBIgBgEIgJgEIgEgHIgEgDIgJgSQgCgFAAgFQgGgFgCgIIgEgNIgFgFIgFgMIACghIAEgDIAEgKIAOgEIAAASIAMgWIABgDIAEgDIAFgPIAEgCQACgIAGgHIAKgLIARgCIAEgDIA0gEIAEADQAcgBAQAVIAIACQASAVABAdIAEAEIACAsIAFAEIgDBCIgGAIQgxAQgzAAQgOAAgQgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-10.9,22.8,21.9);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.desk_phones, null, new cjs.Matrix2D(1,0,0,1,-122,-189.7)).s().p("AgcBjQgLgHgPgFIgFgBIgEgEIgBAAIgFgCIgCgCIgagEIgcgOIgEgFQglgNgLgeQgMgQADgWIgDgFIgBgkIAFgGQgBgFADgFIAGgHQAOgGARgCQAFgFAGgEIACgBIAkgJIAJgCQALAIASAAIAFADQAgAGAfgBIAEgDIAMAAIAZAIIAEAEIAnAOQAGACACAFIAEABIAGAHIAZAMIAGAAIACAEIAGACIAEAGIAFACIACAGIAFAEQAKAaANAUIAAAGIACAEIAAAQQgVAXgeAOQgBAKgIACQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAgBABQgEgCgDAEIgFAHIgJADIgDAEIgJAEIgfABIgOAEQgmgNgogIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-12,38.3,24.2);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.v1();
	this.instance.setTransform(-200,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-150,400,300);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.v2();
	this.instance.setTransform(-200,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-150,400,300);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.v3();
	this.instance.setTransform(-200,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-150,400,300);


(lib.link = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuDXcMAAAgu3IcHAAMAAAAu3g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.blk = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.can = new lib.Symbol19();
	this.can.setTransform(0,-27);

	this.timeline.addTween(cjs.Tween.get(this.can).wait(1));

	// Layer 1
	this.instance = new lib.t2();
	this.instance.setTransform(-92,67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-112,185,226);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.t1 = new lib.Symbol32();
	this.t1.setTransform(0,0,1,1,0,0,0,0,-2);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// Layer 1 copy 2
	this.c4 = new lib.Symbol30();

	this.timeline.addTween(cjs.Tween.get(this.c4).wait(1));

	// Layer 1 copy 3
	this.c3 = new lib.Symbol30();

	this.timeline.addTween(cjs.Tween.get(this.c3).wait(1));

	// Layer 1 copy
	this.c2 = new lib.Symbol30();

	this.timeline.addTween(cjs.Tween.get(this.c2).wait(1));

	// Layer 1
	this.c1 = new lib.Symbol30();

	this.timeline.addTween(cjs.Tween.get(this.c1).wait(1));

	// Layer 2
	this.pl = new lib.Symbol31();

	this.timeline.addTween(cjs.Tween.get(this.pl).wait(1));

	// Layer 4
	this.sh = new lib.Symbol36();
	this.sh.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.sh).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-17,156,37);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol35();

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.5,-80.2,171,160.5);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Symbol14();
	this.instance.setTransform(58.1,-19.8);

	this.instance_1 = new lib.Symbol13();
	this.instance_1.setTransform(95,-10.6);

	this.instance_2 = new lib.Symbol12();
	this.instance_2.setTransform(136.4,-8.5);

	this.instance_3 = new lib.Symbol11();
	this.instance_3.setTransform(95.2,11.1);

	this.instance_4 = new lib.Symbol10();
	this.instance_4.setTransform(62.9,23.3);

	this.instance_5 = new lib.Symbol9();
	this.instance_5.setTransform(31,34.9);

	this.instance_6 = new lib.Symbol8();
	this.instance_6.setTransform(-10.1,56);

	this.instance_7 = new lib.Symbol7();
	this.instance_7.setTransform(-23.8,39.9);

	this.instance_8 = new lib.Symbol6();
	this.instance_8.setTransform(-56.2,25.9);

	this.instance_9 = new lib.Symbol5();
	this.instance_9.setTransform(-77.9,39.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.1,-32.1,253.7,99.9);


(lib.desk_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// v3.png
	this.v3 = new lib.Symbol1();
	this.v3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.v3).wait(1));

	// v2.png
	this.v2 = new lib.Symbol2();
	this.v2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.v2).wait(1));

	// v1.png
	this.v1 = new lib.Symbol3();
	this.v1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.v1).wait(1));

	// phones
	this.phones = new lib.Symbol4();

	this.timeline.addTween(cjs.Tween.get(this.phones).wait(1));

	// desk.jpg
	this.instance = new lib.desk();
	this.instance.setTransform(-200,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-150,400,300);


(lib.t3_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.mouse = new lib.Symbol33();
	this.mouse.setTransform(38,95);

	this.timeline.addTween(cjs.Tween.get(this.mouse).wait(1));

	// Layer 3
	this.cta = new lib.Symbol29();
	this.cta.setTransform(0,91,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// Layer 1
	this.instance = new lib.t3();
	this.instance.setTransform(-134,-108);

	this.cooler = new lib.Symbol22();
	this.cooler.setTransform(0,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cooler},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134,-108,269,225);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var r = this;
		var count = 1;
		var repeat = 2;
		var time2 = 3.0;
		var time3 = time2+3.0;
		var time4 = time3+2.0;
		
		//TweenMax.to(r.podium.shine, 1.2, {alpha:0.3, yoyo:true, repeat:-1, repeatDelay:0.0, ease:RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: true})})
		
		var tl = new TimelineLite();
		tl.fromTo(r.blk, 0.2, {alpha:1}, {alpha:0, ease:Power0.easeNone})
		  //.from(r.desk, 1.8, {scaleX:1.5, scaleY:1.5, ease:Expo.easeOut}, 0.0)
		  //.from(r.desk, 4.8, {x:"+=3", ease:RoughEase.ease.config({ template:  Power0.easeNone, strength: 0.5, points: 100, taper: "none", randomize: true, clamp: true})}, 0.0)
		
		  //2
		  .from(r.circ, 0.0002, {scaleX:0.0, scaleY:0.0/*, ease:Expo.easeInOut*/}, time2+0.0)
		  .from(r.t1, 0.3, {x:"-=120", alpha:0, rotation:"+=0.1", ease:Back.easeOut.config(0.9,0.4)}, time2+0.1)
		  
		  //
		  .to(r.t1, 0.0001, {x:"-=400", rotation:"+=0.1"/*, ease:Expo.easeIn*/}, time3+0.0)
		  .staggerFrom([r.t2/*.t1, r.t2.t2*/, r.t2.can], 0.3, {x:"+=400", rotation:"+=0.1", ease:Back.easeOut.config(0.6,0.3)}, 0.1, time3+0.1)
		  
		  //3
		  //.set(r.t2, {x:1000}, time4+0.0)
		  .staggerTo([r.t2.can, r.t2], 0.001, {y:"-=900"}, 0.0, time4+0.3)
		  .staggerFrom([r.t3, r.t3.cooler], 0.001, {y:"+=600"}, 0.0, time4+0.4)
		  //.staggerTo([r.t2.can, r.t2.t1, r.t2.t2], 0.5, {y:"-=400", rotation:"+=0.1", ease:Expo.easeIn}, 0.04, time4+0.0)
		  //.staggerFrom([r.t3.t1, r.t3.t2, r.t3.t3, r.t3.t4], 1.2, {y:"+=200", rotation:"+=0.1", alpha:0, ease:Elastic.easeOut.config(0.6,0.3)}, 0.06, time4+0.4)
		  //.from(r.t3.cooler, 1.2, {scaleX:2.0, scaleY:2.0, rotation:"+=0.1", alpha:0, ease:Elastic.easeOut.config(0.6,0.3)}, time4+0.9)
		  //.from(r.t3.cta, 0.3, {scaleX:0.0, scaleY:0.0, rotation:"+=0.1", ease:Back.easeOut.config(0.6,0.3)}, time4+0.9)
		  .from(r.t3.cta, 0.2, {x:"+=300", ease:Power0.easeNone}, time4+0.4)
		  
		  //.from(r.t3.cta, 0.9, {scaleX:0.8, scaleY:0.8, ease:Elastic.easeOut.config(1.3,0.4)}, time4+1.72)
		  .to(r.t3.cta.c1, 0.2, {x:60, ease:Power0.easeNone}, time4+0.6)
		  .to(r.t3.cta.c2, 0.2, {x:-60, ease:Power0.easeNone}, time4+0.6)
		  .from(r.t3.cta.pl, 0.2, {scaleX:0.0, ease:Power0.easeNone}, time4+0.6)
		  .from(r.t3.cta.t1, 0.2, {scaleX:0.0, scaleY:0.0, ease:Power0.easeNone}, time4+0.6)
		  .from(r.t3.cta.sh, 0.2, {scaleX:0.0, scaleY:0.0, ease:Power0.easeNone}, time4+0.6)
		  
		  .from(r.t3.mouse, 0.8, {x:"+=250", y:"+=250", rotation:"-=180", ease:Expo.easeOut}, time4+0.8)
		  //.to(r.t3.cooler.mc, 0.1, {y:"-=15", ease:Power0.easeNone}, time4+3.6)
		  //.to(r.t3.cooler.mc, 0.4, {y:"+=15", ease:Bounce.easeOut}, time4+3.8)
		  .to(r.t3.mouse, 0.1, {scaleX:0.7, scaleY:0.7, ease:Sine.easeOut}, time4+1.6)
		  .to(r.t3.mouse, 0.1, {scaleX:1.0, scaleY:1.0, ease:Sine.easeOut}, time4+1.8)
		  .to(r.t3.cta, 0.1, {scaleX:0.7, scaleY:0.7, ease:Sine.easeOut}, time4+1.6)
		  .to(r.t3.cta, 0.1, {scaleX:0.8, scaleY:0.8, ease:Sine.easeOut}, time4+1.8)
		  
		  
		  
		  .to(r.t3.mouse, 0.8, {x:"+=50", y:"+=250", rotation:"-=180", ease:Expo.easeIn}, time4+1.9)
		  
		  
		  
		  
		  
		  .call(replay)
		  .set(r.blk, {x:0, alpha:0})
		  .to(r.blk, 0.2, {alpha:1, ease:Power0.easeNone, onComplete:restart}, 11)
		  ;
		
		
		  
		
		function replay() {
		  if (count == repeat){
		      tl.pause();
		  } else {
		  if (count != repeat) {
			  count++;
			  tl.play();
		  }
		  }
		}
		
		
		function restart() {
			//startWords();
			tl.play(0);
		}
		
		
		TweenMax.delayedCall(29.8, stopAllAnimationFN);
		function stopAllAnimationFN() {
			TweenMax.killAll();
		}
		
		var z = r.desk.phones;
		function startShake() {
			TweenMax.to(r.desk.v3, 0.01, {alpha:1, yoyo:true, repeat:-1, repeatDelay:0.2, delay:0.0, ease:Power0.easeNone});
			TweenMax.to(r.desk.v1, 0.01, {alpha:1, yoyo:true, repeat:-1, repeatDelay:0.2, delay:0.1, ease:Power0.easeNone});
			TweenMax.to(r.desk.v2, 0.01, {alpha:1, yoyo:true, repeat:-1, repeatDelay:0.2, delay:0.2, ease:Power0.easeNone});
			var i = 0;
			for (currObj in z) {
			  if(z[currObj] && typeof z[currObj] == "object" && i>=56){
				  TweenMax.from(z[currObj], 0.05, {x:"+=2", yoyo:true, repeat:-1, ease:RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: true}), delay:(56-i)*0.025+0.0})
				  TweenMax.from(z[currObj], 0.08, {y:"-=2", yoyo:true, repeat:-1, ease:RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: true}), delay:(56-i)*0.025+0.0})
				  TweenMax.from(z[currObj], 0.03, {rotation:"+=3", yoyo:true, repeat:-1, ease:RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: true}), delay:(56-i)*0.025+0.0})
				  }
			 i++;
			 }
		}
		startShake();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.instance = new lib.Symbol34();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// blk
	this.blk = new lib.blk();

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// t3
	this.t3 = new lib.t3_1();

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// t2
	this.t2 = new lib.t2_1();

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t1
	this.t1 = new lib.t1_1();

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// circ
	this.circ = new lib.Symbol15();

	this.timeline.addTween(cjs.Tween.get(this.circ).wait(1));

	// desk
	this.desk = new lib.desk_1();
	this.desk.setTransform(-6,-7,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.desk).wait(1));

	// bg_pattern
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-362.6,-362.6,725.3,725.3);


// stage content:
(lib.rb_300x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(window.clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// link
	this.btn = new lib.link();
	this.btn.setTransform(150,125,1.667,0.833);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.link(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bThMAAAgnBMAu3AAAMAAAAnBg");
	mask.setTransform(150,125);

	// movie
	this.rolik = new lib.content();
	this.rolik.setTransform(150,125);

	this.rolik.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.rolik).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;