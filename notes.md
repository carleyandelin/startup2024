# Web Programming Notes

- html and md are similar such that #/h1 are both big and ##/h2 are smaller, and so forth
- html button format: `<button type="submit">Submit</button>`
- html image format: `<img src="bowling.jpg" alt="bowling cartoon" width="200" height="100" />`
- To deploy to my server: `./deployFiles.sh -k ~/keys/production.pem -h yourdomain.click -s startup`

# Midterm Notes

### What does `<link>` do in HTML?
- The `<link>` element is used to define the relationship between a document and an external resource. Most commonly, it is used to link stylesheets to the HTML file, using the rel="stylesheet" attribute.
### What does the `<div>` tag do?
- The `<div>` tag is a block-level container that is used to group HTML elements. It has no semantic meaning but is often used to style or manipulate a section of the page with CSS or JavaScript.
### What is the difference between the `#title` and `.grid` selectors in CSS?
- `#title` selects an element with the id attribute of "title" (ID selectors are unique).
- `.grid` selects all elements with the class attribute of "grid" (class selectors can be applied to multiple elements).
### What is the difference between padding and margin in CSS?
- Padding is the space between the content of an element and its border.
- Margin is the space outside the border of an element, affecting the distance between the element and surrounding elements.
### How will the images be displayed using flex in the given HTML and CSS?
- If the container of the images uses `display: flex`, the images will be aligned according to the flexbox rules. By default, this means they will appear in a row (horizontally) unless otherwise specified with properties like `flex-direction`, `justify-content`, `or align-items`.
### What does the padding CSS do?
- The padding CSS property typically adds space inside an element's border. It could look something like padding: 10px;, which adds 10px of space on all sides.
### What does the code using arrow syntax function declaration do?
- An arrow function in JavaScript looks like const example = () => { ... }. It defines a function using a shorter syntax compared to traditional function declarations and binds the this keyword lexically.
### What does the code using map with an array output?
- The `map()` method creates a new array populated with the results of calling a provided function on every element in the array. Without specific code, the output will depend on the operation within `map()`.
### What does the following code output using `getElementById` and `addEventListener`?
- `getElementById` is used to select an element by its ID, and `addEventListener` attaches an event handler to that element. The output depends on the event (like `click`) and the function defined in the handler.
### What does the following line of JavaScript do using a `#` selector?
- The `#` selector in JavaScript is used with `document.querySelector()` or `document.getElementById()` to select an element by its ID. For example, `document.querySelector('#example')` selects an element with `id="example"`.
### Which is true about the DOM?
- The DOM represents the structure of a webpage as a tree of nodes.
- It allows manipulation of HTML elements, styles, and events.
### By default, the HTML span element has a default CSS display property value of: `inline`
### How would you use CSS to change all the div elements to have a background color of red?
- You would use the CSS rule: `div { background-color: red; }`.
### How would you display an image with a hyperlink in HTML?
`<a href="https://example.com"><img src="image.jpg" alt="description"></a>`
### In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
- Content → Padding → Border → Margin.
### Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?
- HTML: `<span class="green">trouble</span>double`
- CSS:  `.green { color: green; }`
### What will the code output when executed using a for loop and `console.log`?
- Generally, it will print values to the browser's console for each iteration of the loop.
### How would you use JavaScript to select an element with the id of "byu" and change the text color of that element to green?
- `document.getElementById('byu').style.color = 'green';`
### What is the opening HTML tag for a paragraph, ordered list, unordered list, second-level heading, first-level heading, third-level heading?
- Paragraph: <p>
- Ordered List: <ol>
- Unordered List: <ul>
- Second-level heading: <h2>
- First-level heading: <h1>
- Third-level heading: <h3>
### How do you declare the document type to be HTML?
- `<!DOCTYPE html>`
### What is valid JavaScript syntax for if, else, for, while, switch statements?
- `if` statement:
    - `if (condition) { ... }`
- `else`:
    - `else { ... }`
- `for` loop:
    - `for (let i = 0; i < 10; i++) { ... }`
- `while` loop:
    - `while (condition) { ... }`
- `switch`:
    - `switch (value) {case 'x': ...}`
### What is the correct syntax for creating a JavaScript object?
- `const obj = { key: 'value' };`
### Is it possible to add new properties to JavaScript objects?
- Yes, you can dynamically add new properties to an object, for example: `obj.newKey = 'newValue';`
### If you want to include JavaScript on an HTML page, which tag do you use?
- `<script>`
### Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
- You could wrap "animal" in a span with an ID or class and target it:
    - `document.getElementById('animal').textContent = 'crow';`
### What correctly describes JSON?
- JSON (JavaScript Object Notation) is a lightweight format for storing and transporting data. It is easy for humans to read and write, and easy for machines to parse and generate.
### What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo do?
- chmod: Changes file permissions.
- pwd: Prints the working directory.
- cd: Changes directories.
- ls: Lists files and directories.
- vim/nano: Text editors in the terminal.
- mkdir: Creates a directory.
- mv: Moves or renames files/directories.
- rm: Removes files or directories.
- man: Displays the manual for a command.
- ssh: Starts a secure shell session.
- ps: Shows currently running processes.
- wget: Downloads files from the internet.
- sudo: Executes commands with elevated privileges.
### Which console command creates a remote shell session?: `ssh.`
### Which of the following is true when the `-la` parameter is specified for the `ls` console command?
- It lists all files, including hidden ones (those starting with a dot), and provides detailed information (such as permissions and file size).
### Which is the top-level domain, subdomain, and root domain in `banana.fruit.bozo.click`?
- Top-level domain: `.click`
- Subdomain: `banana.fruit`
- Root domain: `bozo`
### Is a web certificate necessary to use HTTPS?
- Yes, HTTPS requires a valid SSL/TLS certificate to ensure secure communication.
### Can a DNS A record point to an IP address or another A record?
- A DNS A record points to an IP address, not another A record.
### Port 443, 80, 22 is reserved for which protocol?
- 443: HTTPS
- 80: HTTP
- 22: SSH


