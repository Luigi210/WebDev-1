a = int(input())
b = int(input())
c = a*b
if(a > 0):
    if(c < 109):
        d = c
    elif(c%109 == 0):
        d = c - b*109
    else:
        d = c - 109
elif(a < 0):
    d = c + 109
else:
    d = 0
print(d)