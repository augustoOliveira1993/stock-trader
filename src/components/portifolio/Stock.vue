<template>
	<v-flex class="pr-3 pb-3" xs12 md6 lg4>
		<v-card class="blue darken-3 white--text">
			<v-card-title class="headline">
				<strong>
					{{ stock.name }}
					<small>
						(Preço: {{stock.price | currency }} | Qtd: {{ stock.quantidade}})
					</small>
				</strong>
			</v-card-title>
		</v-card>
		<v-card>
			<v-container fill-height>
				<v-text-field
					label="Quantidade"
					type="number"
					v-model.number="quantidade"
					:error="insufficientQuantidade || !Number.isInteger(quantidade)"
				/>
				<v-btn @click="sellStock"
					:disabled="insufficientQuantidade || quantidade <= 0 || !Number.isInteger(quantidade)"
					class="blue darken-3 white--text">{{ insufficientQuantidade ? 'insuficiente':'Vender'}}</v-btn>
			</v-container>
		</v-card>
	</v-flex>
</template>

<script>
import {mapActions} from 'vuex'
export default {
	props: ['stock'],
	data() {
		return {
			quantidade: 0
		}
	},
	computed: {
		insufficientQuantidade() {
			return this.quantidade > this.stock.quantidade
		}
	},
	methods: {
		...mapActions({sellStockAction: 'sellStock'}),
		sellStock() {
			const order = {
				stockId: this.stock.id,
				stockPrice: this.stock.price,
				quantidade: this.quantidade
			}
			this.sellStockAction(order)
			// this.$store.dispatch('sellStock', order)
			this.quantidade = 0
		}
	}
}
</script>

<style>

</style>

