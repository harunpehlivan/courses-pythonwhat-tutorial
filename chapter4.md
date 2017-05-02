---
title       : User defined functions
description : Insert the chapter description here

--- type:NormalExercise lang:python xp:100 skills:2 key:2e59e3582b
## functions w/o return values

**Full exercise below**

In the last video, Hugo described the basics of how to define a function. You will now write your own function!

Define a function, `shout()`, which simply prints out a string with three exclamation marks `'!!!'` at the end. The code for the `square()` function that we wrote earlier is found below. You can use it as a pattern to define `shout()`.

```
def square():
    new_value = 4 ** 2
    return new_value
```
Note that the function body is indented 4 spaces already for you. Function bodies need to be indented by a consistent number of spaces and the choice of 4 is common.

*** =instructions
- Complete the function header by adding the appropriate function name, `shout`.
- In the function body, **concatenate** the string, `'congratulations'` with another string, `'!!!'`. Assign the result to `shout_word`.
- Print the value of `shout_word`.
- Call the `shout` function.

*** =hint
- The recipe for defining a function header is: `def` _function name_`():`.
- The recipe for concatenating two strings is: _string1_ `+` _string2_.
- Simply pass `shout_word` to `print()`.
- The recipe for calling functions without arguments is: _function name_`()`.

*** =pre_exercise_code
```{python}
# pec
```

*** =sample_code
```{python}
# Define the function shout
def ____():
    """Print a string with three exclamation marks"""
    # Concatenate the strings: shout_word
    

    # Print shout_word
    print(____)

# Call shout


```

*** =solution
```{python}
# Define the function shout
def shout():
    """Print a string with three exclamation marks"""
    # Concatenate the strings: shout_word
    shout_word = 'congratulations' + '!!!'

    # Print shout_word
    print(shout_word)

# Call shout
shout()

```

*** =sct
```{python}
# All functions used here are defined in the pythonwhat Python package.
# Documentation can also be found at github.com/datacamp/pythonwhat/wiki
fun_def = Ex().check_function_def('shout')
fun_def \
    .check_body() \
    .has_equal_value(name = "shout_word") \
    .multi(check_function("print", 0, missing_msg = "Be sure to include `print` in your function")) \
    .has_equal_output("Did you call `print(shout_word)`?")

Ex().check_function('shout', 0).has_equal_ast("Did you call `shout` without any arguments?")

```




--- type:NormalExercise lang:python xp:100 skills:2 key:952637079a
## functions with multiple parameters

Hugo discussed the use of multiple parameters in defining functions in the last lecture. You are now going to use what you've learned to modify the `shout()` function further. Here, you will modify `shout()` to accept two arguments. Parts of the function `shout()`, which you wrote earlier, are shown.

*** =instructions
- Modify the function header such that it accepts two parameters, `word1` and `word2`, in that order.
- Concatenate each of `word1` and `word2` with `'!!!'` and assign to `shout1` and `shout2`, respectively.
- Concatenate `shout1` and `shout2` together, in that order, and assign to `new_shout`.
- Pass the strings `'congratulations'` and `'you'`, in that order, to a call to `shout()`. Assign the return value to `yell`.

*** =hint
- Make sure that `word1` and `word2` are in the right order in the function header.
- You concatenate strings with the use of the `+` operator.
- Don't forget to concatenate `shout1` and `shout2`, in that order, for the return variable.
- Make sure that `yell` receives the output from the call to `shout()`.

*** =pre_exercise_code
```{python}
# pec
```

*** =sample_code
```{python}
# Define shout with parameters word1 and word2
def shout(____, ____):
    """Concatenate strings with three exclamation marks"""
    # Concatenate word1 with '!!!': shout1
    
    
    # Concatenate word2 with '!!!': shout2
    
    
    # Concatenate shout1 with shout2: new_shout
    

    # Return new_shout
    return new_shout

# Pass 'congratulations' and 'you' to shout(): yell


# Print yell
print(yell)

```

*** =solution
```{python}
# Define shout with parameters word1 and word2
def shout(word1, word2):
    """Concatenate strings with three exclamation marks"""
    # Concatenate word1 with '!!!': shout1
    shout1 = word1 + '!!!'
    
    # Concatenate word2 with '!!!': shout2
    shout2 = word2 + '!!!'
    
    # Concatenate shout1 with shout2: new_shout
    new_shout = shout1 + shout2

    # Return new_shout
    return new_shout

# Pass 'congratulations' and 'you' to shout: yell
yell = shout('congratulations', 'you')

# Print yell
print(yell)

```

