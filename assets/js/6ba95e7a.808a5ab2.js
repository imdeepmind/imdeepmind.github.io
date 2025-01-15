"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[7879],{61184:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>t});const r=JSON.parse('{"id":"frameworks-libraries/flask/flask-app","title":"Flask App and app.run","description":"In Flask, the application object (Flask) is the central object that represents the web application. It acts as the foundation for configuring, routing, and running the application. When you create a Flask app, you\'re essentially creating an instance of the Flask class, which serves as the main entry point for your application.","source":"@site/docs/frameworks-libraries/flask/flask-app.md","sourceDirName":"frameworks-libraries/flask","slug":"/frameworks-libraries/flask/flask-app","permalink":"/docs/frameworks-libraries/flask/flask-app","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/frameworks-libraries/flask/flask-app.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1736345108000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Web Server Gateway Interface (WSGI)","permalink":"/docs/frameworks-libraries/flask/wsgi"},"next":{"title":"Routes","permalink":"/docs/frameworks-libraries/flask/routing"}}');var i=s(74848),l=s(28453);const a={sidebar_position:3},o="Flask App and app.run",d={},t=[{value:"Creating a Flask App",id:"creating-a-flask-app",level:2},{value:"Key Responsibilities of the Flask App Object",id:"key-responsibilities-of-the-flask-app-object",level:2},{value:"Anatomy of the <code>Flask</code> Class",id:"anatomy-of-the-flask-class",level:2},{value:"The <code>app.run()</code> Method",id:"the-apprun-method",level:2},{value:"Syntax of <code>app.run</code>",id:"syntax-of-apprun",level:3},{value:"Parameters of <code>app.run</code>",id:"parameters-of-apprun",level:3},{value:"Example of <code>app.run</code>",id:"example-of-apprun",level:3},{value:"How <code>app.run</code> Works",id:"how-apprun-works",level:3},{value:"Key Features of the Development Server",id:"key-features-of-the-development-server",level:3},{value:"When Not to Use <code>app.run</code>",id:"when-not-to-use-apprun",level:3},{value:"Common Scenarios and Examples",id:"common-scenarios-and-examples",level:2},{value:"Running the App on a Custom Host and Port",id:"running-the-app-on-a-custom-host-and-port",level:3},{value:"Running in Debug Mode",id:"running-in-debug-mode",level:3},{value:"Running Without Hardcoding Configuration",id:"running-without-hardcoding-configuration",level:3},{value:"Using Environment Variables with <code>.env</code>",id:"using-environment-variables-with-env",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsxs)(n.h1,{id:"flask-app-and-apprun",children:["Flask App and ",(0,i.jsx)(n.code,{children:"app.run"})]})}),"\n",(0,i.jsxs)(n.p,{children:["In Flask, the ",(0,i.jsx)(n.strong,{children:"application object"})," (",(0,i.jsx)(n.code,{children:"Flask"}),") is the central object that represents the web application. It acts as the foundation for configuring, routing, and running the application. When you create a Flask app, you're essentially creating an instance of the ",(0,i.jsx)(n.code,{children:"Flask"})," class, which serves as the main entry point for your application."]}),"\n",(0,i.jsx)(n.h2,{id:"creating-a-flask-app",children:"Creating a Flask App"}),"\n",(0,i.jsxs)(n.p,{children:["To create a Flask application, you instantiate the ",(0,i.jsx)(n.code,{children:"Flask"})," class. Here's the basic structure:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from flask import Flask\r\n\r\n# Create a Flask app instance\r\napp = Flask(__name__)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"key-responsibilities-of-the-flask-app-object",children:"Key Responsibilities of the Flask App Object"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Routing"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The app object manages URL routing, mapping URLs to specific functions (called view functions)."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"@app.route('/')\r\ndef home():\r\n    return \"Welcome to my Flask app!\"\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Configuration"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The app object stores the application's configuration settings (e.g., debugging mode, secret keys)."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"app.config['DEBUG'] = True\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Middleware and Extensions"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Middleware (like WSGI middleware) and extensions (e.g., Flask-SQLAlchemy, Flask-Login) integrate with the app object."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Error Handling"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Flask allows you to define custom error handlers (e.g., for 404 errors) using the app object."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Request Handling"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The app object processes incoming HTTP requests and delegates them to the appropriate view functions."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"anatomy-of-the-flask-class",children:["Anatomy of the ",(0,i.jsx)(n.code,{children:"Flask"})," Class"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Flask"})," class has several attributes and methods that make it the core of a Flask application. Here are some key attributes:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"app.config"})}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["A dictionary-like object for storing configuration values (e.g., ",(0,i.jsx)(n.code,{children:"DEBUG"}),", ",(0,i.jsx)(n.code,{children:"SECRET_KEY"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"app.config['DEBUG'] = True\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"app.url_map"})}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Stores the URL-to-function mapping."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"print(app.url_map)\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.code,{children:"app.before_request"}),", ",(0,i.jsx)(n.code,{children:"app.after_request"}),", ",(0,i.jsx)(n.code,{children:"app.teardown_request"})]}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Hooks that allow you to define functions to be executed before or after a request is processed."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"the-apprun-method",children:["The ",(0,i.jsx)(n.code,{children:"app.run()"})," Method"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"app.run()"})," method is used to run the Flask application. It launches the ",(0,i.jsx)(n.strong,{children:"development server"}),", which is used for testing and debugging during development. When you're ready to deploy your app to production, you typically use a production-ready WSGI server like Gunicorn, uWSGI, or Waitress instead of ",(0,i.jsx)(n.code,{children:"app.run()"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h3,{id:"syntax-of-apprun",children:["Syntax of ",(0,i.jsx)(n.code,{children:"app.run"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"app.run(\r\n    host=None,\r\n    port=None,\r\n    debug=None,\r\n    load_dotenv=True,\r\n    **options\r\n)\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"parameters-of-apprun",children:["Parameters of ",(0,i.jsx)(n.code,{children:"app.run"})]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"host"})}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Specifies the hostname or IP address on which the server should run."}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"'127.0.0.1'"})," (localhost)."]}),"\n",(0,i.jsxs)(n.li,{children:["To make the app accessible on the network, set it to ",(0,i.jsx)(n.code,{children:"'0.0.0.0'"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"app.run(host='0.0.0.0')\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"port"})}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Specifies the port number on which the server should listen."}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"5000"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"app.run(port=8080)\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"debug"})}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Enables or disables the debug mode."}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"None"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["When set to ",(0,i.jsx)(n.code,{children:"True"}),", it:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Enables the ",(0,i.jsx)(n.strong,{children:"debugger"}),", which shows a detailed error page when an exception occurs."]}),"\n",(0,i.jsxs)(n.li,{children:["Enables the ",(0,i.jsx)(n.strong,{children:"reloader"}),", which restarts the server whenever code changes are detected."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"app.run(debug=True)\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"load_dotenv"})}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"True"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Automatically loads environment variables from a ",(0,i.jsx)(n.code,{children:".env"})," file in the project directory."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["**",(0,i.jsx)(n.code,{children:"**options"}),"**:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Passes additional options to the underlying WSGI server."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"example-of-apprun",children:["Example of ",(0,i.jsx)(n.code,{children:"app.run"})]}),"\n",(0,i.jsx)(n.p,{children:"Here's a complete example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from flask import Flask\r\n\r\napp = Flask(__name__)\r\n\r\n@app.route('/')\r\ndef home():\r\n    return \"Hello, Flask!\"\r\n\r\nif __name__ == '__main__':\r\n    # Run the app on a specific host and port in debug mode\r\n    app.run(host='0.0.0.0', port=5000, debug=True)\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"how-apprun-works",children:["How ",(0,i.jsx)(n.code,{children:"app.run"})," Works"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Development Server"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"app.run"})," method starts Flask's built-in development server (based on Werkzeug)."]}),"\n",(0,i.jsx)(n.li,{children:"This server is lightweight and meant for development, not for production."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Request Handling"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The server listens for HTTP requests on the specified host and port."}),"\n",(0,i.jsx)(n.li,{children:"When a request is received, the server passes it to the Flask app object for routing and processing."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Debugging Features"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The debug mode allows developers to catch and diagnose errors during development."}),"\n",(0,i.jsx)(n.li,{children:"The interactive debugger provides a stack trace and lets you inspect variables."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"key-features-of-the-development-server",children:"Key Features of the Development Server"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Hot Reloading"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The development server reloads automatically whenever code changes are detected. This saves time during development."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Debug Toolbar"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When debug mode is enabled, Flask provides an interactive debugger in the browser, allowing you to inspect exceptions and errors."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"when-not-to-use-apprun",children:["When Not to Use ",(0,i.jsx)(n.code,{children:"app.run"})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"app.run()"})," method is not suitable for production environments because:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"It uses a single-threaded server, which cannot handle high traffic or concurrent requests efficiently."}),"\n",(0,i.jsx)(n.li,{children:"It lacks advanced features like load balancing, security optimizations, and scalability."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Instead, in production, use a WSGI server like:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Gunicorn"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"gunicorn app:app\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"uWSGI"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"uwsgi --http :5000 --wsgi-file app.py --callable app\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"common-scenarios-and-examples",children:"Common Scenarios and Examples"}),"\n",(0,i.jsx)(n.h3,{id:"running-the-app-on-a-custom-host-and-port",children:"Running the App on a Custom Host and Port"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"if __name__ == '__main__':\r\n    app.run(host='0.0.0.0', port=8000)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["This makes the app accessible on all IP addresses (",(0,i.jsx)(n.code,{children:"0.0.0.0"}),") and listens on port 8000."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"running-in-debug-mode",children:"Running in Debug Mode"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"if __name__ == '__main__':\r\n    app.run(debug=True)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This enables the debug features, including the interactive debugger and automatic code reloading."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"running-without-hardcoding-configuration",children:"Running Without Hardcoding Configuration"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"if __name__ == '__main__':\r\n    import os\r\n    app.run(\r\n        host=os.getenv('FLASK_RUN_HOST', '127.0.0.1'),\r\n        port=int(os.getenv('FLASK_RUN_PORT', 5000)),\r\n        debug=bool(os.getenv('FLASK_DEBUG', True))\r\n    )\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Here, environment variables are used to configure the host, port, and debug mode."}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"using-environment-variables-with-env",children:["Using Environment Variables with ",(0,i.jsx)(n.code,{children:".env"})]}),"\n",(0,i.jsxs)(n.p,{children:["Flask can automatically load settings from a ",(0,i.jsx)(n.code,{children:".env"})," file if ",(0,i.jsx)(n.code,{children:"load_dotenv=True"})," (default)."]}),"\n",(0,i.jsxs)(n.p,{children:["Example ",(0,i.jsx)(n.code,{children:".env"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"FLASK_RUN_HOST=0.0.0.0\r\nFLASK_RUN_PORT=8000\r\nFLASK_DEBUG=True\n"})}),"\n",(0,i.jsx)(n.p,{children:"When running the app:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python app.py\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Flask reads the ",(0,i.jsx)(n.code,{children:".env"})," file and applies the settings automatically."]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var r=s(96540);const i={},l=r.createContext(i);function a(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);