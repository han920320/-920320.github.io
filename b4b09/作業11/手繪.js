(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"手繪_atlas_1", frames: [[0,0,623,434],[0,436,278,280],[581,467,153,408],[625,0,180,465],[280,669,192,322],[0,718,231,138],[280,436,299,231],[474,877,312,103],[474,669,54,128]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_9 = function() {
	this.initialize(ss["手繪_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["手繪_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["手繪_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["手繪_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["手繪_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["手繪_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["手繪_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["手繪_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["手繪_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7660,5107);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egv3AhaMAAAhCzMBfvAAAMAAABCzg");
	mask.setTransform(306.35,213.775);

	// Layer_3
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.08,0.0837);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,612.6,427.5), null);


// stage content:
(lib.手繪 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 畫手
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(435,378.9,1,1,0,0,0,306.4,213.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(66).to({_off:false},0).wait(1).to({x:444.7,y:416.1},0).wait(1).to({x:432.2,y:433.15},0).wait(1).to({y:443.25},0).to({_off:true},1).wait(10));

	// 遮色片12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_66 = new cjs.Graphics().p("AgxDDQgpgLghgaIgRgPQgdgegPgmQgQgnABgqQACgpARglQARgmAfgbQAggdAogNQAogMAoAEQAqAEAlAVQAkAVAZAhQAaAiAJApQAJAogHAoQgHAqgXAjQgXAjgjAWQgkAXgqAHQgQACgPAAQgYAAgZgGg");
	var mask_graphics_67 = new cjs.Graphics().p("AgPE4IgKgBIgKgCIgKgBIgKgBIgDgBQgogLghgZQghgZgVglQgVglgEgqQgEgpAMgoQAMglAagdIgIgSQgQgnABgrQACgpARglQARgmAfgbQAggdAogNQAogMAoAEQAqAEAlAVQAkAVAZAhQAaAiAJApQAJAogHApQgHAqgXAiIgLAPQATAhAFAmQAGAqgMApQgMAngaAgQgaAggkATQglATgpADIgNAAIgKgBg");
	var mask_graphics_68 = new cjs.Graphics().p("AAiGcQgrgEgngWQgjgWgbghQgbghgKgpQgKglAFglIgTgNQghgZgVglQgVglgEgqQgEgoAMgoQAMglAageIgIgSQgQgnABgrQACgpARglQARgmAfgbQAggdAogNQAogMApAEQApAEAlAVQAkAVAZAhQAaAiAJApQAJAogHApQgHAqgXAjIgLAPQATAhAFAmQADAYgDAaIARALQAZATARAZQAWAfAMAlIABAKIACAKIABAKIABAKIACAKIAAADQAAArgSAnQgQAlgeAcQgdAagkAOQgiANglAAIgSgBg");
	var mask_graphics_69 = new cjs.Graphics().p("AgrIBQgMgBgLgDIgXgHIgWgJIgLgGQgjgWgaggQgbgggMgoQgMgpAFgpQAGgqAWglQAUghAfgXQgGgfAEgfIgTgNQghgZgVglQgVgkgEgqQgEgpAMgoQAMglAageIgIgSQgQgnABgrQACgpARglQARgmAfgbQAggdAogNQAogMApAEQApAEAlAVQAkAVAZAhQAaAiAJApQAJAogHApQgHAqgXAjIgLAPQATAhAFAmQADAZgDAaIARALQAZATARAZQAWAeAMAlIABAKIACAKIABAKIABAKIACAKIAAADQAAArgSAnQgQAlgeAcIgPAMIADAQQAFAmgJAmQgJAkgVAdQgUAdgdAUQgcAUgiAKIgKABIgKABIgKACIgMACIgKABIgWgBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(66).to({graphics:mask_graphics_66,x:315.0967,y:282.5258}).wait(1).to({graphics:mask_graphics_67,x:313.8796,y:293.7265}).wait(1).to({graphics:mask_graphics_68,x:317.8765,y:303.7155}).wait(1).to({graphics:mask_graphics_69,x:317.8765,y:313.8265}).wait(11));

	// 右邊的頭髮
	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(302.3,281.05,0.5,0.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(66).to({_off:false},0).wait(14));

	// 畫手
	this.instance_2 = new lib.ClipGroup();
	this.instance_2.setTransform(288.05,350.4,1,1,0,0,0,306.4,213.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).wait(1).to({x:294.5,y:357.15},0).wait(1).to({x:279.55},0).wait(1).to({x:288.25,y:361},0).wait(1).to({x:279.6,y:364.65},0).wait(1).to({x:288.8,y:366.55},0).wait(1).to({x:297.5,y:362.55},0).to({_off:true},1).wait(14));

	// 遮色片11 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_59 = new cjs.Graphics().p("AgMAwQgVgGgKgUQgGgKAAgMQABgVAPgOQAQgPAVABQAWACANARQAOASgEAUQgEAWgSAMQgNAIgOAAQgFAAgHgCg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AgNA6QgNgOgBgTIgIgBQgVgGgKgTQgGgKAAgMQABgWAPgOQAQgPAWABQAVACANARQALAOAAAQIADAAQAWAEAMASQANARgGAVQgFAVgTALQgMAGgNAAQgVAAgOgQg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AAKA6QgJgKgCgLQgIANgOAIQgKAGgNAAQgVgBgPgPQgPgQACgWQACgVARgNQANgLAQAAQADgOAMgKQAQgPAUABQAWACAOARQAKAOAAAQIAEAAQAWAEAMASQAMARgFAVQgFAVgUALQgLAGgNAAQgWAAgOgQg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AgRBWQgVgGgKgTQgDgGgCgGQgRgCgMgNQgPgQACgVQACgWARgNQANgLAQAAQADgOAMgKQAQgPAUABQAWACAOARQAKAOAAAQIAEAAQAWAEAMASQAMARgFAVQgFAVgUALQgLAGgNAAIgGAAQgGAMgMAIQgNAIgMAAQgHAAgHgCg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AhABlQgVgGgKgTQgGgLAAgMQABgWAPgOIAEgDQgKgOABgSQACgWARgNQANgLAQAAQAEgOALgKQAQgPAUABQAWACAOARQAKAOABAQIADAAQAWAEAMASQAMASgFAUQgFAVgUALQgLAGgNAAIgGAAQgGAMgMAIQgQAKgQgCQgGANgNAJQgMAIgOAAQgHAAgHgCg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AAJB0QgVgEgMgSIgGgKQgQAHgSgFQgVgGgKgTQgGgLAAgMQABgVAPgPIAEgCQgKgOABgSQACgWARgOQANgKAQAAQAEgOALgLQAQgPAUACQAWACAOARQAKANABAQIADABQAWADAMASQAMASgFAVQgFAVgUAKQgKAGgLABQAGAFAEAHQAKATgGAVQgHAUgUAKQgKAEgKAAIgMgBg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AgBB0QgVgEgNgSIgGgKQgQAHgRgFQgVgGgLgTQgFgLAAgMQAAgVAQgPIADgCQgKgOACgSQABgWASgOQANgKAQAAQADgOALgLQAQgPAWACQAVACANARQALANAAAQIADABQAWADAMASQANASgGAVIgBAEQAJAEAHAKQAMASgFAVQgFAVgTALQgMAHgOgBIgGAAQgHAQgRAJQgLAEgKAAIgLgBg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_1_graphics_59,x:170.386,y:253.6072}).wait(1).to({graphics:mask_1_graphics_60,x:172.684,y:256.0432}).wait(1).to({graphics:mask_1_graphics_61,x:170.3473,y:256.0432}).wait(1).to({graphics:mask_1_graphics_62,x:170.3473,y:257.4432}).wait(1).to({graphics:mask_1_graphics_63,x:169.809,y:258.9182}).wait(1).to({graphics:mask_1_graphics_64,x:169.809,y:260.3659}).wait(1).to({graphics:mask_1_graphics_65,x:170.8864,y:260.3659}).wait(15));

	// 耳環
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D60B2F").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");
	this.shape.setTransform(170.825,260.625);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(59).to({_off:false},0).wait(21));

	// 畫手
	this.instance_3 = new lib.ClipGroup();
	this.instance_3.setTransform(339.15,365.3,1,1,0,0,0,306.4,213.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(55).to({_off:false},0).wait(1).to({x:365.25,y:374},0).wait(1).to({x:377.35,y:370.5},0).wait(1).to({x:381,y:369.5},0).to({_off:true},1).wait(21));

	// 遮色片10 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_55 = new cjs.Graphics().p("AgTBtQgUgEgSgLQgLgHgJgJQgPgPgIgTQgJgUAAgVQgBgUAHgUQAHgUAOgPQAOgQATgKQATgJAVgCQAUgCAUAGQAVAGAQANQARANAKATQALASADAVQADAUgFAUQgFAVgMARQgMASgSALQgRAMgVAEQgMADgKAAQgJAAgKgCg");
	var mask_2_graphics_56 = new cjs.Graphics().p("AA3CYIgNgCIgHgBQgQgFgOgJQgNgJgLgNQgLgNgGgPQgEgKgCgKIgEABQgVAEgVgDQgUgEgSgLQgLgGgJgKQgPgPgIgTQgJgTAAgUQgBgVAHgVQAHgTAOgQQAOgQATgKQATgJAVgCQAVgCAUAGQAVAHAQANQAQAMAKATQAJAPADAQIACgBIAGgBIAHgBIAHgBIAHgBIACAAQAXAAAWAJQATAJAPAQQANANAIARQAIASACAUQABATgFASQgEAOgHAMIgEAEIgEAGIgEAFIgEAGIgBAAIgGAGIgGAEIgGAFIgGAEIgDACIgGADIgHADIgGACIgGADIgCABQgGABgHABIgNABIgMAAg");
	var mask_2_graphics_57 = new cjs.Graphics().p("AgWCYIgNgCIgGgBQgRgFgOgJQgOgJgKgNQgLgNgHgPQgEgKgCgKIgEABQgUAEgVgDQgVgEgSgLQgLgGgJgKQgOgPgJgTQgIgTgBgUQAAgVAHgVQAHgTAOgQQAOgQATgKQASgJAVgCQAWgCAUAGQAUAHARANQAQAMALATQAIAPAEAQIABgBIAHgBIAHgBIAHgBIAHgBIABAAQAXAAAVAJQASAIANAOQANgOARgJQATgJAVgCQAVgCAUAGQAVAGAQANQARANAKATQALASADAUQADAVgFAUQgFAUgMASQgMARgSAMQgRAMgVAEQgVAEgVgEQgUgEgSgLQgKgGgJgHIgBAAIgFAGIgGAEIgGAFIgHAEIgDACIgGADIgGADIgGACIgGADIgCABQgGABgHABIgMABIgNAAg");
	var mask_2_graphics_58 = new cjs.Graphics().p("AhSCYIgMgCIgHgBQgQgFgOgJQgPgJgKgNQgLgNgHgPQgDgKgCgKIgEABQgVAEgVgDQgUgEgTgLQgKgGgJgKQgPgPgJgTQgIgTgBgUQAAgVAHgVQAHgTAOgQQAOgQATgKQASgJAWgCQAVgCAUAGQAVAHAQANQAQAMALATQAIAPAEAQIACgBIAGgBIAHgBIAHgBIAHgBIACAAQAXAAAWAJQARAIANAOQANgOARgJQASgJAVgCQASgCARAEIAGgHQAMgQARgLQANgHAPgFIAFAAIAFgBIAGAAIAEgBIAGgBIADAAQAUAAASAGQATAGAQANQAPAOAKARQAJARAEATQADAVgEATQgFAWgMASQgLAPgOALQgQALgTAGQgVAFgVgBIgPgDIgDADQgMARgRAMQgSAMgVAEQgUAEgVgEQgVgEgSgLQgKgGgIgHIgBAAIgGAGIgFAEIgGAFIgGAEIgDACIgGADIgHADIgGACIgGADIgCABQgGABgHABIgNABIgNAAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(55).to({graphics:mask_2_graphics_55,x:224.2546,y:269.4516}).wait(1).to({graphics:mask_2_graphics_56,x:231.1567,y:273.65}).wait(1).to({graphics:mask_2_graphics_57,x:238.9296,y:273.65}).wait(1).to({graphics:mask_2_graphics_58,x:244.8999,y:273.65}).wait(22));

	// 下嘴唇
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D60B2F").s().p("AhhAhQgWgWgpggIgsglQgIgHAAgHIBoAMQAWAFAxAOQAvAOAQACQAYAEApgDIA7gGIA9AIIAAABQAEAEgHAIIgWAUIgkAmQgdAYggAAQiSAAgogog");
	this.shape_1.setTransform(243.4083,274.9);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(55).to({_off:false},0).wait(25));

	// 畫手
	this.instance_4 = new lib.ClipGroup();
	this.instance_4.setTransform(340.1,363.6,1,1,0,0,0,306.4,213.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(52).to({_off:false},0).wait(1).to({x:368.6,y:359.1},0).wait(1).to({x:381.5,y:369.9},0).to({_off:true},1).wait(25));

	// 遮色片09 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_52 = new cjs.Graphics().p("AgCBuQgVAAgUgIQgTgHgPgPQgQgPgJgTQgIgTgCgVQgBgUAHgUQAHgUAOgQQAOgQASgKQATgKAVgCQAUgCAUAEQAUAEASAMQASAMALASQAMARAFAVQAEAUgDAUQgEAVgLASQgLASgRANQgQANgVAFQgPAEgQAAIgDAAg");
	var mask_3_graphics_53 = new cjs.Graphics().p("AhRB8QgVAAgUgIQgUgIgPgPQgPgOgJgTQgJgUgBgVQgBgUAHgUQAHgUANgQQAOgQATgKQATgJAVgDQAUgCAUAFQAVAEARAMIAEADIAJgMQANgQASgKQATgJAVgDQAVgCAUAGQAVAFAQANQARANALASQALASAEAVQADAVgEATQgFAVgMARQgMASgRAMQgSAMgUAEQgMADgNAAQgVAAgUgIQgNgFgLgJQgLAQgOAMQgRAMgUAGQgQAEgQAAIgDAAg");
	var mask_3_graphics_54 = new cjs.Graphics().p("AieB8QgVAAgUgIQgUgIgPgPQgPgOgJgTQgJgUgBgVQgBgUAHgUQAHgUANgQQAOgQATgKQATgJAVgDQAUgCAUAFQAVAEARAMIAEADIAJgMQAOgQASgKQATgJAVgDQAUgCAUAGQAVAFAQANQAIAGAHAHIAOgIQASgKAVgCQAVgDAUAEQAJABAJAFIARAHQASALANAQQAOARAGAVQAGAVgDAVQgDAVgKATQgJARgQANQgHAHgJAFIgGACIgGADIgGADIgGACIgCABIgIACIgIABIgIABIgJAAIgDAAQgVAAgUgIQgTgHgQgPIgGgGIgEADQgSAMgUAEQgMADgNAAQgUAAgUgIQgNgFgLgJQgLAQgPAMQgRAMgUAGQgQAEgQAAIgDAAg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(52).to({graphics:mask_3_graphics_52,x:225.3953,y:266.6467}).wait(1).to({graphics:mask_3_graphics_53,x:233.3203,y:265.2508}).wait(1).to({graphics:mask_3_graphics_54,x:241.0438,y:265.2508}).wait(26));

	// 上嘴唇
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D60B2F").s().p("ACNA9IANgBQgvgwgNAAQglAFgVAAQgLgBgQgFQgPgFgLAAQgTAAhiAUQgsgCgigGQABgGAHgCQAxgVAmgUQBKgnAkAAQAFAAATAIQAUAIAJAAQADgBAXgHQASgHARAIQAZAKAiAmQAmAqAHAoIACACg");
	this.shape_2.setTransform(243.4,265.8);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(52).to({_off:false},0).wait(28));

	// 畫手
	this.instance_5 = new lib.ClipGroup();
	this.instance_5.setTransform(424.9,452.5,1,1,0,0,0,306.4,213.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(47).to({_off:false},0).wait(1).to({x:357.45,y:476.85},0).wait(1).to({x:319.2,y:492.85},0).wait(1).to({x:275.4,y:497.35},0).wait(1).to({x:268.1},0).to({_off:true},1).wait(28));

	// 遮色片08 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_47 = new cjs.Graphics().p("AgiEtQhSgLhCgzQgNgLgMgMQgjgggXgqQgXgqgJgvQgJgwAGguQAHgwAUgrQAVgsAigiIADgEIALgIIAKgIIAKgIIAKgHIAKgIIAKgIQBPguBZAFQBVAEBFAvQA9AqAkBAQAoBJgCBRQgBBUgtBGQgxBOhUAlQg6Aag9AAQgTAAgUgDg");
	var mask_4_graphics_48 = new cjs.Graphics().p("Ai9F8QhTgBhIgrQhHgrgnhJQgnhKAFhTQAFhVAyhGQAwhFBMghQBPgiBVAMQAdAEAbAJIACgGQAVgrAigjIADgEIALgIIAKgHIAJgIIAKgIIAKgIIAKgIQBPguBaAFQBVAEBFAvQA9AqAkBBQAoBIgCBTQgBBSgtBGQgxBPhUAlQhNAhhSgLQgigEgfgMQgUApggAiQg3A9hQAYQgpAMgsAAIgDAAg");
	var mask_4_graphics_49 = new cjs.Graphics().p("AoOG5QhHgrgnhKQgnhKAFhTQAFhWAxhGQAwhDBNghQBNgiBTALQATADARAEQAOgxAegqQAwhFBNghQBOgiBVAMQAdAEAaAIIADgFQAVgrAhgjIAEgEIAKgIIAKgHIAKgIIAKgIIALgIIAKgIQBOguBaAFQBVAEBGAvQA9AqAkBBQAnBIgBBTQgCBTgsBGQgxBOhVAlQhMAhhTgLQgigEgfgMQgTApggAiQg5A9hQAYQgrAMgsAAQgnAAgkgKQgTBEgyA2Qg4A9hQAXQgpAMgrAAQhUAAhHgrg");
	var mask_4_graphics_50 = new cjs.Graphics().p("AqiIMQhRgXg5g8Qg8g/gQhUQgRhUAehQQAehQBEg0QBDg1BVgLQBUgKBNAhQAdANAaASQAHgNAKgOQAwhEBMghQBNgiBUALQASADASAEQANgwAfgrQAvhFBMghQBPgiBVAMQAdAEAbAJIACgGQAVgrAigjIADgEIALgIIAKgHIAKgIIAKgIIAKgIIAKgIQBPguBaAFQBVAEBFAvQA9AqAkBBQAoBIgCBTQgBBTgtBGQgxBOhUAlQhNAhhSgLQgigEgfgMQgUApggAiQg4A9hQAYQgrAMgtAAQgnAAglgKQgTBFgxA1Qg5A9hPAXQgpAMgrAAQhTAAhHgrIgUgNQgoBHhGApQhIAshTACIgHAAQgpAAgngLg");
	var mask_4_graphics_51 = new cjs.Graphics().p("AntIMQg5gQgtgjQhFAyhVAGQhTAHhKgmQgrgVgigiQg9g7gWhRQgVhQAXhQQAXhQA9g5QA9g3BRgRQBSgSBPAcQAxASAnAfQBBgwBRgLQBTgKBNAhQAeANAZASQAIgNAJgOQAwhEBNghQBNgiBSALQATADARAEQAOgwAegrQAwhFBNghQBOgiBWAMQAdAEAaAJIADgGQAVgrAhgjIAEgEIAKgIIAKgHIAKgIIAKgIIALgIIAKgIQBOguBaAFQBVAEBGAvQA9AqAkBBQAnBIgBBTQgCBTgsBGQgxBOhVAlQhMAhhTgLQgigEgfgMQgTApggAiQg5A9hQAYQgrAMgtAAQgnAAgkgKQgTBFgyA1Qg4A9hQAXQgpAMgrAAQhTAAhHgrIgUgNQgnBHhGApQhIAshUACIgHAAQgoAAgogLg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(47).to({graphics:mask_4_graphics_47,x:304.6665,y:353.2614}).wait(1).to({graphics:mask_4_graphics_48,x:286.0542,y:360.9015}).wait(1).to({graphics:mask_4_graphics_49,x:267.8243,y:371.3255}).wait(1).to({graphics:mask_4_graphics_50,x:245.4735,y:376.4045}).wait(1).to({graphics:mask_4_graphics_51,x:227.3084,y:376.4045}).wait(29));

	// 衣領
	this.instance_6 = new lib.CachedBmp_2();
	this.instance_6.setTransform(153.35,351.75,0.5,0.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(47).to({_off:false},0).wait(33));

	// 畫手
	this.instance_7 = new lib.ClipGroup();
	this.instance_7.setTransform(398.5,380.25,1,1,0,0,0,306.4,213.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(42).to({_off:false},0).wait(1).to({x:427.7,y:442.15},0).wait(1).to({x:475,y:433.1},0).wait(1).to({x:516.7,y:456.05},0).wait(1).to({x:536.9,y:495.95},0).to({_off:true},1).wait(33));

	// 遮色片07 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_42 = new cjs.Graphics().p("AhPEhQgpgLgkgWQgegTgZgZQgdgdgUgjQgVglgJgpQgKgoABgpQACgoANgnQAMgpAYgjQAXgiAfgbQAfgaAlgSQAmgSAqgGQAogHAoAFQAqAFAnAQQAnAQAhAaQAgAaAYAhQAZAiAOAoQAOAmADApQAEAogJApQgIApgTAmQgTAkgcAeQgcAegjAWQgkAWgoALQgoALgpAAQgoAAgngLg");
	var mask_5_graphics_43 = new cjs.Graphics().p("AhiIDQgUgIgTgKIgKgIIgKgIIgKgIIgKgIIgKgIIgKgHIgEgEIgEgEIgDgEIgEgEIgBAAIgBgBIAAAAIgBAAIgBgBIgBAAIgBgBIgBgBIgBAAQg3hOgMhdQgMhZAohRQAagyAogkQgRgMgPgPQgdgdgUgkQgVglgJgpQgKgoABgpQACgpANgnQAMgoAYgjQAXgiAfgbQAfgbAlgRQAmgSAqgHQAogGAoAEQAqAFAnAQQAnAQAhAbQAgAZAYAiQAZAiAOAoQAOAmADApQAEApgJApQgIApgTAlQgTAlgcAeIgSASQA2AoAhA9QAlBGACBRQgBBig6BPQgmA0g3AfQg8AihEAFIgUABQg5AAg3gXg");
	var mask_5_graphics_44 = new cjs.Graphics().p("ABxIyQhAgWgxgxQgWgXgRgbIgYAPQg8AihEAEQhFAFhAgaQgUgIgTgLIgKgIIgKgIIgKgHIgKgIIgKgIIgKgIIgEgEIgEgEIgDgEIgEgDIgBgBIgBAAIAAgBIgBAAIgBAAIgBgBIgBAAIgBgBIgBgBQg3hNgMheQgMhZAohQQAZgxApglQgRgMgPgQQgdgdgUgjQgVglgJgpQgKgoABgqQACgoANgnQAMgpAYgjQAXgiAfgbQAfgaAlgSQAmgSAqgGQAogHApAFQAqAFAnAQQAnAQAhAaQAgAaAXAhQAZAiAOAoQAOAmADApQAEApgJApQgIApgTAmQgTAkgbAeIgSATQAwAlAgA0QA1gkBCgPQBRgSBQAWQBQAWA5A9QA6A/ARBUQAPBSgdBPQgdBOhCAzQhCA0hTAQQgfAGgeAAQg0AAgzgSg");
	var mask_5_graphics_45 = new cjs.Graphics().p("AiAIyQhBgWgwgxQgYgXgRgbIgYAPQg7AihFAEQhFAFg/gaQgVgIgSgLIgKgIIgKgIIgKgHIgLgIIgKgIIgKgIIgEgEIgDgEIgEgEIgEgDIAAgBIgBAAIgBgBIgBAAIgBAAIgBgBIAAAAIgBgBIgBgBQg3hNgNheQgLhZAohQQAZgxApglQgRgMgPgQQgdgdgUgjQgVglgKgpQgKgoACgqQACgoAMgnQANgpAXgjQAXgiAfgbQAfgaAlgSQAmgSAqgGQApgHApAFQApAFAoAQQAnAQAhAaQAfAaAZAhQAYAiAOAoQAPAmADApQADApgIApQgIApgUAmQgTAkgbAeIgTATQAyAlAfA0QA1gkBCgPQBRgSBQAWQBQAWA4A9QAMANALAOQAug8BHgfQBNggBTAJQBVALBEA0QBBA0AdBOQAdBOgQBSQgQBVg6A/Qg5A9hQAXQgrANgugBQhTAAhHgrQg1gggjgwQgWAbgdAXQhCA0hUAQQgfAGgdAAQg0AAgygSg");
	var mask_5_graphics_46 = new cjs.Graphics().p("AHyKzQglgVgegeQg6g7gUhRQgJgigBgjIgaABQhTgBhIgrQg1gggjgwQgWAcgdAWQhBA0hTAQQhUAQhQgbQhAgXgxgwQgXgYgRgbIgYAPQg8AihEAFQhFAEhAgaQgUgIgTgKIgKgIIgKgIIgKgIIgKgIIgKgIIgKgHIgEgEIgEgEIgDgEIgEgEIgBAAIgBgBIAAAAIgBAAIgBgBIgBAAIgBgBIgBgBIgBAAQg3hOgMhdQgMhYAohRQAZgyApgkQgRgNgPgPQgdgdgUgkQgVglgJgpQgKgoABgpQACgpANgnQAMgoAYgjQAXgiAfgbQAfgbAlgRQAmgSAqgHQAogGApAEQAqAFAnAQQAnAQAhAbQAgAZAYAiQAZAiAOAoQAOAmADApQAEApgJApQgIApgTAlQgTAlgcAeIgSASQAxAlAgA2QA1gmBCgPQBRgSBQAXQBPAWA5A9QAMAOAKAOQAvg9BHgfQBNghBSAKQBWAKBDA2QBCAzAdBNQARAwABAyQBDgFBAAZQBNAeAzBDQA0BEAJBWQAIBVglBNQgkBLhGAuQhFAthTADIgOABQhMAAhDglg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(42).to({graphics:mask_5_graphics_42,x:279.9913,y:286.633}).wait(1).to({graphics:mask_5_graphics_43,x:281.3652,y:310.3662}).wait(1).to({graphics:mask_5_graphics_44,x:303.9852,y:314.6022}).wait(1).to({graphics:mask_5_graphics_45,x:328.2497,y:314.6022}).wait(1).to({graphics:mask_5_graphics_46,x:344.2871,y:329.372}).wait(34));

	// 右肩
	this.instance_8 = new lib.CachedBmp_3();
	this.instance_8.setTransform(270.45,282.15,0.5,0.5);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(42).to({_off:false},0).wait(38));

	// 畫手
	this.instance_9 = new lib.ClipGroup();
	this.instance_9.setTransform(409.95,352.5,1,1,0,0,0,306.4,213.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(37).to({_off:false},0).wait(1).to({x:360.95,y:408.15},0).wait(1).to({x:323.05,y:390.45},0).wait(1).to({x:300.1,y:357.8},0).wait(1).to({x:295.9,y:344.25},0).to({_off:true},1).wait(38));

	// 遮色片06 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_37 = new cjs.Graphics().p("AiQEHQglgVgegeQg6g7gUhQQgVhQAZhQQAZhQA+g3QBAg5BVgPQBRgOBOAeQBNAfAzBCQA0BEAIBWQAIBSgkBLQgkBLhGAuQhFAthTADIgNAAQhMAAhDgkg");
	var mask_6_graphics_38 = new cjs.Graphics().p("AhoHnQhTAAhHgrQhIgrgmhKQgnhKAEhTQAFhWAyhGQAwhDBNghQAVgJAVgGIgDgNQgVhRAZhQQAZhQA+g3QBAg5BUgPQBSgOBOAeQBNAfAzBCQA0BEAIBWQAIBTgkBLQgkBKhGAuQggAUgiAMQAUBAgIBEQgMBVg3BCQg1BAhOAcQgzASg2AAIgQgBg");
	var mask_6_graphics_39 = new cjs.Graphics().p("AkdIfQhTAAhIgrQhHgrgnhKQgnhKAFhTQAFhWAxhGQAxhEBMggQBOgiBVALQAlAFAiAOIAFgGQAwhFBMggQAVgJAVgGIgDgOQgUhRAYhQQAYhPA+g4QBBg5BUgOQBTgPBNAfQBOAeAyBDQA1BEAIBWQAIBTgkBLQgkBLhGAsQggAVgjAMQAVA/gJBEQgLBVg3BDQg1BAhPAbQg7AVg+gDQg7gBgzgVQgNATgQASQg5A9hQAXQgpAMgqAAIgDAAg");
	var mask_6_graphics_40 = new cjs.Graphics().p("AhnIfQhTAAhHgrQhIgrgnhKQgNgagIgaQghAIgiACQhUADhJgoQglgUgegeQg6g7gUhRQgVhRAZhPQAZhPA+g4QBAg5BVgOQBSgPBOAfQBNAeAzBDQAhArAQAzQA7gQA+AIQAmAFAhAOIAEgGQAwhFBNggQAVgJAVgGIgDgOQgVhRAZhQQAZhPA+g4QBAg5BVgOQBSgPBOAfQBNAeAzBDQA0BEAIBWQAIBTgkBLQgkBLhGAsQggAVgiAMQAVA/gJBEQgMBVg3BDQg1BAhOAbQg7AVg/gDQg6gBg1gVQgNATgQASQg4A9hPAXQgpAMgqAAIgEAAg");
	var mask_6_graphics_41 = new cjs.Graphics().p("AgNIvQhTAAhHgrQhIgrgnhKQgNgZgIgbQghAJgiABQhUADhJgoQglgUgegeQg6g7gUhRQgPg4AIg3QgQgHgQgJQgSgJgRgOQgQgNgPgPQgQgRgOgTQgNgTgJgWIgRgqIgFgMQgVhQAVhPQAPg2AhgtQAdgnAngbQA0glA+gNQBDgNBCARIAGABIARAHIARAHIASAHIALAGIAJADQBVAyAqBZQAeBBgDBHIgCAdQBEAeAuA9QAhArAQAzQA7gQA9AIQAmAFAiAOIAEgGQAwhFBNggQAVgJAVgGIgDgOQgVhRAZhQQAZhPA+g4QBAg5BVgOQBSgPBOAfQBNAeAzBDQA0BEAIBWQAIBTgkBLQgkBLhGAsQggAVgiAMQAVBAgJBDQgMBVg3BDQg1BAhOAbQg7AVg/gDQg6AAg1gWQgNATgQASQg4A9hQAXQgpAMgpAAIgEAAg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(37).to({graphics:mask_6_graphics_37,x:291.1359,y:258.4305}).wait(1).to({graphics:mask_6_graphics_38,x:280.6495,y:277.2355}).wait(1).to({graphics:mask_6_graphics_39,x:262.4992,y:282.7924}).wait(1).to({graphics:mask_6_graphics_40,x:244.2359,y:282.7924}).wait(1).to({graphics:mask_6_graphics_41,x:235.2352,y:281.1645}).wait(39));

	// 下巴
	this.instance_10 = new lib.CachedBmp_4();
	this.instance_10.setTransform(179.55,246.75,0.5,0.5);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(37).to({_off:false},0).wait(43));

	// 畫手
	this.instance_11 = new lib.ClipGroup();
	this.instance_11.setTransform(298.8,367.1,1,1,0,0,0,306.4,213.8);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(32).to({_off:false},0).wait(1).to({x:304.35,y:441.85},0).wait(1).to({x:279.65,y:483.9},0).wait(1).to({x:237.6,y:500.95},0).wait(1).to({x:214.3,y:527.05},0).to({_off:true},1).wait(43));

	// 遮色片05 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_32 = new cjs.Graphics().p("AiQEHQglgVgegeQg6g7gUhQQgVhQAZhQQAZhQA+g3QBAg5BVgPQBRgOBOAeQBNAfAzBCQA0BEAIBWQAIBSgkBLQgkBLhGAuQhFAthTADIgNAAQhMAAhDgkg");
	var mask_7_graphics_33 = new cjs.Graphics().p("AgSH6Qg+gIg2gfQhHgsgrhIQgqhIAChTQABhTAthGQAKgRAMgPIgIgHQg7g6gUhRQgUhRAZhQQAYhPA+g4QBBg5BUgOQBSgPBNAfQBOAeAyBDQA1BEAIBWQAIBTgkBLQgQAggWAbQAxAqAaA9QAWA0AEA6IABANQAABFgeA9QgaA3gtAoQgsAmg3AUQgxARgyAAQgSAAgSgCg");
	var mask_7_graphics_34 = new cjs.Graphics().p("Ah4LYQgxgXgmgmQg7g7gUhRQgUhSAWhRQAVhRA8g5QARgRASgMQgwgnggg1QgqhIAChSQABhUAthGQAKgQAMgPIgIgIQg7g7gUhQQgUhRAZhQQAYhQA+g3QBBg5BUgPQBSgOBNAeQBOAfAyBCQA1BEAIBWQAIBTgkBLQgQAggWAbQAxArAaA+QAWA0AEA5IABAOQAABDgeA+QgaA2gtAoQgNALgNAJQAWASATAWQA4BBANBVQANBUgdBPQgcBPhCAzQhDA2hWAKQgRACgSAAQg/AAg7gbg");
	var mask_7_graphics_35 = new cjs.Graphics().p("AjeOIQgcgGgbgLQg4gVgsgpQgsgpgZg2QgZg2gCg8QgDg7AVg4QAVg4AogsIAIgIIAKgIIAKgIIALgIIAKgHIAKgIIAKgIQBJgqBVgBIAeACQgCgxANgxQAVhQA8g6QARgQASgNQgwgmggg1QgqhIAChTQABhTAthGQAKgRAMgOIgIgIQg7g7gUhRQgUhRAZhQQAYhPA+g4QBAg5BUgOQBTgPBNAfQBOAeAyBDQA1BEAIBWQAIBTgkBLQgQAggWAbQAwArAbA9QAWA0AEA6IABANQAABFgeA9QgaA3gtAnQgNALgNAJQAWASATAWQA4BBANBVQANBUgdBPQgcBOhCA0QhDA2hWAJQgbADgagBIAAANQgBBGghA/QgSAjgZAeQgwA5hGAaQg0ATg1AAQggAAgggHg");
	var mask_7_graphics_36 = new cjs.Graphics().p("AoPO/QgogVggggQg7g7gUhQQgUhRAZhQQAZhRA+g4QBAg6BUgQQBSgQBPAdQARAGARAJIABgFQAVg4AogrIAIgJIAKgHIAKgIIALgIIAKgIIAKgIIAKgIQBJgqBUAAIAeABQgCgxANgwQAVhRA8g4QARgRASgMQgwgnggg1QgqhIAChTQABhUAthGQAKgQAMgPIgIgIQg7g7gUhQQgUhRAZhQQAYhQA+g3QBBg5BUgPQBTgOBNAeQBOAfAyBCQA1BEAIBWQAIBTgkBLQgQAggWAbQAxArAaA+QAWA0AEA5IABAOQAABEgeA+QgaA2gtAoQgNALgNAJQAWASATAVQA4BBANBVQANBUgdBPQgcBPhCAzQhDA2hWAKQgbADgagCIAAANQgBBGghA/QgSAjgZAfQgwA5hHAZQhTAfhVgTQgcgGgbgLQgSgHgRgJIgLAZQgjBNhFAxQhGAxhWAFIgTABQhJAAhBgjg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(32).to({graphics:mask_7_graphics_32,x:181.3859,y:273.0305}).wait(1).to({graphics:mask_7_graphics_33,x:183.1132,y:293.8793}).wait(1).to({graphics:mask_7_graphics_34,x:183.1132,y:318.5439}).wait(1).to({graphics:mask_7_graphics_35,x:167.3367,y:334.1656}).wait(1).to({graphics:mask_7_graphics_36,x:146.0132,y:342.4448}).wait(44));

	// 左肩
	this.instance_12 = new lib.CachedBmp_5();
	this.instance_12.setTransform(96.75,268.65,0.5,0.5);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(32).to({_off:false},0).wait(48));

	// 畫手
	this.instance_13 = new lib.ClipGroup();
	this.instance_13.setTransform(306.4,256.65,1,1,0,0,0,306.4,213.8);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(25).to({_off:false},0).wait(1).to({x:227.1,y:287.95},0).wait(1).to({y:338},0).wait(1).to({x:236.15,y:384.35},0).wait(1).to({x:265.35,y:426.05},0).wait(1).to({x:271.25,y:471.95},0).wait(1).to({x:282.05,y:487.6},0).to({_off:true},1).wait(48));

	// 遮色片04 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_25 = new cjs.Graphics().p("AhJElIgHgCQgUgFgTgJQgUgIgSgLQgSgMgQgNQgQgNgOgQQgPgPgMgSIgLgSIgFgMIgFgMIgFgMIgFgLIgFgMIgFgMQgahhAlhfQAdhLBAgzQA6guBIgOQBRgPBPAdQBQAeA1BFQAyBCALBSQAJBFgbBBIAEgJIACgFIgCAGIgEAJIgBACIABgDIgGANIACgEIABgCIgBADIgEAJIgBADIgDAGIgBACIgCAHIgCADIgBADIgBACIAAABIgEAIQgTAigcAbQgbAbghAUQgmAWgqAKQgkAJgjAAQglAAgkgJg");
	var mask_8_graphics_26 = new cjs.Graphics().p("Al9FNQglgVgegdQg6g8gUhQQgVhSAZhPQAZhQA+g3QBAg5BVgPQBSgOBOAeQArARAjAdIAFgOQAehMA+gyQA6guBJgOQBSgQBOAdQBRAfA0BEQAzBCAKBSQAJBHgbBAIAEgJIADgGIgDAGIgEAJIgBACIABgCIgFANIACgEIABgDIgBADIgEAJIgCADIgCAGIgBACIgDAHIgBADIgCADIAAACIgBABIgDAJQgUAhgbAbQgcAcghATQglAWgqAKQgkAJglAAQglAAgkgJIgGgBQgVgGgTgIQgTgJgSgLQgRgKgPgMQgFAQgIAQQgjBLhGAuQhFAthTAEIgMAAQhNAAhEglg");
	var mask_8_graphics_27 = new cjs.Graphics().p("AoiIIQgogVggggQg6g7gUhRQgVhSAYhSQAXhQA9g5QA/g5BUgQQA1gLAzAJQgRhOAYhMQAYhQA+g3QBBg5BUgPQBTgOBMAeQAsARAjAdIAFgOQAdhMBAgyQA6guBIgOQBSgQBPAdQBQAfA1BEQAyBCALBSQAJBHgbBBIAEgJIACgGIgCAGIgEAJIgBACIABgCIgGANIACgEIABgDIgBADIgEAJIgBADIgDAGIgBACIgCAHIgCADIgBADIgBACIAAABIgEAJQgTAhgcAbQgbAcghASQgmAWgqAKQgkAJgkAAQglAAgkgJIgHgBQgUgGgTgIQgUgJgSgLQgQgJgPgMQgGAQgHAPQgkBLhGAuQhGAthSAEQgeABgdgFQADAPACAQQAKBVgiBOQggBMhFAxQhGAxhWAFIgRABQhKAAhCgjg");
	var mask_8_graphics_28 = new cjs.Graphics().p("AjtL9QhQgXg7g7Qg8g9gXhSQgWhRAXhQQAHgZALgWQg3gGgzgbQgogVggggQg6g7gUhRQgVhSAYhRQAXhQA9g5QA/g6BUgQQA1gLAzAJQgRhOAYhMQAYhQA+g3QBBg5BUgPQBTgOBMAeQAsARAjAdIAFgOQAdhMBAgyQA6guBIgOQBSgQBPAdQBQAfA1BEQAyBCALBSQAJBHgbBBIAEgJIACgGIgCAGIgEAJIgBACIABgCIgGANIACgEIABgDIgBADIgEAJIgBADIgDAGIgBACIgCAHIgCADIgBADIgBACIAAABIgEAJQgTAhgcAbQgbAcghATQgmAWgqAKQgkAJgkAAQglAAgkgJIgHgBQgUgGgTgIQgUgJgSgLQgQgKgPgMQgGAQgHAQQgkBLhGAuQhGAthSAEQgeABgdgFQADAPACAQQAKBUgiBOIgFAKQAnAEAlAPQBOAeA0BBQARAWAPAZIAFAMIAFALIAFAMIAFAMIAFAMIAFAMQAUBJgRBJQgNA7gjAxQgiAwgyAfQg4AkhDAJQgSACgSAAQgpAAgngLg");
	var mask_8_graphics_29 = new cjs.Graphics().p("Ak7PoQglgVgegdQg6g8gUhQQgVhSAZhQQAZhQA+g3QAbgYAegRQgjgUgdgeQg8g9gXhSQgWhRAXhQQAHgZALgWQg3gGgzgbQgogVgggfQg6g7gUhRQgVhSAYhSQAXhQA9g5QA/g6BUgQQA1gLAzAJQgRhOAYhMQAYhQA+g3QBBg5BUgPQBTgOBMAeQAsARAjAdIAFgOQAdhMBAgyQA6guBIgOQBSgQBPAdQBQAfA1BEQAyBCALBSQAJBHgbBBIAEgJIACgGIgCAGIgEAJIgBACIABgCIgGANIACgEIABgDIgBADIgEAJIgBADIgDAGIgBACIgCAHIgCADIgBADIgBACIAAABIgEAJQgTAhgcAbQgbAcghATQgmAWgqAKQgkAJgkAAQglAAgkgJIgHgBQgUgGgTgIQgUgJgSgLQgQgKgPgMQgGAQgHAQQgkBLhGAuQhGAthSAEQgeABgdgFQADAPACAQQAKBVgiBOIgFAKQAnAEAlAPQBOAeA0BAQARAWAPAZIAFAMIAFALIAFAMIAFAMIAFAMIAFAMQAUBJgRBJQgNA7gjAxQgiAwgyAfIgSALQAwAdAjAuQA0BEAIBWQAIBUgkBLQgkBLhFAuQhFAthTAEIgMAAQhNAAhEglg");
	var mask_8_graphics_30 = new cjs.Graphics().p("AibSqQglgVgegeQg6g7gUhQQgVhRAZhQIAIgYIgbgNQglgVgegdQg6g8gUhQQgVhSAZhQQAZhQA+g3QAbgYAegRQgjgUgdgeQg8g9gXhSQgWhRAXhPQAHgZALgWQg3gGgzgbQgogVggggQg6g7gUhRQgVhSAYhSQAXhQA9g5QA/g6BUgQQA1gKAzAIQgRhOAYhMQAYhQA+g3QBBg5BUgPQBTgOBMAeQAsARAjAdIAFgOQAdhMBAgyQA6guBIgOQBSgQBPAdQBQAfA1BEQAyBCALBSQAJBHgbBBIAEgJIACgGIgCAGIgEAJIgBADIABgDIgGANIACgEIABgCIgBACIgEAJIgBAEIgDAFIgBACIgCAHIgCAEIgBACIgBADIAAAAIgEAJQgTAhgcAbQgbAcghATQgmAWgqAKQgkAJgkAAQglAAgkgJIgHgBQgUgGgTgIQgUgJgSgLQgQgKgPgMQgGAQgHAQQgkBLhGAuQhGAthSAEQgeABgdgFQADAQACAPQAKBVgiBOIgFAKQAnAEAlAPQBOAeA0BBQARAWAPAZIAFAMIAFALIAFAMIAFAMIAFAMIAFAMQAUBIgRBJQgNA7gjAxQgiAwgyAfIgSALQAwAdAjAuQA0BEAIBWQAHBKgbBEQBIAeAwA/QA0BEAIBWQAIBTgkBLQgkBLhGAuQhFAthTADIgNABQhMAAhDglg");
	var mask_8_graphics_31 = new cjs.Graphics().p("AAwVTQgpgUgfgfQg+g5gYhRQgShAAJg/QgSgHgSgKQglgUgegeQg6g7gUhRQgVhRAZhQIAIgYIgbgNQglgVgegdQg6g7gUhRQgVhRAZhRQAZhPA+g4QAbgYAegQQgjgVgdgdQg8g+gXhRQgWhQAXhQQAHgZALgXQg3gGgzgbQgogUggggQg6g7gUhRQgVhTAYhSQAXhQA9g4QA/g7BUgQQA1gKAzAIQgRhNAYhNQAYhPA+g4QBBg5BUgOQBTgPBMAfQAsARAjAcIAFgOQAdhLBAgzQA6guBIgOQBSgPBPAdQBQAeA1BFQAyBBALBTQAJBGgbBBIAEgJIACgFIgCAGIgEAJIgBACIABgDIgGANIACgEIABgCIgBADIgEAJIgBADIgDAGIgBABIgCAIIgCADIgBADIgBACIAAABIgEAIQgTAigcAbQgbAbghAUQgmAVgqALQgkAJgkAAQglAAgkgJIgHgCQgUgFgTgJQgUgIgSgLQgQgLgPgMQgGARgHAQQgkBLhGAuQhGAshSAEQgeABgdgEQADAPACAQQAKBUgiBOIgFAKQAnAFAlAOQBOAeA0BCQARAWAPAYIAFAMIAFAMIAFAMIAFAMIAFAMIAFAMQAUBIgRBJQgNA8gjAvQgiAxgyAfIgSAKQAwAdAjAvQA0BEAIBWQAHBJgbBEQBIAfAwA/QA0BEAIBWQAEAjgFAiQBGAbAxA6QA4BBAQBUQAPBTgfBOQgfBOhCAzQhEA0hWAIIgdABQhGAAg/gfg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_8_graphics_25,x:183.4881,y:162.0551}).wait(1).to({graphics:mask_8_graphics_26,x:159.9257,y:168.8405}).wait(1).to({graphics:mask_8_graphics_27,x:142.8849,y:187.3286}).wait(1).to({graphics:mask_8_graphics_28,x:142.8849,y:209.4389}).wait(1).to({graphics:mask_8_graphics_29,x:142.8849,y:235.5405}).wait(1).to({graphics:mask_8_graphics_30,x:142.8849,y:254.9191}).wait(1).to({graphics:mask_8_graphics_31,x:142.8849,y:271.2996}).wait(49));

	// 最左邊的頭髮
	this.instance_14 = new lib.CachedBmp_6();
	this.instance_14.setTransform(99.25,158.25,0.5,0.5);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(25).to({_off:false},0).wait(55));

	// 畫手
	this.instance_15 = new lib.ClipGroup();
	this.instance_15.setTransform(319.55,245.55,1,1,0,0,0,306.4,213.8);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(19).to({_off:false},0).wait(1).to({x:278.55,y:307.45},0).wait(1).to({x:254.9,y:349.15},0).wait(1).to({x:282.7,y:386.7},0).wait(1).to({y:427.7},0).wait(1).to({x:275.05,y:447.15},0).to({_off:true},1).wait(55));

	// 遮色片03 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_19 = new cjs.Graphics().p("AiQEIQglgUgegeQg7g7gUhRQgUhSAZhRQAYhQA+g3QBBg5BUgPQBSgOBNAeQBOAfAyBCQA1BEAIBWQAIBUgkBNQgkBLhGAtQhGAuhTADIgMAAQhMAAhDglg");
	var mask_9_graphics_20 = new cjs.Graphics().p("AikH9QhRgXg5g9Qg7g+gRhVQgRhSAehOQAdhOA9g5QAqgpA0gVQgPgegJgiQgUhSAZhSQAYhPA+g4QBBg5BTgOQBTgPBNAfQBOAeAyBDQA1BEAIBWQAIBUgkBNQgkBLhGAtQgYAQgaAKQAVArAIAxQANBUghBOQghBNhAA2QhCA3hTAOQgZAEgZAAQgmAAgmgKg");
	var mask_9_graphics_21 = new cjs.Graphics().p("AnTJcQhHgrgnhKQgnhKAFhTQAFhWAxhGQAwhEBNghQBNgiBTALQA/AJA1AgQAAgzATgxQAehPA8g6QAqgoAzgVQgPgegIgiQgVhTAZhRQAZhQA+g3QBAg5BVgPQBSgOBOAeQBNAfAzBCQA0BEAJBWQAIBVglBNQgkBLhGAtQgYAQgaALQAWAqAHAwQANBUghBOQghBNhAA2QhBA3hVAOQg/ALg/gRQgpgLgigWQAAAfgGAfQgRBRg5A9Qg4A9hQAXQgpAMgrAAQhUAAhHgrg");
	var mask_9_graphics_22 = new cjs.Graphics().p("Ak9MzQglgVgegdQg7g8gUhQQgUhSAZhQQAJgdAOgaQgQgIgQgJQhHgrgnhKQgnhKAFhTQAFhWAxhFQAwhEBNghQBNgiBTALQA/AJA1AgQAAgzATgyQAehPA8g6QAqgoAzgVQgPgegIgiQgVhTAZhRQAZhQA+g3QBAg5BVgPQBSgOBOAeQBNAfAzBCQA0BEAJBWQAIBVglBNQgkBLhGAtQgYAQgaALQAWAqAHAxQANBUghBOQghBMhAA2QhBA3hVAOQg/ALg/gRQgpgLgigWQAAAfgGAfQgKAsgVAmQBDAfAuA8QA1BEAIBWQAIBUgkBLQgkBLhFAuQhGAthTAEIgMAAQhNAAhDglg");
	var mask_9_graphics_23 = new cjs.Graphics().p("AjwQCQgugWgkgkQg8g9gWhTQgIgcgDgcQgJhUAjhNQAHgPAHgNIgJgJQg7g7gUhRQgUhRAZhRQAJgdAOgaQgQgHgQgKQhHgrgnhJQgnhKAFhSQAFhWAxhGQAwhFBNghQBNghBTALQA/AIA1AhQAAg0ATgyQAehOA8g6QAqgpAzgVQgPgegIgiQgVhSAZhSQAZhPA+g4QBAg5BVgOQBSgPBOAfQBNAeAzBDQA0BEAJBWQAIBUglBNQgkBLhGAuQgYAQgaAKQAWArAHAxQANBUghBOQghBNhAA2QhBA3hVAOQg/ALg/gRQgpgMgigVQAAAegGAeQgKAsgVAnQBDAeAuA9QA1BEAIBWQAIBTgkBMIgMAWQAfAdAXAmQAIAMAGAOQAYAuAIA0QAPBYgiBRQggBNhDAyQhDAxhSAIIgeABQhDAAg9gdg");
	var mask_9_graphics_24 = new cjs.Graphics().p("AjcTCQglgUgegeQg6g7gUhRQgVhRAZhRQAQgyAfgqIgIgHQg8g9gWhTQgIgcgDgcQgJhUAjhNQAHgOAHgNIgJgKQg7g7gUhRQgUhRAZhRQAJgdAOgaQgQgHgQgJQhHgrgnhJQgnhKAFhTQAFhWAxhGQAwhFBNghQBNghBTALQA/AJA1AgQAAg0ATgyQAehOA8g6QAqgoAzgVQgPgegIgjQgVhSAZhSQAZhPA+g4QBAg5BVgOQBSgPBOAfQBNAeAzBDQA0BEAJBWQAIBUglBNQgkBLhGAuQgYAQgaALQAWAqAHAxQANBUghBOQghBNhAA2QhBA3hVAOQg/ALg/gRQgpgMgigVQAAAfgGAeQgKAtgVAmQBDAfAuA8QA1BDAIBWQAIBTgkBMIgMAXQAfAcAXAmQAIAMAGAOQAYAuAIA0QAPBYgiBRQgPAlgXAdQASASAQAUQA0BEAIBWQAIBTgkBMQgkBLhGAuQhFAthSADIgMABQhNAAhEgmg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_9_graphics_19,x:200.8601,y:152.2555}).wait(1).to({graphics:mask_9_graphics_20,x:192.351,y:174.0325}).wait(1).to({graphics:mask_9_graphics_21,x:169.5435,y:186.8664}).wait(1).to({graphics:mask_9_graphics_22,x:169.5435,y:207.7519}).wait(1).to({graphics:mask_9_graphics_23,x:169.5435,y:227.6391}).wait(1).to({graphics:mask_9_graphics_24,x:169.5435,y:247.7019}).wait(56));

	// 左邊的頭髮
	this.instance_16 = new lib.CachedBmp_7();
	this.instance_16.setTransform(128,146.85,0.5,0.5);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(19).to({_off:false},0).wait(61));

	// 畫手
	this.instance_17 = new lib.ClipGroup();
	this.instance_17.setTransform(368.9,269.9,1,1,0,0,0,306.4,213.8);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(12).to({_off:false},0).wait(1).to({x:444.7,y:280.35},0).wait(1).to({y:221.95},0).wait(1).to({x:405.75,y:187.2},0).wait(1).to({x:359.15,y:178.85},0).wait(1).to({x:320.25,y:202.5},0).wait(1).to({x:312.6,y:213.8},0).to({_off:true},1).wait(61));

	// 遮色片02 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_12 = new cjs.Graphics().p("AgGEuQgsgBgrgOQgdgKgbgQIgKgIIgLgIIgKgIIgLgIIgKgIIgIgGIgJgKIgIgJIgIgJIgHgKIgHgKIgHgLIgDgFIgBgCQgTgggLglQgLgnAAgoQgBgnAKgmQAKgmAUgjQAUgjAdgdQAegeAlgVQAjgTAogKQAigIAkAAIAMACIANABIAOACIANACIANACIANABQAZAHAXALQAYALAWAQQAXAQAUAUQAUATAPAXQAPAYALAbQAIAUAHAVIACANIACANIABAOIACANIACANIACAMQAAAmgKAlQgKAngUAjQgSAhgbAbQgaAbggAUQghAUglALQgrANgsAAIgIAAg");
	var mask_10_graphics_13 = new cjs.Graphics().p("ADQG8QgRgCgSgEIgcgIQgQgGgPgHQgMgFgMgHIgDgCIgCgBIgDgCIgDgCIABABQgkgTgegdQgbgdgUgiQgWglgKgpQgKgnAAgpIABgUIgGAEQghAVglALQgvAOgxgBQgsgCgrgOQgdgKgbgPIgKgIIgLgIIgKgJIgLgIIgKgIIgIgGIgJgJIgIgJIgIgKIgHgKIgHgKIgHgKIgDgGIgBgBQgTgggLgkQgLgnAAgpQgBgnAKgnQAKgmAUgiQAUgkAdgdQAegeAlgUQAjgUAogJQAigJAkAAIANACIANACIAOACIANABIANACIANACQAZAHAXALQAYALAWAPQAXARAUATQAUATAOAYQAPAYALAaQAIAUAHAVIACANIACAOIABANIACANIACAOIACANIgBAZQAPgKAQgIQAmgSApgIQApgHAqAEQAqAEAnAQQAfAMAbASIAMAJIAQAMIAOALIANAKIAGAEQAeAfAUAkQAUAkAKAoQAKAsgDAsQgDArgPApQgOAngZAiQgXAggfAZQgfAZgjAQQgVAJgWAGIgQACIgUADIgUADIgRACIgGABQgRAAgRgCg");
	var mask_10_graphics_14 = new cjs.Graphics().p("ABkIsQgRgCgSgEIgcgIQgQgFgPgHQgLgGgMgHIgDgBIgCgCIgDgCIgDgBIABAAQgkgTgegdQgcgcgUgjQgWgkgKgpQgKgoAAgpIABgTIgGAEQghAUglALQgvAPgxgCQgsgBgrgOQgdgKgbgQIgKgIIgLgIIgKgIIgLgIIgKgIIgIgGIgJgKIgIgJIgIgJIgHgKIgHgKIgHgLIgDgFIgBgCQgTgggLglQgLgnAAgnQgBgoAKgmQAKgmAUgjQAUgjAdgdQAegeAlgVQAjgTAogKQAigIAkAAIANACIANABIAOACIANACIANACIANABQAZAHAXALQAYALAWAQQAXAQAUAUQAUATAPAXQAPAYALAbQAIAUAHAVIACANIACANIABAOIACANIACANIACANIgBAZQAOgKARgHQAlgTApgHQAYgFAYAAQgNgRgKgTQgVglgKgpQgKgoABgqQAAgoAKgoQAJgoAUgjQAVglAegeQAdgeAkgUQAkgUApgKQAogJAqABQApACAnANQAnANAjAXQAiAXAbAfQAcAgARAmQARAmAGAoQAGAogCApQgCApgNAnQgMAogYAjQgXAigfAbQgfAaglARQgmASgqAHQgRACgRABQAUAXAOAaQAUAlAKAoQAKArgDAtQgDArgPAoQgOAngZAiQgXAhgfAZQgfAYgjAQQgVAJgWAGIgQADIgUACIgUADIgRACIgGABQgRAAgRgCg");
	var mask_10_graphics_15 = new cjs.Graphics().p("ABkMqQgRgCgSgEIgcgIQgQgFgPgHQgLgGgMgHIgDgBIgCgCIgDgCIgDgBIABAAQgkgTgegdQgcgcgUgjQgWgkgKgpQgKgoAAgpIABgTIgGAEQghAUglALQgvAPgxgCQgsgBgrgOQgdgKgbgQIgKgIIgLgIIgKgIIgLgIIgKgIIgIgGIgJgKIgIgJIgIgJIgHgKIgHgKIgHgLIgDgFIgBgCQgTgggLglQgLgnAAgoQgBgoAKgmQAKgmAUgjQAUgjAdgdQAegdAlgVQAjgTAogKQAigIAkAAIANACIANABIAOACIANACIANACIANABQAZAHAXALQAYALAWAQQAXAQAUATQAUATAPAXQAPAYALAbQAIAUAHAVIACANIACANIABAOIACANIACANIACANIgBAZQAOgKARgHQAlgTApgHQAYgFAYAAQgNgRgKgTQgVglgKgpQgKgoABgqQAAgnAKgoQAJgoAUgjQAVglAegeIAAgBQghgKgegQQgkgUgdgdIgCgCQgcgdgUgjQgVglgJgpQgKgoABgqQABgoAMgoQAMgoAXgkQAWgiAdgcQAfgbAlgSQAmgTApgHQAogHApADQApAEAmAPQAoAPAhAZQAhAZAZAhQAaAhAPAoQAPAmAFAoQAEApgGApQgHAqgRAmQgRAlgbAgIgSATIALAEQAnANAjAXQAiAXAbAfQAcAgARAmQARAmAGAoQAGAogCAoQgCApgNAnQgMAogYAjQgXAigfAbQgfAbglARQgmASgqAHQgRACgRABQAUAXAOAaQAUAlAKAoQAKArgDAtQgDArgPAoQgOAngZAiQgXAhgfAZQgfAYgjAQQgVAJgWAGIgQADIgUACIgUADIgRACIgGABQgRAAgRgCg");
	var mask_10_graphics_16 = new cjs.Graphics().p("ABkOWQgRgCgSgEIgcgIQgQgFgPgHQgLgGgMgHIgDgBIgCgCIgDgCIgDgBIABAAQgkgTgegdQgcgcgUgjQgWgkgKgpQgKgoAAgpIABgTIgGAEQghAUglALQgvAPgxgCQgsgBgrgOQgdgKgbgQIgKgIIgLgIIgKgIIgLgIIgKgIIgIgGIgJgKIgIgJIgIgJIgHgKIgHgKIgHgLIgDgFIgBgCQgTgggLglQgLgnAAgoQgBgoAKgmQAKgmAUgjQAUgjAdgdQAegeAlgVQAjgTAogKQAigIAkAAIANACIANABIAOACIANACIANACIANABQAZAHAXALQAYALAWAQQAXAQAUAUQAUATAPAXQAPAYALAbQAIAUAHAVIACANIACANIABAOIACANIACANIACANIgBAZQAOgJARgIQAlgTApgHQAYgFAYAAQgNgRgKgTQgVglgKgpQgKgoABgqQAAgoAKgoQAJgnAUgjQAVglAegeIAAgBQghgKgegQQgkgUgdgdIgCgCQgcgdgUgjQgVglgJgpIgBgEQgaALgcAFQgoAHgogCQgegCgcgIIgDgBIgDgBIgCAAIgDgBIgCgBQgpgIglgSQgmgTgegcQgfgbgWgjQgWgkgMgpQgLgngBgpQAAgpALgoQALgoAVgkQAWgkAdgcQAegcAkgTQAmgUApgIQAqgJArACQAnACAlAKQApALAmATQAlATAdAcQAeAcAVAkQAVAkALAoIACAIQAcgLAegFQAogHApADQApAEAmAPQAoAPAhAZQAhAZAZAhQAaAhAPAoQAPAmAFAoQAEApgGApQgHAqgRAmQgRAlgbAgIgSATIALAEQAnANAjAXQAiAXAbAfQAcAgARAmQARAlAGAoQAGAogCApQgCApgNAnQgMAogYAjQgXAigfAbQgfAbglARQgmASgqAHQgRACgRABQAUAXAOAaQAUAlAKAoQAKArgDAtQgDArgPAoQgOAngZAiQgXAhgfAZQgfAYgjAQQgVAJgWAGIgQADIgUACIgUADIgRACIgGABQgRAAgRgCg");
	var mask_10_graphics_17 = new cjs.Graphics().p("AEEOWQgRgCgSgEIgcgIQgQgFgPgHQgMgGgMgHIgDgBIgCgCIgDgCIgDgBIABAAQgkgTgegdQgcgcgUgjQgVgkgKgpQgKgoAAgpIABgTIgGAEQghAUglALQgvAPgxgCQgsgBgrgOQgdgKgbgQIgKgIIgLgIIgKgIIgLgIIgKgIIgIgGIgJgKIgIgJIgIgJIgHgKIgHgKIgHgLIgDgFIgBgCQgTgggLglQgLgnAAgoQgBgoAKgmQAKgmAUgjQAUgjAdgdQAegeAlgVQAjgTAogKQAigIAkAAIANACIANABIAOACIANACIANACIANABQAZAHAXALQAYALAWAQQAWAQAUAUQAUATAPAXQAPAYALAbQAIAUAHAVIACANIACANIABAOIACANIACANIACANIgBAZQAPgJAQgIQAmgTApgHQAYgFAYAAQgNgRgKgTQgVglgKgpQgKgoABgqQAAgoAKgoQAJgnAUgjQAVglAegeIAAgBQghgKgegQQgkgUgdgdIgCgCQgdgdgUgjQgVglgJgpIgBgEQgaALgcAFQgnAHgogCQgegCgcgIIgDgBIgDgBIgCAAIgDgBIgCgBQgpgIglgSQgbgOgXgSQgTAhgbAbQgcAegkAUQgkAVgpAKQgnAKgngBQgpAAgngLQgpgLgkgWQgjgWgcgeQgcgegSgkQgUgmgIgpQgIgoADgpQADgpAOgnQAOgnAZgiQAYgiAggZQAhgbAngQQAogQApgFQAqgEAqAGQAqAGAmASQAfAOAcAVIACgEQAWgkAdgcQAegcAkgTQAmgUApgIQAqgJArACQAmACAlAKQApALAmATQAlATAeAcQAeAcAVAkQAVAkALAoIACAIQAcgLAegFQAogHApADQApAEAmAPQAoAPAhAZQAhAZAZAhQAaAhAPAoQAPAmAFAoQAEApgGApQgHAqgRAmQgRAlgbAgIgSATIALAEQAnANAjAXQAiAXAbAfQAcAgARAmQARAlAGAoQAGAogCApQgCApgNAnQgMAogYAjQgXAigfAbQgfAbglARQgmASgqAHQgRACgRABQAUAXAOAaQAUAlAKAoQAKArgDAtQgDArgPAoQgOAngZAiQgXAhgfAZQgfAYgjAQQgVAJgWAGIgQADIgUACIgUADIgRACIgGABQgRAAgRgCg");
	var mask_10_graphics_18 = new cjs.Graphics().p("AGWOWQgSgCgRgEIgdgIQgPgFgPgHQgNgGgLgHIgDgBIgDgCIgCgCIgDgBIABAAQglgTgdgdQgcgcgVgjQgVgkgLgpQgKgoABgpIABgTIgGAEQghAUglALQgvAPgwgCQgtgBgqgOQgegKgagQIgLgIIgKgIIgLgIIgKgIIgLgIIgIgGIgJgKIgIgJIgIgJIgHgKIgHgKIgGgLIgDgFIgCgCQgTgggKglQgLgngBgoQAAgoAKgmQAKgmATgjQAUgjAdgdQAegeAlgVQAkgTAogKQAigIAjAAIAOACIANABIANACIAMACIAOACIANABQAZAHAXALQAYALAVAQQAXAQAVAUQAUATAOAXQAPAYALAbQAJAUAHAVIABANIACANIACAOIACANIABANIACANIgBAZQAPgJAQgIQAmgTAqgHQAYgFAYAAQgNgRgLgTQgVglgJgpQgKgoAAgqQABgoAJgoQAKgnAUgjQAUglAegeIABgBQghgKgegQQgkgUgdgdIgCgCQgdgdgUgjQgVglgKgpIAAgEQgaALgcAFQgoAHgpgCQgdgCgdgIIgCgBIgDgBIgDAAIgCgBIgDgBQgogIglgSQgagOgYgSQgSAhgbAbQgdAegjAUQglAVgpAKQgmAKgngBIgRAAQgHAPgJAOQgTAigcAbQgZAYgeASQghAUglALQgwAOgxgCQgsgBgrgPQgbgKgagOIgKgIIgLgJIgKgIIgLgIIgKgIIgIgGQgZgZgTgeQgVgjgMgoQgOgsACgvQABgkAJgkQAKgnAUgkQAWgkAegeQAegcAkgUQAkgTAngJQAqgKAqADIADAAQAMgYAQgWQAYgiAggZQAhgbAngQQAngQAqgFQAqgEAqAGQApAGAnASQAfAOAbAVIADgEQAVgkAegcQAegcAkgTQAlgUAogIQAqgJArACQAnACAmAKQApALAmATQAkATAeAcQAeAcAVAkQAWAkALAoIACAIQAcgLAegFQAogHApADQApAEAmAPQAnAPAiAZQAhAZAZAhQAZAhAQAoQAPAmAEAoQAEApgGApQgGAqgSAmQgRAlgaAgIgSATIAKAEQAoANAiAXQAjAXAbAfQAbAgASAmQARAlAGAoQAGAogCApQgDApgMAnQgNAogXAjQgXAigfAbQgfAbglARQgmASgqAHQgRACgRABQATAXAPAaQAUAlAJAoQAKArgDAtQgDArgOAoQgPAngYAiQgYAhgfAZQgeAYgkAQQgUAJgWAGIgRADIgUACIgUADIgQACIgHABQgRAAgQgCg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_10_graphics_12,x:259.4488,y:176.282}).wait(1).to({graphics:mask_10_graphics_13,x:283.4334,y:190.625}).wait(1).to({graphics:mask_10_graphics_14,x:294.2488,y:179.3898}).wait(1).to({graphics:mask_10_graphics_15,x:294.2488,y:153.9917}).wait(1).to({graphics:mask_10_graphics_16,x:294.2488,y:143.181}).wait(1).to({graphics:mask_10_graphics_17,x:278.2341,y:143.181}).wait(1).to({graphics:mask_10_graphics_18,x:263.6675,y:143.181}).wait(62));

	// 帽頂
	this.instance_18 = new lib.CachedBmp_8();
	this.instance_18.setTransform(195.3,77.3,0.5,0.5);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(12).to({_off:false},0).wait(68));

	// 畫手
	this.instance_19 = new lib.ClipGroup();
	this.instance_19.setTransform(216,312.3,1,1,0,0,0,306.4,213.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({x:192.35,y:246.25},0).wait(1).to({x:218.8,y:198.95},0).wait(1).to({x:268.9,y:191.3},0).wait(1).to({x:312.75,y:228.9},0).wait(1).to({x:346.8,y:276.65},0).wait(1).to({x:375.75,y:312.1},0).wait(1).to({x:409.15,y:357.3},0).wait(1).to({x:456.45,y:393.45},0).wait(1).to({x:491.9,y:368.45},0).wait(1).to({x:464.8,y:331.6},0).wait(1).to({x:449.85,y:314.15},0).to({_off:true},1).wait(68));

	// 遮色片01 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_0 = new cjs.Graphics().p("AgjCIIgGgDIgHgCIgGgCIgGgDIgGgDIgFgDIgCgBQgXgNgRgWQgTgYgGgeQgHgcAFgbQAFgaAOgXQAPgZAYgQIAJgGIAHgDIAHgDIAGgDIAHgDIAHgCQAhgJAhAHQAeAHAZARQAYAQAQAZQAPAZAEAdQAFAegKAeQgIAcgTAWQgQATgVAMQgXAMgaAFQgLABgKAAQgSAAgTgFg");
	var mask_11_graphics_1 = new cjs.Graphics().p("ACQF/IgGgCIgGgCIgHgDIgGgCIgGgDIgFgDIgBgBQgYgOgQgVQgTgZgHgdQgGgcAFgcQgQAEgPABQgoAEgpgHQgpgHgmgSQglgSgfgbIgOgNQgdgdgUgkQgVglgKgoQgJgoAAgpQAAgpAKgoQALgpAVgkQAVgjAegdQAdgcAkgUQAlgUAqgJQAogJApADQAoACAmANQAoAOAjAYQAiAXAaAgQAbAhARAmQARAnAFAqQAFApgEApQgDApgOAlQgPAogZAiIgDAFQAZAHAWAPQAYAQAPAYQAPAZAFAdQAEAfgJAfQgJAcgTAWQgQASgVAMQgXANgaAEQgKACgKAAQgUAAgTgGg");
	var mask_11_graphics_2 = new cjs.Graphics().p("ACKKdIgGgDIgGgCIgHgCIgGgDIgGgDIgFgDIgBgBQgYgNgQgWQgTgYgHgeQgGgbAEgcQgPADgPACQgoAEgpgHQgpgHgmgTQglgRgfgbIgOgOQgdgdgUgjQgVglgKgpQgJgoAAgpQAAgqAKgnQALgpAVglQAVgjAegbQAdgdAkgTQAbgPAegJQgkgQgegaIgTgRQgdgdgUgkQgVglgJgpQgKgoACgpQABgoANgnQAMgpAYgjQAWgiAfgbQAggbAkgUQAkgUAogKQAogJApACQApACAnAMQAoAOAjAXQAiAXAbAgQAaAfARAlQARAnAHApQAGApgFApQgFAqgRAnQgQAmgbAhQgbAgghAaQghAagnAQQgPAGgQAFQAXALAVAOQAiAYAaAeQAbAhARAnQARAnAFApQAFApgEAqQgDAogOAnQgPAngZAiIgEAFQAaAHAWAPQAYAQAPAZQAPAZAFAdQAEAfgJAeQgJAcgTAWQgQATgVAMQgXAMgaAFQgKABgKAAQgUAAgTgFg");
	var mask_11_graphics_3 = new cjs.Graphics().p("AhCMtIgGgCIgGgCIgHgDIgGgCIgGgDIgFgDIgBgBQgYgOgRgVQgSgZgHgdQgGgcAEgcQgPAEgQABQgpAEgogHQgqgHgmgSQglgSgegbIgPgNQgdgdgTgkQgWglgJgpQgKgoAAgpQABgpAKgoQALgpAVgkQAVgjAdgdQAegcAkgUQAbgOAegJQgkgRgegZIgTgRQgdgdgUgjQgVglgJgpQgKgoACgpQABgpAMgnQANgoAXgjQAXgiAfgbQAfgbAlgUQAkgVAogJQApgKApACQApACAnANIAKADQAAgmAKglQAKglATgiIACgFIAKgNIAJgMIAHgKIAGgJIAGgHIAFgGIAGgGIABgBIABgCIABgCQAdgdAkgUQAlgVAqgKQAqgKArADQArACApAPQAmANAhAXQAqAeAeApQAWAgAPAkQAFANAEAPIACAQIACARIACAQIADARIACANQgBAsgNAqQgNArgYAmQgWAjgeAbQgeAcglATQgiASgnAIQg0AMg2gIQgggFgegLQAAASgDARQgEAqgRAnQgQAngbAhQgbAgghAZQggAZgnAQQgPAHgQAEQAXALAVAPQAhAXAaAgQAbAhAQAmQARAnAGAqQAEApgDApQgDApgOAmQgPAogZAiIgEAFQAaAHAVAPQAZAQAPAYQAPAZAFAdQAEAfgKAfQgIAcgTAWQgQASgVAMQgXANgZAEQgKACgLAAQgTAAgTgGg");
	var mask_11_graphics_4 = new cjs.Graphics().p("AlPMtIgGgCIgGgCIgHgDIgGgCIgGgDIgFgDIgBgBQgYgOgQgVQgTgZgHgdQgGgcAFgcQgPAEgQABQgpAEgpgHQgpgHgmgSQglgSgfgbIgOgNQgdgdgUgkQgVglgKgpQgJgoAAgpQAAgpAKgoQALgpAVgkQAVgjAegdQAdgcAkgUQAcgOAdgJQgjgRgfgZIgTgRQgdgdgUgjQgVglgJgpQgKgoACgpQABgpANgnQAMgoAYgjQAWgiAfgbQAggbAkgUQAkgVAogJQApgKApACQApACAnANIAKADQAAgmAKglQALglASgiIADgFIAKgNIAIgMIAIgKIAGgJIAGgHIAFgGIAGgGIABgBIABgCIACgCQAdgdAjgUQAmgVApgKQAqgKAsADQApACApAPQAmANAhAXQAqAeAeApQAXAgAOAkQAFANAEAPIACAQIACARIABAFQAbgeAhgVQAjgXAogNQAngMApgBQAqgBApAJQAnAKAlASQAlARAfAcQAfAbAWAjQAXAjAMAoQAMAnABAqQABApgLAoQgKApgVAkQgVAkgeAcQgeAdglAUQglAUgpAJQgoAIgqgCIgegEQgpgEgmgPQgngQgggZQgigZgZgiQgZghgPgmQgNgfgFgiQgLANgNALQgeAcgkATQgjASgnAIQgzAMg2gIQgfgFgfgLQAAASgCARQgFAqgRAnQgQAngbAhQgbAgghAZQghAZgnAQQgPAHgQAEQAXALAVAPQAiAXAaAgQAbAhARAmQARAnAFAqQAFApgEApQgDApgOAmQgPAogZAiIgDAFQAZAHAWAPQAYAQAPAYQAPAZAFAdQAEAfgJAfQgJAcgTAWQgQASgVAMQgXANgaAEQgKACgKAAQgUAAgTgGg");
	var mask_11_graphics_5 = new cjs.Graphics().p("AoUMtIgGgCIgHgCIgGgDIgGgCIgGgDIgFgDIgCgBQgXgOgRgVQgTgZgGgdQgGgcAEgcQgPAEgQABQgpAEgogHQgqgHgmgSQglgSgegbIgPgNQgdgdgUgkQgVglgJgpQgKgoAAgpQABgpAKgoQALgpAVgkQAVgjAdgdQAegcAkgUQAbgOAegJQgkgRgfgZIgSgRQgdgdgUgjQgVglgKgpQgKgoACgpQACgpAMgnQANgoAXgjQAXgiAfgbQAfgbAkgUQAkgVApgJQAogKAqACQApACAnANIAKADQAAgmAKglQAKglASgiIADgFIAKgNIAJgMIAHgKIAHgJIAGgHIAFgGIAFgGIABgBIACgCIABgCQAdgdAkgUQAlgVAqgKQAqgKArADQArACApAPQAmANAhAXQAqAeAcApQAXAgAOAkQAGANADAPIADAQIACARIABAFQAageAhgVQAjgXApgNQAngMApgBQApgBApAJQAoAKAlASQAlARAeAcQAfAbAXAjQAWAjAMAoQAMAnABAqQABApgKAoQgKAmgSAhQATgIAUgGQAogLApABQApAAAoAMQAnALAjAWQAjAWAeAcQAeAeAVAkQAVAjAKAnQALAogBAqQgBApgLAoQgMAngWAjQgXAjgeAcQgfAcgmASQglASgpAIQgoAHgpgEQgpgEgmgOIgdgNQglgTghgaQgggagXgjQgXgigOgnQgOgngDgpQgDgqAJgpQAIgoAUglIADgGQgaAMgcAGQgpAIgqgCIgdgEQgpgEgngPQgmgQghgZQghgZgZgiQgZghgQgmQgLgfgFgiQgLANgNALQgeAcglATQgjASgmAIQg1AMg1gIQgggFgegLQAAASgDARQgFAqgQAnQgRAngbAhQgaAggiAZQghAZgmAQQgPAHgQAEQAXALAUAPQAiAXAaAgQAbAhARAmQARAnAFAqQAFApgDApQgDApgPAmQgOAogZAiIgEAFQAZAHAWAPQAYAQAQAYQAPAZAEAdQAFAfgKAfQgIAcgTAWQgQASgVAMQgXANgaAEQgKACgLAAQgTAAgTgGg");
	var mask_11_graphics_6 = new cjs.Graphics().p("AqSMtIgGgCIgHgCIgGgDIgGgCIgGgDIgFgDIgCgBQgXgOgRgVQgTgZgGgdQgHgcAFgcQgPAEgQABQgpAEgogHQgqgHgmgSQglgSgegbIgPgNQgdgdgUgkQgVglgJgpQgKgoAAgpQABgpAKgoQALgpAVgkQAVgjAdgdQAegcAkgUQAbgOAegJQgkgRgfgZIgSgRQgdgdgUgjQgVglgKgpQgKgoACgpQACgpAMgnQANgoAXgjQAXgiAfgbQAfgbAkgUQAkgVApgJQAogKAqACQApACAnANIAKADQAAgmAKglQAKglASgiIADgFIAKgNIAJgMIAHgKIAHgJIAGgHIAFgGIAFgGIABgBIACgCIABgCQAdgdAkgUQAlgVAqgKQAqgKArADQArACApAPQAmANAhAXQAqAeAdApQAXAgAOAkQAGANADAPIADAQIACARIABAFQAageAhgVQAigXApgNQAngMApgBQApgBApAJQAoAKAlASQAlARAeAcQAfAbAXAjQAWAjAMAoQAMAnABAqQABApgKAoQgKAmgSAhQATgIAUgGQAogLApABQApAAAoAMQAnALAjAWQAjAWAeAcQAeAeAVAkQAVAjAKAnQALAogBAqQgBAngKAmQAeAEAcALQAoAOAiAZQAhAYAaAgQARAWAPAXQAcAwAJA3QAIAzgJAzQgJAwgYArQgUAkgcAdQgeAfglAVQgkAUgnAJQgoAKgpgBQgpgBgngMQgngMgigVQgcgSgXgYQgcgfgYgiQgYgigJgpQgJgoAAgpQgBgpALgoIABgCQgggFgfgLIgdgNQglgTghgaQgggagXgjQgXgigOgnQgOgngDgpQgDgqAJgpQAIgoAUglIADgGQgaAMgcAGQgpAIgqgCIgdgEQgpgEgngPQgmgQgggZQghgZgZgiQgZghgQgmQgMgfgFgiQgMANgMALQgeAcglATQgjASgmAIQg1AMg1gIQgggFgegLQAAASgDARQgFAqgQAnQgRAngbAhQgaAggiAZQghAZgmAQQgQAHgPAEQAXALAUAPQAiAXAaAgQAbAhARAmQARAnAFAqQAFApgDApQgDApgPAmQgOAogZAiIgEAFQAZAHAWAPQAYAQAQAYQAPAZAEAdQAFAfgKAfQgIAcgTAWQgQASgVAMQgXANgaAEQgLACgKAAQgTAAgTgGg");
	var mask_11_graphics_7 = new cjs.Graphics().p("AOyP3IgkgIQgogLgkgWQgjgVgdgdQgcgegUgkQgUglgJgpQgJgoADgpQACgpANgnQAKgeAQgbQgkAIglAAQgpgCgngMQgngLgigWQgcgRgXgYQgcgfgYgiQgYgjgJgpQgJgoAAgpQgBgpALgnIABgCQgggFgfgLIgdgNQglgTghgbQgggagXgiQgXgigOgmQgOgngDgpQgDgqAJgpQAIgpAUgmIADgFQgaALgcAGQgpAJgpgDIgdgDQgpgFgngPQgmgPghgZQghgagZghQgZghgQgmQgNgggFghQgLAMgMAMQgeAbglATQgjASgmAJQg1ALg1gHQgggFgegLQAAARgDASQgFAqgQAnQgRAmgbAhQgaAggiAaQghAagmAQQgQAGgQAFQAXALAVAOQAiAYAaAfQAbAhARAmQARAnAFApQAFApgDAqQgDAogPAnQgOAngZAiIgEAFQAZAHAWAPQAYAQAQAZQAPAZAEAdQAFAfgKAeQgIAcgTAWQgQATgVAMQgXAMgaAFQgeAEgdgIIgGgDIgHgCIgGgCIgGgDIgGgDIgFgDIgCgBQgXgNgRgWQgTgYgGgeQgHgbAFgcQgPADgQACQgpAEgogHQgqgHgmgTQglgRgegbIgPgOQgdgdgUgjQgVglgJgpQgKgoAAgpQABgqAKgnQALgpAVgkQAVgjAdgcQAegdAkgTQAbgPAegJQgkgRgfgZIgSgRQgdgdgUgkQgVglgKgpQgKgoACgpQACgoAMgnQANgpAXgjQAXgiAfgbQAfgbAkgUQAkgUApgKQAogJAqACQApACAnAMIAKAEQgBgmALglQAKglASgiIADgGIAKgNIAJgMIAHgKIAHgIIAGgIIAFgGIAFgGIABgBIACgBIABgCQAdgdAkgUQAlgVAqgKQAqgKArACQArADApAOQAmAOAhAXQAqAdAdAqQAXAfAOAkQAGAOADAOIADARIACAQIABAFQAagdAhgWQAjgXApgMQAngMApgCQAogBApAKQAoAJAlASQAlASAeAbQAfAcAXAjQAWAjAMAnQAMAoABApQABAqgKAoQgKAlgTAhQAUgIAUgFQAogLApAAQApABAoALQAnAMAjAWQAjAVAeAdQAeAdAVAlQAVAjAKAnQALApgBApQgBAngKAmQAeAFAcAKQAoAPAiAXQAhAYAaAhQARAVAPAXQAcAxAJA3QAIAzgJAyQgJAxgYArIgFAIIAagFQAogFApAFQApAGAnAQQAQAIAQAJIAmAcQARANAQAQQAQAPAMATQAMAVAJAWIATAvQAMArgBArQgBAsgOAqQgLAlgWAhQgVAigeAbQgeAbgkASQgoAUgsAHQgaAEgaAAQgWAAgVgCg");
	var mask_11_graphics_8 = new cjs.Graphics().p("ASsTJQgqgBgogLQgogKglgUQglgUgdgeQgPgOgMgRQgZgigQgnQgPgmgEgpQgEgpAHgqQAHgpASgmIAFgJQgnATgrAIQgvAIgwgHIgkgHQgogMgkgVQgkgVgcgeQgdgdgTgkQgUglgJgqQgJgoACgpQADgpANgmQAKgeAQgbQgkAIglgBQgpgBgngMQgngMgigVQgcgSgXgYQgcgfgYgiQgYgigJgpQgJgoAAgpQgBgpALgnIABgCQghgFgegLIgdgNQglgTghgaQgfgagXgjQgXgigOgnQgOgngDgpQgDgqAIgpQAJgpAUglIADgGQgaAMgcAGQgpAIgqgCIgegEQgpgEgmgPQgmgQghgZQghgZgagiQgZghgPgmQgNgfgFgiQgLANgNALQgdAcglATQgjASgnAIQg0AMg1gIQgggEgegMQgBASgCARQgFAqgRAnQgQAngbAhQgaAggiAaQghAZgmAQQgQAHgQAEQAXALAVAPQAiAXAaAgQAbAhARAmQARAnAFAqQAFApgEApQgCAogPAmQgOAogZAiIgEAFQAZAHAWAPQAYAQAPAYQAPAZAFAdQAEAfgJAfQgIAcgTAWQgRASgUAMQgYANgaAEQgdAFgdgJIgGgCIgHgCIgHgDIgFgCIgHgDIgEgDIgCgBQgXgOgRgVQgTgZgHgdQgGgcAFgcQgPAEgQABQgpAEgpgHQgpgHgmgSQglgSgfgbIgOgNQgdgdgUgkQgVglgJgpQgKgnAAgpQAAgpALgoQALgpAUgkQAWgjAdgdQAegcAjgUQAcgOAegJQgkgRgfgZIgTgSQgdgdgTgjQgWglgJgpQgKgoACgpQACgpAMgnQANgoAXgjQAXgiAfgbQAfgbAkgUQAkgVApgJQAogKApACQApACAoANIAJADQAAgmAKglQALglASgiIADgFIAKgNIAJgMIAHgKIAGgJIAHgHIAEgGIAGgGIABgBIABgCIACgCQAdgdAkgUQAlgVApgKQArgKArADQArACAoAPQAnANAgAXQAqAeAeApQAXAgAOAkQAFANAEAPIACAQIADARIABAFQAageAhgVQAjgXApgNQAngMApgBQApgBApAJQAoAKAkASQAmARAdAcQAfAbAXAjQAWAjAMAoQAMAnABAqQABApgLAoQgJAmgTAhQAUgIAUgGQAogLApABQApAAAnAMQAoALAjAWQAiAWAfAcQAdAeAWAkQAVAjAKAoQALAogBAqQgBAngKAmQAeAEAcALQAoAOAhAZQAiAYAaAgQAQAWAPAXQAdAwAJA2QAHAzgJAzQgIAwgYArIgFAIIAZgEQApgFAoAFQAqAFAnARQAQAHAQAJIAmAdQARANAQAPQAQAQAMATQAMAUAJAXIATAvQALAqgBAsQgBAsgNAqQgHAYgMAWQAVgLAXgHQAngMApgBQApgBAoAKQApAKAkATQAlAUAeAcQAfAcAVAkQAWAkAMAoQALAoAAApQAAApgLAnQgMApgWAkQgVAjgeAcQgeAbglATQgkATgnAJQgdAGgdAAIgEAAg");
	var mask_11_graphics_9 = new cjs.Graphics().p("AVRU0QgpgJglgVQgjgUgdgdQgdgdgUgkQgVglgKgpQgKgnACgoQgdAagiASQgkATgoAIQgfAHgfgBQgpgBgpgKQgogKgkgUQglgUgegeQgPgPgMgQQgYgigQgnQgQgmgEgpQgEgqAHgpQAHgqATgmIAEgIQgnATgrAHQgvAIgwgGIgkgIQgogLgkgWQgjgVgdgdQgcgegUgkQgUglgJgpQgJgoADgpQACgpANgnQAKgdAQgbQgkAIglgBQgpgCgngMQgngLgigWQgcgRgWgYQgcgfgYgiQgYgjgJgpQgJgnAAgpQgBgpALgnIABgCQgggFgfgLIgdgNQglgTghgbQgggagXgiQgXgigOgnQgOgngDgpQgDgqAJgpQAIgpAUgmIADgFQgaALgcAGQgpAJgqgDIgdgDQgpgFgngPQgmgPghgZQghgagZghQgZghgQgmQgNgggFghQgLANgMALQgeAbglATQgjASgmAJQg1ALg1gHQgggFgegLQAAASgDARQgFAqgQAnQgRAmgbAhQgaAggiAaQghAagmAQQgQAGgQAFQAXALAVAOQAiAYAaAfQAbAhARAnQARAnAFApQAFApgDAqQgDAogPAnQgOAngZAhIgEAFQAZAHAWAPQAYAQAQAZQAPAZAEAdQAFAfgKAeQgIAcgTAWQgQATgVAMQgXAMgaAFQgeAEgdgIIgGgDIgHgCIgGgCIgGgDIgGgDIgFgDIgCgBQgXgNgRgWQgTgYgGgeQgHgbAFgcQgPADgQACQgpAEgogHQgqgHgmgTQglgRgegbIgPgOQgdgdgUgiQgVglgJgpQgKgoAAgpQABgqAKgnQALgpAVglQAVgjAdgcQAegdAkgTQAbgPAegJQgkgQgfgaIgSgRQgdgdgUgkQgVglgKgpQgKgoACgpQACgoAMgnQANgpAXgjQAXgiAfgbQAfgbAkgUQAkgUApgKQAogJAqACQApACAnAMIAKAEQAAgmAKglQAKglASgiIADgGIAKgNIAJgMIAHgKIAHgIIAGgIIAFgGIAFgGIABgBIACgBIABgCQAdgdAkgUQAlgVAqgKQAqgKArACQArADApAOQAmAOAhAXQAqAdAdAqQAXAfAOAkQAGAOADAOIADARIACAQIABAGQAageAhgWQAjgXApgMQAngMApgCQApgBApAKQAoAJAlASQAlASAeAbQAfAcAXAjQAWAjAMAnQAMAoABApQABAqgKAoQgKAlgTAiQAUgJAUgFQAogLApAAQApABAnALQAnAMAjAWQAjAVAeAdQAeAdAVAlQAVAjAKAnQALApgBApQgBAogKAmQAeAEAcAKQAoAPAiAYQAhAYAaAhQARAVAPAXQAcAxAJA3QAIAzgJAyQgJAwgYArIgFAIIAagFQAogFApAFQApAGAnAQQAQAIAQAJIAmAcQARANAQAQQAQAPAMATQAMAVAJAWIATAvQAMArgBArQgBAsgOAqQgHAYgMAWQAVgKAXgHQAngMApgCQAqgBAoAKQAoALAkATQAlAUAfAcQAeAcAWAjQAWAkALApQALAnAAApIAAAKIAFgFQAfgaAlgSQAmgSAqgGQAbgFAbABIADgBIADAAIADAAIADgBIADAAIAEgBIADAAIADgBQAsABApAMQArANAlAYQAgAVAaAdQAaAdASAjQATAkAIApQAIAqgDArQgEArgQAoQgIAWgMAVIgIAKIgKAOIgLANIgKANIgIALQgSASgVAOQgVAPgWALQgVALgXAHQgcAJgdADQgXADgYAAIgLAAQgkAAgkgJg");
	var mask_11_graphics_10 = new cjs.Graphics().p("AVRU0QgpgJglgVQgjgUgdgdQgdgdgUgkQgVglgKgpQgKgnACgoQgdAagiASQgkATgoAIQgfAHgfgBQgpgBgpgKQgogKgkgUQglgUgegeQgPgPgMgQQgYgigQgnQgQgmgEgpQgEgqAHgpQAHgqATgmIAEgIQgnATgrAHQgvAIgwgGIgkgIQgogLgkgWQgjgVgdgdQgcgegUgkQgUglgJgpQgJgoADgpQACgpANgnQAKgdAQgbQgkAIglgBQgpgCgngMQgngLgigWQgcgRgWgYQgcgfgYgiQgYgjgJgpQgJgnAAgpQgBgpALgnIABgCQgggFgfgLIgdgNQglgTghgbQgggagXgiQgXgigOgnQgOgngDgpQgDgqAJgpQAIgpAUgmIADgFQgaALgcAGQgpAJgqgDIgdgDQgpgFgngPQgmgPghgZQghgagZghQgZghgQgmQgNgggFghQgLANgMALQgeAbglATQgjASgmAJQg1ALg1gHQgggFgegLQAAASgDARQgFAqgQAnQgRAmgbAhQgaAggiAaQghAagmAQQgQAGgQAFQAXALAVAOQAiAYAaAfQAbAhARAnQARAnAFApQAFApgDAqQgDAogPAnQgOAngZAhIgEAFQAZAHAWAPQAYAQAQAZQAPAZAEAdQAFAfgKAeQgIAcgTAWQgQATgVAMQgXAMgaAFQgeAEgdgIIgGgDIgHgCIgGgCIgGgDIgGgDIgFgDIgCgBQgXgNgRgWQgTgYgGgeQgHgbAFgcQgPADgQACQgpAEgogHQgqgHgmgTQglgRgegbIgPgOQgdgdgUgiQgVglgJgpQgKgoAAgpQABgqAKgnQALgpAVglQAVgjAdgcQAegdAkgTQAbgPAegJQgkgQgfgaIgSgRQgdgdgUgkQgVglgKgpQgKgoACgpQACgoAMgnQANgpAXgjQAXgiAfgbQAfgbAkgUQAkgUApgKQAogJAqACQApACAnAMIAKAEQAAgmAKglQAKglASgiIADgGIAKgNIAJgMIAHgKIAHgIIAGgIIAFgGIAFgGIABgBIACgBIABgCQAdgdAkgUQAlgVAqgKQAqgKArACQArADApAOQAmAOAhAXQAqAdAdAqQAXAfAOAkQAGAOADAOIADARIACAQIABAGQAageAhgWQAjgXApgMQAngMApgCQApgBApAKQAoAJAlASQAlASAeAbQAfAcAXAjQAWAjAMAnQAMAoABApQABAqgKAoQgKAlgTAiQAUgJAUgFQAogLApAAQApABAnALQAnAMAjAWQAjAVAeAdQAeAdAVAlQAVAjAKAnQALApgBApQgBAogKAmQAeAEAcAKQAoAPAiAYQAhAYAaAhQARAVAPAXQAcAxAJA3QAIAzgJAyQgJAwgYArIgFAIIAagFQAogFApAFQApAGAnAQQAQAIAQAJIAmAcQARANAQAQQAQAPAMATQAMAVAJAWIATAvQAMArgBArQgBAsgOAqQgHAYgMAWQAVgKAXgHQAngMApgCQAqgBAoAKQAoALAkATQAjATAeAaIAAgEQABgpALgoQANgoAWgkQAWgiAfgcQAfgbAkgSQAmgSAqgIQAogHApAEQApADAmAPQAnAPAiAZQAhAZAZAhQAZAhAQAoQAPAnAEAqQAEApgGApQgHAqgSAmQgRAlgbAfIgMANQAVARASATQAaAdASAjQATAkAIApQAIAqgDArQgEArgQAoQgIAWgMAVIgIAKIgKAOIgLANIgKANIgIALQgSASgVAOQgVAPgWALQgVALgXAHQgcAJgdADQgXADgYAAIgLAAQgkAAgkgJgATOMyIABgBIgBgBIAAACg");
	var mask_11_graphics_11 = new cjs.Graphics().p("AVRU0QgpgJglgVQgjgUgdgdQgdgdgUgkQgVglgKgpQgKgnACgoQgdAagiASQgkATgoAIQgfAHgfgBQgpgBgpgKQgogKgkgUQglgUgegeQgPgPgMgQQgYgigQgnQgQgmgEgpQgEgqAHgpQAHgqATgmIAEgIQgnATgrAHQgvAIgwgGIgkgIQgogLgkgWQgjgVgdgdQgcgegUgkQgUglgJgpQgJgoADgpQACgpANgnQAKgdAQgbQgkAIglgBQgpgCgngMQgngLgigWQgcgRgWgYQgcgfgYgiQgYgjgJgpQgJgnAAgpQgBgpALgnIABgCQgggFgfgLIgdgNQglgTghgbQgggagXgiQgXgigOgnQgOgngDgpQgDgqAJgpQAIgpAUgmIADgFQgaALgcAGQgpAJgqgDIgdgDQgpgFgngPQgmgPghgZQghgagZghQgZghgQgmQgNgggFghQgLANgMALQgeAbglATQgjASgmAJQg1ALg1gHQgggFgegLQAAASgDARQgFAqgQAnQgRAmgbAhQgaAggiAaQghAagmAQQgQAGgQAFQAXALAVAOQAiAYAaAfQAbAhARAnQARAnAFApQAFApgDAqQgDAogPAnQgOAngZAhIgEAFQAZAHAWAPQAYAQAQAZQAPAZAEAdQAFAfgKAeQgIAcgTAWQgQATgVAMQgXAMgaAFQgeAEgdgIIgGgDIgHgCIgGgCIgGgDIgGgDIgFgDIgCgBQgXgNgRgWQgTgYgGgeQgHgbAFgcQgPADgQACQgpAEgogHQgqgHgmgTQglgRgegbIgPgOQgdgdgUgiQgVglgJgpQgKgoAAgpQABgqAKgnQALgpAVglQAVgjAdgcQAegdAkgTQAbgPAegJQgkgQgfgaIgSgRQgdgdgUgkQgVglgKgpQgKgoACgpQACgoAMgnQANgpAXgjQAXgiAfgbQAfgbAkgUQAkgUApgKQAogJAqACQApACAnAMIAKAEQAAgmAKglQAKglASgiIADgGIAKgNIAJgMIAHgKIAHgIIAGgIIAFgGIAFgGIABgBIACgBIABgCQAdgdAkgUQAlgVAqgKQAqgKArACQArADApAOQAmAOAhAXQAqAdAdAqQAXAfAOAkQAGAOADAOIADARIACAQIABAGQAageAhgWQAjgXApgMQAngMApgCQApgBApAKQAoAJAlASQAlASAeAbQAfAcAXAjQAWAjAMAnQAMAoABApQABAqgKAoQgKAlgTAiQAUgJAUgFQAogLApAAQApABAnALQAnAMAjAWQAjAVAeAdQAeAdAVAlQAVAjAKAnQALApgBApQgBAogKAmQAeAEAcAKQAoAPAiAYQAhAYAaAhQARAVAPAXQAcAxAJA3QAIAzgJAyQgJAwgYArIgFAIIAagFQAogFApAFQApAGAnAQQAQAIAQAJIAmAcQARANAQAQQAQAPAMATQAMAVAJAWIATAvQAMArgBArQgBAsgOAqQgHAYgMAWQAVgKAXgHQAngMApgCQAqgBAoAKQAYAHAXAJIgBAAQgbgOgYgUQgYgUgVgXQgUgXgNgdQgNgbgLgdIgCgFIgCgRIgCgQIgCgRIgDgRIgBgNQAAgsAMgqQAMgpAYgkQAXgkAggcQAfgaAkgRQAfgOAhgIQApgJApADQArACApAOQAbAKAYAOIANAJIANAKIAOALIANAKIAIAGIAKALIAKAMIAKAMIAIAMIAHAKIABACIACADIACACQAWAmAKAqQAKAqgCArIgBAQQAiAFAgAMQAnAPAiAZQAhAZAZAhQAZAhAQAoQAPAnAEAqQAEApgGApQgHAqgSAmQgRAlgbAfIgMANQAVARASATQAaAdASAjQATAkAIApQAIAqgDArQgEArgQAoQgIAWgMAVIgIAKIgKAOIgLANIgKANIgIALQgSASgVAOQgVAPgWALQgVALgXAHQgcAJgdADQgXADgYAAIgLAAQgkAAgkgJgATOMyIABgBIgBgBIAAACgAQqIcQAjATAeAaIAAgEIABgbIgIgBIgRgDIgNgBIgdgKIABABg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:mask_11_graphics_0,x:97.7136,y:212.4324}).wait(1).to({graphics:mask_11_graphics_1,x:79.6723,y:187.6757}).wait(1).to({graphics:mask_11_graphics_2,x:80.276,y:159.1105}).wait(1).to({graphics:mask_11_graphics_3,x:100.8,y:144.6779}).wait(1).to({graphics:mask_11_graphics_4,x:127.6543,y:144.6779}).wait(1).to({graphics:mask_11_graphics_5,x:147.4042,y:144.6779}).wait(1).to({graphics:mask_11_graphics_6,x:160.0132,y:144.6779}).wait(1).to({graphics:mask_11_graphics_7,x:176.329,y:164.5457}).wait(1).to({graphics:mask_11_graphics_8,x:196.95,y:185.2768}).wait(1).to({graphics:mask_11_graphics_9,x:223.526,y:196.9098}).wait(1).to({graphics:mask_11_graphics_10,x:223.526,y:196.9098}).wait(1).to({graphics:mask_11_graphics_11,x:223.526,y:196.9098}).wait(69));

	// 帽沿
	this.instance_20 = new lib.CachedBmp_9();
	this.instance_20.setTransform(69.35,88.6,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(80));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(206,205.1,637.2,535.6999999999999);
// library properties:
lib.properties = {
	id: 'F1A12190BFD54B4688D951A67B5CCBE3',
	width: 640,
	height: 480,
	fps: 15,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Image.png?1734401383854", id:"Image"},
		{src:"images/手繪_atlas_1.png?1734401383786", id:"手繪_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F1A12190BFD54B4688D951A67B5CCBE3'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;