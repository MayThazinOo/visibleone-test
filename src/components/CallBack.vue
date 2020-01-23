<template>
    <div id="call-back">
        <div class="back-img">
            <div class="overlay-effect">
                <div class="container">
                    <div class="row" style="margin-top: 45px">
                        <div class="col-12 col-md-8 call-txt text-white">
                            <h3>Let us call you back on your suitable time.</h3>
                            <p class="mt-4 d-none d-md-block">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod aspernatur est natus veniam unde debitis doloribus rem voluptates iure.</p>
                        </div>
                        <div class="col-12 col-md-4 text-center">
                            <button type="button" class="btn call-btn btn-sm mt-4">Schedule a call back</button>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    </div>
</template>
<style>
.back-img {
    background-image: url('../assets/img/21139.png');
    background-repeat: no-repeat;
    width: 100%;
    min-height: 190px;
    position: relative;
}
.overlay-effect {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 1;
    background-color: #333333b5;
    overflow:hidden;
}
.call-btn {
    background: linear-gradient(270deg, #3AE7AB 0%, #2DC4EA 100%) 0% 0%;
    color: #fff;
    border-radius: 50px;
    text-transform: uppercase;
    font-size: 14px;
    padding: 15px 25px;
}
.call-txt h3{
    font-weight: 700;
}
@media only screen and (max-width: 991px){
  .call-txt h3{
        font-size: 23px;
    }  
}
</style>