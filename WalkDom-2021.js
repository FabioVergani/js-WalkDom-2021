function walk(root){
	let x, i=0, e=root;
	do{
		console.log(i,'\u0020'.repeat(i) + e.tagName);
		if(x=e.firstElementChild){
			++i;
			e=x
		}else if(x=e.nextElementSibling){
			e=x
		}else{
			x=e;
			while(x=x.parentElement){
				--i;
				if(e=x.nextElementSibling){
					break
				};
			};
		};
	}while(e);
}

/*
sample:
console.clear();
walk(document.body);
*/
