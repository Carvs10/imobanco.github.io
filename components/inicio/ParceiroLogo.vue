<template>
    <section class="py-5 parceiros-logo">
        <b-container>
            <b-row class="justify-content-center">
                <b-col lg="12" class="text-center">
                    <h2 class="text-title text-primary">Parceiros Imobanco</h2>
                </b-col>
                <!-- <b-col lg="2" class="text-center">
                    <img src="../../static/image/layout/logo-accesstage.png" alt class="img-fluid" />
                </b-col>
                <b-col lg="2" class="text-center">
                    <img src="../../static/image/layout/logo-amazon.png" alt class="img-fluid" />
                </b-col>
                <b-col lg="2" class="text-center">
                    <img src="../../static/image/layout/logo-aws.png" alt class="img-fluid" />
                </b-col>
                <b-col lg="2" class="text-center">
                    <img src="../../static/image/layout/logo-bb.png" alt class="img-fluid" />
                </b-col>
                <b-col lg="2" class="text-center">
                    <img src="../../static/image/layout/logo-zoop.png" alt class="img-fluid" />
                </b-col>
                <b-col lg="2" class="text-center">
                    <img src="../../static/image/layout/logo-bigdata.png" alt class="img-fluid" />
                </b-col> -->
                <b-col>
                    <infinite-slide-bar :barStyle="{ padding: '5px 0' }" duration="20s" delay="5s">
  <!-- <span style="color: #fff;">Helo World, I love Vue Infinite Slide Bar</span> -->
                    <img src="../../static/image/layout/logo-accesstage.png" alt class="img-fluid" />
                    <img src="../../static/image/layout/logo-amazon.png" alt class="img-fluid" />
                    <img src="../../static/image/layout/logo-aws.png" alt class="img-fluid" />
                    <img src="../../static/image/layout/logo-bb.png" alt class="img-fluid" />
                    <img src="../../static/image/layout/logo-zoop.png" alt class="img-fluid" />
                     <img src="../../static/image/layout/logo-bigdata.png" alt class="img-fluid" />
                    </infinite-slide-bar>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
import InfiniteSlideBar from 'vue-infinite-slide-bar'

export default {
  components: {
    InfiniteSlideBar
  }
}
</script>
