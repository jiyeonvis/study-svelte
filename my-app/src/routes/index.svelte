<script>
	import Person from './Person.svelte';
	import Modal from './Modal.svelte';
	import { people } from '../store.js';
	import { onMount } from 'svelte';

	//category 이용해서 filtering 필요

	//person
	//let imgSrc;
	function getImgSrc(person) {
		let imgSrc;
		if (person.img == 0) {
			imgSrc = 'https://pages.newstapa.org/n2103/static/img/man/img_' + person.id + '.png';
		} else {
			imgSrc = 'https://pages.newstapa.org/n2103/static/img/man/img_else' + person.img + '.png';
		}
		return imgSrc;
	}

	//modal 만드세요
	let mId = -1; //modal id
	let showM = false;

	function showModal() {
		showM = true;
	}
	function closeModal() {
		showM = false;
	}

	function getModalId(person) {
		//console.log(person.id);
		mId = person.id;
		showModal();
	}

	// 필터 만드세요
	let selectedPeople = [];
	//init
	selectedPeople = $people;

	function setData(e) {
		let name = e.target.innerHTML;
		console.log(name);
		selectedPeople = $people.filter((d) => {
			return d.cate === name;
		});
		if (selectedPeople.length === 0) {
			selectedPeople = $people;
		}
	}

	const GSheetsReader = require('g-sheets-api');

  const options = {
    apiKey : 'AIzaSyAaPrPRzbpnirGdoaItNU6H2C283bn2M90',
    sheetId : '1jeFLjaehogonufKqNcNvR0gZVmuam1vrDIBNkY8Uba4'
  }

let results; 
  GSheetsReader(
    options, 
    results => {
      console.log(results);
    }
  )
  console.log("a");
</script>

<header class="header">
	<a href="https://newstapa.org/" target="_blank">
		<img
			src="https://storage.googleapis.com/media.newstapa.org/static/bundle/korean/assets/img/logo.svg"
			alt="Newstapa logo"
			class="header__logo"
		/>
	</a>
</header>

{results}

