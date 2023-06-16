<script>
import axios from 'axios';

export default {
    name: 'ProjectPage',
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api/',
            apiUrls: {
                projects: 'projects'
            },
            project: null
        }
    },
    methods: {
        getProject() {
            axios.get(this.apiBaseUrl + this.apiUrls.projects + '/' + this.$route.params.slug)
                .then((response) => {
                    this.project = response.data.results
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    },
    created() {
        this.getProject()
    }
}
</script>

<template>
    <div class="container my-5">
        <div class="text-end p-0 m-0" v-if="project.type"><span class="badge text-bg-info">{{ project.type.name }}</span>
        </div>
        <h1>{{ project.title }}</h1>
        <p>{{ project.description }}</p>
        <div class="d-flex gap-1" v-if="project.technologies">
            <span class="badge bg-secondary" v-for="technology in project.technologies">{{ technology.name }}</span>
        </div>
    </div>
</template>

