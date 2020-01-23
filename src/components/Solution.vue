<template>
    <div id="solution">
        <div class="container" style="max-width: 900px">
            <h3 class="content-title text-center">Our <span class="content-title--color">solution and tech</span> stack</h3>
            <div class="row mt-4">
                <div v-for="item in items" :key="item.id" class="col-12 col-sm-6 col-md-4 text-center">
                    <div class="solution-item" :class="item.class">
                        <div class="text-center">
                            <img :src="item.img" width="45px" />
                        </div>
                        <p>{{item.title}}</p>
                        <div class="solution-item-s">
                            <p>{{item.title}}</p>
                            <div style="font-size: 14px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id adipisci ad ducimus  </div>
                        </div>
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
                    img: require('../assets/img/woocommerce.png'),
                    title: 'Woocommerce Development',
                    class: 'active'
                },
                {
                    id: 2,
                    img: require('../assets/img/coding.svg'),
                    title: 'Responsive Web Design'
                },
                {
                    id: 3,
                    img: require('../assets/img/credit-card.svg'),
                    title: 'Payment Integration'
                },
                {
                    id: 4,
                    img: require('../assets/img/Online Shopping.svg'),
                    title: 'Cleaner Product Design'
                },
                {
                    id: 5,
                    img: require('../assets/img/social-media.svg'),
                    title: 'Social Media Integration'
                },
                {
                    id: 6,
                    img: require('../assets/img/component (5).png'),
                    title: 'Real Time Analytics'
                }
            ]
        }
    }
}
</script>
<style>
.solution-item {
    border: 1px solid #d5d5d5;
    height: 158px;
    padding: 30px 0;
    margin: 15px 0;
    position:relative;
	cursor: pointer;
}
.solution-item p {
    font-size: 15px;
    font-weight: 700;
    margin-top: 20px;
}
.solution-item:hover .solution-item-s{
	width: 100%;
    height: 158px;
}
.solution-item-s {
	width: 0px;
	height: 158px !important;
	background: transparent linear-gradient(0deg, #3AE7AB 0%, #2DC4EA 100%) 0% 0% no-repeat padding-box;
	position: absolute;
	top: 0;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	transition: 0.5s ease;
    color: #fff;
}
</style>