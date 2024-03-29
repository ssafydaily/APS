# 문제 해결



알고리즘 연구(설계)는 계산 문제를 효율적으로 해결하기 위한 방법을 찾는 것이다.

## 계산 문제 유형


다양한 알고리즘 문제 유형들로 분류할 수 있다.

- **Decision problems** (결정 문제)
- **Optimization problems** (최적화 문제)
- Counting problems 
- Searching problems (탐색 문제)
- Sorting Problems
- . . .

특히, 알고리즘 연구에서 **결정 문제** 와 **최적화 문제** 가 중요하게 다뤄진다.

## 결정 문제

- Yes(true) 또는 No(false)로 답하는 문제다.
- Yes 또는 No로 답할 수 없을 때 그 문제는 **결정 불가능** (undecidable)하다. 즉, **계산 불가능** 하다.
- 결정 가능한 문제들을 어려운 정도에 따라 P, NP, NP-Complete, 등의 문제군으로 분류한다.



## 최적화 문제

- 가능한 후보해들 중에서 ``최적해`` 를 찾는 문제다.
- ``최적해`` 는 어떤 조건을 만족하는 최대값 또는 최소값이 되는 경우이다. 
- 문제의 크기가 커지면 경우의 수가 기하급수적으로 증가한다. 따라서, 모든 경우를 조사하기 위한 계산량(시간)도 그에 비례해서 증가한다.
- 조합적 최적화 문제(Combinatorial optimization problem): 경우의 수는 순열(permutation), 부분집합(power set), 조합(combination)관 연관이 깊다.
- 최적화 문제는 그에 대응하는 결정 문제가 있을 수 있다.
    