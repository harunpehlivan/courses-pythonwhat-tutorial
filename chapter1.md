---
title       : Testing objects
description : Become a pythonwhat wizard
attachments :
  slides_link : https://s3.amazonaws.com/assets.datacamp.com/course/teach/slides_example.pdf


--- type:NormalExercise lang:python xp:100 skills:2 key:4bf65ad83e

## int

[see test\_object docs](http://pythonwhat.readthedocs.io/en/latest/simple_tests/test_object.html)

It is very common for submission correctness tests (SCTs) to check the following:

1. that someone defined a variable (e.g. `savings = 100`)
2. that the variable has the correct value

This is where `test_object` comes in.
If you need more fine grained control, use the functions `check_object`, `is_instance`, and `has_equal_value`.


*** =instructions
- Create a variable `savings` with the value 100.

*** =hint
- Type `savings = 100` to create the variable `savings`.

*** =pre_exercise_code
```{python}
```

*** =sample_code
```{python}
# Create a variable savings

```

*** =solution
```{python}
# Create a variable savings
savings = 100
```

*** =sct
```{python}
# test that savings is defined, and that its value matches the solution
# note: the variable 'savings' is checked in the submission and solution code
#       AFTER running all solution and submission code.
Ex().test_object("savings", 
                 incorrect_msg = "Assign `100` to the variable `savings`.",
                 undefined_msg = "Did you define the variable `savings`?")

# if we only included the above test, it would allow "savings = 100.0", which is a float :(.
# in order to be very particular, and select only an integer, you can use the more fine-grained
# check functions
# NOTE: comment out test_object above to see each piece in action.
Ex().check_object("savings", missing_msg = "Did you define the variable savings?") \
    .is_instance(int, "Is it an integer?") \
    .has_equal_value("Assign it the value `100`")
```

--- type:NormalExercise lang:python xp:100 skills:2 key:c7bbacb2a2

## float

In the previous exercise we tested that a variable, `savings` was defined as the integer `100`.

Here, we use the same SCTs to test the case where a new variable `factor` it should be the `float` `1.10`.


*** =instructions
- Create a variable `savings`, equal to `1.10`.

*** =hint
- To create the variable `savings`, use `savings = 1.10`.

*** =pre_exercise_code
```{python}
# pec
```

*** =sample_code
```{python}
# Create a variable savings
savings = 100

# Create a variable factor

```

*** =solution
```{python}
# Create a variable savings
savings = 100

# Create a variable factor
factor = 1.1
```

*** =sct
```{python}
# in case the student deletes the code for savings, this will tell them.
Ex().test_object("savings")

# this SCT will check that factor exists, and that the value of factor in
# the student and submission code are equal (i.e. compares with == operator). 
# see previous exercise for details on test_object.
Ex().test_object("factor")

# we can be more explicit that factor should be a float, using is_instance.
# unlike test_object above, the SCT below will ask if factor is a float.
# NOTE: comment out code above to see this SCT in action
Ex().check_object("factor").is_instance(float).has_equal_value()

# NOTE on floating point comparisons booby traps ---------------------------
# floating point comparisons can return false, even when two sets of
# operations are mathematically equivalent. For example, x and y are
# not equal in Python
#
#   a = [1.1, 1.2, 1.3]
#   x = (sum(a[:-1])/3 + a[-1]/3)     # 3.5999999999
#   y = (a[0]/3 + sum(a[1:])/3)       # 3.6
#   x == y                            # False
#   round(x, 10) == round(y, 10)      # True
#
# In order to flexibly test for equivalence in these cases, you can
# round the results to a desired decimal place.
# For example, to test a floating point variable x,
#   Ex().has_equal_value(expr_code = 'round(x, 10)')

```

--- type:NormalExercise lang:python xp:100 skills:2 key:e2cb3a665e
## strings and booleans

In the previous exercises, you worked with two Python data types:

- `int`, or integer: a number without a fractional part. `savings`, with the value `100`, is an example of an integer.
- `float`, or floating point: a number that has both an integer and fractional part, separated by a point. `factor`, with the value `1.10`, is an example of a float.

Next to numerical data types, there are two other very common data types:

- `str`, or string: a type to represent text. You can use single or double quotes to build a string.
- `bool`, or boolean: a type to represent logical values. Can only be `True` or `False`.

These types may be tested in the same way as `int` and `float`.

*** =instructions
- Create a new string, `desc`, with the value `"compound interest"`.
- Create a new boolean, `profitable`, with the value `True`.

*** =hint
- To create a variable in Python, use `=`. Make sure to wrap your string in single or double quotes.
- Only two boolean values exist in Python: `True` and `False`. `TRUE`, `true`, `FALSE`, `false` and other versions will not be accepted.

*** =pre_exercise_code
```{python}
# pec
```

*** =sample_code
```{python}
# Create a variable desc


# Create a variable profitable

```

*** =solution
```{python}
# Create a variable desc
desc = "compound interest"

# Create a variable profitable
profitable = True
```

*** =sct
```{python}
Ex().test_object("desc", incorrect_msg = 'Assign the value `"compound interest"` to the variable `desc`.')
Ex().test_object("profitable", incorrect_msg = 'Assign the value `True` to the variable `profitable`.')

# Why do the SCTs above pass when setting "profitable = 1"? -------------------------------------------------------

# If you only used the code above, then setting "profitable = 1" would also pass,
# since 1 == True. If you were a stickler about profitable being a bool instance,
# you could use the more fine-grained check functions, as shown below.
Ex().check_object("desc").is_instance(str, "is_instance figured out that it is not a string").has_equal_value()
Ex().check_object("profitable").is_instance(bool, "is_instance figured out that it is not a bool").has_equal_value()

```


--- type:NormalExercise lang:python xp:100 skills:2 key:e6c527bf41
## list

As opposed to `int`, `bool` etc, a list is a **compound data type**: you can group values together:

```
a = "is"
b = "nice"
my_list = ["my", "list", a, b]
```

**Below is a potential scenario for teaching students to use a list.**

After measuring the height of your family, you decide to collect some information on the house you're living in. The areas of the different parts of your house are stored in separate variables for now, as shown in the script.

*** =instructions
- Create a list, `areas`, that contains the area of the hallway (`hall`), kitchen (`kit`), living room (`liv`), bedroom (`bed`) and bathroom (`bath`), in this order. Use the predefined variables.

*** =hint
- You can use the variables that have already been created to build the list: `areas = [hall, kit, ...]`.

*** =pre_exercise_code
```{python}
# pec
```

*** =sample_code
```{python}
# area variables (in square meters)
hall = 11.25
kit = 18.0
liv = 20.0
bed = 10.75
bath = 9.50

# Create list areas

```

*** =solution
```{python}
# Area variables (in square meters)
hall = 11.25
kit = 18.0
liv = 20.0
bed = 10.75
bath = 9.50

# Create list areas
areas = [hall, kit, liv, bed, bath]
```

*** =sct
```{python}
# This test makes sure that students are warned if they delete parts of the sample code.
# Note that
#
#     Ex().test_object("hall")
#     Ex().test_object("kit")
#
# Is equivalent to
#
#     Ex().multi(test_object("hall"), test_object("kit"))
#
# MC-NOTE: should I remove multi change these to all using Ex().test1; Ex().test2; ...?
msg = "Don't remove or edit the predefined variables!"
Ex().multi(
        test_object("hall", undefined_msg = msg, incorrect_msg = msg),
        test_object("kit", undefined_msg = msg, incorrect_msg = msg),
        test_object("liv", undefined_msg = msg, incorrect_msg = msg),
        test_object("bed", undefined_msg = msg, incorrect_msg = msg),
        test_object("bath", undefined_msg = msg, incorrect_msg = msg)
        )

# This code checks that the variable "areas" was defined, and is the correct value
Ex().test_object("areas", incorrect_msg = "Define `areas` as the list containing all the area variables, in the correct order: `hall`, `kit`, `liv`, `bed` and `bath`. Watch out for typos. The list doesn't have to contain anything else.")

# Note: Try making the submission code equal to the solution code, and then
#       change "kit = 18.0" in the submission to "kit = 18". Why does the submission pass?
#       The answer is that pythonwhat uses "==" to test that a variable has the same value
#       between the student and solution results. In python the following evaluate to True
#           [1, 2, 3] == [1.0, 2, 3]
#           [1, 2, 3] == [True, 2, 3]
#
# If you wanted to be very specific, you could use one of the following tests, which
# is similar to comparing str('areas') across student and solution results.
# for more on has_equal_value, see: http://pythonwhat.readthedocs.io/en/latest/expression_tests.html#expressions
Ex().check_object('areas').is_instance(list).has_equal_value(expr_code="str(areas)")
```


--- type:NormalExercise lang:python xp:100 skills:2 key:7f08642d18
## list slicing

Checking a list is just one part of the story. It's also possible to _slice_ your list, which means selecting multiple elements from your list--using the following syntax:

```
my_list[start:end]
```

The `start` index will be included, while the `end` index is _not_.

**Below is a potential scenario for teaching students to slice a list.**

The code sample below shows an example. A list with `"b"` and `"c"`, corresponding to indexes 1 and 2, are selected from a list `x`:

```
x = ["a", "b", "c", "d"]
x[1:3]
```

The elements with index 1 and 2 are included, while the element with index 3 is not.

*** =instructions
- Use slicing to create a list, `downstairs`, that contains the first 6 elements of `areas`.
- Do a similar thing to create a new variable, `upstairs`, that contains the last 4 elements of `areas`.

*** =hint
- Use the brackets `[0:6]` to build `downstairs`.
- Use the brackets `[6:10]` to build `upstairs`.

*** =pre_exercise_code
```{python}
# no pec
```

*** =sample_code
```{python}
# Create the areas list
areas = ["hallway", 11.25, "kitchen", 18.0, "living room", 20.0, "bedroom", 10.75, "bathroom", 9.50]

# Use slicing to create downstairs


# Use slicing to create upstairs

```

*** =solution
```{python}
# Create the areas list
areas = ["hallway", 11.25, "kitchen", 18.0, "living room", 20.0, "bedroom", 10.75, "bathroom", 9.50]

# Use slicing to create downstairs
downstairs = areas[0:6]

# Use slicing to create upstairs
upstairs = areas[6:10]

```

*** =sct
```{python}
# This test makes sure that students are warned if they delete parts of the sample code.
msg = "Don't remove or edit the predefined `areas` list."
Ex().test_object("areas", undefined_msg = msg, incorrect_msg = msg)

# Since each slice is assigned to a variable, we can test those variables with test_object
# test variable downstairs
Ex().test_object("downstairs", incorrect_msg = "Your definition of `downstairs` is incorrect. Use `areas[...]` and slicing to select the elements you want. You could use `0:6` where the dots are, for example.")

# test variable upstairs
Ex().test_object("upstairs", incorrect_msg = "Your definition of `upstairs` is incorrect. Use `areas[...]` and slicing to select the elements you want. You could use `6:10` where the dots are, for example.")

# Alternatively, we could be more specific and make sure they typed "areas[0:6]" somewhere in their code, with
#
#     Ex().test_student_typed("areas[0:6]", not_typed_msg = "did you slice areas, using `areas[0:6]`?")
#
# However, this would fail valid solutions like "downstairs = areas[0 : 6]". In order
# to test that they sliced areas more flexibly, you can use regular expressions.
# see https://docs.python.org/3/library/re.html
Ex().test_student_typed(r"areas\[\s*0\s*:\s*6\s*]", 
                        pattern = True,
                        not_typed_msg = "did you slice areas, using `areas[0:6]`?")
```

--- type:NormalExercise lang:python xp:100 skills:2 key:b67a5ea0d3
## dictionary

Another common type is a dictionary. As a refresher, here is a recipe for creating a dictionary:

```
my_dict = {
   "key1":"value1",
   "key2":"value2",
}
```

In this recipe, both the keys and the values are strings. This will also be the case for the example exercise.

*** =instructions
- With the strings in `countries` and `capitals`, create a dictionary called `europe` with 4 key:value pairs. Beware of capitalization! Make sure you use lowercase characters everywhere.


*** =hint
- Start with `{ "spain":"madrid", ... }`. Include three more key:value pairs in a similar fashion.


*** =sample_code
```{python}
# Definition of countries and capital
countries = ['spain', 'france', 'germany', 'norway']
capitals = ['madrid', 'paris', 'berlin', 'oslo']

# From string in countries and capitals, create dictionary europe

```

*** =solution
```{python}
# Definition of countries and capital
countries = ['spain', 'france', 'germany', 'norway']
capitals = ['madrid', 'paris', 'berlin', 'oslo']

# From string in countries and capitals, create dictionary europe
europe = {'spain':'madrid', 'france':'paris', 'germany':'berlin', 'norway':'oslo' }
```

*** =sct
```{python}

undef_msg = "Did you define the variable `europe`?"
incorrect_msg = "Did you set `europe` to the correct dictionary?"
Ex().test_object("europe", undefined_msg = undef_msg, incorrect_msg = incorrect_msg)

# Alternatively, could use more fine-grained checks -------------------------------------

# Example 1: check that an individual key exists
Ex().check_object("europe").has_key("spain", key_missing_msg = "Missing key spain")

# Example 2: check a key's value
Ex().check_object("europe").has_equal_key("france", 
                                          incorrect_value_msg = "Incorrect value",
                                          key_missing_msg = "Missing key france")

# Example 3: check that europe is a dict, and that it's value is equal between student and solution results
Ex().check_object("europe", undef_msg).is_instance(dict).has_equal_value(incorrect_msg)
```


--- type:NormalExercise lang:python xp:100 skills:2 key:6048cbed18
## dictionary item

The previous exercise considered testing a dictionary, including whether individual items in a dictionary were correct. However, sometimes you want to test that students performed the **selection** of a dictionary item. For example, using the dictionary from the previous exercise:

```
europe['france']
```

Here, `'france'` is the key and `'paris'` the value is returned.

**Below is a potential scenario for teaching students to print the keys, and an item of a dictionary.**

*** =instructions
- Check out which keys are in `europe` by calling the [`keys()`](https://docs.python.org/3/library/stdtypes.html#dict.keys) method on `europe`. Print out the result.

*** =hint
- `europe.keys()` gives you the keys in `europe`. Make sure to wrap a [`print()`](https://docs.python.org/3/library/functions.html#print) call around it.
- To access the name of country use syntax similar to `country['capital']`.

*** =sample_code
```{python}
# Definition of dictionary
europe = {'spain':'madrid', 'france':'paris', 'germany':'berlin', 'norway':'oslo' }

# Print out the keys in europe


# Print out value that belongs to key 'norway'

```

*** =solution
```{python}
# Definition of dictionary
europe = {'spain':'madrid', 'france':'paris', 'germany':'berlin', 'norway':'oslo' }

# Print out the keys in europe
print(europe.keys())

# Print out value that belongs to key 'norway'
print(europe['norway'])
```

*** =sct
```{python}
# check that students called europe.keys() at least once
# Note: we set signature=False below, othewise pythonwhat will try to read the function signature
#       of europe.keys, see http://pythonwhat.readthedocs.io/en/latest/part_checks.html#matching-signatures
Ex().check_function("europe.keys", 0, signature=False, missing_msg = "did you get the keys of europe using `europe.keys()`")

# check first occurence of print function, make sure it was given the right code
msg = "For the first printout, use `print(europe.keys())` to print out all keys of `europe`."
(Ex().check_function("print", 0, missing_msg = msg)      # get code for first print call
     .check_args(0)                                      # get code for first positional argument
     .has_equal_ast(incorrect_msg = "Did you call `europe.keys()`?")   # do student and solution have same abstract syntax?
     )

# Note: could replace has_equal_ast with has_equal_value above, which will re-execute the code for the first
#       positional argument, and see if the string outputs match between student and solution. This is shown
#       below for the second print statement

msg = "For the second printout, use `print(europe['norway'])` to print out the value belonging to the key `'norway'`."
(Ex().check_function("print", 1, missing_msg = msg)      # get code for second print call
     .check_args(0)                                      # get code for second positional argument
     .has_equal_value(incorrect_msg = "Did you call `europe['norway']`?")   # do student and solution have same value using ==?
     )

```


--- type:NormalExercise lang:python xp:100 skills:2 key:84cab9d170
## numpy array

In this exercise we'll consider how to test arrays from Numpy, a powerful package to do data science.

**Below is a potential scenario for teaching students to use numpy arrays.**

A list `baseball` has already been defined in the Python script, representing the height of some baseball players in centimeters. Can you add some code here and there to create a Numpy array from it?

*** =instructions
- Use [`np.array()`](http://docs.scipy.org/doc/numpy-1.10.0/glossary.html#term-array) to create a Numpy array from `baseball`. Name this array `np_baseball`.
- Print out the type of `np_baseball` to check that you got it right.

*** =hint
- `import numpy as np` will do the trick. Now, you have to use `np.fun_name()` whenever you want to use a Numpy function.
- [`np.array()`](http://docs.scipy.org/doc/numpy-1.10.0/glossary.html#term-array) should take on input `baseball`. Assign the result of the function call to `np_baseball`.

*** =pre_exercise_code
```{python}
```

*** =sample_code
```{python}
# Create list baseball
baseball = [180, 215, 210, 210, 188, 176, 209, 200]

# Import the numpy package as np
import numpy as np

# Create a Numpy array from baseball: np_baseball

```

*** =solution
```{python}
# Create list baseball
baseball = [180, 215, 210, 210, 188, 176, 209, 200]

# Import the numpy package as np
import numpy as np

# Create a Numpy array from baseball: np_baseball
np_baseball = np.array(baseball)
```

*** =sct
```{python}
array_missing_msg = "Be sure to call [`np.array()`](http://docs.scipy.org/doc/numpy-1.10.0/glossary.html#term-array)."

# Test that np_baseball exists, save the chain as obj, to run further tests on later
obj = Ex().check_object("np_baseball")
# Test that numpy.array function was called at least once
Ex().check_function('numpy.array', 0, missing_msg = array_missing_msg)
# Test that the value of np_baseball matches between solution and student results
obj.has_equal_value(incorrect_msg = "Incorrect value.")
```


--- type:NormalExercise lang:python xp:100 skills:2 key:fcb2a9007b
## numpy array slice

As with lists and dictionaries, you may sometimes want to ensure that someone has subset, or sliced a numpy array. For example:

```
x = ["a", "b", "c"]
x[1]
np_x = np.array(x)
np_x[1]
```

Thus, slicing a numpy array is similar to both lists and dictionaries, and in fact is indistinguishable based on the code alone (under the hood, everything in python is an object, and all slicing uses the special object method [\_\_getitem\_\_](https://docs.python.org/3/reference/datamodel.html#object.__getitem__)).

**Below is a potential scenario for teaching students to use numpy arrays.**

The script on the right already contains code that imports `numpy` as `np`, and stores both the height and weight of the MLB players as Numpy arrays.

*** =instructions
- Subset `np_weight`: print out the element at index 50.
- Print out a sub-array of `np_height`: It contains the elements at index 100 up to **and including** index 110

*** =hint
- Make sure to wrap a [`print()`](https://docs.python.org/3/library/functions.html#print) call around your subsetting operations.
- Use `[100:111]` to get the elements from index 100 up to and including index 110.

*** =pre_exercise_code
```{python}
import pandas as pd
mlb = pd.read_csv("http://s3.amazonaws.com/assets.datacamp.com/course/intro_to_python/baseball.csv")
height = mlb['Height'].tolist()
weight = mlb['Weight'].tolist()
import numpy as np
```

*** =sample_code
```{python}
# height and weight are available as a regular lists

# Import numpy
import numpy as np

# Store weight and height lists as numpy arrays
np_weight = np.array(weight)
np_height = np.array(height)

# Print out the weight at index 50


# Print out sub-array of np_height: index 100 up to and including index 110

```

*** =solution
```{python}
# height and weight are available as a regular lists

# Import numpy
import numpy as np

# Store weight and height lists as numpy arrays
np_weight = np.array(weight)
np_height = np.array(height)

# Print out the weight at index 50
print(np_weight[50])

# Print out sub-array of np_height: index 100 up to and including index 110
print(np_height[100:111])
```

*** =sct
```{python}

# See the exercise for testing list slicing in this chapter for details and further tests
Ex().check_function('print', 0).check_args(0).has_equal_value()
Ex().check_function('print', 1).check_args(0).has_equal_value()
```


--- type:NormalExercise lang:python xp:100 skills:2 key:532155cd37
## pandas data frame

Pandas is an open source library, providing high-performance, easy-to-use data structures and data analysis tools for Python. 

The DataFrame is one of Pandas' most important data structures. It's basically a way to store tabular data, where you can label the rows and the columns. One way to build a DataFrame is from a dictionary.

The exercises that follow has students work with vehicle data in different countries. Each observation corresponds to a country and the columns give information about the number of vehicles per capita, whether people drive left or right, and so on.

Three lists are defined in the script:
- `names`, containing the country names for which data is available.
- `dr`, a list with booleans that tells whether people drive left or right in the corresponding country.
- `cpc`, the number of motor vehicles per 1000 people in the corresponding country.

Each dictionary key is a column label and each value is a list which contains the column elements.

*** =instructions
- Use [`pd.DataFrame()`](http://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.html) to turn your dict into a DataFrame called `cars`.
- Print out `cars` and see how beautiful it is.

*** =hint
- `pd.DataFrame(my_dict)` will produce a DataFrame that you can store as `cars`.
- To print out a variable `x` type `print(x)` on a new line in your script.

*** =sample_code
```{python}
# Pre-defined lists
names = ['United States', 'Australia', 'Japan', 'India', 'Russia', 'Morocco', 'Egypt']
dr =  [True, False, False, False, True, True, True]
cpc = [809, 731, 588, 18, 200, 70, 45]

# Create dictionary my_dict with three key:value pairs: my_dict
my_dict = { 'country':names, 'drives_right':dr, 'cars_per_cap':cpc }

# Build a DataFrame cars from my_dict: cars
import pandas as pd

# Print cars

```

*** =solution
```{python}
# Pre-defined lists
names = ['United States', 'Australia', 'Japan', 'India', 'Russia', 'Morocco', 'Egypt']
dr =  [True, False, False, False, True, True, True]
cpc = [809, 731, 588, 18, 200, 70, 45]

# Create dictionary my_dict with three key:value pairs: my_dict
my_dict = { 'country':names, 'drives_right':dr, 'cars_per_cap':cpc }

# Build a DataFrame cars from my_dict: cars
import pandas as pd
cars = pd.DataFrame(my_dict)

# Print cars
print(cars)
```

*** =sct
```{python}
# First, you can test a DataFrame using test_object. However, we show the function test_data_frame here.
# We illustrate using test_data_frame to test only one column, drives_right, and then check_object to show
# how you can do a similar test using the other two columns.
msg = "You can create a pandas DataFrame as follows: `pd.DataFrame(my_dict)`. Make sure to store it as `cars`."
Ex().test_data_frame("cars", 
                     columns = ['drives_right'],
                     undefined_msg = msg, not_data_frame_msg = msg,
                     incorrect_msg = msg)

# Alternatively, can use more generic check functions
Ex().check_object("cars").has_equal_key("country").has_equal_key("cars_per_cap")

# Finally, check that it was used inside the print function
#msg = "Don't forget to print out the `cars` DataFrame with [`print()`](https://docs.python.org/3/library/functions.html#print)."
Ex().check_function("print", 0).check_args(0).has_equal_value()
```
