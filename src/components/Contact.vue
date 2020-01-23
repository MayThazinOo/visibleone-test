<template>
    <div id="contact">
        <div class="contact-img">
            <div class="row">
                <div class="col-12 col-md-7 offset-md-2 offset-xl-5">
                    <div class="container" style="max-width: 500px">
                        <div class="contact-card">
                            <img src="../assets/img/woocommerce.png" width="15%" />
                            <h2>Let's keep in touch</h2>
                            <p>Fill out the form below to receive a Free In-Call Audit</p>
                            <form>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <input type="text" class="form-control"  placeholder="First Name*">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <input type="text" class="form-control" placeholder="Last Name*">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <input type="text" class="form-control"  placeholder="Email*">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <input type="text" class="form-control" placeholder="Phone Number*">
                                    </div>
                                </div>
                                 <div class="form-group">
                                    <textarea class="form-control" placeholder="Your Message" rows="3"></textarea>
                                </div>
                                <div class="text-center">
                                    <button type="button" class="btn contact-btn btn-sm mt-4">Speak with us now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
#contact {
    padding: 0;
    margin: 0;
}
.contact-img {
    background-image: url('../assets/img/contact.png');
    background-repeat: no-repeat;
    background-position: 30% 0 0;
    overflow: hidden;
    background-size: cover;
    height: 789px;
    width: 100%;
}
.contact-card {
    margin-top: 80px;
    background-color: #fff;
    padding: 50px;
    box-shadow: 0px 0px 10px #00000029;
    border-radius: 30px;
}
@media only screen and (max-width: 575px){
    .contact-card {
        padding: 30px;
    }
    .contact-card h2 {
        font-size: 25px;
    }
}
.contact-card h2{
    font-weight: 700;
    margin: 30px 0;
    text-transform: uppercase;
}
.contact-btn {
    background: linear-gradient(270deg, #3AE7AB 0%, #2DC4EA 100%) 0% 0%;
    color: #fff;
    border-radius: 50px;
    text-transform: uppercase;
    font-size: 14px;
    padding: 15px 25px;
}
.form-control {
    font-size: 14px;
}
</style>