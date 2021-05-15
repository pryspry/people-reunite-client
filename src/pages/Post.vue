<template>
    <q-page>
        <div class="container" style="max-width:700px" v-if="!naskahs">
            <q-card flat>
                <q-skeleton height="300px" square />
                <q-item>
                    <q-item-section avatar>
                        <q-skeleton type="QAvatar" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>
                            <q-skeleton type="text" />
                        </q-item-label>
                        <q-item-label caption>
                            <q-skeleton type="text" />
                        </q-item-label>
                    </q-item-section>
                </q-item>
            </q-card>
        </div>
        <div class="container" style="max-width:700px" v-if="naskahs">
            <q-img :src="`https://people.xabi.us${naskahs[0].Cover.url}`" style="width: 100%" />
            <div class="text-right q-pr-sm text-grey-8">{{ naskahs[0].Credit }}</div>
            <q-breadcrumbs gutter="sm" 
            class="q-pt-lg q-pl-lg"
            >
                <q-breadcrumbs-el label="Home" to="/" />
                <q-breadcrumbs-el :label="naskahs[0].Kategori.Judul" />
            </q-breadcrumbs>
            <div class="ppl_post_content q-px-lg">
                <h5 class="q-mb-none text-italic text-uppercase q-mt-lg">{{ naskahs[0].Subjudul }}</h5>
                <h1 class="text-h5 q-mt-none text-bold ppl_post_title">{{ naskahs[0].Judul }}</h1>
                <div v-if="naskahs[0].Player" class="ppl_post_attachment q-pb-lg text-right float-right">
                    <q-btn flat class="text-lowercase" stack @click="seamless = true">
                        <q-icon name="fa fa-play" />Play </q-btn>
                </div>
                <!-- {{ naskahs[0].kontributors[0].Avatar }}
                <q-avatar class="float-left q-mr-sm" style="width:40px;height:40px;">
                    <img :src="`https://people.xabi.us${naskahs[0].Avatar.url}`">
                </q-avatar> -->
                <div class="text-subtitle2 q-pb-lg ppl_post_meta">{{ naskahs[0].Kategori.Judul }} by {{ naskahs[0].kontributors[0].Nama }}<br>on {{ naskahs[0].Published }}
                    <div v-if="naskahs[0].Kanal" style="font-size: 18px;" class="q-pt-sm"><q-icon style="font-size:10px" name="fas fa-external-link-alt" /> via <q-btn flat style="font-size: 16px;top:-1px" class="text-capitalize ppl_kanal" :label="naskahs[0].Kanal" color="black" @click="confirm = true" />
                    </div>
                </div>
                <div class="ppl_post_body q-mb-xl q-pb-md">
                    <q-markdown>{{ naskahs[0].Body }}</q-markdown>
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
    
            <q-dialog v-model="confirm">
                <q-card>
                    <q-card-section class="row items-center q-pt-lg q-px-lg">
                        <span class="q-ml-none q-pb-sm">Artikel ini pernah diterbitkan di <span class="text-bold">{{ naskahs[0].Kanal }}</span> </span>
                        <span style="word-break: break-all;">{{ naskahs[0].KanalUrl }}</span>
                    </q-card-section>
                    <q-card-actions align="right" class="q-pr-md q-pb-md">
                        <q-btn label="Lanjutkan Baca" color="primary" v-close-popup />
                    </q-card-actions>
                </q-card>
            </q-dialog>
    
    
        </div>
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
            title: 'People Reunite Post',
            confirm: false,
        }
    },
    apollo: {
        naskahs: {
            query: gql `
        query getNaskah($slug: String!) {
          naskahs(where: {slug: $slug}) {
            id
            Judul
            Subjudul
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
    },
}
</script>

<style>
.ppl_kanal .col {
    padding: 0px !important;
}
</style>