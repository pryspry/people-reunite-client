<template>
    <q-page class="q-pa-md">
        <div class="row container ppl_home">
            <div class="col-12 col-md-4" v-for="naskah in naskahs" :key="naskah.id">
                <router-link :to="`/post/` + naskah.slug" class="ppl_home_router">
                    <q-card flat style="height: 350px" class="q-my-md">
                        <q-img :src="`https://people.xabi.us${naskah.Cover.url}`" :ratio="1" />
                        <q-card-section>
                            <div class="text-h6 ppl_home_title">{{ naskah.Judul }}</div>
                            <div class="text-subtitle2 ppl_home_meta q-pt-sm">{{ naskah.Kategori.Judul }} by {{ naskah.kontributors[0].Nama }} on {{ naskah.Published }}</div>
                        </q-card-section>
                    </q-card>
                </router-link>
            </div>
        </div>
    </q-page>
</template>

<script>
import gql from 'graphql-tag'
import { date } from 'quasar'

export default {
    name: 'PageIndex',
    data() {
        return {
            naskahs: [],
        }
    },
    apollo: {
        naskahs: {
            query: gql `
            query{
              naskahs(sort: "Published:desc"){
                Judul
                Subjudul
                slug
                Cover{
                  url
                  caption
                  alternativeText
                }
                Body
                MetaDescription
                Keywords
                Kanal
                KanalUrl
                Kategori{
                  Judul 
                }
                kontributors{
                  Nama
                }
                Player
                Published

              }
            }           
          `
        }
    }
  }
</script>
