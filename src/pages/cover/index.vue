<template>
  <div class="wrapper">
    <swiper :indicator-dots="index !== 4" indicator-color indicator-active-color="#63404a" @change="bindLastPage">
    	<swiper-item>
    		<img src="/static/images/cover/0.jpg" />
    	</swiper-item>
    	<swiper-item>
    		<img src="/static/images/cover/1.jpg" />
    	</swiper-item>
    	<swiper-item>
    		<img src="/static/images/cover/2.jpg" />
    	</swiper-item>
    	<swiper-item>
    		<img src="/static/images/cover/3.jpg" />
    	</swiper-item>
    	<swiper-item>
    		<img src="/static/images/cover/4.jpg" />
    	</swiper-item>
    </swiper>
    <button class="startBtn" v-show="index === 4" @click="toIndex">开始体验</button>
  </div>
</template>

<script>

export default {
	data(){
		return {
			index: 0,
		}
	},
	methods:{
		bindLastPage(e){
			console.log(e.target.current)
			this.index = e.target.current;
		},
		toIndex(){
			wx.reLaunch({
				url: '/pages/index/main'
			})
		}
	}
}
</script>

<style scoped lang="less">
.wrapper{
	width: 100%;
	height: 100%;
	swiper{
		width: 100%;
		height: 100%;
		swiper-item{
			width: 100%;
			height: 100%;
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
	.startBtn{
		width: 280rpx;
		height: 80rpx;
		text-align: center;
		line-height: 80rpx;
		position: absolute;
		bottom: 20rpx;
		left: 50%;
		margin-left: -140rpx;
		background-color: rgba(255,255,255, 0.5);
	}
}
</style>