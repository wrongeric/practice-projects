# Multiplication Table

- Create a function that builds a multiplication table using 3 parameters: the number to start with, the number to end on, and the number to multiply each number in the sequence by.

- Add each piece of the multiplication equation to the dom separately using the given function appendADiv e.g. 1, "x", 3, "=", 3. The operator and equal sign will be hard-coded, but the numbers will be mutable values determined by the given parameters. Add a line to separate each equation using the given makeNewLine function.

- For an additional challenge, change the third parameter--i.e. the number to multiply each number in the sequence by--into two parameters, a number to start and end a range which each number in the first range should be multiplied by. For instance, if given makeMultTable(0,2,1,5), out put should be:

0 x 1 = 0
---------
1 x 1 = 1
---------
2 x 1 = 2
---------
---------
0 x 2 = 0
---------
1 x 2 = 2
---------
2 x 2 = 4
---------
---------
0 x 3 = 0
---------
1 x 3 = 3
---------
2 x 3 = 6
---------
---------
0 x 4 = 0
etc...