*** =sct
```{python}

fun_def = Ex().check_function_def("shout")

# this function returns an SCT that will be used to test the body
# of the function def, shout.
def var_test(var_name):
    incorrect_msg = "Did you assign the correct values to %s?"%var_name
    error_msg = "Did you define the variable `%s`?"%var_name
    return has_equal_value(name = var_name, error_msg = error_msg, incorrect_msg = incorrect_msg)

# test the body of function def, using set_context to set its arguments word1 and word2
# multi could be replaced by typing the three has_equal_value tests manually
# e.g. .has_equal_value(name = "shout1", incorrect_msg = "some message", error_msg = "some message")
fun_def \
    .check_body() \
    .set_context(word1 = "congratulations", word2 = "you") \
    .multi([var_test(name) for name in ["shout1", "shout2", "new_shout"]])

fun_def.call("f('congratulations', 'you')")

# Test: shout() call
Ex().check_function("shout", 0)

# Test: yell object
Ex().test_object(
        "yell",
        incorrect_msg="Did you assign the result of `shout()` to `yell`?"
        )

# Test: output
Ex().test_output_contains(
    "congratulations!!!you!!!",
    pattern = False,
    no_output_msg="Did you print out `yell`?"
)

```



--- type:NormalExercise lang:python xp:100 skills:2 key:d10f5994d3
## functions with *args

Flexible arguments enable you to pass a variable number of arguments to a function. In this exercise, you will practice defining a function that accepts a variable number of string arguments.

The function you will define is `gibberish()` which can accept a variable number of string values. Its return value is a single string composed of all the string arguments concatenated together in the order they were passed to the function call. You will call the function with a single string argument and see how the output changes with another call using more than one string argument. Recall from the previous video that, within the function definition, `args` is a tuple.

*** =instructions
- Complete the function header with the function name `gibberish`. It accepts a single flexible argument `*args`.
- Initialize a variable `hodgepodge` to an empty string.
- Return the variable `hodgepodge` at the end of the function body.
- Call `gibberish()` with the single string, `"luke"`. Assign the result to `one_word`.
- Hit the Submit button to call `gibberish()` with multiple arguments and to print the value to the Shell.

*** =hint
- The recipe for defining function headers is: `def` _function name_`(`_parameters_`):`.
- An empty string is just a set of quotation marks `''`.
- Use the keyword `return` followed by the name of the variable you wish the function to return.
- Pass the string `"luke"` to the call to `gibberish()`.

*** =pre_exercise_code
```{python}
# pec
```

*** =sample_code
```{python}
# Define gibberish
def ____(____):
    """Concatenate strings in *args together."""

    # Initialize an empty string: hodgepodge
    

    # Concatenate the strings in args
    for word in args:
        hodgepodge += word

    # Return hodgepodge
    ____

# Call gibberish() with one string: one_word
one_word = ____

# Call gibberish() with five strings: many_words
many_words = gibberish("luke", "leia", "han", "obi", "darth")

# Print one_word and many_words
print(one_word)
print(many_words)

```

*** =solution
```{python}
# Define gibberish
def gibberish(*args):
    """Concatenate strings in *args together."""

    # Initialize an empty string: hodgepodge
    hodgepodge = ''

    # Concatenate the strings in args
    for word in args:
        hodgepodge += word

    # Return hodgepodge
    return hodgepodge

# Call gibberish() with one string: one_word
one_word = gibberish("luke")

# Call gibberish() with five strings: many_words
many_words = gibberish("luke", "leia", "han", "obi", "darth")

# Print one_word and many_words
print(one_word)
print(many_words)

```

*** =sct
```{python}

fun_def = Ex().check_function_def("gibberish")

fun_body = fun_def \
    .check_body() \
    .set_context(args = ['luke', 'leia']) \
    .has_equal_value(name = "hodgepodge", error_msg = "did you define `hodgepodge`?")

fun_body.check_for_loop(0) \
    .multi(check_iter().has_equal_value(), 
           # note SCT below requires both the vars word and hodgepodge to be defined, which is done by
           # set_context and the pre_code arg of has_equal_value
           check_body().set_context(word = 'luke').has_equal_value(pre_code = 'hodgepodge = "a"', name = 'hodgepodge'))

fun_def.call("f('luke', 'leia')")

# Test: gibberish() call 1
Ex().check_function("gibberish", 0, signature=False).has_equal_ast('Did you call `gibberish("luke")`?')


# Test: one_word object
Ex().test_object("one_word")

# Test: gibberish() call 2
Ex().check_function("gibberish", 1, signature=False).has_equal_value()

# Test: many_words object
Ex().test_object("many_words")

```




