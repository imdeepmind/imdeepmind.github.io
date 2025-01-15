"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[3516],{43213:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"frameworks-libraries/flask/routing","title":"Routes","description":"In Flask, routes are the URLs or endpoints that define how a web application responds to client requests. A route maps a specific URL to a Python function (known as a view function), which processes the request and generates a response. Routes are a fundamental part of Flask\'s design, enabling developers to define the behavior of their web application.","source":"@site/docs/frameworks-libraries/flask/routing.md","sourceDirName":"frameworks-libraries/flask","slug":"/frameworks-libraries/flask/routing","permalink":"/docs/frameworks-libraries/flask/routing","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/frameworks-libraries/flask/routing.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1736345108000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Flask App and app.run","permalink":"/docs/frameworks-libraries/flask/flask-app"},"next":{"title":"Templates and Jinja2","permalink":"/docs/frameworks-libraries/flask/templates-and-jinja"}}');var i=r(74848),o=r(28453);const t={sidebar_position:4},l="Routes",a={},d=[{value:"What are Routes?",id:"what-are-routes",level:2},{value:"The <code>@app.route</code> Decorator",id:"the-approute-decorator",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Key Features of Flask Routes",id:"key-features-of-flask-routes",level:2},{value:"Basic Routes",id:"basic-routes",level:3},{value:"Dynamic Routing",id:"dynamic-routing",level:3},{value:"HTTP Methods",id:"http-methods",level:3},{value:"Route Options",id:"route-options",level:3},{value:"<code>strict_slashes</code>",id:"strict_slashes",level:4},{value:"Redirects with <code>@app.route</code>",id:"redirects-with-approute",level:3},{value:"Using <code>url_for</code> to Build URLs",id:"using-url_for-to-build-urls",level:3},{value:"Route Aliases",id:"route-aliases",level:3},{value:"Error Handling in Routes",id:"error-handling-in-routes",level:3},{value:"Best Practices for Defining Routes",id:"best-practices-for-defining-routes",level:2},{value:"Advanced Routing: Flask Blueprints",id:"advanced-routing-flask-blueprints",level:2},{value:"Example of a Complete Flask Routing Application",id:"example-of-a-complete-flask-routing-application",level:2},{value:"Flask Views",id:"flask-views",level:2},{value:"Defining Views in Flask",id:"defining-views-in-flask",level:3},{value:"Types of Views in Flask",id:"types-of-views-in-flask",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"routes",children:"Routes"})}),"\n",(0,i.jsxs)(n.p,{children:["In Flask, ",(0,i.jsx)(n.strong,{children:"routes"})," are the URLs or endpoints that define how a web application responds to client requests. A route maps a specific URL to a Python function (known as a ",(0,i.jsx)(n.strong,{children:"view function"}),"), which processes the request and generates a response. Routes are a fundamental part of Flask's design, enabling developers to define the behavior of their web application."]}),"\n",(0,i.jsx)(n.h2,{id:"what-are-routes",children:"What are Routes?"}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.strong,{children:"route"})," in Flask is essentially a mapping between a URL and a function. The function is executed whenever a request is made to the associated URL. This URL-to-function mapping is maintained by Flask's application object."]}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from flask import Flask\r\n\r\napp = Flask(__name__)\r\n\r\n@app.route('/')\r\ndef home():\r\n    return \"Welcome to the homepage!\"\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the example above, the route ",(0,i.jsx)(n.code,{children:"'/'"})," maps to the ",(0,i.jsx)(n.code,{children:"home"})," function. When a client accesses the root URL (",(0,i.jsx)(n.code,{children:"/"}),"), the ",(0,i.jsx)(n.code,{children:"home"})," function is executed, and its return value is sent as the HTTP response."]}),"\n",(0,i.jsxs)(n.h2,{id:"the-approute-decorator",children:["The ",(0,i.jsx)(n.code,{children:"@app.route"})," Decorator"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"@app.route"})," decorator is used to define a route in Flask. It binds a URL to a Python function. This decorator is a part of the Flask ",(0,i.jsx)(n.code,{children:"app"})," object."]}),"\n",(0,i.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"@app.route(route, methods=['GET'], **options)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"route"})}),": The URL path (e.g., ",(0,i.jsx)(n.code,{children:"/home"}),", ",(0,i.jsx)(n.code,{children:"/about"}),", ",(0,i.jsx)(n.code,{children:"/user/<id>"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"methods"})}),": Specifies the HTTP methods allowed for this route (default: ",(0,i.jsx)(n.code,{children:"['GET']"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"options"})}),": Additional options for the route, like ",(0,i.jsx)(n.code,{children:"strict_slashes"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"key-features-of-flask-routes",children:"Key Features of Flask Routes"}),"\n",(0,i.jsx)(n.h3,{id:"basic-routes",children:"Basic Routes"}),"\n",(0,i.jsx)(n.p,{children:"A basic route responds to a specific URL. For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"@app.route('/')\r\ndef home():\r\n    return \"Hello, Flask!\"\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["When a client accesses the root URL ",(0,i.jsx)(n.code,{children:"/"}),", the ",(0,i.jsx)(n.code,{children:"home"})," function is executed."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"dynamic-routing",children:"Dynamic Routing"}),"\n",(0,i.jsx)(n.p,{children:"Dynamic routes allow the inclusion of variables in the URL. These variables can be passed to the view function as arguments."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Syntax for Dynamic Routing"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"@app.route('/<variable_name>')\r\ndef function_name(variable_name):\r\n    ...\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"@app.route('/user/<username>')\r\ndef show_user(username):\r\n    return f\"Hello, {username}!\"\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["URL ",(0,i.jsx)(n.code,{children:"/user/abhishek"}),' will respond with "Hello, abhishek!"']}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Type Converters"}),":\r\nFlask supports type converters to enforce variable types in dynamic routes:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<string>"}),": Default, matches strings."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<int>"}),": Matches integers."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<float>"}),": Matches floating-point numbers."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<path>"}),": Matches a string containing slashes (",(0,i.jsx)(n.code,{children:"/"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<uuid>"}),": Matches a UUID string."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example with Type Converters"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"@app.route('/product/<int:product_id>')\r\ndef show_product(product_id):\r\n    return f\"Product ID: {product_id}\"\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"http-methods",children:"HTTP Methods"}),"\n",(0,i.jsxs)(n.p,{children:["Routes can specify the allowed HTTP methods (e.g., ",(0,i.jsx)(n.code,{children:"GET"}),", ",(0,i.jsx)(n.code,{children:"POST"}),", ",(0,i.jsx)(n.code,{children:"PUT"}),", ",(0,i.jsx)(n.code,{children:"DELETE"}),")."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Specifying Methods"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"@app.route('/submit', methods=['POST'])\r\ndef submit():\r\n    return \"Form submitted!\"\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Handling Multiple Methods"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"@app.route('/form', methods=['GET', 'POST'])\r\ndef form():\r\n    if request.method == 'POST':\r\n        return \"Form submitted!\"\r\n    return \"Form page\"\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"route-options",children:"Route Options"}),"\n",(0,i.jsx)(n.h4,{id:"strict_slashes",children:(0,i.jsx)(n.code,{children:"strict_slashes"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Controls whether Flask treats routes with or without trailing slashes differently."}),"\n",(0,i.jsxs)(n.li,{children:["By default, Flask is ",(0,i.jsx)(n.strong,{children:"not strict"})," with slashes."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"@app.route('/about/', strict_slashes=True)\r\ndef about():\r\n    return \"About page\"\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Accessing ",(0,i.jsx)(n.code,{children:"/about"})," will result in a ",(0,i.jsx)(n.code,{children:"404 Not Found"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"redirects-with-approute",children:["Redirects with ",(0,i.jsx)(n.code,{children:"@app.route"})]}),"\n",(0,i.jsx)(n.p,{children:"When two routes lead to the same function, Flask can redirect users from one route to another."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"@app.route('/old-home')\r\ndef old_home():\r\n    return redirect('/home')\r\n\r\n@app.route('/home')\r\ndef home():\r\n    return \"Welcome to the homepage!\"\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the above example, accessing ",(0,i.jsx)(n.code,{children:"/old-home"})," redirects the client to ",(0,i.jsx)(n.code,{children:"/home"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"using-url_for-to-build-urls",children:["Using ",(0,i.jsx)(n.code,{children:"url_for"})," to Build URLs"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"url_for"})," function generates URLs dynamically using the name of the view function. It is particularly useful when you want to avoid hardcoding URLs in templates or code."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from flask import url_for\r\n\r\n@app.route('/profile/<username>')\r\ndef profile(username):\r\n    return f\"Profile of {username}\"\r\n\r\n@app.route('/dashboard')\r\ndef dashboard():\r\n    profile_url = url_for('profile', username='abhishek')\r\n    return f\"Go to your profile: {profile_url}\"\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"url_for"})," function generates ",(0,i.jsx)(n.code,{children:"/profile/abhishek"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"route-aliases",children:"Route Aliases"}),"\n",(0,i.jsx)(n.p,{children:"You can define multiple routes that map to the same view function."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"@app.route('/')\r\n@app.route('/home')\r\ndef home():\r\n    return \"Welcome to the homepage!\"\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Both ",(0,i.jsx)(n.code,{children:"/"})," and ",(0,i.jsx)(n.code,{children:"/home"})," invoke the ",(0,i.jsx)(n.code,{children:"home"})," function."]}),"\n",(0,i.jsx)(n.h3,{id:"error-handling-in-routes",children:"Error Handling in Routes"}),"\n",(0,i.jsxs)(n.p,{children:["Custom error handlers can be defined for specific HTTP status codes (like ",(0,i.jsx)(n.code,{children:"404"})," or ",(0,i.jsx)(n.code,{children:"500"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'@app.errorhandler(404)\r\ndef not_found(error):\r\n    return "Page not found!", 404\n'})}),"\n",(0,i.jsx)(n.h2,{id:"best-practices-for-defining-routes",children:"Best Practices for Defining Routes"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Use Descriptive Names"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Keep your routes descriptive and meaningful."}),"\n",(0,i.jsxs)(n.li,{children:["Example: Use ",(0,i.jsx)(n.code,{children:"/user/profile"})," instead of ",(0,i.jsx)(n.code,{children:"/up"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Keep URLs Consistent"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use consistent conventions for case and separators (e.g., ",(0,i.jsx)(n.code,{children:"snake_case"})," or ",(0,i.jsx)(n.code,{children:"kebab-case"}),")."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["Use ",(0,i.jsx)(n.code,{children:"url_for"})," Instead of Hardcoding URLs"]}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Always use ",(0,i.jsx)(n.code,{children:"url_for"})," to generate URLs dynamically."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Organize Routes for Scalability"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.strong,{children:"blueprints"})," for modular applications when you have many routes."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Limit HTTP Methods"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Restrict HTTP methods to only those required for a route."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"advanced-routing-flask-blueprints",children:"Advanced Routing: Flask Blueprints"}),"\n",(0,i.jsxs)(n.p,{children:["As your application grows, it can become unwieldy to manage all routes in a single file. Flask provides ",(0,i.jsx)(n.strong,{children:"blueprints"})," for modular and scalable applications."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example of a Blueprint"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from flask import Blueprint\r\n\r\nuser_bp = Blueprint('user', __name__)\r\n\r\n@user_bp.route('/profile/<username>')\r\ndef profile(username):\r\n    return f\"User profile: {username}\"\r\n\r\napp.register_blueprint(user_bp, url_prefix='/user')\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The above blueprint defines a route ",(0,i.jsx)(n.code,{children:"/profile/<username>"})," under the ",(0,i.jsx)(n.code,{children:"/user"})," prefix, resulting in ",(0,i.jsx)(n.code,{children:"/user/profile/<username>"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example-of-a-complete-flask-routing-application",children:"Example of a Complete Flask Routing Application"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from flask import Flask, request, url_for\r\n\r\napp = Flask(__name__)\r\n\r\n# Basic route\r\n@app.route('/')\r\ndef home():\r\n    return \"Welcome to Flask!\"\r\n\r\n# Dynamic route\r\n@app.route('/user/<username>')\r\ndef show_user(username):\r\n    return f\"Hello, {username}!\"\r\n\r\n# Route with type converters\r\n@app.route('/post/<int:post_id>')\r\ndef show_post(post_id):\r\n    return f\"Post ID: {post_id}\"\r\n\r\n# Route with multiple methods\r\n@app.route('/form', methods=['GET', 'POST'])\r\ndef form():\r\n    if request.method == 'POST':\r\n        return \"Form submitted!\"\r\n    return \"Form page\"\r\n\r\n# Using url_for\r\n@app.route('/generate-url')\r\ndef generate_url():\r\n    profile_url = url_for('show_user', username='abhishek')\r\n    return f\"Generated URL: {profile_url}\"\r\n\r\n# Error handler\r\n@app.errorhandler(404)\r\ndef not_found(error):\r\n    return \"Page not found!\", 404\r\n\r\nif __name__ == '__main__':\r\n    app.run(debug=True)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"flask-views",children:"Flask Views"}),"\n",(0,i.jsxs)(n.p,{children:["In Flask, ",(0,i.jsx)(n.strong,{children:"views"})," are functions that handle incoming HTTP requests and return responses. A view function is associated with a specific route (URL pattern) in the web application, and it is executed when the associated route is accessed. The primary role of a view is to process data, interact with the database or other services, and return the appropriate HTTP response to the client."]}),"\n",(0,i.jsx)(n.p,{children:"Flask views can return various types of responses, including HTML, JSON, redirect responses, or even custom responses. The view functions in Flask are typically defined using Python's standard function syntax."}),"\n",(0,i.jsx)(n.h3,{id:"defining-views-in-flask",children:"Defining Views in Flask"}),"\n",(0,i.jsxs)(n.p,{children:["In Flask, views are linked to URLs via the ",(0,i.jsx)(n.code,{children:"@app.route()"})," decorator, which maps a route to a specific function."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from flask import Flask\r\n\r\napp = Flask(__name__)\r\n\r\n@app.route('/')\r\ndef home():\r\n    return 'Hello, World!'  # Returns a simple response\r\n\r\nif __name__ == '__main__':\r\n    app.run(debug=True)\n"})}),"\n",(0,i.jsx)(n.p,{children:"In this example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The route ",(0,i.jsx)(n.code,{children:"/"})," is associated with the ",(0,i.jsx)(n.code,{children:"home()"})," function."]}),"\n",(0,i.jsxs)(n.li,{children:["When a user accesses the root URL (",(0,i.jsx)(n.code,{children:"/"}),"), Flask calls the ",(0,i.jsx)(n.code,{children:"home()"})," function, which returns the string ",(0,i.jsx)(n.code,{children:"'Hello, World!'"})," as an HTTP response."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"types-of-views-in-flask",children:"Types of Views in Flask"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Basic Views"}),": Return static or dynamic content (HTML, text, JSON)."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"@app.route('/about')\r\ndef about():\r\n    return 'This is the About page.'\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Views with Variables"}),": Routes can have variables that are passed to view functions."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"@app.route('/user/<username>')\r\ndef show_user_profile(username):\r\n    return f'User: {username}'\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Views with HTTP Methods"}),": You can specify which HTTP methods a view should handle (GET, POST, etc.)."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"@app.route('/submit', methods=['POST'])\r\ndef submit():\r\n    return 'Form Submitted'\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Views with Templates"}),": Flask views can render HTML templates using the ",(0,i.jsx)(n.strong,{children:"Jinja2"})," template engine."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from flask import render_template\r\n\r\n@app.route('/home')\r\ndef home():\r\n    return render_template('home.html', username='John')\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Error Views"}),": Flask allows you to handle HTTP errors (e.g., 404 Not Found) using custom views."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"@app.errorhandler(404)\r\ndef page_not_found(e):\r\n    return 'Page not found!', 404\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>l});var s=r(96540);const i={},o=s.createContext(i);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);