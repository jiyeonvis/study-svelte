<script>
    import { createEventDispatcher } from 'svelte';
    import { people } from '../store.js';

    export let mId
    //export let showM
    let mdata;

	const dispatch = createEventDispatcher();

    //console.log($people );
    $: { //반응성 없으면 mId 바뀌는거 눈치 못챔 
        mdata = $people.filter( d=>  d.id == mId*1)[0]
        mdata = mdata //이거 없으면 안됨
        console.log(mdata)
    }
    
    function getImgSrc(person){
		let imgSrc;
		if (person.img==0) {
			imgSrc = "https://pages.newstapa.org/n2103/static/img/man/img_"+person.id+".png"
		} else {
			imgSrc = "https://pages.newstapa.org/n2103/static/img/man/img_else"+person.img+".png"
		}
		return imgSrc;
	}
    //mdata = mdata;

</script>

<div class="modal">
    <h2>Modal</h2>
    <!-- <p>id : {mId}</p> -->
    <img src="{getImgSrc(mdata)}" alt="{mdata.name}" />
    <p>{ mdata.name }</p>
    <p>{ mdata.cate }</p>
    <p>{mdata.univ} {mdata.major}</p>

    {#if mdata.main }
    <h3>현직 및 최종 경력</h3>
    <p>{mdata.main}</p>
    {/if}

    <h3>주요 경력</h3>
    <p>{mdata.prev}</p>

    <button on:click="{() => dispatch('mclose', 'detail value')}">X</button>

</div>


<style>
    h2 {
        background-color :gray;
    }
    p {
        margin : 0;
    }

    .modal {
		position : fixed;
		/* display : block; */
		text-align : center;
		top : 50%;
		left : 50%;
		transform : translate(-50%, -50%);
		z-index : 100;
		width : 400px;
		min-height : 500px;
		max-height : 90vh;
		overflow-x : auto;
		overflow-y : auto;
		background-color : #ebebec;
		opacity : 98%;
		color : black;
		padding : 20px;
		margin : 0 auto;
		border : 1px solid #424544;
	}

</style>