(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{81:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return b})),o.d(t,"default",(function(){return p}));var n=o(3),r=o(7),i=(o(0),o(100)),s=o(103),a={title:"IKEA E1524/E1810 5-Button Remote",description:"Controller automation for executing any kind of action triggered by the provided IKEA E1524/E1810 5-Button Remote. Supports deCONZ, ZHA, Zigbee2MQTT."},l={unversionedId:"blueprints/controllers/ikea_e1524_e1810",id:"blueprints/controllers/ikea_e1524_e1810",isDocsHomePage:!1,title:"IKEA E1524/E1810 5-Button Remote",description:"Controller automation for executing any kind of action triggered by the provided IKEA E1524/E1810 5-Button Remote. Supports deCONZ, ZHA, Zigbee2MQTT.",source:"@site/docs/blueprints/controllers/ikea_e1524_e1810.mdx",slug:"/blueprints/controllers/ikea_e1524_e1810",permalink:"/awesome-ha-blueprints/docs/blueprints/controllers/ikea_e1524_e1810",editUrl:"https://github.com/EPMatt/awesome-ha-blueprints/edit/main/docs/blueprints/controllers/ikea_e1524_e1810.mdx",version:"current"},b=[{value:"Description",id:"description",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Available Hooks",id:"available-hooks",children:[{value:"Light",id:"light",children:[]},{value:"Media Player",id:"media-player",children:[]},{value:"Cover",id:"cover",children:[]}]},{value:"Additional Notes",id:"additional-notes",children:[]},{value:"Changelog",id:"changelog",children:[]}],u={toc:b};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)(s.a,{id:"ikea_e1524_e1810",category:"controllers",mdxType:"ImportCard"}),Object(i.b)("br",null),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This blueprint is part of the ",Object(i.b)("strong",{parentName:"p"},"Controllers-Hooks Ecosystem"),". You can read more about this topic ",Object(i.b)("a",{parentName:"p",href:"/docs/controllers-hooks-ecosystem"},"here"),"."))),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"This blueprint provides universal support for running any custom action when a button is pressed on the provided IKEA E1524/E1810 5-Button Remote. Supports controllers integrated with deCONZ, ZHA, Zigbee2MQTT. Just specify the integration used to connect the remote to Home Assistant when setting up the automation, and the blueprint will take care of all the rest."),Object(i.b)("p",null,"In addition of being able to provide custom actions for every kind of button press supported by the remote, the blueprint allows to loop the long press actions while the corresponding button is being held. Once released, the loop stops. This is useful when holding down a button should result in a continuous action (such as lowering the volume of a media player, or controlling a light brightness)."),Object(i.b)("p",null,"The blueprint also adds support for virtual double button press events, which are not exposed by the controller itself."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Automations created with this blueprint can be connected with one or more ",Object(i.b)("a",{parentName:"p",href:"/docs/blueprints/hooks"},"Hooks")," supported by this controller.\nHooks allow to easily create controller-based automations for interacting with media players, lights, covers and more. See the list of ",Object(i.b)("a",{parentName:"p",href:"/docs/blueprints/controllers/ikea_e1524_e1810#available-hooks"},"Hooks available for this controller")," for additional details."))),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)(s.c,{id:"deconz",mdxType:"Requirement"}),Object(i.b)(s.c,{id:"zha",mdxType:"Requirement"}),Object(i.b)(s.c,{id:"zigbee2mqtt",mdxType:"Requirement"}),Object(i.b)(s.c,{name:"Input Text Integration",required:"ZHA, Double press action",mdxType:"Requirement"},Object(i.b)("p",null,"This integration provides the entity which will be used to store the last button event. It's required when using ZHA to integrate the remote, as well as when using double press events. This should be activated by default so unless you tweaked the default configuration you're good to go."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/input_text/"},"Input Text Integration Docs"))),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)(s.b,{name:"Integration",description:"Integration used for connecting the remote with Home Assistant. Select one of the available values.",selector:"select",required:!0,mdxType:"Input"}),Object(i.b)(s.b,{name:"Controller Device",description:"The controller device to use for the automation. Choose a value only if the remote is integrated with deCONZ, ZHA.",selector:"device",required:"(deCONZ, ZHA)",mdxType:"Input"}),Object(i.b)(s.b,{name:"Controller Entity",description:"The action sensor of the controller to use for the automation. Choose a value only if the remote is integrated with Zigbee2MQTT.",selector:"entity",required:"(Zigbee2MQTT)",mdxType:"Input"}),Object(i.b)(s.b,{name:"Left button - short press",description:"Action to run on short left button press.",selector:"action",mdxType:"Input"}),Object(i.b)(s.b,{name:"Left button - long press",description:"Action to run on long left button press.",selector:"action",mdxType:"Input"}),Object(i.b)(s.b,{name:"Left button - release after long press",description:"Action to run on left button release after a long press.",selector:"action",mdxType:"Input"}),Object(i.b)(s.b,{name:"Left button - double press",description:"Action to run on double left button press.",selector:"action",mdxType:"Input"}),Object(i.b)(s.b,{name:"Right button - short press",description:"Action to run on short right button press.",selector:"action",mdxType:"Input"}),Object(i.b)(s.b,{name:"Right button - long press",description:"Action to run on long right button press.",selector:"action",mdxType:"Input"}),Object(i.b)(s.b,{name:"Right button - release after long press",description:"Action to run on right button release after a long press.",selector:"action",mdxType:"Input"}),Object(i.b)(s.b,{name:"Right button - double press",description:"Action to run on double right button press.",selector:"action",mdxType:"Input"}),Object(i.b)(s.b,{name:"Up button - short press",description:"Action to run on short up button press.",selector:"action",mdxType:"Input"}),Object(i.b)(s.b,{name:"Up button - long press",description:"Action to run on long up button press.",selector:"action",mdxType:"Input"}),Object(i.b)(s.b,{name:"Up button - release after long press",description:"Action to run on up button release after a long press.",selector:"action",mdxType:"Input"}),Object(i.b)(s.b,{name:"Up button - double press",description:"Action to run on double up button press.",selector:"action",mdxType:"Input"}),Object(i.b)(s.b,{name:"Down button - short press",description:"Action to run on short down button press.",selector:"action",mdxType:"Input"}),Object(i.b)(s.b,{name:"Down button - long press",description:"Action to run on long down button press.",selector:"action",mdxType:"Input"}),Object(i.b)(s.b,{name:"Down button - release after long press",description:"Action to run on down button release after a long press.",selector:"action",mdxType:"Input"}),Object(i.b)(s.b,{name:"Down button - double press",description:"Action to run on double down button press.",selector:"action",mdxType:"Input"}),Object(i.b)(s.b,{name:"Center button - short press",description:"Action to run on short center button press.",selector:"action",mdxType:"Input"}),Object(i.b)(s.b,{name:"Center button - long press",description:"Action to run on long center button press.",selector:"action",mdxType:"Input"}),Object(i.b)(s.b,{name:"Center button - double press",description:"Action to run on double center button press.",selector:"action",mdxType:"Input"}),Object(i.b)(s.b,{name:"Long left button press - loop until release",description:"Loop the action until the left button is released.",selector:"boolean",required:!0,mdxType:"Input"}),Object(i.b)(s.b,{name:"Long right button press - loop until release",description:"Loop the action until the right button is released.",selector:"boolean",required:!0,mdxType:"Input"}),Object(i.b)(s.b,{name:"Long up button press - loop until release",description:"Loop the action until the up button is released.",selector:"boolean",required:!0,mdxType:"Input"}),Object(i.b)(s.b,{name:"Long down button press - loop until release",description:"Loop the action until the down button is released.",selector:"boolean",required:!0,mdxType:"Input"}),Object(i.b)(s.b,{name:"Expose left button double press event",description:"Choose whether or not to expose the virtual double press event for the left button. Turn this on if you are providing an action for the left button double press event.",selector:"boolean",required:!0,mdxType:"Input"}),Object(i.b)(s.b,{name:"Expose right button double press event",description:"Choose whether or not to expose the virtual double press event for the right button. Turn this on if you are providing an action for the right button double press event.",selector:"boolean",required:!0,mdxType:"Input"}),Object(i.b)(s.b,{name:"Expose up button double press event",description:"Choose whether or not to expose the virtual double press event for the up button. Turn this on if you are providing an action for the up button double press event.",selector:"boolean",required:!0,mdxType:"Input"}),Object(i.b)(s.b,{name:"Expose down button double press event",description:"Choose whether or not to expose the virtual double press event for the down button. Turn this on if you are providing an action for the down button double press event.",selector:"boolean",required:!0,mdxType:"Input"}),Object(i.b)(s.b,{name:"Expose center button double press event",description:"Choose whether or not to expose the virtual double press event for the center button. Turn this on if you are providing an action for the center button double press event.",selector:"boolean",required:!0,mdxType:"Input"}),Object(i.b)(s.b,{name:"Helper - Last Controller Event",description:"Input Text used to store the last event fired by the controller. See docs for more.",selector:"entity",required:"(ZHA, Double press action Required)",mdxType:"Input"}),Object(i.b)(s.b,{name:"Helper - Double Press delay",description:"Max delay between the first and the second button press for the double press event. Provide a value only if you are using a double press action. Increase this value if you notice that the double press action is not triggered properly.",selector:"number",mdxType:"Input"}),Object(i.b)("h2",{id:"available-hooks"},"Available Hooks"),Object(i.b)("h3",{id:"light"},"Light"),Object(i.b)("p",null,"This Hook blueprint allows to build a controller-based automation to control a light. Supports brightness and color control both for white temperature and rgb lights."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Up button short press -> Brightness up"),Object(i.b)("li",{parentName:"ul"},"Up button long press & hold -> Brightness up (continuous, until release)"),Object(i.b)("li",{parentName:"ul"},"Down button short press -> Brightness down"),Object(i.b)("li",{parentName:"ul"},"Down button long pres & hold -> Brightness down (continuous, until release)"),Object(i.b)("li",{parentName:"ul"},"Left button short press -> Color down"),Object(i.b)("li",{parentName:"ul"},"Left button long press & hold -> Color down (continuous, until release)"),Object(i.b)("li",{parentName:"ul"},"Right button short press -> Color up"),Object(i.b)("li",{parentName:"ul"},"Right button long press & hold -> Color up (continuous, until release)"),Object(i.b)("li",{parentName:"ul"},"Center button short press -> Toggle")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/blueprints/hooks/light"},"Light Hook docs")),Object(i.b)("h3",{id:"media-player"},"Media Player"),Object(i.b)("p",null,"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Up button short press -> Volume up"),Object(i.b)("li",{parentName:"ul"},"Up button long press & hold -> Volume up (continuous, until release)"),Object(i.b)("li",{parentName:"ul"},"Down button short press -> Volume down"),Object(i.b)("li",{parentName:"ul"},"Down button long pres & hold -> Volume down (continuous, until release)"),Object(i.b)("li",{parentName:"ul"},"Left button short press -> Previous Track"),Object(i.b)("li",{parentName:"ul"},"Right button short press -> Next Track"),Object(i.b)("li",{parentName:"ul"},"Center button short press -> Play/Pause"),Object(i.b)("li",{parentName:"ul"},"Center button hold -> Stop")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/blueprints/hooks/media_player"},"Media Player Hook docs")),Object(i.b)("h3",{id:"cover"},"Cover"),Object(i.b)("p",null,"This Hook blueprint allows to build a controller-based automation to control a cover. Supports opening, closing and tilting the cover."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Up button short press -> Open cover"),Object(i.b)("li",{parentName:"ul"},"Down button short press -> Close cover"),Object(i.b)("li",{parentName:"ul"},"Left button short press -> Close the cover tilt"),Object(i.b)("li",{parentName:"ul"},"Right button short press -> Open the cover tilt"),Object(i.b)("li",{parentName:"ul"},"Center button short press -> Stop cover and cover tilt")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/blueprints/hooks/cover"},"Cover Hook docs")),Object(i.b)("h2",{id:"additional-notes"},"Additional Notes"),Object(i.b)("p",null,"The reason why a text input is required to store the last long press event when using a remote with ZHA is because of the actions mapping for the controller with these integrations. Natively, the controller doesn't allow to distinguish between different button release events, so the blueprint must store the previous clicked button, using the text input. Make sure the input text is not altered by any other agents, since this could break the automation."),Object(i.b)("p",null,"It's also important to notice that the controller doesn't natively support double press events. This blueprint provides virtual double press events by relying on the text input, used to store the last short press event, and a delay, which represents the maximum time gap between the first and second short press required to trigger the virtual double press."),Object(i.b)("p",null,"When double press events are enabled for a specific button, clicking the button results in the automation first waiting for the second button press, then, if none is received within the provided delay, executing the short press action."),Object(i.b)("p",null,"If double press events are disabled for a specific button, the corresponding single press action will be executed immediately when the button is pressed."),Object(i.b)("h2",{id:"changelog"},"Changelog"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"2021-02-05"),": first blueprint version \ud83c\udf89"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"2021-02-07"),": fix an issue which prevented to create automations for ZHA or deCONZ."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"2021-02-08"),": update example, fixed an issue which executed actions twice when the remote was connected via Zigbee2MQTT."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"2021-03-18"),": added example for fully controlling a RGB light (thanks @kks36!)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"2021-02-21"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"add support for virtual double press events"),Object(i.b)("li",{parentName:"ul"},"block automation runs for empty and repeated messages"),Object(i.b)("li",{parentName:"ul"},"reduce ",Object(i.b)("inlineCode",{parentName:"li"},"input_text helper")," writes"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"2021-03-03"),": move the blueprint in the Controllers-Hooks Ecosystem. See announcement ",Object(i.b)("a",{parentName:"li",href:"https://community.home-assistant.io/t/awesome-ha-blueprints-a-curated-list-of-blueprints-easily-create-controller-based-automations-remotes-switches-for-controlling-lights-media-players-and-more/256687/7"},"here"),". \ud83c\udf89"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"2021-03-25"),": \u26a0\ufe0f ",Object(i.b)("strong",{parentName:"li"},"Breaking Change"),": standardize input names across all the Controller blueprints.\nIf you plan to update this blueprint, please update the inputs in your automations as follows:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"remote")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"controller_device")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"zigbee2mqtt_remote")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"controller_entity")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"action_*")," inputs -> ",Object(i.b)("inlineCode",{parentName:"li"},"action_button_*")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"helper_last_loop_event_input")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"helper_last_controller_event"))))))}p.isMDXComponent=!0}}]);