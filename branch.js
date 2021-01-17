(w=>{
	console.clear();
	const doc=w.document, branch=[];
	let nodeCurr=doc.documentElement, nodeDepth=0, nodeNext;
	do{
		console.log('\u0020'.repeat(nodeDepth)+ '%c'+ branch.join(' > '),'font-family:monospace; font-size: 9px');
		console.log('\u0020'.repeat(nodeDepth)+ nodeCurr.tagName);
		if(nodeNext=nodeCurr.firstElementChild){
			nodeCurr=nodeNext;
			branch[nodeDepth]=(nodeCurr.parentElement.tagName);
			++nodeDepth
		}else{
			if(nodeNext=nodeCurr.nextElementSibling){
				nodeCurr=nodeNext;
			}else{
				nodeNext=nodeCurr;
				while(nodeNext=nodeNext.parentElement){
          --nodeDepth;
          branch.length=nodeDepth;
					if(nodeCurr=nodeNext.nextElementSibling){
						break
					}
				}
			}
		}
	}while(nodeCurr)
})(window);
