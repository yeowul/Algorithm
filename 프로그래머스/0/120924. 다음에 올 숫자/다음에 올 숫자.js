function solution(common) {
    const len=common.length
    const arr=common[1]-common[0]
    const gon=common[2]-common[1]===arr
    
    if(gon){
        return common[len-1]+arr
    }
    else{
        const ratio=common[1]/common[0];
        return common[len-1]*ratio
    }
    
}