<template>
    <q-page class="q-pa-md">
        <h1 class="ppl_kategorititle text-h5">
            <q-icon name="fas fa-bolt"/> News
        </h1>
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
import { newsNaskahsQuery } from 'src/graphql/queries.js'

export default {
    name: 'NewsPage',
    meta: {
        title: 'News - People Reunite'
    },
    data() {
        return {
            naskahs: [],
        }
    },
    apollo: {
        naskahs: {
            prefetch: true,
            query: newsNaskahsQuery

        }
    },
    filters: {
        tanggalPublikasi: function(value) {
            return date.formatDate(value, 'D MMM YYYY');
        }
    }
}
</script>