--- type:NormalExercise lang:python xp:100 skills:2 key:58b54bedea
## functions with **kwargs

Let's push further on what you've learned about flexible arguments - you've used `*args`, you're now going to use `**kwargs`! What makes `**kwargs` different is that it allows you to pass a variable number of _keyword arguments_ to functions. Recall from the previous video that, within the function definition, `kwargs` is a dictionary.

To understand this idea better, you're going to use `**kwargs` in this exercise to define a function that accepts a variable number of keyword arguments. The function simulates a simple status report system that prints out the status of a character in a movie.

*** =instructions
- Complete the function header with the function name `report_status`. It accepts a single flexible argument `**kwargs`.
- Iterate over the key-value pairs of `kwargs` to print out the keys and values, separated by a colon ':'.
- In the first call to `report_status()`, pass the following keyword-value pairs: `name="luke"`, `affiliation="jedi"` and `status="missing'`.
- In the second call to `report_status()`, pass the following keyword-value pairs: `name="anakin"`, `affiliation="sith lord"` and `status="deceased'`.

*** =hint
- The recipe for defining function headers is: `def` _function name_`(`_parameters_`):`.
- Pass the keyword-value pairs as arguments to `report_status()`, separated by commas `,`.
- Make sure that the string values are enclosed in quotation marks `''` or `""`.

*** =pre_exercise_code
```{python}
# pec
```

*** =sample_code
```{python}
# Define report_status
def ____(____):
    """Print out the status of a movie character."""

    print("\nBEGIN: REPORT\n")

    # Iterate over the key-value pairs of kwargs
    for ____, ____ in kwargs.items():
        # Print out the keys and values, separated by a colon ':'
        print(____ + ": " + ____)

    print("\nEND REPORT")

# First call to report_status()


# Second call to report_status()
report_status(name=____, affiliation=____, status=____)

```

*** =solution
```{python}
# Define report_status
def report_status(**kwargs):
    """Print out the status of a movie character."""

    print("\nBEGIN: REPORT\n")

    # Print a formatted status report
    for key, value in kwargs.items():
        print(key + ": " + value)

    print("\nEND REPORT")

# First call to report_status()
report_status(name="luke", affiliation="jedi", status="missing")

# Second call to report_status()
report_status(name="anakin", affiliation="sith lord", status="deceased")

```

*** =sct
```{python}

fun_def = Ex().check_function_def('report_status')

# Note that in check_function('print', 0), we are only checking that print was
# used, not it's specific arguments.
fun_bod = fun_def.check_body()
fun_bod.check_function('print', 0)
fun_bod.check_function('print', 1)

for_loop = fun_bod.check_for_loop(0)
for_loop.check_iter() \
    .set_context(kwargs = dict(name = 'luke', affiliation = 'jedi', status = 'missing')) \
    .has_equal_value() \
    .check_function('kwargs.items', 0, signature = False)

for_loop.check_body() \
    .set_context(key = 'name', value = 'luke') \
    .has_equal_output()

fun_def.call("f(name = 'hugo', affiliation = 'datacamp')")

# Note that the tests below just verify report_status was called, not
# the specific arguments used.
# Test: report_status() call 1
Ex().check_function("report_status", 0)

# Test: report_status() call 2
Ex().check_function("report_status", 1)

```



--- type:NormalExercise lang:python xp:100 skills:2 key:1edd5d062f
## functions with for loops in them

This is the last leg. You've learned a lot about processing a large dataset in chunks. In this last exercise, you will put all the code for processing the data into a single function so that you can reuse the code without having to rewrite the same things all over again.

You're going to define the function `plot_pop()` which takes two arguments: the filename of the file to be processed, and the country code of the rows you want to process in the dataset. 

Because all of the previous code you've written in the previous exercises will be housed in `plot_pop()`, calling the function already does the following:

- Loading of the file chunk by chunk,
- Creating the new column of urban population values, and 
- Plotting the urban population data. 

That's a lot of work, but the function now makes it convenient to repeat the same process for whatever file and country code you want to process and visualize!

You're going to use the data from `'ind_pop_data.csv'`, available in your current directory. The packages pandas and matplotlib.pyplot has been imported as `pd` and `plt` respectively for your use.

