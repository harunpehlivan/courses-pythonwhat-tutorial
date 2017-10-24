---
title       : Control flow
description : Insert the chapter description here


--- type:NormalExercise lang:python xp:100 skills:2 key:3f7ec57dda
## for loop


*** =instructions
Write a `for` loop that iterates over all elements of the `areas` list and prints out every element separately.

*** =hint

*** =sample_code
```{python}
# areas list
areas = [11.25, 18.0, 20.0, 10.75, 9.50]

# Code the for loop

```

*** =solution
```{python}
# areas list
areas = [11.25, 18.0, 20.0, 10.75, 9.50]

# Code the for loop
for area in areas :
    print(area)
```

*** =sct
```{python}
# get code of for loop
msg = "Make sure to loop over `areas`"
for_loop = Ex().check_for_loop(0)

# for loop iterator
for_loop.check_iter().has_equal_value(incorrect_msg = msg)

# for loop body
# note that we can't use has_equal_value below, because the body of a for loop
# is not necessarily a single python expression (i.e. it doesn't return a value)
msg = "Print out `area`"
for_loop.check_body().has_equal_output(incorrect_msg = msg, context_vals = ["test"])

# alternatively, could do
# for_loop.check_body().set_context(area = "test").has_equal_output(incorrect_msg = msg)

```


--- type:NormalExercise lang:python xp: skills: key:8da0db3df3
## list comprehension

*** =instructions
- Using the range of numbers from `0` to `9` as your iterable and `i` as your iterator variable, write a list comprehension that produces a list of numbers consisting of the squared values of `i`. 

*** =hint


*** =pre_exercise_code
```{python}

```

*** =sample_code
```{python}
# Create list comprehension: squares
squares = [____ for ____ in ____]

```

*** =solution
```{python}
# Create list comprehension: squares
squares = [i**2 for i in range(0,10)]

```

*** =sct
```{python}
# Spec2 
missing_msg="Did you use a list comprehension to turn the list of lists into a list of dicts?"
list_comp = Ex().check_list_comp(0, missing_msg = missing_msg)

# test that they defined the correct number of iterator variables
# setting exact_names to True also requires they have the same
# variable name as those in the solution
list_comp.has_context(exact_names = True)

# test body of list comprehension
list_comp \
    .check_body() \
    .set_context(i=4) \
    .has_equal_value('Are you squaring each value of `i`?', error_msg='Are you squaring each value of `i`?')

# test iterator of list comprehension
list_comp \
    .check_iter() \
    .has_equal_value('Are you iterating over `range(0,10)`?') 
           
```


--- type:NormalExercise lang:python xp:100 skills:2 key:8e9ef7d8a3
## list comprehension w/ conditional

*** =instructions
- Use `member` as the iterator variable in the list comprehension. For the conditional, use `len()` to evaluate the iterator variable. Note that you only want strings with 7 characters or more.

*** =hint

*** =pre_exercise_code
```{python}
# pec
```

*** =sample_code
```{python}
# Create a list of strings: fellowship
fellowship = ['frodo', 'samwise', 'merry', 'aragorn', 'legolas', 'boromir', 'gimli']

# Create list comprehension: new_fellowship
new_fellowship = [____ for ____ in fellowship ____]

```

*** =solution
```{python}
# Create a list of strings: fellowship
fellowship = ['frodo', 'samwise', 'merry', 'aragorn', 'legolas', 'boromir', 'gimli']

# Create list comprehension: new_fellowship
new_fellowship = [member for member in fellowship if len(member) >= 7]

```

*** =sct
```{python}

# Test: list comprehension
list_comp = Ex().check_list_comp(0, missing_msg="Did you create the list comprehension?")

# test body
list_comp \
    .check_body() \
    .set_context(member='samwise') \
    .has_equal_value('Did you use `member` as your iterator variable?', 
                     error_msg='Did you use `member` as your iterator variable?')

# test iterator
list_comp.check_iter().has_equal_value(error_msg='Are you using `fellowship` as your iterable?')

# test ifs
msg_incorrect = 'Did you create a list that only includes strings with 7 characters or more?'
msg_error = 'Did you create a list that only includes strings with 7 characters or more?'

# NOTE: putting an SCT in parentheses allows us to omit '\' when chaining SCTs
#       this makes it easier to include comments in a chain
(list_comp
    # note that we need to specify which if to check (here index = 0)
    .check_ifs(0)
    # mutli allows you to run multiple SCTs on the code focused by check_ifs
    .multi(
        # test w/case that should pass the if
        set_context(member='samwise').has_equal_value(incorrect_msg=msg_incorrect, error_msg=msg_error),
        # test w/case that should not pass the if
        set_context(member='frodo').has_equal_value(incorrect_msg=msg_incorrect, error_msg=msg_error)
        ))
        
```



