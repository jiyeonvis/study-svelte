<script>
    //cate를 기준으로 filtering해서 쫙 뿌려주자. 
    import { peopleD } from './store.js';

    //props 
    export let cate; 

    let computedPeople = [...$peopleD].filter(d=>{
        return d.cate == cate;
    });
</script>

<div class="container">
    {#each computedPeople as person}
    <div class="element">
        {person.name}
    </div>
    {/each}
</div>


<!-- 하지만 아래는 작동하지 않음
<style src="./scss/people.scss" global>
</style> -->

<!-- <style lang="scss">
    .container {
    display : flex;
    > .element {
        border-color : blue;
    }
}
.element {
    border : 1px solid black;
    margin : 10px;
}
</style> -->