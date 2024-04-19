<template>
	<module class="overflow-x-hidden overflow-y-hidden">
		<p-rule>
			<textarea :value="pys.join('\n')" full readonly />
			<p-corn>拼音列表</p-corn>
		</p-rule>
		<p-rule>
			<textarea v-model="ruleGlobal" full />
			<p-corn>全局规则</p-corn>
		</p-rule>
		<template v-for="(rule, index) of rulesAll" :key="index">
			<p-rule>
				<textarea v-model="rulesAll[index]" rule :tabindex="index+2" />
				<textarea :value="chars[index]" result readonly />
				<p-corn>第{{index+1}}个拼音</p-corn>
			</p-rule>
		</template>
	</module>
</template>

<script setup>
	import { computed, ref } from 'vue';

	import pys from './lib/pinyin.js';

	import './index.pcss';
	import './index.sass';



	document.title = '拼音猜成语助手';


	const filters = {
		l: (py, length) => py.length == length,
		r: (py, pattern) => RegExp(pattern).test(py),
		m: (py, pattern) => RegExp(`^${pattern}$`).test(py),
		c: (py, chars) => RegExp(`[${chars}]`).test(py),
	};


	const ruleGlobal = ref('# a e i o u v\n!c ');
	const rulesAll = ref([]);

	for(let i = 0; i < 4; i++) { rulesAll.value.push('l \n'); }

	const test = (ruleRaw, py) => {
		const [rule, ...params] = ruleRaw.trim().toLowerCase().split(' ');

		const filter = filters[rule.replace(/!/, '')];

		if(!filter || !params.length) { return true; }

		const reverse = rule.startsWith('!');

		const result = params.length ? filter?.(py, ...params) : true;

		return reverse ? !result : result;
	};

	const chars = computed(() => rulesAll.value.map(rulesRaw => {
		const rules = (rulesRaw.trim() + '\n' + ruleGlobal.value.trim())
			.split('\n')
			.filter(r => r && !r.startsWith('#'));

		if(!rules.length) { return pys.join('\n'); }

		return pys
			.filter(py => {
				for(const ruleRaw of rules) {
					if(!test(ruleRaw, py)) {
						return false;
					}
				}

				return true;
			})
			.join('\n');
	}));
</script>

<style lang="sass" scoped>
module
	@apply block fixed top-4 bottom-4 left-4 right-4
p-rule
	@apply inblock relative w-1/2 h-1/3 border border-[var(--cMain)]
cMain
	textarea
		@apply h-full p-1 text-lg bg-transparent outline-0 resize-none

	[full]
		@apply w-full
	[rule]
		@apply w-1/2 border-r border-[var(--cMain)] border-dashed
	[result]
		@apply w-1/2

	p-corn
		@apply text-[var(--cMain)] text-sm absolute top-1 right-3
</style>
