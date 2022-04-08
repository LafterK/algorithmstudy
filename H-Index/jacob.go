package main

import (
	"fmt"
)

func solution(citations []int) int {
	h := 0
	maxC := 0
	for _, c := range citations {
		if maxC < c {
			maxC = c
		}
	}
	maxH := 0
	for h < maxC {
		count := 0 // h번 이상 인용된 논문 수

		for _, c := range citations {
			if c >= h {
				count++
			}
		}
		if h <= count && maxH < h {
			maxH = h
		}
		h++
	}
	return maxH
}

func main() {
	fmt.Println(solution([]int{3, 0, 6, 1, 5, 7}))
}
