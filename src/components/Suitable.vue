<template>
	<div id="suitable-icon">
		<div class="row no-gutters">
			<div class="col-12 col-md-6 col-lg-5">
				<div class="container">
					<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
						<ol class="carousel-indicators">
							<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
							<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
							<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
						</ol>
						<div class="carousel-inner">
							<div class="carousel-item active">
								<div class="item-no">
									<span>1</span>
								</div>
								<p class="my-3 item-title"><span>Suitable</span><span class="item-title--color"> icons</span></p>
								<p class="item-txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa illum aspernatur ut dolore, laborum, atque facere eum quo magni asperiores quisquam </p>
							</div>
							<div class="carousel-item">
								<div class="item-no">
									<span>2</span>
								</div>
								<p class="my-3 item-title"><span>Suitable</span><span class="item-title--color"> icons</span></p>
								<p class="item-txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa illum aspernatur ut dolore, laborum, atque facere eum quo magni asperiores quisquam </p>
							</div>
							<div class="carousel-item">
								<div class="item-no">
									<span>3</span>
								</div>
								<p class="my-3 item-title"><span>Suitable</span><span class="item-title--color"> icons</span></p>
								<p class="item-txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa illum aspernatur ut dolore, laborum, atque facere eum quo magni asperiores quisquam </p>
							</div>
						</div>
						<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
							<span class="carousel-control-prev-icon" aria-hidden="true"></span>
							<span class="sr-only">Previous</span>
						</a>
						<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
							<span class="carousel-control-next-icon" aria-hidden="true"></span>
							<span class="sr-only">Next</span>
						</a>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-7 sm-suitable-divider">
				<div class="row no-gutters">
					<div class="col-8">
						<div class="row no-gutters">
							<div class="col-6">
								<img src="../assets/img/case-study-design-1.png" width="100%" />
							</div>
							<div class="col-6">
								<img src="../assets/img/case-study-design-5.png" width="100%" />
							</div>
						</div>
						<div class="row no-gutters">
							<div class="col-6">
								<img src="../assets/img/case-study-design-3.png" width="100%" />
							</div>
							<div class="col-6">
								<img src="../assets/img/case-study-design-2.png" width="100%" />
							</div>
						</div>
					</div>
					<div class="col-4">
						<img src="../assets/img/case-study-design-4.png" width="100%" />
					</div>
				</div>	
			</div>
		</div>
	</div>
</template>
<style>
.carousel-indicators li {
  width: 8px;
  height: 8px;
  background-color: #2DC4EA;
  transform: rotate(45deg);
}
.carousel-indicators {
	justify-content: start;
	margin-bottom: -30px;
}
.item-no {
	border: 4px solid #2DC4EA;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    text-align: center;
}
.item-no span {
	font-size: 27px;
    font-weight: 700;
    color: #2DC4EA;
}
.item-title {
	font-weight: 700;
}
.item-title--color {
	color: #2DC4EA;
}
.item-txt {
	font-size: 13px;
}
@media only screen and (max-width: 767px){
	.sm-suitable-divider {
		margin-top: 50px;
	}
}
</style>