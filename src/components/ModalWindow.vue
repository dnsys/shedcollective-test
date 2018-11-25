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
								<slot name="paragraph">
									<p>Default paragraph</p>
								</slot>
							</div>
						</div>

						<div class="main-modal__body">
							<slot name="body">
								default body
							</slot>
						</div>

						<div class="main-modal__footer">
							<slot name="footer">
								<v-btn color="primary" dark>Default button</v-btn>
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
	.main-modal
		color: rgba(29, 29, 29, 0.98)
		&__overlay
			position: fixed
			z-index: 999
			top: 0
			right: 0
			bottom: 0
			left: 0
			width: 100%
			background-color: rgba(0, 0, 0, .5)
			transition: opacity .3s ease
			overflow: auto

		&__wrapper
			padding: 50px 0

		&__container
			max-width: 645px
			border-radius: 8px
			box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.15), 0 14px 28px 0 rgba(0, 0, 0, 0.15)
			background-color: #fcfcfc
			transition: all .3s ease
			margin: 0 auto
			padding: 75px 80px
			position: relative

		&__close
			width: 46px
			height: 46px
			background: #000000
			border-radius: 50%
			position: absolute
			top: -21px
			right: -21px
			transition: transform .3s ease-in-out
			span
				position: absolute
				display: block
				background: #fff
				width: 5px
				height: 22px
				&:nth-child(1)
					transform: rotate(45deg)
					left: 21px
					top: 12px
				&:nth-child(2)
					transform: rotate(-45deg)
					left: 21px
					top: 12px
			&:hover
				transform: scale(1.1)
				will-change: transform
		&__header
			margin-bottom: 30px

		&__title
			font-size: 36px
			line-height: normal
			text-align: center

		&__paragraph
			font-size: 21px
			line-height: 1.43
			text-align: center

		&__body
			font-size: 21px
			padding: 15px 0
			text-align: center

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