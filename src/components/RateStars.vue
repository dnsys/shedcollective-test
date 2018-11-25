<template>
	<div class="rate-star">
		<div class="rate-star__caption">
			<slot name="rate-caption" class="">Default caption</slot>
		</div>
		<div class="rate-star__inner">
			<label class="rate-star__item" v-for="(rating, index) in ratings"
				:key="index" :class="{'is-selected': ((value >= rating) && value != null), 'is-disabled': disabled}"
				v-on:click="set(rating)" v-on:mouseover="star_over(rating)" v-on:mouseout="star_out">
				<input class="rate-star__checkbox" type="radio" :value="rating" :name="name"
					v-model="value" :disabled="disabled">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 38">
					<defs>
						<path id="a" d="M0 37.627V.062h39.914v37.565z"/>
					</defs>
					<g fill="none" fill-rule="evenodd">
						<g transform="translate(0 .041)">
							<mask id="b" fill="#fff">
								<use xlink:href="#a"/>
							</mask>
							<path class="star-fill" d="M20.791.574l5.663 11.328 12.663 1.816c.763.11 1.068 1.035.516 1.566l-9.163 8.817 2.163 12.45c.13.75-.667 1.322-1.35.968l-11.326-5.878-11.326 5.878c-.682.354-1.48-.218-1.35-.968l2.164-12.45-9.163-8.817c-.552-.531-.247-1.457.515-1.566l12.663-1.816L19.123.574c.341-.682 1.327-.682 1.668 0" mask="url(#b)"/>
						</g>
						<g fill="#FFF" opacity=".5">
							<path d="M3.427 15.697a.463.463 0 0 1-.46-.393.46.46 0 0 1 .393-.52l11.027-1.582 4.978-9.957a.467.467 0 0 1 .622-.209c.23.112.326.387.212.615l-5.087 10.173a.464.464 0 0 1-.35.251L3.494 15.692a.425.425 0 0 1-.067.005M9.494 35.18a.46.46 0 0 1-.459-.537l1.539-8.852a.464.464 0 0 1 .537-.375.46.46 0 0 1 .38.53l-1.539 8.852a.463.463 0 0 1-.458.382"/>
						</g>
					</g>
				</svg>
			</label>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		'name': String,
		'id': String,
		'disabled': Boolean,
		'required': Boolean
	},
	data(){
		return {
			temp_value: null,
			ratings: [1, 2, 3, 4, 5],
			value: null
		};
	},
	methods: {
		star_over(index) {
			if (!this.disabled) {
				this.temp_value = this.value;
				return this.value = index;
			}

		},
		star_out(){
			if (!this.disabled) {
				return this.value = this.temp_value;
			}
		},
		set(value) {
			if (!this.disabled) {
				this.temp_value = value;
                this.$emit('onChangeRate', value, this.name);
				return this.value = value;
			}
        }
	}
}
</script>

<style lang="sass">
	@import "../assets/sass/mixins/_media.scss"
	.rate-star
		margin-bottom: 50px
		text-align: center
		+max-w(540)
			margin-bottom: 20px
		&__caption
			font-size: 21px
			line-height: 1.43
			margin-bottom: 25px
			+max-w(540)
				font-size: 16px
				margin-bottom: 15px
		&__item
			display: inline-block
			height: 38px
			padding: 0 10px
			+max-w(540)
				height: 30px
				padding: 0 5px
			+max-w(360)
				height: 20px
			svg
				height: 100%
				.star-fill
					transition: fill .3s ease-in-out
					fill: #E3E3E3
			&:not(.is-disabled):hover
				cursor: pointer
			&.is-disabled
				&:hover
					cursor: default
			&.is-selected
				svg
					.star-fill
						fill: #EBB82F
		&__checkbox
			position: absolute
			overflow: hidden
			clip: rect(0 0 0 0)
			height: 1px
			width: 1px
			margin: -1px
			padding: 0
			border: 0
</style>