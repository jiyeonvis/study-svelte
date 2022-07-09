import {onMount, onDestroy, afterUpdate, beforeUpdate} from 'svelte'
import { writable } from 'svelte/store'

//라이프사이클의 모듈화. 데이터를 옮길 땐 store가 유용하다. 

export function lifecycle() {
    onMount(()=>{
        console.log("mounted");
    });
    onDestroy(()=>{
        console.log("before destroy");
    });
    beforeUpdate(()=>{
        console.log("before update");
    });
    afterUpdate(()=>{
        console.log('after update!');
    });
}

export function delayRender(delay = 3000) { //ms
    let render = writable(false);
    onMount(()=>{
        setTimeout(()=>{
            //$render = true; //동작하지 않음. 달러표시는 svelte에서만 먹힘. 
            console.log(render) // set, update, subscribe
            render.set(true);
        }, delay);
    })
    return render;
}