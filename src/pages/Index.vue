<template>
    <q-page class="q-pa-md">
        <div class="row container ppl_home">
            <div class="col-12 col-md-4" v-for="naskah in naskahs" :key="naskah.id">
                <router-link :to="`/post/` + naskah.slug" class="ppl_home_router">
                    <q-card flat style="height: 350px" class="q-my-md">
                        <q-img
                        v-if="`https://people.xabi.us${naskah.Cover.url}` !== null"
                            placeholder-src="https://via.placeholder.com/480x300.png/fff/ccc/?text=PeopleReunite"
                            :src="`https://people.xabi.us${naskah.Cover.url}`" :ratio="16/9" />
                        <q-card-section>
                            <div class="text-h6 ppl_home_title">{{ naskah.Judul }}</div>
                            <div class="text-subtitle2 ppl_home_meta q-pt-sm">{{ naskah.Kategori.Judul }} by {{ naskah.kontributors[0].Nama }} on {{ naskah.Published | tanggalPublikasi }}</div>
                        </q-card-section>
                    </q-card>
                </router-link>
            </div>
        </div>
    </q-page>
</template>

<script>
import { date } from 'quasar'

import { allNaskahsQuery } from 'src/graphql/queries.js'

export default {
    name: 'PageIndex',
    meta: {
        title: 'People Reunite Official Site',
            meta: {
                description: { name: 'description', content: 'peoplereunite adalah media sindikasi dan jejaring digital yang memuat info seputar musik, sastra dan seni budaya di Indonesia' },
                keywords: { name: 'keywords', content: 'people reunite, jurnalisme musik, musik independen' },
                ogTitle: {property: 'og:title', content: 'People Reunite Official Site'},
                ogDescription: {property: 'og:description', content: 'peoplereunite adalah media sindikasi dan jejaring digital yang memuat info seputar musik, sastra dan seni budaya di Indonesia'},
                ogImage: {property: 'og:image', content: 'https://people.xabi.us/uploads/Logo_0f8b82b57e.png'},                
                ogUrl: {property: 'og:url', content: 'https://peoplereunite.us/'},
                ogType: {property: 'og:type', content:"website"},
                twitterCard: {property: 'twitter:card', content:"summary_large_image"},
                twitterUrl: {property: 'twitter:url', content: 'https://peoplereunite.us/'},
                twitterTitle: {property: 'twitter:title', content: 'People Reunite Official Site'},
                twitterDescription: {property: 'twitter:description', content: 'peoplereunite adalah media sindikasi dan jejaring digital yang memuat info seputar musik, sastra dan seni budaya di Indonesia'},
                twitterImage: {property: 'twitter:image', content: 'https://people.xabi.us/uploads/Logo_0f8b82b57e.png'},
            },        
    },
    data() {
        return {
            naskahs: [],
        }
    }, 
    apollo: {
        naskahs: {
            prefetch: true,
            query: allNaskahsQuery

        }
    },
    filters: {
        tanggalPublikasi: function(value) {
            return date.formatDate(value, 'D MMM YYYY');
        }
    }    
}
</script>
