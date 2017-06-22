---
title       : Syntax
description : Become a pythonwhat wizard
attachments :
  slides_link : https://s3.amazonaws.com/assets.datacamp.com/course/teach/slides_example.pdf

--- type:NormalExercise lang:python xp:100 skills:2 key:9615757094
## Running a simple test


*** =instructions

*** =hint

*** =pre_exercise_code
```{python}

```

*** =sample_code
```{python}
# fill in the string below, to print 'hello'
print('change me')
```

*** =solution
```{python}
# fill in the string below, to print 'hello'
print('hello')
```

*** =sct
```{python}
Ex().test_output_contains("hello", no_output_msg = "Did you print 'hello'?")
```

--- type:NormalExercise lang:python xp:100 skills:2 key:2a458400cb
## Ex basics

This function is used to execute a series of tests.
Without it, calling an SCT only creates the test.

`Ex` can be used in two ways.

* By chaining (e.g. `Ex().test_object('a')`)
* The `>>` operator (e.g. `Ex() >> test_object('a')`)

**Note:** 
behind the scenes `Ex` passes a state to the test. This contains, for example, the submission code and results.
Running an SCT can produce a new state (e.g. by focusing on a piece of code).

*** =instructions

*** =hint

*** =pre_exercise_code
```{python}

```

*** =sample_code
```{python}
# fill in list, so a is 1, b is 2, c is 3
a, b, c = []
```

*** =solution
```{python}
# fill in list, so a is 1, b is 2, c is 3
a, b, c, = [1,2,3]
```

*** =sct
```{python}
# approach 1
Ex().test_object('a')

# approach 2
Ex() >> test_object('b')

# approach 3
test = test_object('c')
Ex() >> test

# longer form of tests, equivalent to approach 1
Ex().check_object('a').has_equal_value()

# equivalent to above
obj_a = Ex().check_object('a')
obj_a.has_equal_value()

# same thing but using >>
Ex() >> check_object('a') >> has_equal_value()
```

--- type:NormalExercise lang:python xp:100 skills:2 key:adf1650740
## Defining your own SCTs

**This example is not necessary for writing most SCTs**

The SCT block below shows how custom SCTs may be defined.
This can be done in a separate python package, and then imported in the SCT block.

Steps for making an SCT function:

* Use `state_dec` to make SCT wait for `Ex` to run.
* Use `state = None` as the final named argument.
* When using `Ex` inside the function, be sure to do `Ex(state)`.
* Return whatever state should be passed to subsequent SCTs.

*** =instructions

*** =hint

*** =pre_exercise_code
```{python}
import numpy as np
```

*** =sample_code
```{python}
x = np.array([1,2,3])
```

*** =solution
```{python}
x = np.array([1,2,3])
```

*** =sct
```{python}
# NOTE: This SCT could be made into its own python package and
#       imported into an exercise
import numpy as np
from pythonwhat.check_syntax import state_dec, Ex

@state_dec
def test_numpy(name, state = None):
    # does object exist?
    obj = Ex(state).check_object(name)
    # is it a numpy array?
    obj.is_instance(np.ndarray)
    # does it match the solution?
    obj.has_equal_value()
    
    # return the object state for subsequent tests
    return obj

# Run test. Must use >> operator, not chaining
Ex() >> test_numpy('x')

# however, you can chain off of test_numpy, e.g.
# Ex() >> test_numpy('x').has_equal_output()
```
