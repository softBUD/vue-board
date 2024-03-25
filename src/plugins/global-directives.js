import focus from '@/directives/focus';
import color from '@/directives/color';
// 커스텀 디렉티브가 길어지면 이와같이 플러그인으로 사용할 수 있다.
export default {
	install(app) {
		app.directive('focus', focus);
		app.directive('color', color);
	},
};
