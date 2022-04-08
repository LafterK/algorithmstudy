package main

import (
	"fmt"
	"sort"
	"strconv"
	"strings"
)

func solution(numbers []int) string {
	sort.Slice(numbers, func(i int, j int) bool {
		numericA := strconv.Itoa(numbers[i])
		numericB := strconv.Itoa(numbers[j])
		comb1, _ := strconv.Atoi(strings.Join([]string{numericA, numericB}, ""))
		comb2, _ := strconv.Atoi(strings.Join([]string{numericB, numericA}, ""))
		return comb2 < comb1
	})

	numerics := []string{}
	for _, num := range numbers {
		numerics = append(numerics, strconv.Itoa(num))
	}
	answer := strings.Join(numerics, "")
	if answer[0] == '0' {
		return "0"
	}

	return answer
}

func main() {
	fmt.Println(solution([]int{6, 10, 2}))
}
