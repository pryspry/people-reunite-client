<template>
<div>
    <q-footer reveal bordered class="bg-primary text-white">
        <div class="q-gutter-y-md">
            <q-tabs class="text-white">
                <q-route-tab exact class="text-lowercase" to="/" icon="fas fa-home" />
                <q-route-tab exact class="text-lowercase" to="/about" icon="fa fa-podcast"/>
                <q-route-tab exact class="text-lowercase" to="/subscribe" icon="fa fa-envelope" />
                <q-tab @click="drawer = !drawer" icon="fas fa-ellipsis-v" />
            </q-tabs>
        </div>
    </q-footer>

      <q-drawer
        v-model="drawer"
        :breakpoint="500"
        overlay
        bordered

      >
        <q-scroll-area class="fit">
          <q-list>

            <template v-for="(menuItem, index) in menuList">
              <q-item :key="index" :to="menuItem.to" clickable :active="menuItem.label === 'Outbox'" v-ripple>
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index" v-if="menuItem.separator" />
            </template>

          </q-list>
        </q-scroll-area>
      </q-drawer>
</div>
</template>

<script>
const menuList = [
  {
    icon: 'fab fa-houzz',
    label: 'Beranda',
    to: '/',
    separator: false
  },
  {
    icon: 'fas fa-podcast',
    label: 'Tentang Kami',
    to: '/about',    
    separator: true
  },
  {
    icon: 'fas fa-bolt',
    label: 'News',
    to: '/news',    
    separator: false
  },
  {
    icon: 'fas fa-file-medical-alt',
    label: 'Review',
    to: '/review',
    separator: false
  },
  {
    icon: 'fas fa-coffee',
    label: 'Essay',
    to: '/essay',
    separator: true
  },
  // {
  //   icon: 'fa fa-users',
  //   label: 'Kontributor',
  //   to: '/kontributor',    
  //   separator: false
  // },
  // {
  //   icon: 'comment',
  //   label: 'Kirim Naskah',
  //   to: '/kirim-naskah',    
  //   separator: false
  // },
  {
    icon: 'info',
    label: 'Ketentuan Layanan',
    to: '/ketentuan-layanan',    
    separator: false
  },
  {
    icon: 'fab fa-creative-commons',
    label: 'Lisensi',
    to: '/lisensi',    
    separator: false
  }          
]

export default {
  data () {
    return {
      drawer: false,
      menuList
    }
  }
}
</script>