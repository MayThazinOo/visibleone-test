<template>
	<div id="about">
		<div class="container">
			<div class="row">
				<div class="col-12 col-sm-6 mt-5">
					<div class="content-title">about <span class="content-title--color">trippro</span></div>
					<div class="title-line"></div>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nihil, laborum explicabo earum obcaecati numquam quibusdam. Aliquam ad sint tempore molestiae iure minima velit. Ut esse magni eaque saepe expedita.
					</div>
					<button type="button" class="btn about-btn btn-sm mt-4">Tour to website</button>
				</div>
				<div class="col-12 col-sm-6 text-center about-xs-divider">
					<img src="../assets/img/Tablet.png" width="50%" />
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="css">
#about{
	margin-top: 110px;
}
#about .container {
	max-width: 1000px;
}
.title-line {
	width: 80px;
	height: 2px;
	background-color: #2DC4EA;
	margin: 10px 0;
}
.about-btn {
	background: linear-gradient(270deg, #3AE7AB 0%, #2DC4EA 100%) 0% 0%;
	color: #fff;
	border-radius: 50px;
	text-transform: uppercase;
	font-size: 12px;
	padding: 10px 25px;
}
@media only screen and (max-width: 991px){
	.about-xs-divider img {
		margin-top: 40px;
	}
}
</style>