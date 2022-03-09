package main

import "fmt"

func main() {
	fmt.Println(solution([]int{4, 1, 2, 1}, 4))
}

func solution(numbers []int, target int) int {
	// 모든 경우의 수 다 커버해야함 -> dfs?
	return dfs(numbers, 0, 0, target)
}

func dfs(numbers []int, cur int, sum int, target int) int {
	// dfs의 종료조건: 끝까지(최대깊이) 탐색했을 때
	if cur == len(numbers) {
		if sum == target {
			return 1
		}
		return 0
	}
	return dfs(numbers, cur+1, sum+numbers[cur], target) + dfs(numbers, cur+1, sum-numbers[cur], target)
}
