<template>
	<div id="revamp">
		<div class="container" style="max-width: 1200px">
			<div class="row">
				<div class="col-12 col-sm-8">
					<div class="revamp-f">
						<img src="../assets/img/revamp.png" width="100%" />
						<div class="revamp-s">
							<img src="../assets/img/revamp-hover.png" width="100%" />
						</div>
					</div>
				</div>
				<div class="col-12 col-sm-4">
					<h4 class="revamp-title text-white">After we revamped the website</h4>
					<div class="revamp-txt text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit aut assumenda adipisci enim saepe eveniet, quo temporibus, necessitatibus
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style>
#revamp {
	padding: 50px 0;
	margin: 50px 0 0;
	background: transparent linear-gradient(112deg, #3AE7AB 0%, #2DC4EA 100%) 0% 0% no-repeat padding-box;
}
.revamp-title {
	margin-top: 65px;
	font-weight: 700;
}
.revamp-txt {
	font-size: 14px;
	line-height: 1.3;
	margin-top: 30px;
}
.revamp-f {
	max-width: 893px;
	height: 407px;
	position:relative;
	cursor: pointer;
}
.revamp-f:hover .revamp-s{
	width: 100%;
}
.revamp-f img {
	height: 400px;
	display: block;
}
@media only screen and (max-width: 768px){
	.revamp-f img {
		height: 280px;
	}
	.revamp-f {
		height: 300px;
	}
}
.revamp-s {
	/* width: 600px; */
	width: 0px;
	/* height: 400px; */
	/* background: #000; */
	position: absolute;
	top: 0;
	display: flex;
	/* justify-content: center;
	align-items: center; */
	overflow: hidden;
	transition: 0.7s ease;
}
</style>