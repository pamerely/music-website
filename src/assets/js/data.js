import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var timer
export default new Vuex.Store({
	state:{
		list:[
					{
						src:'/src/assets/images/audio/1348206807654_.jpg',
						con:'热门歌手'
					},
					{
						src:'/src/assets/images/audio/1354616464574_.jpg',
						con:'华语男'
					},
					{
						src:'/src/assets/images/audio/1354616488073_.jpg',
						con:'华语女'
					},
					{
						src:'/src/assets/images/audio/1354616497323_.jpg',
						con:'华语组合'
					},
					{
						src:'/src/assets/images/audio/1354616549763_.jpg',
						con:'日韩男'
					},
					{
						src:'/src/assets/images/audio/1354616561223_.jpg',
						con:'日韩女'
					},
					{
						src:'/src/assets/images/audio/1354616506773_.jpg',
						con:'欧美男'
					},
					{
						src:'/src/assets/images/audio/1354616520070_.jpg',
						con:'欧美女'
					},
					{
						src:'/src/assets/images/audio/1354616529812_.jpg',
						con:'欧美组合'
					},
					{
						src:'/src/assets/images/audio/1354616539478_.jpg',
						con:'其他'
					}	
				],
		p:["盗墓笔记之3云顶天宫","盗墓笔记之1七星鱼王宫","盗墓笔记之..."],
		title:'周杰伦',
		arr:['单曲','专辑','MV'],
		list1:['词：张楚翘','曲：伍乐城','抱一抱','就当作从没有在一起','好不好','要解释都已经来不及','算了吧','我付出过什么没关系','我忽略自己','就因为遇见你',
				'没办法','好可怕','那个我','不像话','一直奋不顾身','是我太傻','说不上爱别说谎','就一点喜欢','说不上恨别纠缠','别装作感叹','就当作我太麻烦','不停让自己受伤',
				'我告诉我自己','感情就是这样','怎么一不小心太疯狂','抱一抱','在好好觉悟不能长久','好不好','有亏欠我们都别追究','算了吧','我付出再多都不足够','我终于得救',
				'我不想再献丑','没办法 不好吗','一直勉强相处','总会累垮','说不上爱被说谎','就一点喜欢','说不上恨别纠缠','别装作感叹','就当作我太麻烦','不停让自己受伤',
				'我告诉我自己','感情就是这样','怎么不一小心太疯狂','别后悔','就算错过','在以后','你少不免想起我','还算不错','当我不在你会不会难过','你够不够我这样洒脱',
				'说不上爱别说谎','就一点喜欢','说不上恨别纠缠','别装作感叹','将一切都体谅','将一切都原谅','我尝试找答案','二答案很简单','简单得很遗憾','因为成长','我们逼不得已要习惯',
				'因为成长','我们忽而间说散就散'],
		data:[
					{
						src:'/src/assets/images/audio/3695.jpg',
						title:'偿还',
						name:'邓丽君 -《爱人》'
					},
					{
						src:'/src/assets/images/audio/3663.jpg',
						title:'21',
						name:'Adele -《Someone Like You》'
					},
					{
						src:'/src/assets/images/audio/3654.jpg',
						title:'The Dark Side Of The Moon',
						name:'Pink Floyd -《Breathe》'
					},
					{
						src:'/src/assets/images/audio/3651.jpg',
						title:'Thriller',
						name:'Michael Jackson -《Beat It》'
					},
					{
						src:'/src/assets/images/audio/3668.jpg',
						title:'Hotel California',
						name:'Eagles -《Hotel California》'
					},
					{
						src:'/src/assets/images/audio/3683.jpg',
						title:'Nevermind',
						name:'Nirvana -《Smells Like Teen Spirit》'
					},
					{
						src:'/src/assets/images/audio/3685.jpg',
						title:'Brown Sugar',
						name:'The Rolling Stones -《Brown Sugar》'
					},
					{
						src:'/src/assets/images/audio/3676.jpg',
						title:'Watermark',
						name:'Enya -《Watermark》'
					},
					{
						src:'/src/assets/images/audio/3655.jpg',
						title:'Sounds Of Silence',
						name:'Simon & Garfunkel -《The Sounds Of Silence》'
					},
					{
						src:'/src/assets/images/audio/3667.jpg',
						title:'The Joshua Tree',
						name:'U2 -《With Or Without You》'
					},
					{
						src:'/src/assets/images/audio/3666.jpg',
						title:'OK Computer',
						name:'Radiohead -《Let Down》'
					},
					{
						src:'/src/assets/images/audio/3669.jpg',
						title:'Pump',
						name:'Aerosmith -《F.I.N.E》'
					},
					{
						src:'/src/assets/images/audio/3673.jpg',
						title:'Kill Em All',
						name:'Metallica -《The Four Horsemen》'
					},
					{
						src:'/src/assets/images/audio/3664.jpg',
						title:'Back In Black',
						name:'AC/DC -《Back in Black》'
					},
					{
						src:'/src/assets/images/audio/3677.jpg',
						title:'Silk Road',
						name:'Kitaro -《Silk Road》'
					},
					{
						src:'/src/assets/images/audio/3678.jpg',
						title:"'Singin' The Blues",
						name:'B.B. King -《Everyday I Have The Blues》'
					},
					{
						src:'/src/assets/images/audio/3679.jpg',
						title:'MCMXC a.D.',
						name:'Enigma -《Principles Of Lust》'
					},
					{
						src:'/src/assets/images/audio/3680.jpg',
						title:'Legend - The Best Of Bob Marley And The Wailers',
						name:'Bob Marley & The Wailers -《I Shot The Sheriff》'
					},
					{
						src:'/src/assets/images/audio/3682.jpg',
						title:'Tin Drum',
						name:'Japan -《Canton》'
					},
					{
						src:'/src/assets/images/audio/3658.jpg',
						title:'Back In Black',
						name:'Adele -《Someone Like You》'
					},
					{
						src:'/src/assets/images/audio/3648.jpg',
						title:'《Smells Like Teen Spirit》',
						name:'Aerosmith -《F.I.N.E》'
					},
					{
						src:'/src/assets/images/audio/3649.jpg',
						title:'The Four Horseme',
						name:'Someone Like You'
					}
				],
				show:true,
				time:'00:00',
				b:"05:33",
				mp3:["/src/assets/images/video/gnzw.mp3","/src/assets/images/video/mubuzhuanjing.mp3",
				"/src/assets/images/video/shijianshijin.mp3","/src/assets/images/video/tongyanwuji.mp3",
				"/src/assets/images/video/wangpaiyuanjia.mp3","/src/assets/images/video/wuyunzhong.mp3",
				"/src/assets/images/video/xiaorenwu.mp3","/src/assets/images/video/xingqiuzhuiluo.mp3",
				"/src/assets/images/video/daoshu.mp3","/src/assets/images/video/piaoxiangbeifang.mp3"]
	},
	mutations:{
		//控制播放暂停图片的显示和隐藏
		play(state){
			state.show=!state.show
		},
		show(state){
			state.show=false
		},
		//首页底部的播放
		playTime(state){
			timer=setInterval(function () {
					
		            var currentTime = timeFormat(audio.currentTime);
		            var timeAll = timeFormat(TimeAll());
		           state.time=currentTime  ;
		         	state.b = timeAll;
		            
		            }, 1000);
		            
				//补零函数
			    function timeFormat(number) {
			        var minute = parseInt(number / 60);
			        var second = parseInt(number % 60);
			        minute = minute >= 10 ? minute : "0" + minute;
			        second = second >= 10 ? second : "0" + second;
			        return minute + ":" + second;
			    } 
			    function TimeAll() {
			        return audio.duration; 
			    }
		},
		//暂停函数
		stopTime(state){
			clearInterval(timer)
		}
		
	}
})
