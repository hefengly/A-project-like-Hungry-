<template>
  <span v-show="iconType>=0" class="icon" :class="classMap[iconType]+'-'+iconNumber"></span>
</template>

<script type="text/acmascript-6">
  export default {
    props: {
      iconType: {
				type: Number
			},			
			iconSize: {
				type: Number
			},
			iconNumber: {
				type: Number
			}
		},
		created() {
			this.classMap = ['decrease',"discount",'special','guarantee','invoice']
		}
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import "../../common/stylus/mixin.styl"


	.icon
		display: inline-block
		vertical-align:top
		margin-right:4px
		background-size: 12px 12px
		background-repeat: no-repeat
		&.decrease-1
			width:12px
			height:12px
			bg-image("decrease_1")
		&.discount-1
			width:12px
			height:12px		
			bg-image('discount_1')
		&.guarantee-1
			width:12px
			height:12px		
			bg-image('guarantee_1')
		&.invoice-1
			width:12px
			height:12px		
			bg-image('invoice_1')
		&.special-1
			width:12px
			height:12px		
			bg-image('special_1')
		&.decrease-2
			width:18px
			height:18px
			bg-image('decrease_2')
		&.discount-2
			width:18px
			height:18px
			bg-image('discount_2')
		&.guarantee-2
			width:18px
			height:18px
			bg-image('guarantee_2')
		&.invoice-2
			width:18px
			height:18px
			bg-image('invoice_2')
		&.special-2
			width:18px
			height:18px
			bg-image('special_2')
		&.decrease-3
			width:12px
			height:12px
			bg-image('decrease_3')
		&.discount-3
			width:12px
			height:12px		
			bg-image('discount_3')
		&.guarantee-3
			width:12px
			height:12px		
			bg-image('guarantee_3')
		&.invoice-3
			width:12px
			height:12px		
			bg-image('invoice_3')
		&.special-3
			width:12px
			height:12px		
			bg-image('special_3')			
</style>