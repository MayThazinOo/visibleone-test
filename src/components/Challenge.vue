<template>
	<div id="challenge">
		<div class="container">
			<div class="row">
				<div class="col-12 col-sm-6" style="margin-top: 50px;">
					<img src="../assets/img/case-study-trip-pro-our-challenges.png" width="90%" />
				</div>
				<div class="col-12 col-sm-6 xs-challenge-divider">
					<div class="content-title mb-4">our <span class="content-title--color">challenges</span></div>
					<div v-for="item in challenges" :key="item.id">
						<div class="ch-item" :class="item.id==1?'active':''" :style="{ display:item.id > 5 ? 'none':'block'}">
							<span class="ch-no">0{{item.id}}</span><span class="ch-content">{{item.content}}</span>
						</div>
					</div>
					<button type="button" class="btn ch-btn btn-sm mt-4">View More</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Challenge',
	data () {
		return {
			challenges: []
		}
	},
	mounted () {
		this.$axios.get('https://obscure-wave-62056.herokuapp.com/challenges')
		.then(response => this.challenges = response.data)
	}
	
}
</script>
<style>
#challenge {
	margin-top: 100px;
}
#challenge .container {
	max-width: 1000px;
}
.ch-item {
	box-shadow: 0px 3px 10px #0000004D;
	padding: 10px 20px;
	margin-bottom: 10px;
}
.ch-item.active, .ch-item:hover{
	background: transparent linear-gradient(90deg, #2DC4EA 0%, #3AE7AB 100%) 0% 0% no-repeat padding-box;
	color: #fff;
	cursor: pointer;
}
.ch-item.active .ch-no, .ch-item:hover .ch-no {
	color: #fff;
}
.ch-no {
	font-size: 20px;
	font-weight: 600;
	color: #2DC4EA;
	padding-right: 20px;
}
.ch-btn {
	background: linear-gradient(270deg, #3AE7AB 0%, #2DC4EA 100%) 0% 0%;
	color: #fff;
	border-radius: 50px;
	text-transform: uppercase;
	font-size: 12px;
	padding: 10px 25px;
}
@media only screen and (max-width: 575px){
	.xs-challenge-divider {
		margin-top: 30px;
	}
}

</style>