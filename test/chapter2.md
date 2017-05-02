---
title       : Testing functions and packages
description : Insert the chapter description here

--- type:NormalExercise lang:python xp:100 skills:2 key:c422ee929b
## function calls

This exercise will consider two ways in which a function call can be used:

1. a straightforward expression. e.g. `max(1,2)`.
2. within another function call. e.g. `print(type(3.0))`.

The SCT for the example below will show how to test both these types of calls.

**Example exercise below**

Calling a function is easy. To get the type of `3.0` and store the output as a new variable, `result`, you can use the following:

```
result = type(3.0)
```

The general recipe for calling functions is thus:

```
output = function_name(input)
```

*** =instructions
- Use `int()` to convert `var1` to an integer. Store the output as `out`.
- Use `print()` in combination with `type()` to print out the type of `var2`.
- Use `print()` in combination with `len()` to get the length of the list `var2`.

*** =hint

*** =pre_exercise_code
```{python}
# pec
```

*** =sample_code
```{python}
# Create variables var1 and var2
var1 = True
var2 = [1, 2, 3, 4]

# Convert var1 to an integer: out


# Print out type of var2


# Print out length of var2


```

*** =solution
```{python}
# Create variables var1 and var2
var1 = True
var2 = [1, 2, 3, 4]

# Convert var1 to an integer: out
out = int(var1)

# Print out type of var2
print(type(var2))

# Print out length of var2
print(len(var2))
```

*** =sct
```{python}

# test instruction 1, int(var1) ----------------------------------------------------------------------
msg_missing_int = "Use `int()` to make an integer of `var1` and assign to `out`."
msg_incorrect_int = "Use `int()` with the correct variables. You should pass `var1` to it."

(Ex() 
    # SCT below will fail the submission if int() wasn't used.
    # if it was used, it selects the code for the 1st int() call
    .check_function("int", 0, missing_msg =  msg_missing_int)
    # SCT below checks that the contents of the function call have the same
    # abstract syntax tree (AST) code representation in the submission and solution
    # (e.g. `type(var1)` in solution matches submission)
    .has_equal_ast(msg_incorrect_int))

# use test_object after checking the int() call, to make sure it returned the correct results.
Ex().test_object("out", incorrect_msg = "Make sure to assign the correct value to `out`.")

# test instruction 2 ---------------------------------------------------------------------------------
msg = "Make sure to print out the type of `var2` like this: `print(type(var2))`."
# SCT below gets the first instance where type was used, then gets its first argument.
#     has_equal_value runs the code for that argument (i.e. `var2` in the solution code), and
#     verifies the submission and solution results are the equal.
Ex().check_function("type", 0).check_args(0).has_equal_value(msg)

# Similar to above, but the first argument to print should be equivalent to type(var2),
# which we check using has_equal_value
Ex().check_function("print", 0).check_args(0).has_equal_value(msg)

# test instruction 3 ---------------------------------------------------------------------------------
msg = "Make sure to print out the length of `var2` like this: `print(len(var2))`."
# SCTs below are similar to above, except they test the value of the whole function call
# rather than a single argument
Ex().check_function("len", 0).has_equal_value(msg)
Ex().check_function("print", 1).has_equal_value(msg)
```


--- type:NormalExercise lang:python xp:100 skills:2 key:7432a6376f
## Import package

Often, exercises require importing libraries. For example, using the constant `pi` requires the `math` package. The exercise below shows how imports can be tested.

*** =instructions
- Import the `math` package. Now you can access the constant `pi` with `math.pi`.
- Import the `radius` function from `math`

*** =hint

*** =pre_exercise_code
```{python}
# pec
```

*** =sample_code
```{python}
# Import the math package


# Import radians from math package


```

*** =solution
```{python}
# Import the math package
import math

# Import radians from math package
from math import radians
```

*** =sct
```{python}
# see http://pythonwhat.readthedocs.io/en/latest/simple_tests/test_import.html
# Note that same_as = False accepts the submission even if it uses an alias
#    e.g. "import math as m"
Ex().test_import("math", same_as = False)

# Note that the test above is more robust than the SCT below,
# since it would fail if submission used "import math as m"
# Ex().has_equal_ast(code = 'import math', exact = False)

Ex().test_import("math.radians", 
                 not_imported_msg = "Be sure to import `radians`", 
                 incorrect_as_msg = "Don't set any alias for `radians`.")
```



