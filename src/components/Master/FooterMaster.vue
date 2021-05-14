<template>
    <q-footer reveal bordered class="bg-primary text-white">
        <div class="q-gutter-y-md">
            <q-tabs class="text-white">
                <q-route-tab exact class="text-lowercase" to="/" icon="fa fa-angle-double-left" label="Home" />
                <q-route-tab exact class="text-lowercase" to="/info" icon="fa fa-podcast" label="About" />
                <q-route-tab exact class="text-lowercase" to="/submit" icon="fa fa-comments" label="Submit" />
            </q-tabs>
        </div>
    </q-footer>
</template>