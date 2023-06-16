<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-dark shadow" data-bs-theme="dark">
            <div class="container">
                <a class="navbar-brand" href="#">My projects</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                <RouterLink :to="{ name: 'home' }" class="nav-link">
                                    Home
                                </RouterLink>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                <RouterLink :to="{ name: 'projects' }" class="nav-link">
                                    Projects
                                </RouterLink>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                <RouterLink :to="{ name: 'about' }" class="nav-link">
                                    About
                                </RouterLink>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </header>
</template>

