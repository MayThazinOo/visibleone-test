<template>
	<div id="footer">
		<!-- <img src="../assets/img/Footer.png" width="100%" /> -->
		<div class="container">
			<div class="row  text-white">
				<div class="col-12 col-sm-6 col-lg-3">
					<div class="link-title">Quick Links</div>
					<ul class="link-list">
						<li><a href="">Services</a></li>
						<li><a href="">About Us</a></li>
						<li><a href="">Blog</a></li>
						<li><a href="">Quotation</a></li>
						<li><a href="">Partnership</a></li>
						<li><a href="">Contact us</a></li>
					</ul>
				</div>
				<div class="col-12 col-sm-6 col-lg-3">
					<div class="link-title">Our Services</div>
					<ul class="link-list">
						<li><a href="">Web Development</a></li>
						<li><a href="">Web Design</a></li>
						<li><a href="">Responsive Web Design</a></li>
						<li><a href="">CMS Website Design</a></li>
						<li><a href="">Custom Website Design</a></li>
						<li><a href="">UI & UX Website Design</a></li>
						<li><a href="">360 Vistual Tour</a></li>
					</ul>
				</div>
				<div class="col-12 col-sm-6 col-lg-3">
					<div class="link-title pt-3"></div>
					<ul class="link-list">
						<li><a href="">Ecommerce Development</a></li>
						<li><a href="">Woocommerce Development</a></li>
						<li><a href="">osCommerce Development</a></li>
						<li><a href="">Magento Development</a></li>
						<li><a href="">BigCommerce Development</a></li>
						<li><a href="">SSL Certificate</a></li>
						<li><a href="">Promotion Video</a></li>
					</ul>
				</div>
				<div class="col-12 col-sm-6 col-lg-3">
					<div class="link-title">VisibleOne Singapore</div>
					<ul class="contact-list">
						<li><a href="tel:+6562480838" style="font-size: 15px;">+65 6248 0838</a></li>
						<li><a href="mailto:info@visibleone.com"><i class="fas fa-envelope text-white mr-2"></i>info@visibleone.com</a></li>
						<li>24 Shin Min Lane Midview City #07-93, Singapore</li>
						<li>Office Hour: Mon to Fri (9am to 5pm) </li>
					</ul>
					<button type="button" class="btn btn-primary btn-sm">CONTACT</button>
					<a class="ml-3" href="" style="font-size: 13px;">Contact HK office</a>
				</div>
			</div>
			<hr/>
			<div class="row">
				<div class="col-12 col-md-7">

				</div>
				<div class="col-12 col-md-5">
					<form>
						<small class="text-white">Subscribe to our news,tips and guidlines</small>
						<div class="row mt-1">
							<div class="col">
								<input type="text" class="form-control" placeholder="123@gmail.com">
							</div>
							<div class="col">
								<button type="button" class="btn btn-primary btn-sm">SUBMIT</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			<hr/>
			<div class="text-center text-white social-link">
				<a href=""><i class="fab fa-facebook-f"></i></a>
				<a href=""><i class="fab fa-twitter"></i></a>
				<a href=""><i class="fab fa-instagram"></i></a>
				<a href=""><i class="fab fa-linkedin-in"></i></a>
			</div>
			<div class="text-center t-link">
				<span>Shopping T&C</span>
				<span><a href="">Terms & Conditions</a></span>
				<span><a href="">Privacy Policy</a></span>
				<span>© 2018 Visible-One</span>
			</div>
			<div class="text-right">
				<a href="#" class="text-white"><i class="fas fa-arrow-circle-up"></i></a>
			</div>
		</div>
	</div>
</template>
<style>
#footer {
	background: #333;
	padding: 40px 0;
}
.link-title {
	text-transform: uppercase;
	font-weight: 300;
	margin: 20px 0;
}
.link-list {
	padding: 0 10px 0;
}
.link-list a {
	font-size: 13px;
	color: #ffffffa3;
	margin: 10px 0;
}
.link-list a:hover {
	text-transform: none;
}
hr {
	border-top: 1px solid #ffffffa3;
}
.social-link a {
	color: #fff;
	margin-right: 5px;
}
.contact-list {
	list-style-type: none;
	padding: 0;
}
.contact-list li, .contact-list li a {
	color: #fff;
	margin: 10px 0;
	font-size: 13px;
}
.t-link span, .t-link span a{
	color: #fff;
	font-size: 13px;
	margin-right: 5px;
}
</style>