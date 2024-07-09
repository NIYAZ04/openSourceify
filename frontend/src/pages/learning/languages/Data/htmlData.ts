
export const topics = [
    "HTML Introduction", "HTML Basic", 
    "HTML Elements", "HTML Attributes", "HTML Headings", "HTML Paragraphs", "HTML Styles",
    "HTML Formatting", "HTML Comments", "HTML Colors", "HTML CSS",
    "HTML Links", "HTML Images", "HTML Favicon", "HTML Page Title", "HTML Tables",
    "HTML Lists", "HTML Block & Inline", "HTML Div", "HTML Classes", "HTML Id",
    "HTML Iframes", "HTML JavaScript", "HTML File Paths", "HTML Head", "HTML Layout",
    "HTML Responsive", "HTML Semantics",
    "HTML Entities", "HTML Symbols", "HTML URL Encode",
    "HTML vs. XHTML", "HTML Forms", "HTML Form Attributes", "HTML Form Elements", 
    "HTML Input Types", "HTML Input Attributes", "Input Form Attributes"
  ];
  
  export const topicContents: { [key: string]: { title: string; content: string; code?: string } } = {
    "HTML Introduction": {
      title: "HTML Introduction",
      content: "HTML stands for HyperText Markup Language. It is the standard language for creating web pages and web applications. HTML describes the structure of a webpage using a series of elements, which are represented by tags. These elements tell the browser how to display the content. HTML documents are plain text files that can be created using any text editor. The main components of an HTML document are the doctype declaration, the html element, the head element, and the body element.",
      code: `<html>
      <head>
        <title>HTML Introduction</title>
      </head>
      <body>
        <h1>Welcome to HTML</h1>
        <p>HTML is the standard markup language for creating web pages.</p>
      </body>
    </html>`
    },
    "HTML Elements": {
      title: "HTML Elements",
    content: "HTML elements are the building blocks of HTML pages. They are defined by a start tag, some content, and an end tag. HTML elements can be nested within other elements. For example, a paragraph can contain a link, and a division can contain multiple paragraphs. Common HTML elements include headings, paragraphs, links, images, lists, tables, and forms.",
    code: `<html>
    <head>
      <title>HTML Elements</title>
    </head>
    <body>
      <h1>This is a Heading</h1>
      <p>This is a paragraph.</p>
      <a href="https://www.example.com">This is a link</a>
      <img src="image.jpg" alt="Example Image">
    </body>
  </html>`
  },
    "HTML Basic": {
      title: "HTML Basic",
    content: "HTML documents consist of elements, each defined by a tag. The most basic structure of an HTML document includes the `<!DOCTYPE html>` declaration, which defines the document type and version of HTML. The `<html>` tag is the root element of an HTML page. The `<head>` element contains meta-information about the document, such as its title and links to stylesheets. The `<body>` element contains the content of the HTML document, such as text, images, and links.",
    code: `<html>
    <head>
      <title>HTML Basic</title>
    </head>
    <body>
      <h1>This is a Heading</h1>
      <p>This is a paragraph.</p>
    </body>
  </html>`
  },
    "HTML Attributes": {
      title: "HTML Attributes",
    content: "HTML attributes provide additional information about HTML elements. Attributes are always included in the opening tag and usually come in name/value pairs like `name='value'`. For example, the `href` attribute in an `<a>` tag specifies the URL of the page the link goes to, and the `src` attribute in an `<img>` tag specifies the path to the image. Other common attributes include `class`, `id`, `style`, and `title`.",
    code: `<html>
    <head>
      <title>HTML Attributes</title>
    </head>
    <body>
      <h1 title="I'm a tooltip">This is a Heading with a Tooltip</h1>
      <p style="color:blue;">This is a blue paragraph.</p>
      <a href="https://www.example.com" target="_blank">This is a link that opens in a new tab</a>
      <img src="image.jpg" alt="Example Image" width="500" height="600">
    </body>
  </html>`
  },
    "HTML Headings": {
      title: "HTML Headings",
    content: "HTML headings are defined with the `<h1>` to `<h6>` tags. `<h1>` defines the most important heading, while `<h6>` defines the least important heading. Headings are used to create a hierarchical structure for the content, making it easier for users to read and understand. They are also important for SEO (Search Engine Optimization) because search engines use headings to understand the structure and content of a webpage.",
  code: `<html>
    <head>
      <title>HTML Headings</title>
    </head>
    <body>
      <h1>This is an H1 Heading</h1>
      <h2>This is an H2 Heading</h2>
      <h3>This is an H3 Heading</h3>
      <h4>This is an H4 Heading</h4>
      <h5>This is an H5 Heading</h5>
      <h6>This is an H6 Heading</h6>
    </body>
  </html>`
  },
  // wrtie from here 
  
    "HTML Paragraphs": {
      title: "HTML Paragraphs",
    content: "HTML paragraphs are defined with the `<p>` tag. Paragraphs are used to define blocks of text in a web page. Each paragraph will automatically have some space before and after it, making it easier to read. Paragraphs help in structuring content in a readable manner.",
    code: `<html>
    <head>
      <title>HTML Paragraphs</title>
    </head>
    <body>
      <p>This is a paragraph. It contains a block of text that is separated from other content.</p>
      <p>This is another paragraph. Notice how each paragraph is displayed on a new line with space between them.</p>
    </body>
  </html>`
  },
    "HTML Styles": {
      title: "HTML Styles",
      content: "HTML styles are used to add CSS (Cascading Style Sheets) to HTML elements. Styles can be added directly in the HTML using the `style` attribute or through external and internal style sheets. The `style` attribute is used for inline styles, which apply to a single element.",
      code: `<html>
      <head>
        <title>HTML Styles</title>
        <style>
          .styled-paragraph {
            color: blue;
            font-size: 20px;
          }
        </style>
      </head>
      <body>
        <p style="color:red;">This paragraph has inline styles. It is red in color.</p>
        <p class="styled-paragraph">This paragraph uses an internal style sheet. It is blue in color and has a larger font size.</p>
      </body>
    </html>`
    },
    "HTML Formatting": {
      title: "HTML Formatting",
    content: "HTML formatting tags are used to define the appearance of text. Common formatting tags include `<b>` for bold text, `<i>` for italic text, `<u>` for underlined text, `<mark>` for highlighted text, and `<small>` for smaller text. Formatting tags help in emphasizing or distinguishing parts of the text.",
    code: `<html>
    <head>
      <title>HTML Formatting</title>
    </head>
    <body>
      <p>This is <b>bold</b> text.</p>
      <p>This is <i>italic</i> text.</p>
      <p>This is <u>underlined</u> text.</p>
      <p>This is <mark>highlighted</mark> text.</p>
      <p>This is <small>smaller</small> text.</p>
    </body>
  </html>`
  },
  
  // write from here tomoorow 
  
    "HTML Comments": {
      title: "HTML Comments",
      content: "HTML comments are used to add notes or explanations within the HTML code that are not displayed in the browser. Comments are helpful for documenting the code, making it easier to understand and maintain. They are also useful for debugging purposes by temporarily disabling parts of the code. HTML comments are added using the `<!-- ... -->` syntax.",
      code: `<html>
      <head>
        <title>HTML Comments</title>
      </head>
      <body>
        <!-- This is a single-line comment -->
        <p>This paragraph is visible in the browser.</p>
        <!-- 
          This is a multi-line comment.
          It can span multiple lines.
        -->
        <p>This paragraph is also visible in the browser.</p>
        <!-- <p>This paragraph is hidden due to the comment tag.</p> -->
      </body>
    </html>`
    },
    "HTML Colors": {
      title: "HTML Colors",
      content: "HTML colors can be specified using color names, hexadecimal values, RGB values, or HSL values. Colors are often used to style text, backgrounds, borders, and other elements. Using colors can enhance the visual appeal of a web page and improve user experience.",
      code: `<html>
      <head>
        <title>HTML Colors</title>
      </head>
      <body>
        <p style="color:red;">This text is red.</p>
        <p style="color:#00FF00;">This text is green using a hexadecimal value.</p>
        <p style="color:rgb(0, 0, 255);">This text is blue using an RGB value.</p>
        <p style="color:hsl(120, 100%, 50%);">This text is green using an HSL value.</p>
        <p style="background-color:yellow;">This paragraph has a yellow background color.</p>
      </body>
    </html>`
    },
    "HTML CSS": {
      title: "HTML CSS",
      content: "CSS (Cascading Style Sheets) is used to style HTML elements. CSS can be added to HTML documents in three ways: inline styles, internal styles, and external styles. Inline styles are added directly to the HTML elements using the `style` attribute. Internal styles are defined within the `<style>` tag in the `<head>` section. External styles are defined in a separate CSS file and linked to the HTML document using the `<link>` tag.",
      code: `<html>
      <head>
        <title>HTML CSS</title>
        <style>
          .styled-paragraph {
            color: blue;
            font-size: 20px;
          }
        </style>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <p style="color:red;">This text is styled with an inline style.</p>
        <p class="styled-paragraph">This text is styled with an internal style sheet.</p>
        <p class="external-style">This text is styled with an external style sheet.</p>
      </body>
    </html>`
    },
    // write from here
    "HTML Links": {
      title: "HTML Links",
      content: "HTML links are defined with the `<a>` tag. Links are used to navigate from one page to another or to different sections within the same page. The `href` attribute specifies the URL of the destination. Links can also be styled using CSS to make them visually appealing.",
      code: `<html>
      <head>
        <title>HTML Links</title>
      </head>
      <body>
        <p><a href="https://www.example.com">This is a link to an external website.</a></p>
        <p><a href="#section1">This is a link to a section within the same page.</a></p>
        <h2 id="section1">Section 1</h2>
        <p>This is the content of section 1.</p>
        <p><a href="page2.html">This is a link to another page.</a></p>
        <style>
          a {
            color: blue;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </body>
    </html>`
    },
  
    ////////////////////////////////////////////////////////////////////////////////////
    "HTML Images": {
      title: "HTML Images",
      content: "HTML images are defined with the `<img>` tag. Images are used to enhance the visual content of a webpage. The `src` attribute specifies the path to the image, while the `alt` attribute provides alternative text for the image if it cannot be displayed. Additionally, the `width` and `height` attributes can be used to define the dimensions of the image.",
      code: `<html>
      <head>
        <title>HTML Images</title>
      </head>
      <body>
        <h1>HTML Images Example</h1>
        <img src="https://www.example.com/image.jpg" alt="Example Image" width="500" height="300">
        <p>The above image is displayed from an external URL.</p>
        <img src="local-image.jpg" alt="Local Image" width="400" height="250">
        <p>The above image is displayed from a local path.</p>
        <img src="https://www.example.com/image.jpg" alt="Decorative Image" style="border-radius: 10px;">
        <p>This image is styled with a CSS border radius for rounded corners.</p>
      </body>
    </html>`
    },
    "HTML Favicon": {
      title: "HTML Favicon",
      content: "A favicon is a small icon displayed in the browser tab, bookmark menu, and other places. It helps to visually identify a website. The favicon is added to the HTML document using the `<link>` tag within the `<head>` section. The `rel` attribute is set to 'icon', and the `href` attribute specifies the path to the favicon image.",
      code: `<html>
      <head>
        <title>HTML Favicon</title>
        <link rel="icon" href="https://www.example.com/favicon.ico" type="image/x-icon">
      </head>
      <body>
        <h1>HTML Favicon Example</h1>
        <p>This page includes a favicon displayed in the browser tab.</p>
        <p>Favicon can also be in different formats like .png or .svg</p>
        <link rel="icon" href="https://www.example.com/favicon.png" type="image/png">
      </body>
    </html>`
    },
    "HTML Page Title": {
      title: "HTML Page Title",
    content: "The HTML page title is defined within the `<title>` tag inside the `<head>` section. The title is displayed in the browser's title bar or tab. It is important for both user experience and SEO, as search engines use the title to understand the content of the page.",
    code: `<html>
    <head>
      <title>HTML Page Title Example</title>
    </head>
    <body>
      <h1>HTML Page Title Example</h1>
      <p>The title of this page is 'HTML Page Title Example'.</p>
      <p>Changing the content within the <code>&lt;title&gt;</code> tag will change the page title.</p>
      <h2>Importance of Page Titles</h2>
      <ul>
        <li>Helps users understand the content of the page.</li>
        <li>Used by search engines for indexing and ranking.</li>
        <li>Displayed in bookmarks and browser history.</li>
      </ul>
    </body>
  </html>`
  },
    "HTML Tables": {
      title: "HTML Tables",
    content: "HTML tables are defined with the `<table>` tag. Tables are used to organize data in rows and columns. The `<tr>` tag defines a table row, the `<th>` tag defines a table header, and the `<td>` tag defines a table cell. Tables can also include captions, column groups, and more complex structures.",
    code: `<html>
    <head>
      <title>HTML Tables</title>
    </head>
    <body>
      <h1>HTML Tables Example</h1>
      <table border="1">
        <caption>Sample Table</caption>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
        </tr>
        <tr>
          <td>Data 1</td>
          <td>Data 2</td>
          <td>Data 3</td>
        </tr>
        <tr>
          <td>Data 4</td>
          <td>Data 5</td>
          <td>Data 6</td>
        </tr>
      </table>
      <p>This is a simple table with a border, headers, and data cells.</p>
      <h2>Styling Tables with CSS</h2>
      <style>
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          padding: 10px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }
        th {
          background-color: #f2f2f2;
        }
        tr:hover {
          background-color: #f5f5f5;
        }
      </style>
      <table>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
        </tr>
        <tr>
          <td>Data 1</td>
          <td>Data 2</td>
          <td>Data 3</td>
        </tr>
        <tr>
          <td>Data 4</td>
          <td>Data 5</td>
          <td>Data 6</td>
        </tr>
      </table>
    </body>
  </html>`
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    "HTML Lists": {
  title: "HTML Lists",
  content: "HTML lists are used to group a set of related items in a specific order. There are three main types of lists in HTML: ordered lists, unordered lists, and description lists. Ordered lists (`<ol>`) are used when the order of items is important, such as steps in a recipe or instructions. Unordered lists (`<ul>`) are used for items where the order does not matter, such as a list of ingredients. Description lists (`<dl>`) are used to define a list of terms and their descriptions.",
  code: `<html>
    <head>
      <title>HTML Lists</title>
    </head>
    <body>
      <h1>HTML Lists</h1>
      <h2>Ordered List</h2>
      <ol>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
      </ol>
      <h2>Unordered List</h2>
      <ul>
        <li>Item A</li>
        <li>Item B</li>
        <li>Item C</li>
      </ul>
      <h2>Description List</h2>
      <dl>
        <dt>HTML</dt>
        <dd>HyperText Markup Language</dd>
        <dt>CSS</dt>
        <dd>Cascading Style Sheets</dd>
        <dt>JavaScript</dt>
        <dd>Programming language for web development</dd>
      </dl>
    </body>
  </html>`
},

"HTML Block & Inline": {
  title: "HTML Block & Inline",
  content: "HTML elements are categorized into block-level and inline elements based on their behavior in the layout. Block-level elements (`<div>`, `<h1>`, `<p>`, etc.) typically start on a new line and occupy the full width available. They are used to create larger sections and structure the layout. Inline elements (`<span>`, `<a>`, `<strong>`, etc.) do not start on a new line and only take up as much width as necessary. They are used to style parts of a text or content within a block-level element.",
  code: `<html>
    <head>
      <title>HTML Block & Inline</title>
      <style>
        .block-example {
          background-color: lightblue;
          padding: 10px;
          margin-bottom: 10px;
        }
        .inline-example {
          background-color: lightgreen;
          padding: 5px;
        }
      </style>
    </head>
    <body>
      <h1>Block vs Inline Elements</h1>
      <div class="block-example">
        <h2>Block-Level Example</h2>
        <p>This paragraph is inside a block-level div element.</p>
      </div>
      <p>Here is an <span class="inline-example">inline element</span> within a paragraph.</p>
    </body>
  </html>`
},

"HTML Div": {
  title: "HTML Div",
  content: "The `<div>` tag is a block-level element used as a container to group other elements and apply styles. It does not add any visual content by itself but helps structure and style content. Div elements are commonly used to create layouts and manage the styling of sections within a web page.",
  code: `<html>
    <head>
      <title>HTML Div</title>
      <style>
        .container {
          background-color: lightgrey;
          padding: 20px;
          border: 1px solid #ccc;
        }
        .inner {
          background-color: lightcoral;
          padding: 10px;
        }
      </style>
    </head>
    <body>
      <h1>Using Div Elements</h1>
      <div class="container">
        <h2>Container Div</h2>
        <div class="inner">
          <p>This is an inner div element inside the container div.</p>
        </div>
      </div>
    </body>
  </html>`
},

"HTML Classes": {
  title: "HTML Classes",
  content: "The `class` attribute in HTML is used to apply CSS styles to multiple elements at once. Classes allow you to group elements and style them consistently across your website. Multiple classes can be applied to a single element by separating them with spaces, allowing for flexible and reusable styling.",
  code: `<html>
    <head>
      <title>HTML Classes</title>
      <style>
        .highlight {
          background-color: yellow;
          font-weight: bold;
        }
        .alert {
          color: red;
        }
        .combined {
          font-style: italic;
          background-color: lightblue;
        }
      </style>
    </head>
    <body>
      <h1>Using Classes</h1>
      <p class="highlight">This paragraph is highlighted with a yellow background and bold text.</p>
      <p class="alert">This paragraph has red text due to the alert class.</p>
      <p class="highlight alert">This paragraph has both highlight and alert classes applied, with combined styles.</p>
    </body>
  </html>`
},
   "HTML Id": {
  title: "HTML Id",
  content: "The `id` attribute in HTML is used to assign a unique identifier to an element. This identifier must be unique within the HTML document, meaning no two elements can share the same `id`. IDs are often used to apply specific styles or target elements with JavaScript. They can also be used with anchor links to navigate to specific sections of a page.",
  code: `<html>
    <head>
      <title>HTML Id</title>
      <style>
        #unique-element {
          background-color: lightgoldenrodyellow;
          padding: 20px;
          border: 1px solid #ccc;
        }
        #special-section {
          color: darkblue;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <h1>Using IDs in HTML</h1>
      <div id="unique-element">
        <p>This div has a unique ID.</p>
      </div>
      <a href="#special-section">Go to Special Section</a>
      <div id="special-section">
        <h2>Special Section</h2>
        <p>This section is targeted by the ID link above.</p>
      </div>
    </body>
  </html>`
},

"HTML Iframes": {
  title: "HTML Iframes",
  content: "The `<iframe>` tag is used to embed another HTML document within the current page. Iframes can be used to display external content like videos, maps, or other web pages. They allow you to embed content from a different source into your own webpage. It is important to use iframes responsibly, as they can impact page performance and security.",
  code: `<html>
    <head>
      <title>HTML Iframes</title>
      <style>
        iframe {
          border: 2px solid #ccc;
          width: 600px;
          height: 400px;
        }
      </style>
    </head>
    <body>
      <h1>Embedding Content with Iframes</h1>
      <iframe src="https://www.example.com" title="Example Site"></iframe>
      <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube Video"></iframe>
    </body>
  </html>`
},

"HTML JavaScript": {
  title: "HTML JavaScript",
  content: "JavaScript is a programming language that enables interactive web pages. It can be included in HTML documents either directly within `<script>` tags or linked externally through a separate `.js` file. JavaScript can manipulate the DOM, handle events, and interact with other web APIs. It enhances the functionality of web pages by adding dynamic behavior.",
  code: `<html>
    <head>
      <title>HTML JavaScript</title>
      <script>
        function showMessage() {
          alert('Hello from JavaScript!');
        }
      </script>
    </head>
    <body>
      <h1>Using JavaScript in HTML</h1>
      <button onclick="showMessage()">Click Me</button>
      <script src="external.js"></script>
    </body>
  </html>`
},

"HTML File Paths": {
  title: "HTML File Paths",
  content: "File paths in HTML are used to link to external resources like stylesheets, scripts, images, and other files. There are two types of paths: absolute and relative. Absolute paths specify the full URL or path from the root of the domain, while relative paths are relative to the current document's location. Using relative paths is more flexible when moving or sharing files within a project.",
  code: `<html>
    <head>
      <title>HTML File Paths</title>
      <link rel="stylesheet" href="styles.css">
      <script src="scripts/main.js"></script>
    </head>
    <body>
      <h1>File Paths in HTML</h1>
      <img src="images/logo.png" alt="Logo">
      <a href="https://www.example.com">Visit Example</a>
      <a href="about.html">About Us</a>
    </body>
  </html>`
},
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    "HTML Head": {
  title: "HTML Head",
  content: "The `<head>` element in HTML contains metadata and links to external resources for the document. It is placed within the `<html>` element and is not displayed directly on the webpage. Common elements within `<head>` include `<title>`, `<meta>`, `<link>`, and `<script>`. The `<title>` element sets the title of the page, which appears in the browser's title bar or tab. `<meta>` tags provide metadata such as charset and viewport settings. `<link>` tags are used to link to external stylesheets, while `<script>` tags include JavaScript files.",
  code: `<html>
    <head>
      <title>HTML Head</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="styles.css">
      <script src="scripts/main.js" defer></script>
    </head>
    <body>
      <h1>Understanding the HTML Head</h1>
      <p>The content here will be displayed on the page, but the head content is not.</p>
    </body>
  </html>`
},

"HTML Layout": {
  title: "HTML Layout",
  content: "HTML layout refers to the structure of a webpage defined by HTML elements and their arrangement. It is crucial for organizing content and ensuring a good user experience. Common layout elements include `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>`. These elements help to define the main areas of a webpage, such as the header, navigation menu, main content area, sidebar, and footer. CSS is often used in conjunction to style and position these elements appropriately.",
  code: `<html>
    <head>
      <title>HTML Layout</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
        header, footer {
          background-color: #333;
          color: #fff;
          padding: 10px;
          text-align: center;
        }
        nav {
          background-color: #eee;
          padding: 10px;
        }
        main {
          padding: 20px;
        }
        aside {
          background-color: #f4f4f4;
          padding: 10px;
          margin: 10px 0;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>Page Header</h1>
      </header>
      <nav>
        <a href="#home">Home</a> | <a href="#about">About</a> | <a href="#contact">Contact</a>
      </nav>
      <main>
        <section>
          <h2>Main Content</h2>
          <p>This is the main content area of the page.</p>
        </section>
        <aside>
          <h3>Sidebar</h3>
          <p>This is a sidebar with additional information.</p>
        </aside>
      </main>
      <footer>
        <p>&copy; 2024 My Website</p>
      </footer>
    </body>
  </html>`
},

"HTML Responsive": {
  title: "HTML Responsive",
  content: "Responsive web design ensures that a webpage looks good on all devices, from desktops to smartphones. This is achieved by using flexible layouts, fluid grids, and media queries. The `<meta name='viewport'>` tag is crucial for responsive design, as it controls the layout on mobile browsers. Media queries in CSS allow you to apply different styles based on the device’s screen size, orientation, or resolution.",
  code: `<html>
    <head>
      <title>HTML Responsive</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
        header, footer {
          background-color: #333;
          color: #fff;
          padding: 10px;
          text-align: center;
        }
        .container {
          width: 90%;
          margin: auto;
        }
        @media (min-width: 600px) {
          .container {
            width: 80%;
          }
        }
        @media (min-width: 1024px) {
          .container {
            width: 70%;
          }
        }
      </style>
    </head>
    <body>
      <header>
        <h1>Responsive Design</h1>
      </header>
      <div class="container">
        <p>This container adjusts its width based on the screen size.</p>
      </div>
      <footer>
        <p>&copy; 2024 My Responsive Site</p>
      </footer>
    </body>
  </html>`
},

"HTML Semantics": {
  title: "HTML Semantics",
  content: "Semantic HTML elements clearly describe their meaning in a human- and machine-readable way. These elements improve the accessibility and SEO of a webpage. Examples include `<header>`, `<footer>`, `<article>`, `<section>`, and `<nav>`. Using semantic elements helps to structure the document logically and provides context about the content's role on the page. For example, the `<article>` tag is used for self-contained content that could be distributed independently, while `<section>` is used to group related content.",
  code: `<html>
    <head>
      <title>HTML Semantics</title>
      <style>
        header, footer {
          background-color: #333;
          color: #fff;
          padding: 10px;
          text-align: center;
        }
        section {
          margin: 20px 0;
          padding: 20px;
          border: 1px solid #ccc;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>Semantic HTML Example</h1>
      </header>
      <nav>
        <a href="#section1">Section 1</a> | <a href="#section2">Section 2</a>
      </nav>
      <main>
        <section id="section1">
          <h2>Section 1</h2>
          <p>This is the first section of the page.</p>
        </section>
        <article>
          <h2>Article Title</h2>
          <p>This is an article that can stand alone and be distributed independently.</p>
        </article>
        <section id="section2">
          <h2>Section 2</h2>
          <p>This is the second section of the page.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Semantic HTML Example</p>
      </footer>
    </body>
  </html>`
},
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    "HTML Entities": {
  title: "HTML Entities",
  content: "HTML entities are used to represent characters that have special meanings in HTML or are not easily typable on a keyboard. They start with an ampersand (&) and end with a semicolon (;). For example, `&amp;` represents an ampersand (&), `&lt;` represents a less-than sign (<), and `&gt;` represents a greater-than sign (>). Entities are useful for ensuring that special characters are displayed correctly in the browser.",
  code: `<html>
    <head>
      <title>HTML Entities</title>
    </head>
    <body>
      <p>To display an ampersand, use &amp; in HTML.</p>
      <p>To display less-than and greater-than signs, use &lt; and &gt; respectively.</p>
      <p>The copyright symbol is represented by &copy;.</p>
    </body>
  </html>`
},

"HTML Symbols": {
  title: "HTML Symbols",
  content: "HTML symbols refer to special characters and icons that can be included in web pages using HTML entities. These symbols are often used to enhance the appearance of content or to include special characters that are not part of the standard keyboard. For example, `&copy;` represents the copyright symbol (©), `&reg;` represents the registered trademark symbol (®), and `&euro;` represents the Euro sign (€). Using symbols can add clarity and style to your HTML content.",
  code: `<html>
    <head>
      <title>HTML Symbols</title>
    </head>
    <body>
      <p>&copy; 2024 Your Company. All rights reserved.</p>
      <p>Trademark symbol: &reg;</p>
      <p>Euro sign: &euro; 50</p>
      <p>Heart symbol: &hearts;</p>
    </body>
  </html>`
},

"HTML URL Encode": {
  title: "HTML URL Encode",
  content: "URL encoding is used to ensure that URLs are transmitted correctly over the internet. Certain characters, such as spaces, special symbols, and non-ASCII characters, need to be encoded to be safely included in URLs. URL encoding replaces these characters with a percent sign (%) followed by their ASCII code in hexadecimal format. For example, a space is encoded as `%20`, and an ampersand is encoded as `%26`. This ensures that the URL is interpreted correctly by web browsers and servers.",
  code: `<html>
    <head>
      <title>HTML URL Encode</title>
    </head>
    <body>
      <p>URL encoding is crucial for handling special characters in URLs.</p>
      <p>Example URL with spaces: <a href="https://example.com/query?name=John%20Doe">Link</a></p>
      <p>Example URL with ampersand: <a href="https://example.com/query?param1=value1&amp;param2=value2">Link</a></p>
    </body>
  </html>`
},
    "HTML vs. XHTML": {
  title: "HTML vs. XHTML",
  content: "HTML (HyperText Markup Language) and XHTML (eXtensible HyperText Markup Language) are both languages used for creating web pages. HTML is the standard language for defining web pages, while XHTML is a stricter and more standardized version of HTML. XHTML requires all elements to be properly nested and closed, uses lowercase for all tag names, and adheres to XML syntax rules. HTML, on the other hand, is more forgiving and allows for more flexible syntax. XHTML's stricter rules aim to improve web page consistency and ensure better compatibility with XML-based technologies.",
  code: `<html>
    <head>
      <title>HTML vs. XHTML</title>
    </head>
    <body>
      <h1>Differences between HTML and XHTML</h1>
      <p>HTML is more lenient with syntax, while XHTML requires strict adherence to XML rules.</p>
      <p>Example of XHTML:
        <div>
          <p>This is a properly closed and nested XHTML element.</p>
        </div>
      </p>
    </body>
  </html>`
},

"HTML Forms": {
  title: "HTML Forms",
  content: "HTML forms are used to collect user input on a web page. Forms can include various types of input fields such as text boxes, radio buttons, checkboxes, and submit buttons. They are created using the `<form>` element and include input elements such as `<input>`, `<textarea>`, `<select>`, and `<button>`. Forms are crucial for user interaction on websites, allowing users to submit data, search for information, and perform actions. Forms can be linked to server-side scripts for processing the submitted data.",
  code: `<html>
    <head>
      <title>HTML Forms</title>
    </head>
    <body>
      <h1>Contact Us</h1>
      <form action="/submit" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br>
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" cols="50" required></textarea>
        <br>
        <button type="submit">Send</button>
      </form>
    </body>
  </html>`
},

"HTML Form Attributes": {
  title: "HTML Form Attributes",
  content: "HTML form attributes define the behavior and appearance of forms and their elements. Key attributes include `action`, which specifies the URL where the form data should be sent; `method`, which defines the HTTP method to use (GET or POST); `name`, which assigns a name to the form for identification; and `id`, which provides a unique identifier for styling or scripting. Other attributes include `required` to make a field mandatory, `placeholder` for displaying a hint in input fields, and `value` to pre-fill input fields with default data. Proper use of these attributes enhances form functionality and user experience.",
  code: `<html>
    <head>
      <title>HTML Form Attributes</title>
    </head>
    <body>
      <h1>Registration Form</h1>
      <form action="/register" method="post" name="registrationForm" id="regForm">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Enter username" required>
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter password" required>
        <br>
        <button type="submit">Register</button>
      </form>
    </body>
  </html>`
},
    "HTML Form Elements": {
  title: "HTML Form Elements",
  content: "HTML forms consist of various elements that allow users to enter and submit data. Key form elements include: `<input>`, `<textarea>`, `<select>`, and `<button>`. The `<input>` element is used for various types of user input such as text, password, and checkboxes. The `<textarea>` element provides a multi-line text input area. The `<select>` element creates a dropdown menu for selecting options. The `<button>` element is used to create clickable buttons within the form. These elements, combined with form attributes, enable the creation of interactive and user-friendly forms on web pages.",
  code: `<html>
    <head>
      <title>HTML Form Elements</title>
    </head>
    <body>
      <h1>Feedback Form</h1>
      <form action="/submit-feedback" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br>
        <label for="comments">Comments:</label>
        <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
        <br>
        <label for="rating">Rating:</label>
        <select id="rating" name="rating">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br>
        <button type="submit">Submit Feedback</button>
      </form>
    </body>
  </html>`
},

"HTML Input Types": {
  title: "HTML Input Types",
  content: "The `<input>` element supports various types of user input through the `type` attribute. Some common input types include `text` for single-line text inputs, `password` for password fields, `email` for email addresses, `number` for numeric input, `checkbox` for checkboxes, `radio` for radio buttons, `date` for selecting dates, and `file` for file uploads. Each input type provides different functionality and validation to enhance user experience and ensure correct data submission.",
  code: `<html>
    <head>
      <title>HTML Input Types</title>
    </head>
    <body>
      <h1>Form with Various Input Types</h1>
      <form action="/submit-form" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br>
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" min="0" max="120">
        <br>
        <label for="subscribe">Subscribe:</label>
        <input type="checkbox" id="subscribe" name="subscribe">
        <br>
        <label>Gender:</label>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label>
        <br>
        <label for="birthdate">Birthdate:</label>
        <input type="date" id="birthdate" name="birthdate">
        <br>
        <label for="profile-picture">Profile Picture:</label>
        <input type="file" id="profile-picture" name="profile-picture">
        <br>
        <button type="submit">Submit</button>
      </form>
    </body>
  </html>`
},

"HTML Input Attributes": {
  title: "HTML Input Attributes",
  content: "HTML input elements can be customized using various attributes to control their behavior and appearance. Key attributes include `type`, which defines the type of input; `name`, which provides a name for the input, used when submitting the form; `id`, which gives a unique identifier for styling or scripting; `placeholder`, which displays a hint or example in the input field; `value`, which sets the default value; `required`, which makes the input mandatory; and `maxlength`, which limits the number of characters. These attributes help in creating well-defined and user-friendly forms.",
  code: `<html>
    <head>
      <title>HTML Input Attributes</title>
    </head>
    <body>
      <h1>Form with Input Attributes</h1>
      <form action="/submit" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" required maxlength="20">
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required>
        <br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required>
        <br>
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" min="1" max="120">
        <br>
        <label for="bio">Biography:</label>
        <textarea id="bio" name="bio" rows="4" cols="50" placeholder="Tell us about yourself"></textarea>
        <br>
        <button type="submit">Submit</button>
      </form>
    </body>
  </html>`
},

"Input Form Attributes": {
  title: "Input Form Attributes",
  content: "Input form attributes control various aspects of form behavior and data handling. These attributes include `action`, which specifies the URL where the form data is sent; `method`, which determines the HTTP method (GET or POST) for form submission; `enctype`, which defines the encoding type for form data (e.g., `application/x-www-form-urlencoded`, `multipart/form-data`); and `target`, which specifies where to display the response (e.g., `_blank` for a new tab). These attributes are crucial for ensuring that form data is properly processed and handled by the server.",
  code: `<html>
    <head>
      <title>Input Form Attributes</title>
    </head>
    <body>
      <h1>Form with Input Attributes</h1>
      <form action="/submit" method="post" enctype="multipart/form-data" target="_blank">
        <label for="file-upload">Upload File:</label>
        <input type="file" id="file-upload" name="file-upload">
        <br>
        <label for="description">Description:</label>
        <textarea id="description" name="description" rows="4" cols="50"></textarea>
        <br>
        <button type="submit">Submit</button>
      </form>
    </body>
  </html>`
}
  };