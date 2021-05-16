<template>
    <q-page padding>
        <div class="q-px-md">
            <h1 class="text-h5">Inbox</h1>
            <p>Berlangganan konten terbaru peoplereunite dikirim langsung ke inbox email kamu</p>
            <!-- Begin Mailchimp Signup Form -->
            <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
            <div id="mc_embed_signup">
                <form action="https://peoplereunite.us1.list-manage.com/subscribe/post?u=4b425e8d87b8704821fb68e05&amp;id=64808dbb75" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
                        <div class="mc-field-group">
                            <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
                            </label>
                            <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                        </div>
                        <div class="mc-field-group">
                            <label for="mce-FNAME">Nama Kamu </label>
                            <input type="text" value="" name="FNAME" class="" id="mce-FNAME">
                        </div>
                        <div id="mce-responses" class="clear">
                            <div class="response" id="mce-error-response" style="display:none"></div>
                            <div class="response" id="mce-success-response" style="display:none"></div>
                        </div>
                        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_4b425e8d87b8704821fb68e05_64808dbb75" tabindex="-1" value=""></div>
                        <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button bg-red"></div>
                    </div>
                </form>
            </div>
    
            <!--End mc_embed_signup-->
    
        </div>
    </q-page>
</template>

<script>
export default {
    name: 'SubscribePage',
    meta: {
        title: 'Subscribe - People Reunite'
    },

}
</script>

<style>
#mc_embed_signup form {
    padding: 0px !important;
}
</style>