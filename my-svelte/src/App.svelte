<script>
	let text = '';
	let number = 3
	let checked = false
	let fruits = ['apple', 'banana', 'cherry']
	let selectedFruits = []
	let group = 'banana'
	let textarea = ''
	let select = 'banana'
	let multipleSelect = ['banana', 'cherry']
</script>

<!-- let text = ''; -->
<section>
	<h2>text</h2>
	<input type="text" bind:value={text} />
	<!-- 양방향 데이터 바인딩 -->
</section>

<!-- let number = 3 -->
<section>
	<h2>number/range</h2>
	<div>
		<input type="number" bind:value={number} min=0 max=10 />
	</div>
	<div>
		<input type="range" bind:value={number} mibn=0 max=10 />
	</div>
</section>

<!-- let checked = false -->
<section>
	<h2>checkbox</h2>
	<!-- 이렇게 하면 딱 체크박스를 눌러야만 선택됨 -->
	<input type="checkbox" bind:checked={checked} /> Agree?
	<!-- 라벨로 감싸면 문자 눌러도 체크박스 선택됨 -->
	<label>
		<input type="checkbox" bind:checked={checked} />Agree?(label wrapping)
	</label>
</section>

<!-- group : svelte에서 제공하는 태그
let fruits = ['apple', 'banana', 'cherry']
let selectedFruits = [] -->
<section>
	<h2>Checkbox 다중 선택</h2>
	<strong>Selected: {selectedFruits}</strong>
	{#each fruits as fruit}
		<label>
			<input type="checkbox" value={fruit} bind:group={selectedFruits} /> {fruit}
		</label>
	{/each}
</section>

<!-- let group = 'banana' -->
<section>
	<h2>radio</h2>
	<!-- 이런 식으로 name을 동일하게 설정하고 제작하는 것이 일반적
	<input type="radio" value="apple" name="my radio" />
	<input type="radio" value="banana" name="my radio" />
	<input type="radio" value="cherry" name="my radio" /> -->

	<strong>selected : {group}</strong>
	<label>
		<input type="radio" value="apple" bind:group={group} /> apple
	</label>
	<label>
		<input type="radio" value="banana" bind:group={group} /> banana
	</label>
	<label>
		<input type="radio" value="cherry" bind:group={group} /> cherry
	</label>
</section>

<!-- let textarea = '' -->
<section>
	<h2>textarea</h2>
	<pre>{textarea}</pre>
	<textarea bind:value={textarea} />
</section>

<!-- let select = 'banana' -->
<section>
	<h2>select 단일 선택</h2>
	<strong>selected: {select}</strong>
	<div>
		<select bind:value={select}>
			<option disabled value="">please select one!</option>
			<option>apple</option>
			<option>banana</option>
			<option>cherry</option>
		</select>
	</div>
</section>

<!-- let multipleSelect = ['banana', 'cherry'] -->
<section>
	<h2>select 다중 선택(multiple)</h2>
	<strong>selected: {multipleSelect}</strong>
	<div>
		<!-- 다중선택이면 multiple을 넣어야 하고 value는 배열이어야 한다 -->
		<select multiple bind:value={multipleSelect}>
			<option disabled value="">please select one!</option>
			<option>apple</option>
			<option>banana</option>
			<option>cherry</option>
		</select>
	</div>
</section>