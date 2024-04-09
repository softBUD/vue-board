<template>
	<AppLoading v-if="loading" />
	<AppError v-else-if="error" :message="error.message" />
	<div v-else>
		<h2>{{ post.title }}</h2>
		<p>{{ post.content }}</p>
		<p class="text-muted">
			{{ $dayjs(post.createdAt).format('YYYY. MM. DD HH:mm:ss') }}
		</p>
		<hr class="my-4" />
		<div class="row g-2">
			<div class="col-auto">
				<button class="btn btn-outline-dark">이전글</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-dark">다음글</button>
			</div>
			<div class="col-auto me-auto"></div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="pushListPage">목록</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-primary" @click="pushEditPage">
					수정
				</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-danger" @click="deleteCurrentPost">
					삭제
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
// import { deletePost } from '@/api/posts';
// import { ref } from 'vue';
import AppLoading from '@/components/app/AppLoading.vue';
import AppError from '@/components/app/AppError.vue';
import { useAxios } from '@/composables/axios';
import { useAlert } from '@/composables/alert';
import { computed } from 'vue';

const { showAlert, showSuccessAlert } = useAlert();

// const error = ref(null);
// const loading = ref(false);

const props = defineProps({
	id: [String, Number],
});

// useAxios 훅에 url을 반응형 데이터로 넘겨줘야
// 버튼을 클릭할때마다 새로운 데이터가 조회된다.
const url = computed(() => `/posts/${props.id}`);
const { data: post, error, loading } = useAxios(url);
const router = useRouter();

const { excute } = useAxios(
	`posts/${props.id}`,
	{ method: 'delete' },

	{
		immediate: false,
		onSuccess: () => {
			router.push({ name: 'PostList' });
			showSuccessAlert('저장 완료되었습니다.');
		},
		onError: err => {
			showAlert(err.message);
		},
	},
);
// const post = ref({
// 	title: null,
// 	content: null,
// 	createdAt: null,
// });

// let reactiveForm = reactive({});
// 프로젝트의 컨벤션에 따라 둘중 주로 쓰는 것을 택일한다.

// ref = 한꺼번에 객체 전체 할당 가능하지만 form.value처럼 .value 를 항상 붙여서 할당해야함
// reactive = 속성에 일일이 값을 할당해야하지만 바로 값에 접근 가능
// const fetchPost = async () => {
// 	try {
// 		loading.value = true;
// 		const { data } = await getPostById(props.id);
// 		// form.value = { ...data };
// 		// reactiveForm.title = data.title;
// 		// reactiveForm.content = data.content;
// 		// reactiveForm.createdAt = data.createdAt;
// 		setPost(data);
// 	} catch (err) {
// 		// console.error(error);
// 		error.value = err;
// 	} finally {
// 		loading.value = false;
// 	}
// };

// const setPost = ({ title, content, createdAt }) => {
// 	post.value.title = title;
// 	post.value.content = content;
// 	post.value.createdAt = createdAt;
// };

const deleteCurrentPost = async () => {
	try {
		// 안티패턴 코드 if문의 depth가 깊어지지않기 위해서 사용
		if (confirm('삭제하시겠습니까?') === false) {
			return;
		}
		excute();
		// await deletePost(props.id);
	} catch (error) {
		console.error(error);
	}
};

// fetchPost();
const pushListPage = () => router.push({ name: 'PostList' });
const pushEditPage = () =>
	router.push({ name: 'PostEdit', params: { id: props.id } });
</script>

<style scoped></style>
