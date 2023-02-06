s = input()  #getting input
t=""     #temporary variable
a=[]    # empty array initialization.
tot = 0 #total - storing result.
for i in range(len(s)):    # getting single element from input string.
    if (s[i] == "-" and ("0" <= s[i+1] <= "9")):  # check if the element is negative numbers.
        print ("negatives not allowed")
    elif ("0" <= s[i] <= "9"):    # check if the element is numeric.
        t=t+s[i]          #concadinate numeric values as string.
    else:
        if (t == ""):    # check if the element is white space.
            a.append("0")
        else:
            a.append(t)
        t=""
a.append(t)       # update the arry with end result.
for j in a:
    if (int (j) < 1000 and int(j) != 0):  # check if the stored array element is not 0 and less then 1000.
        tot += int(j)      #convert the element to int and concadinate to the total variable.
print(tot)   #Print end result