After you are done, take a moment to look at the plots and reflect on the new skills you have acquired. The journey doesn't end here! If you have enjoyed working with this data, you can continue exploring it using the pre-processed version available on [Kaggle](https://www.kaggle.com/worldbank/world-development-indicators).

*** =instructions
- Define the function `plot_pop()` that has two arguments: first is `filename` for the file to process and second is `country_code` for the country to be processed in the dataset.
- Call `plot_pop()` to process the data for country code `'CEB'` in the file `'ind_pop_data.csv'`.
- Call `plot_pop()` to process the data for country code `'ARB'` in the file `'ind_pop_data.csv'`.

*** =hint
- The syntax for function headers is: `def` _function name_`(`_parameters_`):`.
- Pass `fn` which contains the filename `'ind_pop_data.csv'` and the string `'CEB'` as arguments to `plot_pop()`.
- Pass `fn` which contains the filename `'ind_pop_data.csv'` and the string `'ARB'` as arguments to `plot_pop()`.

*** =pre_exercise_code
```{python}
from urllib.request import urlretrieve

# Import the pandas package
import pandas as pd

# Import
import matplotlib.pyplot as plt

filename = 'https://s3.amazonaws.com/assets.datacamp.com/production/course_1342/datasets/world_ind_pop_data.csv'
urlretrieve(filename, 'ind_pop_data.csv')

```

*** =sample_code
```{python}
# Define plot_pop()
def ____(____, ____):

    # Initialize reader object: urb_pop_reader
    urb_pop_reader = pd.read_csv(filename, chunksize=1000)

    # Initialize empty dataframe: data
    data = pd.DataFrame()
    
    # Iterate over each dataframe chunk
    for df_urb_pop in urb_pop_reader:
        # Check out specific country: df_pop_ceb
        df_pop_ceb = df_urb_pop[df_urb_pop['CountryCode'] == country_code]

        # Zip dataframe columns of interest: pops
        pops = zip(df_pop_ceb['Total Population'],
                    df_pop_ceb['Urban population (% of total)'])

        # Turn zip object into list: pops_list
        pops_list = list(pops)

        # Use list comprehension to create new dataframe column 'Total Urban Population'
        df_pop_ceb['Total Urban Population'] = [int(tup[0] * tup[1]) for tup in pops_list]
    
        # Append dataframe chunk to data: data
        data = data.append(df_pop_ceb)

    # Plot urban population data
    data.plot(kind='scatter', x='Year', y='Total Urban Population')
    plt.show()

# Set the filename: fn
fn = 'ind_pop_data.csv'

# Call plot_pop for country code 'CEB'


# Call plot_pop for country code 'ARB'


```

*** =solution
```{python}
# Define plot_pop()
def plot_pop(filename, country_code):

    # Initialize reader object: urb_pop_reader
    urb_pop_reader = pd.read_csv(filename, chunksize=1000)

    # Initialize empty dataframe: data
    data = pd.DataFrame()
    
    # Iterate over each dataframe chunk
    for df_urb_pop in urb_pop_reader:
        # Check out specific country: df_pop_ceb
        df_pop_ceb = df_urb_pop[df_urb_pop['CountryCode'] == country_code]

        # Zip dataframe columns of interest: pops
        pops = zip(df_pop_ceb['Total Population'],
                    df_pop_ceb['Urban population (% of total)'])

        # Turn zip object into list: pops_list
        pops_list = list(pops)

        # Use list comprehension to create new dataframe column 'Total Urban Population'
        df_pop_ceb['Total Urban Population'] = [int(tup[0] * tup[1]) for tup in pops_list]
    
        # Append dataframe chunk to data: data
        data = data.append(df_pop_ceb)

    # Plot urban population data
    data.plot(kind='scatter', x='Year', y='Total Urban Population')
    plt.show()

# Set the filename: fn
fn = 'ind_pop_data.csv'

# Call plot_pop for country code 'CEB'
plot_pop(fn, 'CEB')

# Call plot_pop for country code 'ARB'
plot_pop(fn, 'ARB')

```

*** =sct
```{python}

# Test: plot_pop() definition
fn_def = Ex().check_function_def('plot_pop') \
             .multi(check_args('filename'), check_args('country_code'))

# Test function body
fn_body = fn_def.check_body()

fn_body.check_function("pandas.DataFrame", 0)
fn_body.check_for_loop(0).check_iter().has_equal_ast()

loop_body = fn_body.check_for_loop(0).check_body()

# Test: list comprehension
list_comp = loop_body.check_list_comp(0)

list_comp.has_context(exact_names = True)
list_comp.check_body() \
    .set_context(tup = (91401583.0, 44.507921139002597)) \
    .has_equal_value('You do not need to modify the provided list comprehension.', 
                     error_msg='You do not need to modify the provided list comprehension.')

loop_body.check_function('zip', 0, signature = False)
loop_body.check_function('list', 0, signature = False)
loop_body.check_function('data.append', 0, signature = False)

# Test: fn object
Ex().test_object("fn")

# Test: plot_pop() call 1
Ex().check_function("plot_pop", 0)

# Test: plot_pop() call 2
Ex().check_function("plot_pop", 1)

```



