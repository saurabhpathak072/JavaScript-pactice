var a = "NewYork"
a.toUpperCase()
"NEWYORK"

a.toLowerCase()
"newyork"

a.length
7

a.charAt(3)
"Y"
a.charAt(0)
"N"

to remove extra spaces we used trim 
 var a = " John "
 a.length
6
a.trim()
"John"
a.trim().length
4


var a="My City is Nanded"
a.replace("Nanded","Yavatmal")
"My City is Yavatmal"
var a= "I am Learning JavaScript"
a.replace('a','A')
"I Am Learning JavaScript"
a.replace(/a/g,'A')
"I Am LeArning JAvAScript"
a.replace(/ /g,'_')
"I_am_Learning_JavaScript"

var city = "Yavatmal"
city.slice(3)
"atmal"
city.slice(3,7)
"atma"

var a = "rAsHmI"
undefined
a.charAt(0).toUpperCase()
"R"
a.slice(1).toLowerCase()
"ashmi"
var b=a.slice(1).toLowerCase()

var c=a.charAt(0).toUpperCase()

b+c
"ashmiR"
c+b
"Rashmi"


var a ="JavaScript"
undefined
a.substring(3,7)
"aScr"
a.slice(0,3)
"Jav"
a.substr(3,-1)
""
a.substr(3,222)
"aScript"
a.substr(3,2)
"aS"
a.substring(3,-1)
"Jav"

slice(start,end)=> can only take +ve value
substring(start,end) => can take -vve value also
substr(start,length)

var url = "https://github.com/saurabhspathak072"
undefined
url.split('/')
(4) ["https:", "", "github.com", "saurabhspathak072"]
var output = url.split('/')
undefined
output[3]
"saurabhspathak072"
var name = output[url.length-1]
undefined
name
"undefined"

var name = output[output.length-1]
undefined
name
"saurabhspathak072"
