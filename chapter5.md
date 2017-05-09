---
title       : Advanced
description : Insert the chapter description here
--- type:NormalExercise lang:python xp:100 skills:2 key:4e4e655a61
## Wrapping functions

In this example, the `decomposition.NMF` class will take a long time to run if its `n_components` argument is not specified.
To avoid making a student wait for a minute, for his code to take too long and return an error message, we use a wrapper
below to check that n_components is specified, and return an error otherwise.

(Note that we can't use an SCT for this, since the SCT runs AFTER the submission is executed.)

*** =instructions

*** =hint

*** =pre_exercise_code
```{python}
from sklearn import decomposition
import functools
import inspect

def _init_wrapper(f):
    @functools.wraps(f)
    def wrapper(*args, **kwargs):
        bound_args = inspect.signature(f).bind(*args, **kwargs)
        if not bound_args.arguments.get('n_components', None):
            raise BaseException("BE SURE TO SPECIFY n_components")
        else: 
            return f(*args, **kwargs)
    return wrapper
        
if not getattr(decomposition.NMF.__init__, 'decorated', None):
    decomposition.NMF.__init__ = _init_wrapper(decomposition.NMF.__init__)
    decomposition.NMF.__init__.decorated = True

```

*** =sample_code
```{python}
# should raise error, since n_components wasn't specified
decomposition.NMF()
```

*** =solution
```{python}
decomposition.NMF(n_components=2)
```

*** =sct
```{python}

```
