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
					<button type="submit" class="btn btn-primary">저장</button>
				</div>
			</template>
		</PostForm>
		<!-- <AppAlert :show="show" :message="message" :type="alertType"></AppAlert> -->
		<AppAlert :items="alerts"></AppAlert>
	</div>
</template>
<script setup>
import PostForm from '@/components/posts/PostForm.vue';
import { useRouter } from 'vue-router';
import { createPost } from '@/api/posts';
import { ref } from 'vue';

const router = useRouter();
const form = ref({
	title: null,
	content: null,
});

const submit = async () => {
	try {
		const data = {
			...form.value,
			createAt: Date.now(),
		};
		await createPost(data);
		showAlert('저장 완료되었습니다.', 'success');
		// router.push({ name: 'PostList' });
	} catch (error) {
		// console.error(error);
		showAlert('네트워크오류가 발생했습니다.');
	}
};

const pushListPage = () => router.push({ name: 'PostList' });

// const show = ref(false);
// const message = ref('');
// const alertType = ref('');

const alerts = ref([]);

const showAlert = (message, type = 'error') => {
	alerts.value.push({ message, type });
	// message.value = text;
	// show.value = true;
	// alertType.value = type;
	setTimeout(() => {
		// show.value = false;
		// message.value = '';
		alerts.value.shift();
	}, 2000);
};

const visibleForm = ref(true);
</script>

<style scoped></style>
