<template>
	<transition name="modal">
		<div class="main-modal">
			<div class="main-modal__overlay" @click="close">
				<div class="main-modal__wrapper">
					<div class="main-modal__container" @click.stop>
						<button type="button" class="main-modal__close" @click="close">
							<span></span>
							<span></span>
						</button>

						<div class="main-modal__header">
							<div class="main-modal__title">
								<slot name="title">
									Default Header
								</slot>
							</div>
							<div class="main-modal__paragraph">
								<slot name="paragraph"></slot>
							</div>
						</div>

						<div class="main-modal__body">
							<slot name="body">

							</slot>
						</div>

						<div class="main-modal__footer">
							<slot name="footer">
								<!--<v-btn color="primary" dark>Default button</v-btn>-->
							</slot>
						</div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
    methods: {
        close(){
            this.$emit('close');
		}
	}
}
</script>

<style lang="sass">
	@import "../assets/sass/mixins/_media.scss"
	.main-modal
		color: rgba(29, 29, 29, 0.98)
		&__overlay
			position: fixed
			z-index: 99
			top: 0
			right: 0
			bottom: 0
			left: 0
			width: 100%
			background-color: rgba(0, 0, 0, .5)
			transition: opacity .3s ease
			overflow: auto

		&__wrapper
			padding: 50px 20px

		&__container
			max-width: 645px
			border-radius: 8px
			box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.15), 0 14px 28px 0 rgba(0, 0, 0, 0.15)
			background-color: #fcfcfc
			transition: all .3s ease
			margin: 0 auto
			padding: 75px 80px
			position: relative
			+max-w(540)
				padding: 50px 55px
			+max-w(480)
				padding: 30px 25px

		&__close
			width: 46px
			height: 46px
			background: #000000
			border-radius: 50%
			position: absolute
			top: -10px
			right: -10px
			transition: transform .3s ease-in-out
			span
				position: absolute
				display: block
				background: #fff
				width: 5px
				height: 22px
				left: 21px
				top: 12px
				+max-w(540)
					left: 15px
					top: 7px
				&:nth-child(1)
					transform: rotate(45deg)
				&:nth-child(2)
					transform: rotate(-45deg)
			&:hover
				transform: scale(1.1)
				will-change: transform
			+max-w(540)
				width: 35px
				height: 35px
		&__header
			margin-bottom: 30px
			+max-w(540)
				margin-bottom: 20px

		&__title
			font-size: 36px
			line-height: normal
			text-align: center
			+max-w(540)
				font-size: 28px

		&__paragraph
			font-size: 21px
			line-height: 1.43
			text-align: center
			+max-w(540)
				font-size: 16px

		&__body
			font-size: 21px
			padding: 15px 0
			+max-w(540)
				font-size: 16px

		&__footer
			text-align: center


	/* Some trick for modal's transition animation */
	.modal-enter
		opacity: 0

	.modal-leave-active
		opacity: 0

	.modal-enter .main-modal__container,
	.modal-leave-active .main-modal__container
		transform: scale(1.1)

</style>