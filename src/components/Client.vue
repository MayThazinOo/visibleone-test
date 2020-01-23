<template>
    <div id="client">
        <h3 class="content-title text-center">Our <span class="content-title--color">Clients reviews</span></h3>
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-center m-auto">
                    <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="7000">
                        <!-- Carousel indicators -->

                        <!-- Wrapper for carousel items -->
                        <div class="carousel-inner">
                            <div  v-for="item in items" :key="item.id" class="item carousel-item" :class="item.id == 1 ? 'active' : ''">
                                <div class="img-box"><img :src="item.img" alt=""></div>
                                <p class="name">{{item.name}}</p>
                                <p class="overview">{{item.review}}</p>
                            </div>
                        </div>
                        <!-- Carousel controls -->
                        <a class="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
                            <img src="../assets/img/keyboard-left-arrow-button-black.svg" width="10px" />
                        </a>
                        <a class="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
                            <img src="../assets/img/keyboard-left-arrow-button-black.svg" width="10px" style="transform: rotate(180deg)" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            items: [
                {
                    id: 1,
                    img: require('../assets/img/client.jpg'),
                    name: 'Media Analyst',
                    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor,Nam eu sem tempor, '
                },
                {
                    id: 2,
                    img: require('../assets/img/client1.jpg'),
                    name: 'Media Analyst',
                    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, '
                },
                {
                    id: 3,
                    img: require('../assets/img/client.jpg'),
                    name: 'Media Analyst',
                    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel,'
                }
            ]
        }
    }
}
</script>
<style>
#client {
    margin: 50px 0;
}
.col-center {
	margin: 0 auto;
	float: none !important;
}
.carousel {
	margin: 50px auto 0;
	padding: 0 70px;
}
.carousel .item {
	color: #999;
	font-size: 14px;
    text-align: center;
	overflow: hidden;
    min-height: 180px;
}
.carousel .item .img-box {
	width: 63px;
	height: 63px;
	margin: 0 auto;
	box-shadow: 0px 5px 10px #0000007B;
	border-radius: 50%;
}
.carousel .img-box img {
	width: 100%;
	height: 100%;
	display: block;
	border-radius: 50%;
}
.carousel .overview {
	padding: 20px 0 10px;
}
.carousel .name {
    margin: 50px 0 0;
    font-size: 20px;
    font-weight: bold;
    color: #2DC4EA;
}
.carousel .carousel-control {
	width: 40px;
    height: 40px;
    margin-top: -20px;
    top: 50%;
	background: none;
}
.carousel-control i {
    font-size: 68px;
	line-height: 42px;
    position: absolute;
    display: inline-block;
	color: rgba(0, 0, 0, 0.8);
    text-shadow: 0 3px 3px #e6e6e6, 0 0 0 #000;
}

</style>