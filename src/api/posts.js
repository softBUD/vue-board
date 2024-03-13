import { posts } from '.';
const data = [
	{ id: 0, title: '제목0', content: '내용0', createdAt: '2023-01-00' },
	{ id: 1, title: '제목1', content: '내용1', createdAt: '2023-01-01' },
	{ id: 2, title: '제목2', content: '내용2', createdAt: '2023-01-02' },
	{ id: 3, title: '제목3', content: '내용3', createdAt: '2023-01-03' },
	{ id: 4, title: '제목4', content: '내용4', createdAt: '2023-01-04' },
	{ id: 5, title: '제목5', content: '내용5', createdAt: '2023-01-05' },
];

export function getPostData() {
	return data;
}

export function getPostList(params) {
	return posts.get('/', { params });
}

export function getPostById(id) {
	return posts.get(id);
}

export function createPost(data) {
	return posts.post('/', data);
}

export function updatePost(id, data) {
	return posts.put(id, data);
}

export function deletePost(id) {
	return posts.delete(id);
}
