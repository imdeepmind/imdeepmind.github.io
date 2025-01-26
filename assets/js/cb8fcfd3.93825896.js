"use strict";(self.webpackChunkimdeepmind=self.webpackChunkimdeepmind||[]).push([[7642],{93082:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"frameworks-libraries/django/model-orm","title":"Models and ORM","description":"Django\'s Object-Relational Mapping (ORM) system allows developers to interact with the database using Python code, without having to write SQL queries manually. The ORM works by mapping Python classes to database tables, allowing the creation, retrieval, update, and deletion (CRUD) of data.","source":"@site/docs/frameworks-libraries/django/model-orm.md","sourceDirName":"frameworks-libraries/django","slug":"/frameworks-libraries/django/model-orm","permalink":"/docs/frameworks-libraries/django/model-orm","draft":false,"unlisted":false,"editUrl":"https://github.com/imdeepmind/imdeepmind.github.io/blob/main/docs/frameworks-libraries/django/model-orm.md","tags":[],"version":"current","lastUpdatedBy":"Abhishek Chatterjee","lastUpdatedAt":1735581142000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Project Structure","permalink":"/docs/frameworks-libraries/django/project-structure"},"next":{"title":"Serializers","permalink":"/docs/frameworks-libraries/django/serializers"}}');var t=o(74848),l=o(28453);const s={sidebar_position:5},i="Models and ORM",r={},d=[{value:"Defining Models and Fields",id:"defining-models-and-fields",level:2},{value:"Example:",id:"example",level:3},{value:"Common Field Types:",id:"common-field-types",level:3},{value:"Additional Options for Fields:",id:"additional-options-for-fields",level:3},{value:"QuerySets and Managers",id:"querysets-and-managers",level:2},{value:"Example of QuerySets:",id:"example-of-querysets",level:3},{value:"Custom Manager:",id:"custom-manager",level:3},{value:"Relationships: ForeignKey, OneToOneField, ManyToManyField",id:"relationships-foreignkey-onetoonefield-manytomanyfield",level:2},{value:"ForeignKey (One-to-Many Relationship):",id:"foreignkey-one-to-many-relationship",level:3},{value:"OneToOneField (One-to-One Relationship):",id:"onetoonefield-one-to-one-relationship",level:3},{value:"ManyToManyField (Many-to-Many Relationship):",id:"manytomanyfield-many-to-many-relationship",level:3},{value:"Common QuerySet Methods: <code>filter()</code>, <code>exclude()</code>, <code>annotate()</code>, <code>aggregate()</code>, etc.",id:"common-queryset-methods-filter-exclude-annotate-aggregate-etc",level:2},{value:"filter()",id:"filter",level:3},{value:"exclude()",id:"exclude",level:3},{value:"annotate()",id:"annotate",level:3},{value:"aggregate()",id:"aggregate",level:3},{value:"order_by()",id:"order_by",level:3},{value:"get()",id:"get",level:3},{value:"Model Inheritance",id:"model-inheritance",level:2},{value:"Abstract Base Classes:",id:"abstract-base-classes",level:3},{value:"Multi-table Inheritance:",id:"multi-table-inheritance",level:3},{value:"Transactions and Atomicity",id:"transactions-and-atomicity",level:2},{value:"Atomic Transactions:",id:"atomic-transactions",level:3},{value:"Example of Atomic Block:",id:"example-of-atomic-block",level:3},{value:"<code>atomic()</code>:",id:"atomic",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"models-and-orm",children:"Models and ORM"})}),"\n",(0,t.jsxs)(n.p,{children:["Django's ",(0,t.jsx)(n.strong,{children:"Object-Relational Mapping (ORM)"})," system allows developers to interact with the database using Python code, without having to write SQL queries manually. The ORM works by mapping Python classes to database tables, allowing the creation, retrieval, update, and deletion (CRUD) of data."]}),"\n",(0,t.jsx)(n.h2,{id:"defining-models-and-fields",children:"Defining Models and Fields"}),"\n",(0,t.jsxs)(n.p,{children:["In Django, a ",(0,t.jsx)(n.strong,{children:"model"})," is a Python class that defines the structure of your database table. The class inherits from ",(0,t.jsx)(n.code,{children:"django.db.models.Model"}),", and each attribute of the class corresponds to a field in the table."]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from django.db import models\n\nclass Book(models.Model):\n    title = models.CharField(max_length=100)  # A string field (VARCHAR)\n    author = models.CharField(max_length=100)  # A string field (VARCHAR)\n    published_date = models.DateField()  # A Date field (DATE)\n    price = models.DecimalField(max_digits=5, decimal_places=2)  # A Decimal field (numeric values)\n    created_at = models.DateTimeField(auto_now_add=True)  # Auto timestamp for creation\n    updated_at = models.DateTimeField(auto_now=True)  # Auto timestamp for last update\n\n    def __str__(self):\n        return self.title\n"})}),"\n",(0,t.jsx)(n.h3,{id:"common-field-types",children:"Common Field Types:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"CharField"}),": Used for short text values like names or titles (requires ",(0,t.jsx)(n.code,{children:"max_length"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"IntegerField"}),": Used for integer values."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"DateField"}),": Stores date values (without time)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"DateTimeField"}),": Stores date and time values."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"DecimalField"}),": Used for fixed-point decimal numbers (e.g., prices)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"BooleanField"}),": Stores ",(0,t.jsx)(n.code,{children:"True"})," or ",(0,t.jsx)(n.code,{children:"False"})," values."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"TextField"}),": For large text data (unlimited length)."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"additional-options-for-fields",children:"Additional Options for Fields:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"null=True"})," \u2013 Allows database to store ",(0,t.jsx)(n.code,{children:"NULL"})," (useful for optional fields)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"blank=True"})," \u2013 Allows form validation to accept empty values."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"default="})," \u2013 Assign a default value to the field."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"querysets-and-managers",children:"QuerySets and Managers"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"QuerySet"})," is a collection of database queries, and ",(0,t.jsx)(n.strong,{children:"Managers"})," are the interface through which QuerySets are accessed."]}),"\n",(0,t.jsx)(n.h3,{id:"example-of-querysets",children:"Example of QuerySets:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# Fetch all Book objects\nbooks = Book.objects.all()\n\n# Filter books by author\nbooks_by_author = Book.objects.filter(author='John Doe')\n\n# Get a single book by title\nbook = Book.objects.get(title='Django for Beginners')\n\n# Exclude books that are priced over $50\ncheap_books = Book.objects.exclude(price__gt=50)\n\n# Retrieve books sorted by price\nsorted_books = Book.objects.all().order_by('price')\n"})}),"\n",(0,t.jsx)(n.h3,{id:"custom-manager",children:"Custom Manager:"}),"\n",(0,t.jsx)(n.p,{children:"You can define custom managers to encapsulate frequently used queries:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class BookManager(models.Manager):\n    def published_this_year(self):\n        return self.filter(published_date__year=2024)\n\nclass Book(models.Model):\n    title = models.CharField(max_length=100)\n    published_date = models.DateField()\n\n    # Custom manager\n    books = BookManager()\n\n# Usage\nbooks_published_this_year = Book.books.published_this_year()\n"})}),"\n",(0,t.jsx)(n.h2,{id:"relationships-foreignkey-onetoonefield-manytomanyfield",children:"Relationships: ForeignKey, OneToOneField, ManyToManyField"}),"\n",(0,t.jsxs)(n.p,{children:["Django allows you to define relationships between models. There are three main types of relationships: ",(0,t.jsx)(n.strong,{children:"One-to-Many"}),", ",(0,t.jsx)(n.strong,{children:"One-to-One"}),", and ",(0,t.jsx)(n.strong,{children:"Many-to-Many"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"foreignkey-one-to-many-relationship",children:"ForeignKey (One-to-Many Relationship):"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"ForeignKey"})," defines a many-to-one relationship, where one object can be associated with multiple other objects."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class Author(models.Model):\n    name = models.CharField(max_length=100)\n\nclass Book(models.Model):\n    title = models.CharField(max_length=100)\n    author = models.ForeignKey(Author, on_delete=models.CASCADE)\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"on_delete=models.CASCADE"}),": Specifies the behavior when the related object is deleted (e.g., delete all related books when an author is deleted)."]}),"\n",(0,t.jsx)(n.h3,{id:"onetoonefield-one-to-one-relationship",children:"OneToOneField (One-to-One Relationship):"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"OneToOneField"})," defines a one-to-one relationship, where each object is associated with exactly one other object."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class Author(models.Model):\n    name = models.CharField(max_length=100)\n\nclass AuthorProfile(models.Model):\n    author = models.OneToOneField(Author, on_delete=models.CASCADE)\n    bio = models.TextField()\n"})}),"\n",(0,t.jsx)(n.h3,{id:"manytomanyfield-many-to-many-relationship",children:"ManyToManyField (Many-to-Many Relationship):"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"ManyToManyField"})," defines a many-to-many relationship, where each object can be associated with multiple other objects."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class Author(models.Model):\n    name = models.CharField(max_length=100)\n\nclass Book(models.Model):\n    title = models.CharField(max_length=100)\n    authors = models.ManyToManyField(Author)\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"common-queryset-methods-filter-exclude-annotate-aggregate-etc",children:["Common QuerySet Methods: ",(0,t.jsx)(n.code,{children:"filter()"}),", ",(0,t.jsx)(n.code,{children:"exclude()"}),", ",(0,t.jsx)(n.code,{children:"annotate()"}),", ",(0,t.jsx)(n.code,{children:"aggregate()"}),", etc."]}),"\n",(0,t.jsx)(n.p,{children:"Here are some common methods for working with QuerySets:"}),"\n",(0,t.jsx)(n.h3,{id:"filter",children:"filter()"}),"\n",(0,t.jsx)(n.p,{children:"Returns a new QuerySet containing objects that match the given conditions."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"books = Book.objects.filter(author='John Doe')\n"})}),"\n",(0,t.jsx)(n.h3,{id:"exclude",children:"exclude()"}),"\n",(0,t.jsx)(n.p,{children:"Excludes objects that match the given conditions."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"expensive_books = Book.objects.exclude(price__gt=100)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"annotate",children:"annotate()"}),"\n",(0,t.jsx)(n.p,{children:"Used to perform calculations on a QuerySet, such as counting related objects or summing values."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from django.db.models import Count\n\nauthor_book_count = Author.objects.annotate(num_books=Count('book'))\n"})}),"\n",(0,t.jsx)(n.h3,{id:"aggregate",children:"aggregate()"}),"\n",(0,t.jsx)(n.p,{children:"Performs a calculation on the entire QuerySet and returns a dictionary of values."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from django.db.models import Avg\n\navg_price = Book.objects.aggregate(Avg('price'))\n"})}),"\n",(0,t.jsx)(n.h3,{id:"order_by",children:"order_by()"}),"\n",(0,t.jsx)(n.p,{children:"Orders the results based on the given field(s)."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"sorted_books = Book.objects.order_by('published_date')\n"})}),"\n",(0,t.jsx)(n.h3,{id:"get",children:"get()"}),"\n",(0,t.jsx)(n.p,{children:"Retrieves a single object that matches the query. Raises an exception if there is no match or multiple matches."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"book = Book.objects.get(id=1)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"model-inheritance",children:"Model Inheritance"}),"\n",(0,t.jsx)(n.p,{children:"Django supports model inheritance, which allows you to create models that inherit from a parent model."}),"\n",(0,t.jsx)(n.h3,{id:"abstract-base-classes",children:"Abstract Base Classes:"}),"\n",(0,t.jsx)(n.p,{children:"An abstract base class allows you to define common fields or methods that will be shared by multiple child models. The parent class will not create a database table."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class CommonInfo(models.Model):\n    name = models.CharField(max_length=100)\n    created_at = models.DateTimeField(auto_now_add=True)\n\n    class Meta:\n        abstract = True\n\nclass Author(CommonInfo):\n    biography = models.TextField()\n"})}),"\n",(0,t.jsx)(n.h3,{id:"multi-table-inheritance",children:"Multi-table Inheritance:"}),"\n",(0,t.jsx)(n.p,{children:"Each model in the inheritance hierarchy gets its own database table. The child model will contain a reference to the parent model."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class Author(models.Model):\n    name = models.CharField(max_length=100)\n\nclass AuthorProfile(Author):\n    biography = models.TextField()\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"AuthorProfile"})," will have its own table, with a reference to the ",(0,t.jsx)(n.code,{children:"Author"})," table."]}),"\n",(0,t.jsx)(n.h2,{id:"transactions-and-atomicity",children:"Transactions and Atomicity"}),"\n",(0,t.jsx)(n.p,{children:"Django allows you to handle database transactions to ensure that operations are completed successfully or rolled back in case of errors."}),"\n",(0,t.jsx)(n.h3,{id:"atomic-transactions",children:"Atomic Transactions:"}),"\n",(0,t.jsx)(n.p,{children:"A transaction ensures that a set of operations are executed as a single unit. If one operation fails, all operations are rolled back."}),"\n",(0,t.jsx)(n.h3,{id:"example-of-atomic-block",children:"Example of Atomic Block:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from django.db import transaction\n\ntry:\n    with transaction.atomic():\n        # Perform multiple operations\n        book = Book.objects.create(title='New Book', author='John Doe')\n        author = Author.objects.create(name='John Doe')\n        # If any operation fails, both changes are rolled back\nexcept Exception as e:\n    print(\"Transaction failed:\", e)\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"atomic",children:[(0,t.jsx)(n.code,{children:"atomic()"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"Ensures that all database operations within the block are executed as one transaction. If any exception occurs, the database will roll back the changes to the state before the transaction began."})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>i});var a=o(96540);const t={},l=a.createContext(t);function s(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);