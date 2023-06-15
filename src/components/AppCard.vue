<script>
export default {
    name: 'AppCard',
    props: {
        image: String,
        title: String,
        description: String,
        slug: String
    },
    data() {
        return {
            contentLenght: 100
        };
    }
}
</script>

<template>
    <div class="card">
        <img v-if="image" :src="image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p v-if="description" class="card-text">{{ description.substring(0,
                this.contentLenght) }}
            </p>
            <!-- <a href="#" class="btn btn-primary">Show</a> -->
            <RouterLink :to="{ name: 'project', params: { slug: slug } }">
                <a class="btn btn-primary">Show</a>
            </RouterLink>
        </div>
    </div>
</template>
