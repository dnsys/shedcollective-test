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
                isModalOpened: false,
                successSentModal: false,
                confirmSend: false,
				payload: {}
            }
        },
		methods: {
            onChangeHandler(value, name){
                if(value !== null){
                    this.payload = {
                        ...this.payload,
                        [name]: value
                    }
				}
            },
			sendRates(){
                this.confirmSend = false;
                axios({
                    method: "post",
                    url: "https://app.fakejson.com/q",
                    data: {
                        token: "HFCH5SoEXS3eO4QfszcApA",
                        data: this.payload
					}
                }).then((resp) => {
					if(resp.status == 200){
                        this.isModalOpened = false;
                        this.successSentModal = true;
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
</style>
