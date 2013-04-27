fuerza
======

Making a jquery mobile application for offline use with markdown files.

Structure
---
* The index.html file holds all of the needed scripts, the only thing that should be added are new pages
* To add a page, create a new div `<div data-role="page" id="<page name without spaces>"></div>`
* Create new pages in the /content folder using markdown syntax inside a `<script src="../js/included.js" type="text/javascript">` tag.

Syntax conventions:
----
* Use the `===` to indicate an H1 page title
* Use `---` to indicate the H2 page subtitle
* Use `#### Title ####` for the page footer
* Use normal markdown syntax for lists
* Use the `[text](#link)` syntax for buttons
* Use the `[text](http://link "title")` syntax for links
* Use `![alt text](img/file.png)` for images without a title.
* You may also include a title `![alt text](link.png "title")`.
If you use `width:XXpx` as part of the title, `XXpx` will be used
as the width of the image and will not appear in the title.
