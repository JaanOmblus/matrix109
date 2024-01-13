import { Component, OnInit } from '@angular/core';
import { environment, myNewConstant } from '../../environments/environments';

@Component({
  selector: 'matrix-inclcktw',
  templateUrl: './matrixInClckTw.component.html',
  styleUrls: ['./matrixInClckTw.component.css']
})
export class InClckTwComponent implements OnInit {

modelStruct: any;
lahtemudel: any;
lahtemudelConst: any;


  constructor() { //Siin toob sisse
    this.modelStruct = environment.modelStruktuur;
    //this.lahtemudel = parseFloat(this.modelStruct)*100;
    }

    ngOnInit() {  
      this.lahtemudel = ((parseFloat(this.modelStruct)*100) - 100)*-1;
      this.lahtemudelConst = this.lahtemudel;
      localStorage.setItem("jareldusseisukoht", this.jareldusseisukoht);

      //console.log("This lahtemudel:", this.lahtemudel);
  } 

  elukas: any;
  elukas2: any;
  private getValue() {
    this.elukas = localStorage.getItem("elujoud");
    this.elukas2 = 20*parseFloat(this.elukas);
    return this.elukas2;
  }


  gaugeV () {
    this.lahtemudel = parseFloat(this.modelStruct)*100;

    return this.lahtemudel;
  }

    //gconsole.log("lahtemudel:", this.lahtemudel);
  currentValue=0
  gaugeType = "arch";
  //gaugeValue = 58;
  gaugeLabel = "Kohustuste seis";   //pöördväärtus bilansi struktuuri mudelilt, selgitus lisada
  gaugeAppendText = "%";
  gaugeSize = 270;
  //gaugeType = "arch";
  gaugeCap = "round";
  gaugeThick = 27;
  gaugeForegroundColor = 'red';
  gaugeBackgroundColor = 'rgb(30, 20, 75, 0.96)';
  gaugeDuration = 3000;
  gaugeAnimate = true;
  gaugeAriaLabel = "bla";
 // gaugeMargin = 20;

  thresholdConfig = {
    '1': {color: 'green'},
    '41': {color: 'yellow'},
    '81': {color: 'red'}
};

storagesseGauge: any;
//jareldusseisukoht: any;
jareldusseisukoht = "Te ei ole veel kohustuste seisu muutmisega tegelenud."
probleemseisukoht: any;
probleemseisukohtuus: any;

gaugeChange(event){
  this.lahtemudel=this.currentValue; 
  this.storagesseGauge = this.currentValue;
  localStorage.setItem("gauge", this.storagesseGauge); 

  if (this.currentValue <= this.lahtemudelConst) {
    this.jareldusseisukoht = 'Vähendasite kohustusi võrreldes lähteolukorraga. Kohustuste vähendamine saab aset leida ainult teatud eelduste täidetuse korral.';
    //localStorage.setItem("jareldusseisukoht", this.jareldusseisukoht);
  }
  else if (this.currentValue > this.lahtemudelConst) {
    this.jareldusseisukoht = 'Suurendasite kohustusi võrreldes lähteolukorraga. Kohustusi saab suurendada vaid siis, kui keegi annab täiendavat raha ja ettevõtet aitab.';
    //localStorage.setItem("jareldusseisukoht", this.jareldusseisukoht);
  }

  localStorage.setItem("jareldusseisukoht", this.jareldusseisukoht);

  this.probleemseisukoht = localStorage.getItem("gauge");
  this.probleemseisukohtuus = this.probleemseisukoht+this.jareldusseisukoht;
  localStorage.setItem("uusprobleem", this.probleemseisukohtuus);

}

}


//https://mohammedfahimullah.medium.com/how-to-create-a-gauge-in-angular-5b1908139575

//https://www.npmjs.com/package/ngx-gauge

//https://www.npmjs.com/package/ngx-gauge