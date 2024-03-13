<template>
	<div>
		<form>
			<div class="mb-3">
				<label for="title" class="form-label">제목</label>
				<input
					type="text"
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
defineProps({
	title: String,
	content: String,
});
defineEmits(['update:title', 'update:content']);
</script>

<style scoped></style>
