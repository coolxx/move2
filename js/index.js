document.addEventListener('DOMContentLoaded',function (){
	var oBtn1=document.querySelector('.btnbox');
	var aBtn1=oBtn1.querySelectorAll('li');
	var aA=oBtn1.querySelectorAll('a');
	var aBox1=document.querySelectorAll('.divbox');
	var aBtn2=document.querySelectorAll('.cont7_cont a');
	var oBtn3=document.querySelector('.wxtc');
	var show=document.querySelector('.zg_wxtk');
	var close=document.querySelector('.zg_wxtk');
	for(var i=0;i<aBtn1.length;i++){
		aBtn1[i].index=i;
		aBtn1[i].addEventListener('touchstart',function (ev){
			for(var i=0;i<aBtn1.length;i++){
				aBox1[i].style.display='none';
				aBtn1[i].className='';
				aA[i].style.color='#fff'
			}
			aBox1[this.index].style.display='block';
			this.className='on';
			aA[this.index].style.color='#fcff00'
		},false);
	};
	for(var i=0;i<aBtn2.length;i++){
		aBtn2[i].addEventListener('touchstart',function (ev){
			for(var i=0;i<aBtn2.length;i++){
				aBtn2[i].className='';
			}
			this.className='on2';
		},false);
	}
	// var oBtn=document.querySelector('.head_a2');
	// var oBtn_nav=document.querySelector('.h_choose');
	// var aBtn_nav=oBtn_nav.querySelectorAll('li');
	// var aCh_item=document.querySelectorAll('.ch_item');
	// oBtn.addEventListener('touchstart',function (ev){
	// 	if(oBtn_nav.style.display=='none'){
	// 		console.log(1)
	// 		oBtn_nav.style.display='block';
	// 		aCh_item[0].style.display='block';
	// 		for(var i=1;i<aBtn_nav.length;i++){
	// 			aBtn_nav[i].index=i;
	// 			aBtn_nav[i].addEventListener('touchstart',function (ev){
	// 				for(var j=0;j<aCh_item.length;j++){
	// 					aBtn_nav[j].className='';
	// 					aCh_item[j].style.display='none'
	// 				}
	// 				aBtn_nav[5].className='';
	// 				this.className='active';
	// 				aCh_item[this.index-1].style.display='block'
	// 			},false)
	// 		}
	// 	};	
	// },false);
},false);