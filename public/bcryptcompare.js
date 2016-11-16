(function){

	var app ={
		url:'http://localhost:4000',

	},

	init:function(){
		this.listeners();
	},
	listeners:function(){
		$('form').on('submit',this.recupVal.bind(this));
	},

	recupVal:function(event){
		event.preventDefault();
		var user_name = $('#user_name').val();
		var password = $('#password').val();
		$.post({
              url:this.url+'/recupVal',
              method:'POST',
              data:{user_name:user_name,password:password,ajax:true}
		})
		.done(this.doneDone)
		.fail(this.failError);
	},

	doneDone:function(res){
		if(res.err){
                console.log('Done'+res.err);
            }else{
            	console.log(res.err);
            }

	},

	failError:function(){
		console.log('Req Fail Error')
	},

};

app.init();
})();