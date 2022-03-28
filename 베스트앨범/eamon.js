/**
 * 
 * @param {string[]} genres 
 * @param {number[]} plays 
 * @returns 
 */
function solution(genres, plays) {
    var answer = [[],[]];
    // 장르별 숫자 많은 순서대로 정리 
    // 소팅
    // 가장 큰 애들 2개씩 넣으므로 우선순위 큐를 생각해볼수있다.
    // js 에서 인덱스로 우선순위큐 구현?

    const map = genres.reduce((acc,cur,i)=>{     
        if(acc[cur]){
            acc[cur] += plays[i]
        }else{
            acc[cur] = plays[i]
        }
       return acc
    },{})


    function sortedlist (songs, genre) {
        return songs.filter((v) => v.genre === genre).sort((a,b) => {
          if( b.play === a.play ) return a.no - b.no
            return b.play - a.play 

        }
        ).map((v)=> v.no).slice(0,2)
    }
    let songs = genres.map((genre, index) => {
        return {
            no: index,
            genre ,
            play: plays[index]
        }
    });


    return  Object.entries(map).sort((a,b)=> b[1] - a[1] ).reduce((acc,v,) => {
        return [ ...acc, ...sortedlist(songs , v[0]) ]} ,[])
}

const genres = ["classic", "classic", "classic", "pop"]
const plays = [500, 150, 800, 2500]	

console.log(solution(genres, plays))