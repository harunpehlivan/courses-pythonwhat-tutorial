---
title       : Advanced
description : Insert the chapter description here
--- type:NormalExercise lang:python xp:100 skills:2 key:4e4e655a61
## Wrapping functions


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

```

*** =solution
```{python}

```

*** =sct
```{python}

```
