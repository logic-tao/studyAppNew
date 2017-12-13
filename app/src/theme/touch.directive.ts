import { Component,Directive, ElementRef, Renderer,Input,Output,EventEmitter} from '@angular/core';

@Directive({
    selector: '[touchDirective]',
})
export class touchDirective {
    onhold:any=false;
    touchTimes:any;
    touchTag:any;
    countTime:any=0;
    touchElem:any;
    startPos:any;
    endPos:any;
    isScrolling:any;
    @Input("sign") sign:any=null;
    @Output("SlidingDirection") SlidingDirection = new EventEmitter<any>();
    @Output("UpadaDirection") UpadaDirection = new EventEmitter<any>();
    constructor(elem: ElementRef, renderer: Renderer) {
        this.touchElem=elem.nativeElement;
        console.log('========begin========')
        console.log(this.sign)
    }
    touchfunction=()=>{
        var event = event || window.event;

        // var oInp = document.getElementById("inp");
        switch(event.type){
        case "touchstart":
        this.touchTag="touchstart"
        console.log('========touchstart========')
        this.SlidingDirection.emit("touchstart")
        console.log(this.sign)
        this.bootTimer()
            // if(this.sign!==null){
            //     this.touchTag="touchstart"
            //     this.countTime=0;
            // }
            this.startPos = {x:event.touches[0].clientX,y:event.touches[0].clientY,time:+new Date};
            // oInp.innerHTML = "Touch started (" + event.touches[0].clientX + "," + event.touches[0].clientY + ")";
            break;
        case "touchend":
        this.touchTag="touchend"
                console.log('========touchend========')
                this.SlidingDirection.emit("touchend")
                console.log(this.sign)
                if(this.countTime && this.countTime.cancelFn){
                    this.countTime.cancelFn(this.countTime)
                }
                // this.SlidingDirection.emit('touchend')
            // if(this.sign!==null){
            //     this.touchTag="touchend"
            //     this.onhold=false;
            // }else{
            //     if(this.isScrolling==0&&this.endPos.x<-50){//向左77777
            //         this.SlidingDirection.emit('left')
            //     }
            //     if(this.isScrolling==0&&this.endPos.x>50){//向右633355
            //         this.SlidingDirection.emit('right')
            //     }
            // }

            // oInp.innerHTML = "<br>Touch end (" + event.changedTouches[0].clientX + "," + event.changedTouches[0].clientY + ")";

            break;
        case "touchmove":
            this.touchTag="touchmove"
            console.log('touchmove')
            if(this.countTime && this.countTime.cancelFn){
                this.countTime.cancelFn(this.countTime)
            }
            // if(this.sign!=null){
            //     this.touchTag="touchmove"
            // }else{
            //     var touch = event.targetTouches[0];
            //     this.endPos = {x:touch.pageX - this.startPos.x,y:touch.pageY - this.startPos.y};
            //     this.isScrolling = Math.abs(this.endPos.x) < Math.abs(this.endPos.y) ? 1:0;    //isScrolling为1时，表示纵向滑动，0为横向滑动44
            // }
            break;
        }
    }
    bootTimer(){
         this.countTime = setTimeout(()=>{
            if(this.touchTag!="touchend"){
                console.log('=====bootTimer==')
                console.log(this.SlidingDirection)
                console.log(this.UpadaDirection)
                // if(this.SlidingDirection.observers.length!=0){this.SlidingDirection.emit(this.sign)}
                // if(this.UpadaDirection.observers.length!=0){this.UpadaDirection.emit(this.sign)}
            }
         },1000);
    }
    ngAfterViewInit() {
        this.init()
        console.log('After view init');
    }
    init(){
    this.touchElem.addEventListener('touchstart',this.touchfunction);
    this.touchElem.addEventListener('touchmove',this.touchfunction);
    this.touchElem.addEventListener('touchend',this.touchfunction);
    }
  remove(){
    this.touchElem.removeEventListener('touchstart',this.touchfunction);
    this.touchElem.removeEventListener('touchmove',this.touchfunction);
    this.touchElem.removeEventListener('touchend',this.touchfunction);
  }
}