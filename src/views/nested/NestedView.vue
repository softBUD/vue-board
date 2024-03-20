<template>
	<div>
		<ul class="nav nav-pills">
			<li class="nav-item">
				<router-link
					class="nav-link"
					:class="{ active: $route.path === '/nested/one' }"
					to="/nested/one"
				>
					Nested One
				</router-link>
			</li>
			<li class="nav-item">
				<router-link
					class="nav-link"
					:class="{ active: $route.path === '/nested/two' }"
					to="/nested/two"
				>
					Nested Two
				</router-link>
			</li>
		</ul>
		<hr class="my-4" />
		<router-view></router-view>
	</div>
</template>

<script setup></script>

<style scoped>
.active {
	font-weight: bold;
}
</style>
