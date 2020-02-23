<template>
<div>
    <div class="top_banner_product" style="background-color:#0d0d1d; background-image:url('image/catalog/LoL-compressor.jpg')">
        <h1 class="pp_titleproduct" itemprop="name">Elo Division Boost</h1>
        <p class="pp_subtitleproduct">LoL Boost made simple, fast and cheap with many features</p>
        <div class="pp_platformsproduct"></div>
    </div>
    <div class="container">
        <div class="row">
            <section id="sidebar-main" class="col-md-12">
                <div id="content">

                    <div class="col-md-12 product-info">
                        <CartSection />
                        <RatingSection/>
                        <Faq/>
                        <OurlegendSection/>
                        <Reiews/>
                        <Description/>
                    </div>

                </div>
            </section>
        </div>
    </div>
</div>
</template>

<script> 
import CartSection from './cart_section'
import RatingSection from './rating_section'
import Description from './description'
import OurlegendSection from '../Home/section3'
import Reiews from '../Home/section4'
import Faq from './faq'
export default {
    components: {
        CartSection,
        RatingSection,
        Faq,
        OurlegendSection,
        Reiews,
        Description
    }
}
</script>

<style  scoped>

</style>
