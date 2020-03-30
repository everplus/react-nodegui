(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{150:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return u}));var o=t(0),a=t.n(o),i=a.a.createContext({}),r=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},s=function(e){var n=r(e.components);return a.a.createElement(i.Provider,{value:n},e.children)};var l="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},c=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===n.indexOf(o)&&(t[o]=e[o]);return t}(e,["components","mdxType","originalType","parentName"]),c=r(t),u=o,p=c[s+"."+u]||c[u]||d[u]||i;return t?a.a.createElement(p,Object.assign({},{ref:n},l,{components:t})):a.a.createElement(p,Object.assign({},{ref:n},l))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=c;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[l]="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=t[u];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},96:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"rightToc",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"default",(function(){return u}));var o=t(1),a=t(6),i=(t(0),t(150)),r={sidebar_label:"Handle Events",title:"Handle Events"},s=[{value:"Event handling",id:"event-handling",children:[{value:"useEventHandler hook and typescript support",id:"useeventhandler-hook-and-typescript-support",children:[]},{value:"How do I know which events are supported ?",id:"how-do-i-know-which-events-are-supported-",children:[]}]}],l={id:"guides/handle-events",title:"Handle Events",description:"React NodeGui allows you to listen to various events that might originate from the underlying Qt widgets. These events can either be a simple button click or a text change on a lineedit or even something like window being hidden and shown.",source:"@site/docs/guides/handle-events.md",permalink:"/docs/guides/handle-events",sidebar_label:"Handle Events",sidebar:"guides",previous:{title:"Layout",permalink:"/docs/guides/layout"},next:{title:"Scroll Area",permalink:"/docs/guides/scroll-view"}},d={rightToc:s,metadata:l},c="wrapper";function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)(c,Object(o.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"React NodeGui allows you to listen to various events that might originate from the underlying Qt widgets. These events can either be a simple button click or a text change on a lineedit or even something like window being hidden and shown."),Object(i.b)("p",null,"In order to do this we need to attach an event listener to the respective widget."),Object(i.b)("p",null,"Technically, the event listener is a NodeJs ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://nodejs.org/api/events.html#events_class_eventemitter"}),"EventEmitter")," instance that listens to events from the underlying Qt widget. The native Qt widget would send all the events to the event emitter in React NodeGui world and the user can essentially subscribe to it."),Object(i.b)("p",null,"Lets see an example to see how this looks in practice."),Object(i.b)("h2",{id:"event-handling"},"Event handling"),Object(i.b)("p",null,"The following example demonstrates how to add a clicked event listener to a button widget."),Object(i.b)("img",{src:"https://github.com/nodegui/react-nodegui/releases/download/assets/events-react.gif",alt:"event example",style:{width:"100%",maxWidth:400}}),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'const React = require("react");\nconst { Renderer, Button, Window } = require("@nodegui/react-nodegui");\n\nconst App = () => {\n  const buttonHandler = {\n    clicked: () => {\n      console.log("the button was clicked");\n    }\n  };\n\n  return (\n    <Window>\n      <Button text={"Click me"} on={buttonHandler} />\n    </Window>\n  );\n};\n\nRenderer.render(<App />);\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"on")," prop accepts a simple object map with event type as key and a handler function as callback for the event. You can register multiple event handlers by passing multiple events as keys and their handlers as values."),Object(i.b)("p",null,"Internally, Qt widgets in nodegui has two types of events.:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Signals: In short these are basically different for different widgets. So a button maybe have ",Object(i.b)("inlineCode",{parentName:"li"},"clicked"),", ",Object(i.b)("inlineCode",{parentName:"li"},"pressed")," signal, while a linedit may have ",Object(i.b)("inlineCode",{parentName:"li"},"textChanged")," signal."),Object(i.b)("li",{parentName:"ul"},"QEvents: These are common set of events for all the widgets/qobjects in NodeGui world. These are also helpful at times but typically you would end up using signals more than these common events.")),Object(i.b)("p",null,"In React NodeGui you can listen to both Signals and QEvents using the same ",Object(i.b)("inlineCode",{parentName:"p"},"on")," prop."),Object(i.b)("h3",{id:"useeventhandler-hook-and-typescript-support"},"useEventHandler hook and typescript support"),Object(i.b)("p",null,"Although you can pass in an object with event handlers to the ",Object(i.b)("inlineCode",{parentName:"p"},"on")," prop, its not the most efficient way. This is because everytime the render is called the ",Object(i.b)("inlineCode",{parentName:"p"},"on")," prop will get a new object meaning the widget will re-render every time. To solve for this we have ",Object(i.b)("inlineCode",{parentName:"p"},"useEventHandler")," hook."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),'import React from "react";\nimport {\n  Renderer,\n  Button,\n  Window,\n  useEventHandler\n} from "@nodegui/react-nodegui";\nimport { QPushButtonSignals } from "@nodegui/nodegui";\n\nconst App = () => {\n  const buttonHandler = useEventHandler<QPushButtonSignals>(\n    {\n      clicked: () => {\n        console.log("the button was clicked");\n      },\n      pressed: () => {\n        console.log("button was pressed");\n      },\n      objectNameChanged: objectName => {\n        console.log("new object name", objectName);\n      }\n    },\n    []\n  );\n\n  return (\n    <Window>\n      <Button text={"Click me"} on={buttonHandler} />\n    </Window>\n  );\n};\n\nRenderer.render(<App />);\n')),Object(i.b)("p",null,"In a nutshell, the above code uses the ",Object(i.b)("inlineCode",{parentName:"p"},"useEventHandler")," hook which is a wrapper over ",Object(i.b)("inlineCode",{parentName:"p"},"useMemo"),".\nThis means, the buttonHandler remains same on every render call and hence the ",Object(i.b)("inlineCode",{parentName:"p"},"on")," prop to Button doesnt change."),Object(i.b)("p",null,"Here ",Object(i.b)("inlineCode",{parentName:"p"},"objectNameChanged")," is a QEvent while ",Object(i.b)("inlineCode",{parentName:"p"},"clicked")," and ",Object(i.b)("inlineCode",{parentName:"p"},"pressed")," are signals. As an app developer it really doesnt mean much but internally they are both two different things in Qt and React NodeGui allows you to use both of them using a single familar ",Object(i.b)("inlineCode",{parentName:"p"},"on")," prop."),Object(i.b)("p",null,"Also, another point you see in this typescript code is the QPushButtonSignals. The QPushButtonSignals is a type that allows autocompletion of event handlers as you type them."),Object(i.b)("h3",{id:"how-do-i-know-which-events-are-supported-"},"How do I know which events are supported ?"),Object(i.b)("p",null,"In order to find all the supported events for a widget you can take a look at"),Object(i.b)("h4",{id:"all-signals-for-the-widgets"},"All Signals for the widgets:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.nodegui.org/docs/api/generated/globals/#interfaces"}),"https://docs.nodegui.org/docs/api/generated/globals/#interfaces")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.nodegui.org/docs/api/generated/globals/#type-aliases"}),"https://docs.nodegui.org/docs/api/generated/globals/#type-aliases"))),Object(i.b)("p",null,"You can subscribe to a signal like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),'import React from "react";\nimport {\n  Renderer,\n  Button,\n  Window,\n  useEventHandler\n} from "@nodegui/react-nodegui";\nimport { QPushButtonSignals } from "@nodegui/nodegui";\n\nconst App = () => {\n  const buttonHandler = useEventHandler<QPushButtonSignals>(\n    {\n      clicked: () => {\n        console.log("the button was clicked");\n      }\n    },\n    []\n  );\n\n  return (\n    <Window>\n      <Button text={"Click me"} on={buttonHandler} />\n    </Window>\n  );\n};\n\nRenderer.render(<App />);\n')),Object(i.b)("p",null,"The value you receive in the callback depends on the signal. Refer to respective signal docs for more details. All the handlers are also typed. So if you are using typescript you should get correct autocomplete for it."),Object(i.b)("h4",{id:"all-common-qevents-for-the-widgets"},"All common QEvents for the widgets"),Object(i.b)("p",null,"In nodegui all these common QEvents are represented under an enum type: ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.nodegui.org/docs/api/generated/enums/widgeteventtypes"}),"WidgetEventTypes")),Object(i.b)("p",null,"You can subscribe to a QEvent like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),'import React from "react";\nimport {\n  Renderer,\n  Text,\n  Window,\n  useEventHandler\n} from "@nodegui/react-nodegui";\nimport { QLabelSignals, QMouseEvent, WidgetEventTypes } from "@nodegui/nodegui";\n\nconst App = () => {\n  const textHandler = useEventHandler<QLabelSignals>(\n    {\n      MouseMove: (nativeEvt: any) => {\n        const mouseEvt = new QMouseEvent(nativeEvt);\n        console.log("mouseMoved at: ", { x: mouseEvt.x(), y: mouseEvt.y() });\n      },\n      [WidgetEventTypes.MouseButtonPress]: () => {\n        console.log("mouse button was pressed");\n      }\n    },\n    []\n  );\n\n  return (\n    <Window>\n      <Text mouseTracking={true} on={textHandler}>\n        Move your mouse here\n      </Text>\n    </Window>\n  );\n};\n\nRenderer.render(<App />);\n')),Object(i.b)("img",{src:"https://github.com/nodegui/react-nodegui/releases/download/assets/qevents.gif",alt:"qevent example",style:{width:"100%",maxWidth:400}}),Object(i.b)("p",null,"Note here that every QEvent handler gives a reference to native QEvent in the handler callback.\nNot all native QEvent wrappers are implemented yet and we might need your help regarding those. Feel free to jump in and contribute to the nodegui core."),Object(i.b)("p",null,"Also you can specify the QEvent type as a regular ",Object(i.b)("inlineCode",{parentName:"p"},"MouseMove")," string or use it directly from the enum ",Object(i.b)("inlineCode",{parentName:"p"},"WidgetEventTypes.MouseMove"),". They both achieve same things."))}u.isMDXComponent=!0}}]);