<template>
	<div v-if="modelValue">
		<div class="modal-backdrop fade show"></div>
		<!-- Button trigger modal -->
		<div
			class="modal fade show d-block"
			id="exampleModal"
			tabindex="-1"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="exampleModalLabel">{{ title }}</h1>
						<slot name="header">
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
								@click="$emit('update:modelValue', false)"
							></button>
						</slot>
					</div>
					<div class="modal-body">
						<slot></slot>
					</div>
					<div class="modal-footer">
						<slot name="actions"></slot>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
defineProps({
	// 부모컴포넌트에서 v-model로 넣은 값은 자식에서 modelValue를 선언해줘야 props로 받아옴.
	modelValue: Boolean,
	title: String,
	content: String,
	createdAt: [String, Number],
});

// 이벤트명:전달할 값을 선언하여 부모컴포넌트에 값을 전달

// Vue.js에서 v-model을 사용할 때 자식 컴포넌트에서 defineProps를 통해 props를 선언할 때,
// modelValue라는 이름으로 props를 선언해야만 부모 컴포넌트에서 v-model을 통해 값을 전달할 수 있습니다.
// 이는 Vue.js의 규약으로, v-model은 내부적으로 modelValue props와 update:modelValue 이벤트를 사용하여
// 양방향 데이터 바인딩을 처리합니다.

// 따라서 v-model을 사용할 때는 자식 컴포넌트에서 'modelValue' props를 명시적으로 선언해야 합니다.

// 만약 v-bind로 다른 이름의 props를 전달하고자 할 때는 modelValue가 아닌 다른 이름으로 props를 선언하고 사용해야 합니다.
// 이 경우에는 v-model을 사용하여 양방향 데이터 바인딩을 구현할 수 없습니다.
// 대신에 v-bind를 사용하여 단방향 데이터 흐름을 만들 수 있습니다.
// v-bind:customProp="parentValue" (부모컴포넌트)

defineEmits(['close', 'update:modelValue']);
</script>

<style scoped></style>
