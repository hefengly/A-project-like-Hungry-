<template>
  <div class="cartcontrol">
			<transition name="move">
      <div class="cart-decrease" v-show="food.count>0" @click="decreaseCart">
        <div class="inner icon-dec">--</div>
      </div>
			</transition>
      <div class="cart-count" v-show="food.count>0">
				{{food.count}}
      </div>
      <div class="cart-add" @click="addCart">
				<div class="icon-add">+</div>
      </div>
  </div>
</template>

<script type="text/acmascript-6">
	import Vue from 'vue'

  export default {

		props: {
      food: {
          type: Object
      }
		},
		methods: {
			addCart(event) {
				if(!event._constructed) {
					return;
				}
				if(!this.food.count) {
					Vue.set(this.food,'count',1)
				}else {
					this.food.count++
				}
				this.$emit('listenCartcontrol',event.target);
			},
			decreaseCart(event) {
				if(!event._constructed) {
					return;
				}
				if(this.food.count) {
					this.food.count--
				}
			}
		}
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.cartcontrol
		font-size: 0
		.move-enter-active, .move-leave-active
			transition: all 0.4s linear
			.inner
				display: inline-block
				transition: all 0.4s linear
				transform: rotate(0)
		.move-enter, .move-leave-to
			opacity:0
			transform: translateX(45px)
			.inner
				transform: rotate(180deg)
		.cart-decrease
			display: inline-block
			padding: 6px
			.icon-dec
				width: 18px
				height:18px
				border:2px solid rgb(0,160,220)
				border-radius: 50%
				font-size: 20px
				text-align: center
				line-height: 18px	
				color: rgb(0,160,220)	
		.cart-count
			display: inline-block
			font-size: 10px
			width: 12px
			vertical-align: top
			padding-top: 6px
			line-height: 20px
			text-align: center
			color: rgb(147,153,159)
		.cart-add
			display: inline-block
			padding: 6px
			.icon-add
				width: 20px
				height:20px
				border-radius: 50%
				font-size: 20px
				text-align: center
				line-height: 20px
				background: rgb(0,160,220)
				color: #fff
</style>