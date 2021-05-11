<template>
    <q-page>
        <div class="container" style="max-width:700px" v-for="naskah in naskahs" :key="naskah.slug">
            <q-breadcrumbs gutter="sm" class="q-pa-md flex flex-center">
                <q-breadcrumbs-el label="Home" to="/" />
                <q-breadcrumbs-el :label="naskah.Kategori.Judul" />
                <!-- <q-breadcrumbs-el class="ellipsis-2-lines" :label="naskah.Judul" /> -->
            </q-breadcrumbs>
            <q-img :src="`https://people.xabi.us${naskah.Cover.url}`" :ratio="16/9" />
            <div class="text-right q-pr-sm text-grey-8">{{ naskah.Credit }}</div>
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
                <q-dialog v-model="seamless" seamless position="bottom">
                    <q-card style="width: 550px;" class="bg-transparent" flat>
                        <q-card-section class="q-pa-none">
                            <q-btn class="bg-black text-white ppl_post_player_close" icon="close" v-close-popup/>
                            <q-markdown>{{ naskah.Player}}</q-markdown>
                            <q-linear-progress dark indeterminate color="red" />
                        </q-card-section>
                    </q-card>
                </q-dialog>
            </div>
        </div>
    </q-page>
</template>

<script>
import gql from 'graphql-tag'

export default {
    // name: 'PageName',
    data() {
        return {
            seamless: false
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
