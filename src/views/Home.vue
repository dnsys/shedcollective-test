<template>
	<v-container fill-height>
		<v-layout justify-center wrap align-center>
			<div style="text-align: center">
				<a href="https://shedcollective.com/" target="_blank" class="shedcollective-logo">
					<span class="shedcollective-logo__logo">
						<img src="../assets/images/logo-mark.svg" alt="">
					</span>
					<span class="shedcollective-logo__name">
						<img src="../assets/images/logo-type.svg" alt="">
					</span>
				</a>
				<div class="caption-task title">
					Test task
				</div>
				<v-btn color="primary" dark large @click="isModalOpened = true">Click here</v-btn>
			</div>
			<ModalWindow v-if="isModalOpened" @close="isModalOpened = false">
				<div slot="title">
					How did we do?
				</div>
				<p slot="paragraph">
					Please let us know how your food delievery was. It will really help us to keep improving our service!
				</p>
				<div slot="body">
					<rate-star name="rate-food" @onChangeRate="onChangeHandler">
						<div slot="rate-caption">
							How would you rate your food?
						</div>
					</rate-star>
					<rate-star name="rate-driver" @onChangeRate="onChangeHandler">
						<div slot="rate-caption">
							How would you rate your delivery driver?
						</div>
					</rate-star>
					<rate-star name="rate-experience" @onChangeRate="onChangeHandler">
						<div slot="rate-caption">
							How would you rate your overall experience?
						</div>
					</rate-star>
				</div>
				<div slot="footer">
					<button type="button" class="base-button base-button--primary" @click="confirmSend = true">
						Submit feedback
					</button>
				</div>
			</ModalWindow>
			<v-dialog v-model="confirmSend" max-width="290">
				<v-card>
					<v-card-title class="headline">Are you sure you want to send this ratings?</v-card-title>

					<v-card-text>
						<ul class="ratings-list">
							<li class="ratings-list__item" v-for="(value, key) in payload" :key="key">{{key}}: {{ value }} <span v-if="value == 1">star</span>
								<span v-else>stars</span>
							</li>
						</ul>
					</v-card-text>

					<v-card-actions>
						<v-spacer></v-spacer>

						<v-btn
								color="green darken-1"
								flat="flat"
								@click="confirmSend = false"
						>
							Disagree
						</v-btn>

						<v-btn
								color="green darken-1"
								flat="flat"
								@click="sendRates"
						>
							Agree
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
			<ModalWindow v-if="successSentModal" @close="successSentModal = false">
				<div slot="title">
					Success!
				</div>
				<p slot="paragraph">
					Thank you for honest evaluation!
				</p>
				<div slot="body" style="text-align: center">
					<img src="../assets/images/success.svg" alt="">
				</div>
			</ModalWindow>
		</v-layout>
	</v-container>
</template>

<script>
    import ModalWindow from '../components/ModalWindow';
    import RateStar from '../components/RateStars';
	import axios from 'axios';
    export default {
        components: {
            ModalWindow,
			RateStar
        },
        data(){
            return{
                isModalOpened: false, // main modal with ratings
                successSentModal: false, // modal after success request
                confirmSend: false, // middle modal. to confirm sending data
				payload: {}
            }
        },
		methods: {
            onChangeHandler(value, name){ // method for getting data from rating component by custom event
                if(value !== null){ // won't save rating data if it's null
                    this.payload = {
                        ...this.payload,
                        [name]: value
                    }
				}
            },
			sendRates(){ // method that will send server request with ratings and get response
                this.confirmSend = false; // close confirmation modal after click "agree"
                axios({ // sending post request
                    method: "post",
                    url: "https://app.fakejson.com/q",
                    data: {
                        token: "HFCH5SoEXS3eO4QfszcApA",
                        data: this.payload // sending payload with ratings data { 'rating-name': value }
					}
                }).then((resp) => {
					if(resp.status == 200){
                        this.isModalOpened = false; // close main modal with stars after success sending
                        this.successSentModal = true; // show success message
                        this.payload = {} // clear payload data
					}
                });

            }
		}
    }
</script>

<style lang="sass">
.ratings-list
	margin: 0
	padding: 0
	list-style: none
	&__item
		margin-bottom: 15px
		position: relative
		&:after
			content: ''
			position: absolute
			bottom: -5px
			left: 0
			width: 100%
			height: 3px
			background: linear-gradient(to right, #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%)
.shedcollective-logo
	display: flex
	align-items: center
	margin-bottom: 10px
	&__logo
		img
			transition: transform .4s ease-in-out
			.shedcollective-logo:hover &
				transform: rotate(180deg)
	&__name
		margin-left: 1rem

.caption-task
	font-size: 23px
	text-align: center
	margin-bottom: 30px
</style>