--- type:NormalExercise lang:python xp:100 skills:2 key:f8cb706e3f
## list comprehension w/ conditional 2

The previous exercise an `if` conditional statement in the _predicate expression_ part of a list comprehension.
In this exercise, we will test an `if-else` statement in the _output expression_, or body, of the list comprehension.

*** =instructions
- In the output expression, keep the string as-is **if** the number of characters is >= 7, **else** replace it with an _empty string_.

*** =hint

*** =pre_exercise_code
```{python}
# pec
```

*** =sample_code
```{python}
# Create a list of strings: fellowship
fellowship = ['frodo', 'samwise', 'merry', 'aragorn', 'legolas', 'boromir', 'gimli']

# Create list comprehension: new_fellowship
new_fellowship = [____ for ____ in fellowship]

```

*** =solution
```{python}
# Create a list of strings: fellowship
fellowship = ['frodo', 'samwise', 'merry', 'aragorn', 'legolas', 'boromir', 'gimli']

# Create list comprehension: new_fellowship
new_fellowship = [member if len(member) >= 7 else '' for member in fellowship]

```

*** =sct
```{python}

# Test: list comprehension
list_comp = Ex().check_list_comp(0, missing_msg="Did you create the list comprehension?")

# MAIN DIFFERENCE FROM LAST EXERCISE ----------------------------------------------------------------
# Test if-else statement
msg_incorrect = 'Are you setting the string to be empty if it is greater than equal to 7 characters?'
msg_error = 'Are you using `member` as your iterator variable?'
list_comp.check_body() \
    .check_if_exp(0) \
    .multi(
        set_context(member='samwisee').has_equal_value(msg_incorrect, error_msg=msg_error), set_context(member='frodoo').has_equal_value(msg_incorrect, error_msg=msg_error))

# For clarity, getting the if-else expression can be done with the SCT below
# Ex().check_list_comp(0).check_body().check_if_exp(0)

# ---------------------------------------------------------------------------------------------------

# Test iterator
list_comp.check_iter().has_equal_value(error_msg='Did you use `fellowship` as your iterable?')

```



--- type:NormalExercise lang:python xp:100 skills:2 key:92d979a1ca
## nested list comprehensions


*** =instructions
- In the inner list comprehension - that is, the **output expression** of the nested list comprehension - create a list of values from `0` to `4` using `range()`. Use `col` as the iterator variable. 
- In the **iterable** part of your nested list comprehension, use `range()` to count 5 rows - that is, create a list of values from `0` to `4`. Use `row` as the iterator variable; note that you won't be needing this to create values in the list of lists.

*** =hint

*** =pre_exercise_code
```{python}
# pec
```

*** =sample_code
```{python}
# Create a 5 x 5 matrix using a list of lists: matrix
matrix = [[____] ____]

```

*** =solution
```{python}
# Create a 5 x 5 matrix using a list of lists: matrix
[[col for col in range(5)] for row in range(5)]

```

*** =sct
```{python}
# Test: Outer list comprehension
#       we set the value of the context variable row here as well
outer_comp = Ex().check_list_comp(0)

inner_comp = outer_comp \
    .check_body() \
    .check_list_comp(0)

# does its iterator code match the solution?
inner_comp.check_iter() \
    .has_equal_ast('Did you create a list of values from `0` to `4` using `range()`?')

# alternatively, could use check_function
# inner_comp.check_iter().check_function('range', 0) # etc..

# Test the value of the inner range call in the solution
# Note: temporary variables defined in the comprehensions need to be set
# on the block of code in which they're first available, so we set
# the temporary variables row and col separately, using set_context
outer_comp \
    .check_body() \
    .set_context(row = 1) \
    .check_list_comp(0) \
    .check_body() \
    .set_context(col = 2) \
    .has_equal_value()

# alternatively, if you know the names the student will use for temporary variables
# you can use extra_env instead. For example, if you known they will use row and col,
# then you could use the following.
# has_equal_value(extra_env = {'col': 2, 'row': 1})
```

--- type:NormalExercise lang:python xp:100 skills:2 key:721dc6b47c
## dict comprehensions


