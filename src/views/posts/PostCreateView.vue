<template>
	<div>
		<h2 @click="visibleForm = !visibleForm">게시글 등록</h2>
		<hr />
		<PostForm
			v-if="visibleForm"
			v-model:title="form.title"
			v-model:content="form.content"
			@submit.prevent="submit"
		>
			<template #actions>
				<div>
					<button
						type="button"
						class="btn btn-outline-dark me-2"
						@click="pushListPage"
					>
						목록
					</button>
					<button
						class="btn btn-primary"
						type="button"
						:disabled="loading"
						@click="submit"
					>
						<template v-if="loading">
							<span
								class="spinner-border spinner-border-sm"
								aria-hidden="true"
							></span>
							<span class="visually-hidden" role="status">Loading...</span>
						</template>
						<template v-else>저장</template>
					</button>
				</div>
			</template>
		</PostForm>
		<!-- <AppAlert :show="show" :message="message" :type="alertType"></AppAlert> -->
	</div>
</template>
<script setup>
import PostForm from '@/components/posts/PostForm.vue';
import { useRouter } from 'vue-router';
// import { createPost } from '@/api/posts';
import { ref } from 'vue';
import { useAlert } from '@/composables/alert';
import { useAxios } from '@/composables/axios';

const { showAlert, showSuccessAlert } = useAlert();

const router = useRouter();
const form = ref({
	title: null,
	content: null,
});
const { error, loading } = useAxios(
	'/posts',
	{
		method: 'post',
		data: { ...form.value, createdAt: Date.now() },
	},
	{
		immediate: false,
		onSuccess: () => {
			router.push({ name: 'PostList' });
			showSuccessAlert('저장완료');
		},
		onError: () => {
			showAlert(error.value.message);
		},
	},
);

// 내부적으로 비동기처리 되어있으므로, 콜백함수를 통해 alert 기능을 전달
const submit = async () => {
	// try {
	// 	loading.value = true;
	// 	const data = {
	// 		...form.value,
	// 		createAt: Date.now(),
	// 	};
	// 	await createPost(data);
	// 	router.push({ name: 'PostList' });
	// 	showSuccessAlert('저장 완료되었습니다.');
	// } catch (err) {
	// 	showAlert(err.message);
	// 	error.value = err;
	// } finally {
	// 	loading.value = false;
	// }
};

const pushListPage = () => router.push({ name: 'PostList' });

// const show = ref(false);
// const message = ref('');
// const alertType = ref('');

const visibleForm = ref(true);
</script>

<style scoped></style>
