<script>
    export let person;
    //console.log(person);

    // {
    // id: 394,
    // img: 0,
    // name: '신옥영',
    // univ: '서울대',
    // major: '법학과',
    // cate: '법조',
    // prev: '대전지법',
    // now: '대전지법 판사',
    // main: '서울고법 국선변호사'
    // }


    let imgSrc;
    if (person.img==0) {
        imgSrc = "https://pages.newstapa.org/n2103/static/img/man/img_"+person.id+".png"
    } else {
        imgSrc = "https://pages.newstapa.org/n2103/static/img/man/img_else"+person.img+".png"
    }

    function getModalId(e){
		console.log(e.target);
	}

</script>

<div class="man">
    <img src="{imgSrc}" alt="{person.name}" />
    <p>{person.name}</p>
    <p>{person.now}</p>
</div>

<style lang="scss" >
    .man {
        border : 1px solid gray;
        background-color : lightgray;
        padding : 10px;
        > img {
            width : 30px;
            height : 30px;
        }
    }
    p {
        margin : 0;
    }
</style>