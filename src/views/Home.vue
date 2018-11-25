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
    export default {
        components: {
            ModalWindow
        },
        data(){
            return{
                isModalOpened: false
            }
        }
    }
</script>

<style>

</style>
