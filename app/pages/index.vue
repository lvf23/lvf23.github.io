<template>
    <div class="index-page">
        <div class="container d-flex justify-content-center">
            <div class="card mt-3 border-0 text-center">
                <div class="card-body">
                    <img
                        src="https://avatars.githubusercontent.com/u/146987511"
                        class="rounded-circle"
                        width="256"
                        height="256"
                        alt="lucas-avatar"
                    />
                    <h1 class="card-title text-center mt-4">
                        Lucas Vendramini
                    </h1>
                    <h3 class="card-subtitle text-center">
                        Desenvolvedor Fullstack
                    </h3>

                    <p class="mt-4">Em breve novo site. Aguarde... 🚜</p>
                    <!-- <a href="#">Clique para conhecer</a>

                    <div class="mt-4">
                        <button type="button" class="btn btn-primary">
                            Linkedin
                        </button>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
body {
    height: 100vh;
    overflow: hidden;
}

.index-page {
    height: 100vh;

    * {
        color: white;
    }

    .card {
        background: transparent;
        max-width: 480px;
        min-width: 320px;
    }
}
</style>
