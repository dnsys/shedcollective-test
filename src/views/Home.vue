<template>
	<v-container fill-height>
		<v-layout justify-center wrap align-center>
			<v-flex>
				<div class="title">Rate our delivery service, please</div>
			</v-flex>
			<v-btn color="primary" dark large @click="isModalOpened = true">Click here</v-btn>

			<ModalWindow v-if="isModalOpened" @close="isModalOpened = false">
				<div slot="title">
					How did we do?
				</div>
				<p slot="paragraph">
					Please let us know how your food delievery was. It will really help us to keep improving our service!
				</p>
				<div slot="body">
					<rate-star name="rate-food" @setRate="getValue">
						<div slot="rate-caption">
							How would you rate your food?
						</div>
					</rate-star>
					<rate-star name="rate-driver" @setRate="getValue">
						<div slot="rate-caption">
							How would you rate your delivery driver?
						</div>
					</rate-star>
					<rate-star name="rate-experience" @setRate="getValue">
						<div slot="rate-caption">
							How would you rate your overall experience?
						</div>
					</rate-star>
				</div>
				<div slot="footer">
					<button type="button" class="base-button base-button--primary">
						Submit feedback
					</button>
				</div>
			</ModalWindow>
		</v-layout>
	</v-container>
</template>

<script>
    import ModalWindow from '../components/ModalWindow';
    import RateStar from '../components/RateStars'
    export default {
        components: {
            ModalWindow,
			RateStar
        },
        data(){
            return{
                isModalOpened: false
            }
        },
		methods: {
            getValue(value, name){
                console.log(value, name)
            }
		}
    }
</script>

<style>

</style>