*** =instructions
- Create a dict comprehension where the _key_ is a string in `fellowship` and the _value_ is the length of the string. Remember to use the syntax _key_`:`_value_ in the _output expression_ part of the comprehension to create the members of the dictionary. Use `member` as the iterator variable.

*** =hint
- A basic dict comprehension has the same syntax as a list comprehension, except with `{}`: `{` _output expression_ `for` _iterator variable_ `in` _iterable_ `}`.

*** =pre_exercise_code
```{python}
# pec
```

*** =sample_code
```{python}
# Create a list of strings: fellowship
fellowship = ['frodo', 'samwise', 'merry', 'aragorn', 'legolas', 'boromir', 'gimli']

# Create dict comprehension: new_fellowship
new_fellowship = ____

```

*** =solution
```{python}
# Create a list of strings: fellowship
fellowship = ['frodo', 'samwise', 'merry', 'aragorn', 'legolas', 'boromir', 'gimli']

# Create dict comprehension: new_fellowship
new_fellowship = {member:len(member) for member in fellowship}

```

*** =sct
```{python}

# Test: dict comprehension
dict_comp = Ex().check_dict_comp(0, missing_msg="Did you create a dict comprehension?")

# Test dict comp key part
dict_comp \
    .check_key() \
    .set_context(member='samwise') \
    .has_equal_value(incorrect_msg='Are you using `member` as your iterator variable?',
                     error_msg='Are you using `member` as your iterator variable?')

# Test dict comp value part
# Note: we only test whether `len` was used
dict_comp \
    .check_value() \
    .check_function('len', 0)

# Test dict comp iter part
dict_comp \
    .check_iter() \
    .has_equal_value('Did you use `fellowship` as your iterable?')

```



--- type:NormalExercise lang:python xp:100 skills:2 key:bbcf36c345
## if-else

In python, there are two kinds of if-else expressions:

```
# inline if-else
'yes' if True else 'no'

# if-else block
if True:
    'yes'
else:
    'no'
```

Note that the body of an inline if-else always returns a value,
while an if-else block will contain a number of expressions to run. 
This is an important distinction, since it means you can use `has_equal_value` on the body of a inline if-else,
but not an if-else block.


*** =instructions

*** =hint

*** =pre_exercise_code
```{python}

```

*** =sample_code
```{python}
# inline if-else, where person1 loves beets
food = 'beets'
person1 = 'happy' if food == 'beets' else 'sad'

# if-else block, where person2 hates beets
if food == 'beets':
    person2 = 'sad'
else:
    person2 = 'happy'

```

*** =solution
```{python}
# inline if-else, where person1 loves beets
food = 'beets'
person1 = 'happy' if food == 'beets' else 'sad'

# if-else block, where person2 hates beets
if food == 'beets':
    person2 = 'sad'
else:
    person2 = 'happy'

```

*** =sct
```{python}
# check inline if expression
inline_if = Ex().check_if_exp(0)    # inline if expression (top)

if_block = Ex().check_if_else(0)    # if-else block statement (bottom)

# check_cond
inline_if.check_test().has_equal_ast("food == 'beets'")
if_block.check_test().has_equal_ast("food == 'beets'")

# check_body 
# note that for if_block general expressions like assignments
# can take place in the code, while an inline if is a single
# expression that returns a value, so its body can't have an assigment
inline_if.check_body().has_equal_ast("'happy'")
if_block.check_body().has_equal_ast("person2 = 'sad'")

# check orelse
inline_if.check_orelse().has_equal_ast("'sad'")
if_block.check_orelse().has_equal_ast("person2 = 'happy'")

```



--- type:NormalExercise lang:python xp:100 skills:2 key:d6419711b9
## if-else within a for loop

**Note: this exercise is left in its entirety**

Weights can be added to edges in a graph, typically indicating the "strength" of an edge. In NetworkX, the weight is indicated by the `'weight'` key in the metadata dictionary.

Before attempting the exercise, use the IPython Shell to access the dictionary metadata of `T` and explore it, for instance by running the commands `T.edge[1][10]` and then `T.edge[10][1]`. Note how there's only one field, and now you're going to add another field, called `'weight'`.

*** =instructions
- Set the `'weight'` attribute of the edge between node `1` and `10` of `T` to be equal to `2`. Refer to the following template to set an attribute of an edge: `network_name.edge[node1][node2]['attribute'] = value`. This is because NetworkX graphs are dictionaries of dictionaries (of dictionaries). 
- Set the weight of every edge involving node `293` to be equal `1.1`. To do this:
    - Using a `for` loop, iterate over all the edges of `T`, including the `metadata`. 
    - If `293` is involved in the list of nodes `[u, v]`:
        - Set the weight of the edge between `u` and `v` to be `1.1`.

