<template>
<div>
    <div class="box pav-custom  title_section">
        <div class="box-heading"><span>FAQ</span></div>
        <div class="box-content">
            <p></p>
        </div>
    </div>
    <div id="faq_row" style="clear:both">
        <div class="expandable" >
            <div class="visible-part">
                <div class="wrap-icon right"> <span class="icon-down-open fa fa-angle-down" aria-hidden="true"></span> </div>
                <h3>Can I play with booster?</h3>
                <div class="row">
                    <div class="col-md-10"> </div>
                </div>
            </div>
            <div class="hidden-part">
                <div class="row">
                    <div class="col-md-10">
                        <p>Yes you can. Just make sure you choose the special Play with the booster in the calculator.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="expandable">
            <div class="visible-part">
                <div class="wrap-icon right"> <span class="icon-down-open fa fa-angle-down" aria-hidden="true"></span> </div>
                <h3>&nbsp;Is all the work done by boosters legit?<br></h3>
                <div class="row">
                    <div class="col-md-10"> </div>
                </div>
            </div>
            <div class="hidden-part">
                <div class="row">
                    <div class="col-md-10">
                        <p>Yes, our boosters don't use any scripts or other third-party programs.<br></p>
                    </div>
                </div>
                <div class="gallery">
                    <div class="row"> </div>
                </div>
            </div>
        </div>
        <div class="expandable">
            <div class="visible-part">
                <div class="wrap-icon right"> <span class="icon-down-open fa fa-angle-down" aria-hidden="true"></span> </div>
                <h3>Will your booster talk to people from my friend list?<br></h3>
                <div class="row">
                    <div class="col-md-10"> </div>
                </div>
            </div>
            <div class="hidden-part">
                <div class="row">
                    <div class="col-md-10">
                        <p>No, our boosters will focus only on getting you to your desired rank without speaking to anyone unless you request them to do so.<br></p>
                    </div>
                </div>
                <div class="gallery">
                    <div class="row"> </div>
                </div>
            </div>
        </div>
        <div class="expandable">
            <div class="visible-part">
                <div class="wrap-icon right"> <span class="icon-down-open fa fa-angle-down" aria-hidden="true"></span> </div>
                <h3>What if I'm not level 30?<br></h3>
                <div class="row">
                    <div class="col-md-10"> </div>
                </div>
            </div>
            <div class="hidden-part">
                <div class="row">
                    <div class="col-md-10">
                        <p>Unfortunately, we don't provide leveling service for League of Legends yet.<br></p>
                    </div>
                </div>
                <div class="gallery">
                    <div class="row"> </div>
                </div>
            </div>
        </div>
        <div class="expandable">
            <div class="visible-part">
                <div class="wrap-icon right"> <span class="icon-down-open fa fa-angle-down" aria-hidden="true"></span> </div>
                <h3>How can I contact you if I have any questions about the boosting process?<br></h3>
                <div class="row">
                    <div class="col-md-10"> </div>
                </div>
            </div>
            <div class="hidden-part">
                <div class="row">
                    <div class="col-md-10">
                        <p>There is a live chat window on the bottom right side of the website which you can use to communicate with us and your personal booster.<br></p>
                    </div>
                </div>
                <div class="gallery">
                    <div class="row"> </div>
                </div>
            </div>
        </div>
        <div class="expandable">
            <div class="visible-part">
                <div class="wrap-icon right"> <span class="icon-down-open fa fa-angle-down" aria-hidden="true"></span> </div>
                <h3>Can I choose specific champions and how do I specify them?</h3>
                <div class="row">
                    <div class="col-md-10"> </div>
                </div>
            </div>
            <div class="hidden-part">
                <div class="row">
                    <div class="col-md-10">
                        <p>You can choose specific heroes by choosing the special "Play specific champion" in the checkout. Then you need to specify them in the comment box in checkout.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="expandable">
            <div class="visible-part">
                <div class="wrap-icon right"> <span class="icon-down-open fa fa-angle-down" aria-hidden="true"></span> </div>
                <h3>What are the payment methods?<br></h3>
                <div class="row">
                    <div class="col-md-10"> </div>
                </div>
            </div>
            <div class="hidden-part">
                <div class="row">
                    <div class="col-md-10">
                        <p>Our current&nbsp;payment methods are: PayPal, Credit/Debit Cards, PaySafeCard, Neteller, Amex,&nbsp; Skrill, iDeal, Klarna, Pay by Skins, JCB, Discover, Bitcoin, Alipay, Blink, Multibanco, CashBill, EPS, Boku, Bancontact, Openbucks, VTC Play, PayLetter, Konbini, POLi Payments, GPay, MOLPay, Yandex.Money, Qiwi, WebMoney, Mobile Payments, EcoPayz, ePay.bg, ToditoCash, Yandex, WeChatPay, Euteller<br></p>
                    </div>
                </div>
                <div class="gallery">
                    <div class="row"> </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
  mounted() {
   window.$(document).ready(function() {
 window.$('.expandable').on('click', function() {

    
        if (window.$(this).hasClass('open')) {
            window.$(this).removeClass('open');
            window.$(this).find('.hidden-part').css('display', 'none');
        } else {
            window.$(this).addClass('open');
            window.$(this).find('.hidden-part').css('display', 'block');

        }
    })
    });
  }
}
</script>

<style lang="scss" scoped>

</style>
