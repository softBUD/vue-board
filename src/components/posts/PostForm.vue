<template>
	<div>
		<form>
			<div class="mb-3">
				<label for="title" class="form-label">제목</label>
				<!-- autofocus -->
				<input
					v-focus
					type="text"
					v-color="'blue'"
					:value="title"
					@input="$emit('update:title', $event.target.value)"
					class="form-control"
				/>
			</div>
			<div class="mb-3">
				<label for="content" class="form-label">내용</label>
				<textarea
					class="form-control"
					:value="content"
					@input="$emit('update:content', $event.target.value)"
					rows="3"
				></textarea>
			</div>
			<slot name="actions"></slot>
		</form>
	</div>
</template>

<script setup>
// 커스텀 디렉티브
// html 요소인 auto-focus는 커스텀 디렉티브와는 다르게 동적으로 컴포넌트가
// 바뀌면 오토포커싱이 동작하지않는다.

defineProps({
	title: String,
	content: String,
});

defineEmits(['update:title', 'update:content']);
</script>

<style scoped></style>
