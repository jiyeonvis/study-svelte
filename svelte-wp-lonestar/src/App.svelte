<script>
	import { docs, docsDetail, peopleD } from './store.js'; //경로는 꼭 ./로 시작해서 써야 한다고 함.
	import People from './People.svelte';
	
	console.log($docs);
	console.log($docsDetail);
	console.log($peopleD);
</script>

<!-- <main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main> -->
<h1>론스타 사건, 기록과 증언</h1>
<p class="paragraph">
	뉴스타파가 [론스타 사건, 기록과 증언]을 시작합니다. ‘외환은행을 헐값 매각, 불법 매각했다’는 의혹으로 시작해 검찰수사와 재판, 국제분쟁으로까지 이어졌던 론스타 사건과 관련된 각종 기록과 증언을 공개하는 프로젝트입니다. 지난 20년간 각종 논란과 의혹이 끊이지 않았던 이 사건의 전말을 이해하는 데 도움이 되고자 합니다.
</p>

<h3>론스타 사건이란?</h3>

<p class="paragraph">
	2003년 론스타는 외환은행을 인수할 자격이 없는 비금융주력자였을까. 또 우리 금융당국은 론스타가 비금융주력자인지 여부를 확인하고 외환은행 매각을 추진했던 것일까. 2006년 당시 검찰은 이 문제를 어떻게 수사했을까. 뉴스타파는 2006년 검찰 수사 기록, 이후 진행된 공판 기록을 입수해 당시 우리 금융당국과 검찰이 이 문제를 어떻게 다뤘는지 확인했습니다.
</p>

<h3>산업자본이란?</h3>

<h2>
	0. 등장 인물
</h2>
<People cate="fin-auth"></People>
<br>
<People cate="prosec"></People>
<br>
<br>


<h2>1. 공개 문서</h2>