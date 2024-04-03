<template>
	<div>
		<AppLoading v-if="loading" />
		<AppError v-else-if="error" :message="error.message" />
		<div v-else>
			<h2>게시글 수정</h2>
			<hr />
			<PostForm
				v-model:title="form.title"
				v-model:content="form.content"
				@submit.prevent="edit"
			>
				<template #actions>
					<div>
						<button
							type="button"
							class="btn btn-outline-dark me-2"
							@click="pushDetailPage"
						>
							취소
						</button>
						<button
							class="btn btn-primary"
							type="button"
							:disabled="editLoading || loading"
							@click="edit"
						>
							<template v-if="editLoading">
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
		</div>
		<!-- <AppAlert :items="alerts"></AppAlert> -->
	</div>
</template>

<script setup>
import PostForm from '@/components/posts/PostForm.vue';
import { useRoute, useRouter } from 'vue-router';
// import { getPostById } from '@/api/posts';
// import { ref } from 'vue';
import AppLoading from '@/components/app/AppLoading.vue';
import AppError from '@/components/app/AppError.vue';
import { useAlert } from '@/composables/alert';
import { useAxios } from '@/composables/axios';

const { showAlert, showSuccessAlert } = useAlert();

// const error = ref(null);
// const loading = ref(false);

const route = useRoute();
const router = useRouter();

const id = route.params.id;

// const form = ref({
// 	title: null,
// 	content: null,
// });

const { data: form, error, loading } = useAxios(`/posts/${id}`);

const { loading: editLoading, excute } = useAxios(
	`/posts/${id}`,
	{ method: 'patch' },
	{
		immediate: false,
		onSuccess: () => {
			router.push({ name: 'PostDetail', params: { id } });
			showSuccessAlert('저장 완료되었습니다.');
		},
		onError: err => {
			showAlert(err.message);
		},
	},
);

// const fetchPost = async () => {
// 	const { data } = await getPostById(id);
// 	setForm(data);
// };

// const setForm = ({ title, content, createdAt }) => {
// 	form.value.title = title;
// 	form.value.content = content;
// 	form.value.createdAt = createdAt;
// };

// const edit = async () => {
// 	try {
// 		loading.value = true;
// 		await updatePost(id, { ...form.value });
// 		router.push({ name: 'PostDetail', params: { id } });
// 		showSuccessAlert('저장 완료되었습니다.');
// 	} catch (err) {
// 		showAlert(err.message);
// 		error.value = err;
// 	} finally {
// 		loading.value = false;
// 	}
// };

const edit = () => {
	excute({
		...form.value,
	});
};

// fetchPost();

const pushDetailPage = () =>
	router.push({ name: 'PostDetail', params: { id } });
</script>

<style scoped></style>