*** =hint
- To set an attribute of an edge, use the command `network_name.edge[node1][node2]['attribute'] = value`. Here, the network is `T`, `node1` is `1`, `node2` is `10`, `'attribute'` is `'weight'`, and the `value` is `2`.
- In the `for` loop, you need to iterate over `T.edges(data=True)`. If `293` is present in the list `[u, v]`, then set its `'weight'` attribute to be `1.1` just as you did above where you set the `'weight'` of the edge between `1` and `10` to be `2`. 

*** =pre_exercise_code
```{python}
# pec
import networkx as nx
import requests

# Download the pickle file.
pkl_url = 'http://s3.amazonaws.com/assets.datacamp.com/production/course_1822/datasets/ego-twitter.p'
r = requests.get(pkl_url, stream=True)

# Create a local binary file with the downloaded content.
with open('ego-twitter.p', 'wb') as f:
    f.write(r.content)

# Read the graph from local disk.
T = nx.read_gpickle('ego-twitter.p')
__T = nx.read_gpickle('ego-twitter.p')

print('The Twitter network has been loaded as `T`.')
```

*** =sample_code
```{python}
# Set the weight of the edge
____ = 2

# Iterate over all the edges (with metadata)
for u, v, d in ____:

    # Check if node 293 is involved
    if 293 in ____:
    
        # Set the weight to 1.1
        ____ = 1.1
```

*** =solution
```{python}
# Set the weight of the edge
T.edge[1][10]['weight'] = 2

# Iterate over all the edges (with metadata)
for u, v, d in T.edges(data=True):

    # Check if node 293 is involved
    if 293 in [u, v]:
    
        # Set the weight to 1.1
        T.edge[u][v]['weight'] = 1.1
```

*** =sct
```{python}
pc = """T = __T"""

for_loop = Ex().check_for_loop(0)

# Check the iterator part (in the solution, T.edges(data=True))
# Note that a copy of T was made named __T, since the solution code mutates T (changes its contents).
#   the pre_code argument """T = __T""" says to re-assign T to be the unmutated copy
#   see: http://pythonwhat.readthedocs.io/en/latest/expression_tests.html#pre-code-fixing-mutations
for_loop.check_iter().test_expression_result(pre_code=pc)

# Get the if-else statement within the for loop
if_else = for_loop.check_body().check_if_else(0)

# test if-else statement
if_else.check_test().has_equal_value(context_vals=[293,29200000])
if_else.check_test().has_equal_value(context_vals=[2920000000,293])
if_else.check_body().has_equal_value(expr_code="T.edge[232][293]['weight']")

success_msg("Excellent job! Being able to iterate over graphs like this to explore and alter their metadata is an important skill.")
```



--- type:NormalExercise lang:python xp:100 skills:2 key:3ba794b4e4
## If else within for loop within with

*** =instructions


*** =hint


*** =pre_exercise_code
```{python}
open('log.txt', 'w').write("""
LOG: starting server
LOG: server started
GET request
LOG: server error
""")

```

*** =sample_code
```{python}
# Define read_large_file()
def read_large_file(file_object):
    """A generator function to iterate over LOG messages."""

    for line in ____:
        if ____:
            ____ line

# Open a connection to the file
with open('world_dev_ind.csv') as file:

    # Create a generator object for the file: gen_file
    gen_file = read_large_file(file)

    # Print the first three lines of the file
    print(next(gen_file))
    print(next(gen_file))
    print(next(gen_file))

```

*** =solution
```{python}
# Define read_large_file()
def read_large_file(file_object):
    """A generator function to iterate over LOG messages."""

    for line in file_object:
        if line.startswith('LOG'):
            yield line


# Open a connection to the file
with open('log.txt') as file:

    # Create a generator object for the file: gen_file
    gen_file = read_large_file(file)

    # Print the first three lines of the file
    print(next(gen_file))
    print(next(gen_file))
    print(next(gen_file))

```

*** =sct
```{python}

# Test: read_large_file() definition
fn_def = Ex().check_function_def('read_large_file')

fn_body = fn_def.check_body()
loop = fn_body.check_for_loop(0)
if_else = loop.check_body().check_if_else(0)

if_else.check_test().has_equal_ast("Did you use `line.startswith('LOG')`?")
if_else.check_body().has_equal_ast("Be sure to only use `yield line`.")

```