--- type:NormalExercise lang:python xp:100 skills:2 key:243b0fb89c
## Testing method calls (1)

Methods are functions that are called from an object.
For example, the code below creates a string object (assigned to `x`),
and then calls its `strip` method.
This method returns a new string, whose `capitalize` method is then called.

```
x = " datacamp "
x.strip().capitalize()   # results in "Datacamp"
```

How to test "chains" of methods like the one above is shown in this exercise.


*** =instructions

*** =hint

*** =pre_exercise_code
```{python}

```

*** =sample_code
```{python}
x = " datacamp "
x.strip().capitalize()   # results in "Datacamp"

```

*** =solution
```{python}
x = " datacamp "
x.strip().capitalize()   # results in "Datacamp"

```

*** =sct
```{python}

# The SCT check_function below gets the code corresponding to the strip call
# Note that signature = False is necessary because pythonwhat can not always
# match function signatures for built-ins
# see: http://pythonwhat.readthedocs.io/en/latest/part_checks.html#matching-signatures
msg = "Did you use `x.strip()`?"
Ex().check_function('x.strip', 0, signature = False, missing_msg = msg)

# Check the capitalize portion
Ex().check_function('x.strip.capitalize', 0, signature=False)

```
--- type:NormalExercise lang:python xp:100 skills:2 key:497811536f
## Testing method calls (2)

Often exercises can get pretty hairy. For example, checking a chain of indexing a method calls.
For example, the chain below...

```
x[0].append('c')
```

Gets the first element of `x`, and then calls that element's append method.
In the example below, we should how to use `has_equal_ast` as a quick and dirty
way to examine this style of method call chaining.


*** =instructions

*** =hint

*** =pre_exercise_code
```{python}

```

*** =sample_code
```{python}
x = [['a', 'b'],['x', 'y']]

x[0].append('c')
```

*** =solution
```{python}
x = [['a', 'b'],['x', 'y']]

x[0].append('c')
```

*** =sct
```{python}
# for the SCT below, 
#    code specifies the code whose AST must be in the solution
#    exact = False, says that it just needs to be contained in the solution somewhere,
#            like using 'a' in 'a b c' rather than 'a' == 'a b c'
#
# note that these submissions would work also:
#   x[0].append("c")
#   x[0].append( """c""" )
# but these solutions fail (produce different ASTs)
#   x[0] += ['c']
code = "x[0].append('c')"
msg = "Make sure you used `%s`" % code
Ex().has_equal_ast(code=code, exact=False)

# note that you can also check an earlier piece of a statement
# to visualize ast, see:
#       https://sqlwhat-viewer.herokuapp.com/static/index.html#/editor?grammar=python
#
# comment SCTs above to see these in action...
Ex().has_equal_ast("did you use `x[0]`?", code = "x[0]", exact = False)
Ex().has_equal_ast("did you use `x[0].append`?", code = "x[0].append", exact = False)
```

--- type:NormalExercise lang:python xp:100 skills:2 key:fd9099d8c4
## Testing function call result

In this example, we have the student define a custom function, in which they should call `max`.
The order of the arguments to `max` don't matter, so both versions below should pass:

* `max(input, 0)`
* `max(0, input)`

Note that the variable `input` is a parameter in the custom function, so it is not defined after running
the solution script. In order to test the output of the `max` function call, we use the SCT to define `input`
beforehand.


*** =instructions

*** =hint

*** =pre_exercise_code
```{python}

```

*** =sample_code
```{python}
def relu(input):
    # order of arguments doesn't matter
    output = max(____, ____)
    
    return(output)
```

*** =solution
```{python}
def relu(input):
    # order of arguments doesn't matter
    output = max(0, input)
    
    return(output)
```

*** =sct
```{python}
# Note: check_function_def explained in chapter user defined functions
#       the key here is that the line below gets the body of the function `relu`
relu_body = Ex().check_function_def('relu').check_body()
# Get the 'max' function, then test its output with different values of the input variable
# see http://pythonwhat.readthedocs.io/en/latest/expression_tests.html
relu_body.check_function('max', 0, signature = False) \
         .has_equal_value(extra_env = {'input': 1}) \
         .has_equal_value(extra_env = {'input': -.5})

```
