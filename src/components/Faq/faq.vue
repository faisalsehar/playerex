<template>
<div class="edgtf-content">
    <div class="edgtf-content-inner">
        <div class="edgtf-title-holder edgtf-centered-type edgtf-title-va-header-bottom " style="height: 200px; box-shadow: rgba(1, 1, 1, 0.3) 15px 15px 21px 0px; background-image: url(&quot;https://playerx.qodeinteractive.com/wp-content/uploads/2018/06/p4-title-img-1.jpg&quot;); background-position: center 0px;" data-height="200">
            <div class="edgtf-title-image">
                <img itemprop="image" src="https://playerx.qodeinteractive.com/wp-content/uploads/2018/06/p4-title-img-1.jpg" alt="a">
            </div>
            <div class="edgtf-title-wrapper" style="height: 200px">
                <div class="edgtf-title-inner">
                    <div class="edgtf-grid">
                        <h3 class="edgtf-page-title entry-title">FAQ Page</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="edgtf-full-width">
            <div class="edgtf-full-width-inner">
                <div class="edgtf-grid-row" style="margin-top:100px; margin-bottom: 100px;">
                    <div class="edgtf-page-content-holder edgtf-grid-col-12">
                        <div class="edgtf-row-grid-section-wrapper ">
                            <div class="edgtf-row-grid-section">
                                <div class="vc_row wpb_row vc_row-fluid vc_custom_1529332577463">
                                    <div class="wpb_column vc_column_container vc_col-sm-12">
                                        <div class="vc_column-inner">
                                            <div class="wpb_wrapper">
                                                <div class="edgtf-accordion-holder edgtf-ac-default  edgtf-accordion edgtf-ac-simple  clearfix ui-accordion ui-widget ui-helper-reset" role="tablist">
                                                    <div class="expandablediv">
                                                    <p class="edgtf-accordion-title ui-accordion-header ui-state-default ui-corner-all" role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabindex="-1">
                                                        <span class="edgtf-tab-title">Should I buy this theme?</span>
                                                        <span class="edgtf-accordion-mark">
                                                            <span class="fa fa-plus"></span>
                                                        </span>
                                                    </p>
                                                    <div class="edgtf-accordion-content  hidden-part-div ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" style="display: none;" aria-hidden="true">
                                                        <div class="edgtf-accordion-content-inner">
                                                            <div class="wpb_text_column wpb_content_element ">
                                                                <div class="wpb_wrapper">
                                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa, cum sociis theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui, etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                  </div>

  <div class="expandablediv">
                                                    <p class="edgtf-accordion-title ui-accordion-header ui-state-default ui-corner-all" role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabindex="-1">
                                                        <span class="edgtf-tab-title">Should I buy this theme?</span>
                                                        <span class="edgtf-accordion-mark">
                                                            <span class="fa fa-plus"></span>
                                                        </span>
                                                    </p>
                                                    <div class="edgtf-accordion-content  hidden-part-div ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" style="display: none;" aria-hidden="true">
                                                        <div class="edgtf-accordion-content-inner">
                                                            <div class="wpb_text_column wpb_content_element ">
                                                                <div class="wpb_wrapper">
                                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa, cum sociis theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui, etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                  </div>



                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  mounted() {
    window.$('.expandablediv').on('click', function() {
        if ( window.$(this).hasClass('open')) {
             window.$(this).removeClass('open');
             window.$(this).find('.hidden-part-div').css('display', 'none');
        } else {
             window.$(this).addClass('open');
             window.$(this).find('.hidden-part-div').css('display', 'block');

        }
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
