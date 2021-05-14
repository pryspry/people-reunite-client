<template>
    <q-page>
        <div class="container" style="max-width:700px" v-if="naskahs">
            <q-img :src="`https://people.xabi.us${naskahs[0].Cover.url}`" :ratio="1" />
            <div class="text-right q-pr-sm text-grey-8">{{ naskahs[0].Credit }}</div>
            <q-breadcrumbs gutter="sm" class="q-pt-lg q-pl-lg">
                <q-breadcrumbs-el label="Home" to="/" />
                <q-breadcrumbs-el :label="naskahs[0].Kategori.Judul" />
            </q-breadcrumbs>
            <div class="ppl_post_content q-px-lg">
                <h1 class="text-h5 text-bold ppl_post_title">{{ naskahs[0].Judul }}</h1>
                <div v-if="naskahs[0].Player" class="ppl_post_attachment q-pb-lg text-right float-right">
                    <q-btn flat class="text-lowercase" stack @click="seamless = true">
                        <q-icon name="fa fa-play" />Play </q-btn>
                </div>
                <div class="text-subtitle2 q-pb-lg ppl_post_meta">{{ naskahs[0].Kategori.Judul }} by {{ naskahs[0].kontributors[0].Nama }}<br>on {{ naskahs[0].Published }}<span v-if="`naskahs.KanalUrl`" style="font-size: 18px;"><br>via <a style="text-decoration:underline;color:black;" :href="naskahs[0].KanalUrl" target="_blank">{{ naskahs[0].Kanal}}</a></span></div>
                <div class="ppl_post_body q-mb-xl q-pb-md">
                    <q-markdown>{{ naskahs[0].Body }}</q-markdown>
                </div>
            </div>
            <div v-if="`naskahs[0].Player`" style="height:250px">
                <div class="text-center">
                    <q-btn flat class="text-lowercase" stack @click="seamless = true">
                        <q-icon name="fa fa-play" />Play Attachment</q-btn>
                </div>
            </div>
            <div class="ppl_post_player">
                <q-dialog v-model="seamless" seamless position="top">
                    <q-card style="width: 550px;" class="bg-transparent" flat>
                        <q-card-section class="q-pa-none">
                            <q-linear-progress dark indeterminate color="red" />
                            <q-markdown>{{ naskahs[0].Player}}</q-markdown>
                            <q-btn class="bg-black text-white ppl_post_player_close" icon="close" v-close-popup/>
                        </q-card-section>
                    </q-card>
                </q-dialog>
            </div>
        </div>
        <!-- <div class="container" style="max-width:700px" v-for="naskah in naskahs" :key="naskah.slug">
                <q-img :src="`https://people.xabi.us${naskah.Cover.url}`" :ratio="1" />
                <div class="text-right q-pr-sm text-grey-8">{{ naskah.Credit }}</div>
                <q-breadcrumbs gutter="sm" class="q-pt-lg q-pl-lg">
                    <q-breadcrumbs-el label="Home" to="/" />
                    <q-breadcrumbs-el :label="naskah.Kategori.Judul" />
                </q-breadcrumbs>
                <div class="ppl_post_content q-px-lg">
                    <h1 class="text-h5 text-bold ppl_post_title">{{ naskah.Judul }}</h1>
                    <div v-if="naskah.Player" class="ppl_post_attachment q-pb-lg text-right float-right">
                        <q-btn flat class="text-lowercase" stack @click="seamless = true">
                            <q-icon name="fa fa-play" />Play </q-btn>
                    </div>
                    <div class="text-subtitle2 q-pb-lg ppl_post_meta">{{ naskah.Kategori.Judul }} by {{ naskah.kontributors[0].Nama }}<br>on {{ naskah.Published }}<span v-if="naskah.KanalUrl" style="font-size: 18px;"><br>via <a style="text-decoration:underline;color:black;" :href="naskah.KanalUrl" target="_blank">{{ naskah.Kanal}}</a></span></div>
                    <div class="ppl_post_body q-mb-xl q-pb-md">
                        <q-markdown>{{ naskah.Body }}</q-markdown>
                    </div>
                </div>
                <div v-if="naskah.Player" style="height:250px">
                    <div class="text-center">
                        <q-btn flat class="text-lowercase" stack @click="seamless = true">
                            <q-icon name="fa fa-play" />Play Attachment</q-btn>
                    </div>
                </div>
                <div class="ppl_post_player">
                    <q-dialog v-model="seamless" seamless position="top">
                        <q-card style="width: 550px;" class="bg-transparent" flat>
                            <q-card-section class="q-pa-none">
                                <q-linear-progress dark indeterminate color="red" />
                                <q-markdown>{{ naskah.Player}}</q-markdown>
                                <q-btn class="bg-black text-white ppl_post_player_close" icon="close" v-close-popup/>
                            </q-card-section>
                        </q-card>
                    </q-dialog>
                </div>
            </div> -->
    </q-page>
</template>

<script>
import gql from 'graphql-tag'

export default {
    name: 'PostPage',

    meta() {
        return {
            title: this.title
        }
    },


    data() {
        return {
            seamless: false,
            title: "People Reunite Post"
        }
    },
    apollo: {
        naskahs: {
            query: gql `
        query getNaskah($slug: String!) {
          naskahs(where: {slug: $slug}) {
            id
            Judul
            slug
            Cover {
              url
            }
            Kategori {
              Judul
            }
            kontributors {
              Nama
            }
            Published
            Body
            Kanal
            KanalUrl
            Credit
            Player
          }
        }      
      `,
            variables() {
                return {
                    slug: this.$route.params.slug
                }
            }
        }
    }
}
</script>
