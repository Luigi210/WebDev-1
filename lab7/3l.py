n = input()
s = 0
cnt = 0
for i in range(len(n) - 1, -1, -1):
    s += int(n[i])*(2**(cnt))
    cnt += 1
print(s)