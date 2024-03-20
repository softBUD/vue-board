export default {
	install(app, options) {
		const person = {
			name: '짐코딩',
			say() {
				alert(this.name);
			},
			...options,
		};
		// globalproperties : vue 인스턴스 내에서 '$person'사용으로 접근가능
		app.config.globalProperties.$person = person;
		// provide : setup 생명주기 이후에 스크립트에서 inject로 접근가능
		app.provide('person', person);
	},
};
