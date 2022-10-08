<script>
	function a(cb) {
		setTimeout(()=>{
			console.log('a')
			cb()
		}, 1000)
		//console.log('a')
	}

	function b() {
		console.log('b')
	}

	a(()=>{
		b()
	})


	//함수의 인수로 들어가는 또다른 함ㅜ를 콜ㄱㅏㅁ수라고 함
</script>