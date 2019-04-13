<template>
  <section>
    <div class="search-top" v-show="searchTop">
      <img src="../../assets/images/recommend/back.png" @click="back()" />
      <span>搜索</span>
    </div>
    <div class="search-box"> 
      <i class="icon-search">
        <img src="../../assets/images/recommend/seach.png" />
      </i>
      <input ref="query" v-model="query" class="box" :placeholder="placeholder"/>
      <i @click="clear" v-show="query" class="icon-dismiss"></i>
    </div>
  </section>
  
</template>

<script type="text/ecmascript-6">
  import {debounce} from '../../common/js/util'

  export default {
    props: {
      placeholder: {
        type: String,
        default: '搜索歌曲、歌手'
      },
      searchTop: {
        type: Boolean,
        default:true
      }
    },
    data() {
      return {
        query: ''
      }
    },
    methods: {
      clear() {
        this.query = ''
      },
      setQuery(query) {
        this.query = query
      },
      blur() {
        this.$refs.query.blur()
      },
      back(){
				this.$router.go(-1)
			}
    },
    created() {
      this.$watch('query', debounce((newQuery) => {
        this.$emit('query', newQuery)
      }, 200))
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable"

  .search-top
    margin-bottom: 20px
    height: 40px
    background $color-background
    padding:3px 10px
    line-height: 40px
    position: relative
    img 
      width 30px
      height: 30px
      display: inline-block
      vertical-align: middle
    span 
      display: inline-block
      position: absolute 
      left 50%
      margin-left: -15px
      font-size: $font-size-large
  .search-box
    display: flex
    align-items: center
    box-sizing: border-box
    width: 90%
    height: 40px
    background: $color-highlight-background
    border-radius: 6px
    padding: 40px 20px 20px
    margin: 0 5% 
    .icon-search
      font-size: 24px
      color: $color-background
      margin-top: -10px
      img
        width: 26px
        height: 26px
    .box
      flex: 1
      margin: -10px 5px 0px
      line-height: 18px
      background: $color-highlight-background
      color: $color-text
      font-size: $font-size-medium
      border: none
      border-bottom: 1px solid #333
      &::placeholder
        color: $color-text-d
    .icon-dismiss
      font-size: 16px
      color: $color-background
</style>