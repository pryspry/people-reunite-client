<template>
    <q-page class="q-pa-md">
        <div class="row container ppl_home">
            <div style="width:700px" v-if="!naskahs">
            <q-card flat v-for="naskah in naskahs" :key="naskah.id">
                <q-skeleton height="300px" square />
                <q-item>
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
            <div class="col-12 col-md-4" v-for="naskah in naskahs" :key="naskah.id">
                <router-link :to="`/post/` + naskah.slug" class="ppl_home_router">
                    <q-card flat style="height: 350px" class="q-my-md">
                        <q-img :src="`https://people.xabi.us${naskah.Cover.url}`" :ratio="16/9" />
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
// import gql from 'graphql-tag'
import { reviewNaskahsQuery } from 'src/graphql/queries.js'

export default {
    name: 'ReviewPage',
    meta: {
        title: 'Review - People Reunite'
    },
    data() {
        return {
            naskahs: [],
        }
    }, 
    apollo: {
        naskahs: {
            prefetch: true,
            query: reviewNaskahsQuery

        }
    }
}
</script>
