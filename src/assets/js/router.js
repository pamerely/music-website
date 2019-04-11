import VueRouter from 'vue-router'

// index
import recommend from '../../component/index/recommend.vue'
import rank from '../../component/index/rank.vue'
import classify from '../../component/index/classify.vue'
import singer from '../../component/index/singer.vue'
import mv from '../../component/index/mv.vue'
import login from '../../component/index/login.vue'
import register from '../../component/index/register.vue'
import individual from '../../component/index/individual.vue'


// recommend
import search from '../../component/recommend/search.vue'
import marvel from '../../component/recommend/marvel.vue'
import audio from '../../component/recommend/audio.vue'

// individual
import mySong from '../../component/individual/mySong.vue'
import favorite from '../../component/individual/favorite.vue'

//other
import audioCon from '../../component/other/audiocon.vue'
import mvplay from '../../component/other/MVplay.vue'
import singerlist from '../../component/other/singerlist.vue'
import singlistPlay from '../../component/other/singlist-play.vue'
import SingerDetail from '../../component/other/singerDetail.vue'

// rank
import rankhot from '../../component/rank/rank-hot.vue'
import play from '../../component/rank/play.vue'

export default new VueRouter({
	routes:[
		{
			path:`/recommend`, 
			component:recommend,
			name:'recommend',
	
		},
		{
			path:`/search`,
			component:search
		},
		{
			path:`/rank`,
			component:rank
		},
		{
			path:`/classify`,
			component:classify
		},
		{
			path:`/singer`,
			component:singer,
			children:[
				{
					path:`:id`,
					component:SingerDetail
				}
			]
		},
		{
			path:`/mv`,
			component:mv
		},
		{
			path:`/marvel`,
			component:marvel
		},
		{
			path:`/audio`,
			component:audio
		},
		{
			path:`/mv-play`,
			component:mvplay
		},
		{
			path:`/rank-hot`,
			component:rankhot
		},
		{
			path:`/audio-con`,
			component:audioCon
		},
		{
			path:`/play`,
			component:play
		},
		{
			path:`/singerlist`,
			component:singerlist
		},
		{
			path:`/singerlist-play`,
			component:singlistPlay
		},
		{
			path:`/login`,
			component:login,
			name:'login'
		},
		{
			path:`/register`,
			component:register
		},
		{
			path:`/individual`,
			component:individual,
			name:'individual'
		},
		{
			path:`/mySong`,
			component:mySong
		},
		{
			path:`/favorite`,
			component:favorite
		},
		{
			path:`/*`,
			redirect:`/recommend`
		}
	]
})