<div class="section">
	<div class="brief-box box">
		<p class="title">
			서중회(序中會),<br class="break" /> <span class="title2">조선일보 인맥 네트워크의 심장</span>
		</p>
		<p class="brief">
			방일영장학회 선배들의 모임 ‘서중회’. 조선일보를 창간한 계초 방응모가 1928년 설립한
			‘춘해장학부'가 서중회의 모태다. 1974년 이후 지금까지 763명이 방일영장학회의 장학금 수혜를
			받았다. 조선일보 방상훈 사장은 2020년 서중회 신년회 및 정기총회에서 “조선일보가 100년을
			이어오며 1등 언론의 위치를 굳건히 지킬 수 있었던 데에는 사회 곳곳에서 중추적인 역할을 맡고
			계신 서중회원 여러분의 진심 어린 성원이 많은 도움이 되었다”라고 말했다. 서중회, 그들은
			누구일까? 뉴스타파는 스스로 권력이 된 조선일보의 인맥 네트워크 핵심, 방일영장학회 졸업생 모임
			서중회 주요 회원 명단과 그들의 이력을 공개한다.
		</p>
	</div>
	<div class="button-box box">
		<div class="button" on:click={setData}>전체</div>
		<div class="button cate1" on:click={setData}>법조</div>
		<div class="button cate2" on:click={setData}>조선일보</div>
		<div class="button cate3" on:click={setData}>학계</div>
		<div class="button cate4" on:click={setData}>공공기관</div>
		<div class="button cate5" on:click={setData}>국책연구원</div>
		<div class="button cate6" on:click={setData}>기타</div>
	</div>

	<div id="app">
		<div id="container" class="canvas box">
			{#each selectedPeople as person}
				<!-- <Person {person} on:click={getModalId} /> -->

				<div class="man" on:click={() => getModalId(person)}>
					<img class="man-icon" src={getImgSrc(person)} alt={person.name} />
					<p>{person.name}</p>
					<p>{person.now}</p>
				</div>
			{/each}
		</div>
		{#if showM}
			<Modal {mId} on:mclose={closeModal} />
		{/if}
	</div>

	<p class="source">
		사진 출처 : 법률신문 DB, 조선일보 인물정보 <br />
		데이터 시각화 : 김지연 | 데이터 : 최윤원
	</p>
</div>

<style lang="scss">
	:global(*) {
		margin: 0;
		padding: 0;
	}

	$breakpoint-mobile: 340px;
	$breakpoint-tablet: 758px; //758
	$breakpoint-desktop: 1200px;

	@mixin mobile {
		@media (max-width: #{$breakpoint-tablet - 1px}) {
			//min-width: #{$breakpoint-mobile}) and
			@content;
		}
	}
	@mixin tablet {
		@media (min-width: #{$breakpoint-tablet}) and (max-width: #{$breakpoint-desktop - 1px}) {
			@content;
		}
	}
	@mixin desktop {
		@media (min-width: #{$breakpoint-desktop}) {
			@content;
		}
	}

	//font
	@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;600;700&display=swap');

	@mixin font {
		font-family: 'Noto Serif KR', serif;
	}

	$c-cate1: #394960;
	$c-cate2: #764a4c;
	$c-cate3: #92967d;
	$c-cate4: #6e7c7c;
	$c-cate5: #857869;
	$c-cate6: #929293;
	@mixin selectedCate($c) {
		color: $c;
		border: 2px solid $c;
	}

	:global(.header) {
		height: 80px;
		width: 100%;
		padding: 2rem;
		flex: none;
		background-color: #fff;
		@include mobile {
			height: 60px;
		}
	}
	@include mobile {
		.header__logo {
			width: 150px;
			height: auto;
		}
	}

	:global(.section) {
		@include font;
	}

	.title {
		display: block;
		font-size: 3rem;
		@include font;
		@include mobile {
			font-size: 2rem;
			> .title2 {
				font-size: 1.5rem;
			}
		}
	}

	.brief {
		font-size: 1.4rem;
		margin: 0 auto;
		line-height: 170%;
		@include mobile {
			font-size: 1.2rem;
		}
	}

	.brief-box {
		display: block;
		background-color: rgba(255, 255, 255, 0.6);
		flex-wrap: wrap;
		flex-direction: row;
		padding: 2rem 3rem;
		border: 1px solid #404040;
	}

	:global(.box) {
		width: 90vw;
		@include tablet {
			width: 90%;
		}
	}

	.button-box {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		position: relative;
		justify-content: center;
		margin: 1.5rem auto;
		padding: 0;
		@include tablet {
			margin: 1rem auto;
		}
		@include mobile {
			padding: 0;
		}
	}

	.button {
		text-align: center;
		position: relative;
		margin: 6px 12px;
		font-size: 16px;
		outline: none;
		padding: 5px 25px 6px 25px;
		border-radius: 25px;
		background-color: #434343;
		color: white;
		// @include tablet {
		// 	.button {
		// 		margin : 0.5rem 0.7rem;
		// 		font-size: 1.8rem;
		// 		padding: 0.3rem 1.8rem 0.4rem 1.8rem;
		// 		border-radius : 1.8rem;
		// 	}
		// }
		&.cate1 {
			background-color: $c-cate1;
		}
		&.cate2 {
			background-color: $c-cate2;
		}
		&.cate3 {
			background-color: $c-cate3;
		}
		&.cate4 {
			background-color: $c-cate4;
		}
		&.cate5 {
			background-color: $c-cate5;
		}
		&.cate6 {
			background-color: $c-cate6;
		}

		&.selected {
			background-color: white;
			border-radius: 24px;
			font-weight: 600;
			color: #434343;
			border: 2px solid #434343;

			&.cate1 {
				@include selectedCate($c-cate1);
			}
			&.cate2 {
				@include selectedCate($c-cate2);
			}
			&.cate3 {
				@include selectedCate($c-cate3);
			}
			&.cate4 {
				@include selectedCate($c-cate4);
			}
			&.cate5 {
				@include selectedCate($c-cate5);
			}
			&.cate6 {
				@include selectedCate($c-cate6);
			}
		}
	}

	.canvas {
		margin: 0 auto;
		padding: 20px 30px;
		border: 1px solid #404040;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-around;
		position: relative;
	}

	.man {
		text-align: center;
		position: relative;
		margin: 8px;
		font-size: 16px;
		> .man-icon {
			width: 80px;
			height: 80px;
		}
	}
</style>
