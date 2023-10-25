# Using Gravity B.A.S.I.C
How to include Gravity BASIC into your html page:
```html
<script src="./core/GravityGraphics/GravityBasic.js"></script>

<div id="gravityscreen">
</div>

<script>
// your code goes here
</script>

```

# To use Gravity B.A.S.I.C cdn as a link
```html
<script src="https://gravitygraphics.github.io/cdn/GravityBasic.min.js"></script>

<div id="gravityscreen">
</div>

<script>
// your code goes here
</script>
```

# Gravity B.A.S.I.C Manual
`gr()`

Take you into graphical mode which consist of a graphical portion and a terminal portion.
##

`print(str, align="left", animate=true)`

Prints a string in the terminal screen.
##

`dot(x=0, y=0, color='lime', pallete=Color16, custom_gridsize=null)`

Draws a dot on the screen. Default size of dot is 10 pixels.
##
`line(x1=0, y1=0, x2=30, y2=40, color='purple')`

Draws a line on the screen.
##

`rect(x1=0, y1=0, x2=600, y2=600, color='red', option="coord", custom_gridsize=null)`

Draws a rectangle given two points. You can change the option to size and it will take X2 and Y2 as the width and height of the rectangle.
##

`random(min=0, max=999)`

Generates a random number between min and max.

##
`await input(str="")`

Lets the user key in an input

##
`await delay(seconds=0.05)`

Waits for x seconds before executing the next statement.


