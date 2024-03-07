<template>
	<header>
		<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">Navbar</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<RouterLink class="nav-link active" aria-current="page" to="/"
								>Home</RouterLink
							>
						</li>
						<li class="nav-item">
							<RouterLink
								class="nav-link active"
								aria-current="page"
								to="/about"
								>About</RouterLink
							>
						</li>
						<li class="nav-item">
							<RouterLink
								class="nav-link active"
								aria-current="page"
								to="/posts"
								>Post</RouterLink
							>
						</li>
						<li class="nav-item">
							<RouterLink
								class="nav-link active"
								aria-current="page"
								to="/nested"
								>Nested</RouterLink
							>
						</li>
					</ul>
					<button class="btn btn-outline-light" @click="goCreatePage">
						글쓰기
					</button>
				</div>
			</div>
		</nav>
	</header>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goCreatePage = () => {
	router.push('/posts/create');
};
</script>

<style scoped></style>
