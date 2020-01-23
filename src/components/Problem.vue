<template>
    <div id="problem">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-6 text-center">
                    <img v-if="desktop" src="../assets/img/imac.png" width="80%" />
                    <img v-else src="../assets/img/iphone6.png" width="35%"  />
                </div>
                <div class="col-12 col-sm-6">
                    <div class="problem-title">Their old website & problems</div>
                   
                    <table class="mt-4">
                        <tr  v-for="item in items" :key="item.id">
                            <td style="vertical-align: top;padding-right:10px;"><img :src="item.img" width="15px" /></td>
                            <td class="text-white">{{item.txt}}</td>
                        </tr>
                    </table>
                    <button type="button" class="btn btn-toggle btn-sm" @click="desktop == true ? desktop = false : desktop = true">
                        <span v-if="desktop">
                            <img class="pr-2" src="../assets/img/desktop (1).svg" />
                            <span>Desktop</span>
                        </span>
                        <span v-else>
                            <span>Mobile</span>
                            <img class="pl-2" src="../assets/img/smartphone (1).svg" height="20px" />
                        </span>
                    </button>
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
                    img: require('../assets/img/arrow-pointing-to-right.svg'),
                    txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eaque, quia at fugit maxime dolorem facere rem iure,'
                },
                {
                    id: 2,
                    img: require('../assets/img/arrow-pointing-to-right.svg'),
                    txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eaque, quia at fugit maxime dolorem facere rem iure,'
                },
                {
                    id: 3,
                    img: require('../assets/img/arrow-pointing-to-right.svg'),
                    txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eaque, quia at fugit maxime dolorem facere rem iure,'
                }
            ],
            desktop: true
        }
    }
}
</script>
<style>
#problem {
    margin: 100px 0 50px;
    background: transparent linear-gradient(113deg, #3AE7AB 0%, #2DC4EA 100%) 0% 0% no-repeat padding-box;
}
#problem .container {
    padding-top: 50px;
}
.problem-title {
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    text-transform: capitalize;
}
.problem-text {
    padding-left: 0px;
}
.problem-text li{
    list-style-type: none;
}
.btn-toggle {
    background: linear-gradient(270deg, #3AE7AB 0%, #2DC4EA 100%) 0% 0%;
	color: #fff;
	border-radius: 50px;
	text-transform: uppercase;
	font-size: 12px;
	padding: 10px 25px;
    margin-top: 50px;
    border: 1px solid #fff;
}
td {
    padding-top: 20px;
    font-size: 14px;
}
</style>