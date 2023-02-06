s = input()
t=""
a=[]
tot = 0
for i in range(len(s)):
    if (s[i] == "-" and ("0" <= s[i+1] <= "9")):
        print ("negatives not allowed")
    elif ("0" <= s[i] <= "9"):
        t=t+s[i]
    else:
        if (t == ""):
            a.append("0")
        else:
            a.append(t)
        t=""
a.append(t)
for j in a:
    if (int (j) < 1000 and int(j) != 0):
        tot += int(j)
print(tot)