--- type:NormalExercise lang:python xp:100 skills:2 key:681aeaaa00
## functions with for loops with if-else blocks

**Exercise left in its entirity below**

As Eric discussed, NetworkX also allows edges that begin and end on the same node; while this would be non-intuitive for a social network graph, it is useful to model data such as trip networks, in which individuals begin at one location and end in another.

It is useful to check for this before proceeding with further analyses, and NetworkX graphs provide a method for this purpose:  `.number_of_selfloops()`.

In this exercise as well as later ones, you'll find the `assert` statement useful. An `assert`-ions checks whether the statement placed after it evaluates to True, otherwise it will return an `AssertionError`.

To begin, use the `.number_of_selfloops()` method on `T` in the IPython Shell to get the number of edges that begin and end on the same node. A number of self-loops have been synthetically added to the graph. Your job in this exercise is to write a function that returns these edges.

*** =instructions
- Define a function called `find_selfloop_nodes()` which takes one argument: `G`.
    - Using a `for` loop, iterate over all the edges in `G` (excluding the metadata).
    - If node `u` is equal to node `v`:
        - Append `u` to the list `nodes_in_selfloops`.
        - Return the list `nodes_in_selfloops`.
- Check that the number of self loops in the graph equals the number of nodes in self loops. This has been done for you, so hit 'Submit Answer' to see the result!

*** =hint
- The function signature required is `find_selfloop_nodes(G)`. There are three steps required in the `for` loop:
    - Iterate over `G.edges()`.
    - Check whether `u` is equal to `v`.
    - If `u` and `v` are the same, then use the `append()` method to append `u` to the list `nodes_in_selfloops`.

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
# Define find_selfloop_nodes()
def ____:
    """
    Finds all nodes that have self-loops in the graph G.
    """
    nodes_in_selfloops = []
    
    # Iterate over all the edges of G
    for u, v in ____:
    
    # Check if node u and node v are the same
        if ____:
        
            # Append node u to nodes_in_selfloops
            ____
            
    return nodes_in_selfloops

# Check whether number of self loops equals the number of nodes in self loops
assert T.number_of_selfloops() == len(find_selfloop_nodes(T))
```

*** =solution
```{python}
# Define find_selfloop_nodes()
def find_selfloop_nodes(G):
    """
    Finds all nodes that have self-loops in the graph G.
    """
    nodes_in_selfloops = []
    
    # Iterate over all the edges of G
    for u, v in G.edges():
    
        # Check if node u and node v are the same
        if u == v:
        
            # Append node u to nodes_in_selfloops
            nodes_in_selfloops.append(u)
            
    return nodes_in_selfloops

# Check whether number of self loops equals the number of nodes in self loops
assert T.number_of_selfloops() == len(find_selfloop_nodes(T))
```

*** =sct
```{python}
import requests
import networkx as nx

# Download the pickle file.
pkl_url = 'http://s3.amazonaws.com/assets.datacamp.com/production/course_1822/datasets/ego-twitter.p'
r = requests.get(pkl_url, stream=True)

# Create a local binary file with the downloaded content
with open('ego-twitter.p', 'wb') as f:
    f.write(r.content)

__T = nx.read_gpickle('ego-twitter.p')

fn_def = Ex().check_function_def('find_selfloop_nodes')

fn_body = fn_def.check_body()

fn_body.check_for_loop(0).check_iter().test_function('G.edges')

fn_body.check_for_loop(0).check_body().check_if_else(0).check_test().test_student_typed(text='u\s*\=\=\s*v\s*')

fn_body.check_for_loop(0).check_body().check_if_else(0).check_body().test_function('nodes_in_selfloops.append', do_eval=False)

Ex().test_function_definition(
    'find_selfloop_nodes',
    results=[([__T])], wrong_result_msg="In your `find_selfloop_nodes` function, did you return the list `nodes_in_selfloops`?"
)

success_msg("Great work! There are 42 nodes in `T` that have self-loops.")
```