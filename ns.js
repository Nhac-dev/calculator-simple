"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ns_Dom_Uni_Cls_to, _ns_Dom_Uni_Cls_styleId, _ns_Dom_List_Cls_styleId, _NS_Component_proprieties, _NS_Component_defaultStyle;
// Class declaration
// Get The DOM
class NS_Elm {
    constructor(elm) {
        return elm;
    }
}
class ns_Dom_Uni_Cls extends NS_Elm {
    constructor(element, elm) {
        super(elm ? element : "");
        _ns_Dom_Uni_Cls_to.set(this, void 0);
        _ns_Dom_Uni_Cls_styleId.set(this, void 0);
        /**
        * indica o elemento a qual o index se refere
        */
        this.to = element;
        __classPrivateFieldSet(this, _ns_Dom_Uni_Cls_to, this.to, "f");
        /**
         * domBy serve para dizer de onde vem o DOM
         */
        this.domBy = "NhacScript Module";
        __classPrivateFieldSet(this, _ns_Dom_Uni_Cls_styleId, "", "f");
        this.toString = () => {
            return `\x1b[31m<\x1b[33m${this.to["localName"]}-ns\x1b[31m/>`;
        };
        /**
         * O AddEnv trabalha como o addEventListener, sendo o primeiro par??metro para o nome do evento
         * e o segundo para a fun????o que ocorrer?? ao acontecer determinado evento.
         * @param {keyof HTMLElementEventMap} nameEvent
         * @param {Function} env
        */
        this.AddEnv = (nameEvent, env) => {
            if (element) {
                this.to.addEventListener(nameEvent, env);
            }
        };
        /**
        * O m??todo click realizar?? a fun????o passada pelo par??metro quando o elemento em quest??o receber o evento de clique
        * @param {Function} env
        */
        this.Click = (env) => {
            if (!env) {
                this.to.click();
            }
            else {
                this.AddEnv("click", env);
            }
        };
        /**
        * O m??todo dbClick realizar?? a fun????o passada pelo par??metro quando o elemento em quest??o receber o evento de duplo clique
        * @param {Function} env
        */
        this.DbClick = (env) => {
            this.AddEnv("dblclick", env);
        };
        /**
        * O m??todo change realizar?? a fun????o passada pelo par??metro quando o elemento em quest??o receber o evento de mudan??a(mudar o valor do atributo value) ocorrer
        * @param {Function} env
        */
        this.Change = (env) => {
            this.AddEnv("change", env);
        };
        /**
        * O m??todo submit realizar?? a fun????o passada pelo par??metro quando o formul??rio em quest??o for submetido
        * @param {Function} env
        */
        this.Submit = (env) => {
            this.AddEnv("submit", env);
        };
        /**
        * O m??todo keypress realizar?? a fun????o passada pelo par??metro quando o uma tecla do teclado for precisando no elemento
        * @param {Function} env
        */
        this.Keypress = (env) => {
            this.AddEnv("keypress", env);
        };
        /**
        * O m??todo keydown realizar?? a fun????o passada pelo par??metro quando o uma tecla do teclado for precisando no elemento
        * @param {Function} env
        */
        this.Keydown = (env) => {
            this.AddEnv("keydown", env);
        };
        /**
        * O m??todo keyup realizar?? a fun????o passada pelo par??metro quando o uma tecla do teclado for precisando, logo depois solto no elemento
        * @param {Function} env
        */
        this.Keyup = (env) => {
            this.AddEnv("keyup", env);
        };
        /**
        * O m??todo mouseenter realizar?? a fun????o passada pelo par??metro quando o mouse entrar no elemento
        * @param {Function} env
        */
        this.Mouseenter = (env) => {
            this.AddEnv("mouseenter", env);
        };
        /**
        * O m??todo mouseout realizar?? a fun????o passada pelo par??metro quando o mouse sair no elemento
        * @param {Function} env
        */
        this.Mouseout = (env) => {
            this.AddEnv("mouseout", env);
        };
        /**
        * NOS ou Nhac Object Style ?? um m??todo criado pro NS_DOM(NhacScript Document Object Module)
        * Sua principal fun????o ?? estilizar os elementos por meio de objeto
        * @param {{background?: string,backgroundColor?: string,backgroundPosition?: string,color?: string,textAlign?: string,textDecoration?: string,display?: string,margin?: string,marginTop?: string,marginBottom?: string,marginLeft?: string,marginRight?: string,padding?: string,paddingTop?: string,paddingBottom?: string,paddingLeft?: string,paddingRight?: string,maxWidth?: string,minWidth?: string,maxHeight?: string,minHeight?: string}} props
        */
        this.NOS = (props) => {
            if (typeof props == "object") {
                var keys = Object.keys(props);
                var value = Object.values(props);
                for (let ind = 0; ind < keys.length; ind++) {
                    this.to.style[keys[ind]] = value[ind];
                }
            }
        };
        /**
        * FOS ou File Object Style ?? um m??todo criado pro NS_DOM(NhacScript Document Object Module)
        * Sua principal fun????o ?? estilizar os elementos por meio de objeto
        * @param {{background?: string,backgroundColor?: string,backgroundPosition?: string,color?: string,textAlign?: string,textDecoration?: string,display?: string,margin?: string,marginTop?: string,marginBottom?: string,marginLeft?: string,marginRight?: string,padding?: string,paddingTop?: string,paddingBottom?: string,paddingLeft?: string,paddingRight?: string,maxWidth?: string,minWidth?: string,maxHeight?: string,minHeight?: string}} props
        */
        this.FOS = (props) => {
            if (typeof props == "object") {
                var keys = Object.keys(props);
                var value = Object.values(props);
                let toFile = "";
                if (this.to.id) {
                    let SID = (__classPrivateFieldGet(this, _ns_Dom_Uni_Cls_to, "f").styleId) ? __classPrivateFieldGet(this, _ns_Dom_Uni_Cls_to, "f").styleId : (__classPrivateFieldGet(this, _ns_Dom_Uni_Cls_styleId, "f") != "") ? __classPrivateFieldGet(this, _ns_Dom_Uni_Cls_styleId, "f") : "";
                    if (SID != "") {
                        EditTheOldCSS(SID);
                    }
                    else {
                        toFile += `${this.to.localName}#${this.to.id}{\n\t`;
                        toFile = CreateCSS(toFile);
                        let objVerify = VerifyLinkID();
                        if (!objVerify.isExist) {
                            __classPrivateFieldSet(this, _ns_Dom_Uni_Cls_styleId, objVerify.randomId, "f");
                            __classPrivateFieldGet(this, _ns_Dom_Uni_Cls_to, "f").styleId = objVerify.randomId;
                            GenBase64(toFile, objVerify.randomId);
                        }
                    }
                }
                else if (__classPrivateFieldGet(this, _ns_Dom_Uni_Cls_to, "f").name) {
                    let SID = (__classPrivateFieldGet(this, _ns_Dom_Uni_Cls_to, "f").styleId) ? __classPrivateFieldGet(this, _ns_Dom_Uni_Cls_to, "f").styleId : (__classPrivateFieldGet(this, _ns_Dom_Uni_Cls_styleId, "f")) ? __classPrivateFieldGet(this, _ns_Dom_Uni_Cls_styleId, "f") : "";
                    if (SID) {
                        EditTheOldCSS(SID);
                    }
                    else {
                        toFile += `${this.to.localName}[name=${__classPrivateFieldGet(this, _ns_Dom_Uni_Cls_to, "f").name}]{\n\t`;
                        toFile = CreateCSS(toFile);
                        let objVerify = VerifyLinkID();
                        if (!objVerify.isExist) {
                            __classPrivateFieldSet(this, _ns_Dom_Uni_Cls_styleId, objVerify.randomId, "f");
                            __classPrivateFieldGet(this, _ns_Dom_Uni_Cls_to, "f").styleId = objVerify.randomId;
                            GenBase64(toFile, objVerify.randomId);
                        }
                    }
                }
                else {
                    this.NOS(props);
                }
                function GenBase64(file, id, element) {
                    let contentType = "data:text/css;base64,";
                    let base64File = btoa(file);
                    base64File = contentType + base64File;
                    if (element) {
                        element.href = base64File;
                    }
                    else {
                        let link = createElm.CreateElm("link", { href: base64File, rel: "stylesheet", id: id });
                        link.Append(__classPrivateFieldGet(GetElm("head"), _ns_Dom_Uni_Cls_to, "f"));
                    }
                }
                function VerifyLinkID() {
                    let randomId = GenRandomText(5, { templateMask: "##_##_#", firstChar: "s" });
                    let isExist = GetElm(`#${randomId}`).exist;
                    while (isExist) {
                        randomId = GenRandomText(5, { templateMask: "##_##_#", firstChar: "s" });
                        isExist = GetElm(`#${randomId}`).exist;
                    }
                    return {
                        randomId,
                        isExist
                    };
                }
                function EditTheOldCSS(styleId) {
                    let theElement = GetElm(`link#${styleId}`).to;
                    let oldContent = atob(theElement.href.replace("data:text/css;base64,", ""));
                    let arrCont = oldContent.split("\n");
                    // let indexToContinue = arrCont.indexOf("/*Continue Here*/")
                    toFile += `${arrCont[0]}\n`;
                    for (let i = 1; i < arrCont.length; i++) {
                        if (arrCont[i] != "\t/*Continue Here*/") {
                            toFile += `${arrCont[i]}\n`;
                        }
                        else {
                            break;
                        }
                    }
                    for (let ind = 0; ind < keys.length; ind++) {
                        if (ind != (keys.length - 1))
                            toFile += `\t${[keys[ind]]}: ${value[ind]};\n\t`;
                        else
                            toFile += `\t${[keys[ind]]}: ${value[ind]};\n`;
                    }
                    toFile += "\t/*Continue Here*/\n";
                    toFile += `}`;
                    GenBase64(toFile, styleId, theElement);
                }
                function CreateCSS(text) {
                    for (let ind = 0; ind < keys.length; ind++) {
                        if (ind != (keys.length - 1))
                            text += `${[keys[ind]]}: ${value[ind]};\n\t`;
                        else
                            text += `${[keys[ind]]}: ${value[ind]};\n`;
                    }
                    text += "\t/*Continue Here*/\n";
                    text += `}`;
                    return text;
                }
            }
        };
        /**
        * Obter?? o conte??do do elemento, se html, obter?? as tags html, se txt, obter?? apenas o texto
        * @param {("html"|"txt")} type
        * @returns {string}
        */
        this.GetContent = (type) => {
            switch (type) {
                case "html":
                    return this.to.innerHTML;
                    break;
                case "txt":
                    return this.to.innerText;
                    break;
                default:
                    let a = "Error - o tipo ?? inval??do";
                    console.error("Error - o tipo ?? inval??do");
                    return a;
            }
        };
        /**
        * Obter?? o conte??do do elemento em html
        * @returns {string}
        */
        this.GetHtml = () => {
            return this.GetContent("html");
        };
        /**
        * Obter?? o conte??do do elemento em texto
        * @returns {string}
        */
        this.GetTXT = () => {
            return this.GetContent("txt");
        };
        /**
        * Obter?? o valor do atributo value
        * @returns {string}
        */
        this.GetVal = () => {
            return element.value;
        };
        /**
        * Sobrepor??(escrever?? um novo) o valor do atributo value
        * @param {string} value - valor a ser atribu??do
        */
        this.SetVal = (value) => {
            element.value = value;
        };
        /**
        * Escrever?? o conte??do em HTML no elemento sobrescrevendo o valor anterior
        *  @param {string} content - valor a ser escrito
        */
        this.SetHTML = (content) => {
            this.to.innerHTML = content;
        };
        /**
        * Escrever?? o conte??do em TEXTO no elemento sobrescrevendo o valor anterior
        * @param {string} content - valor a ser escrito
        */
        this.SetTXT = (content) => {
            this.to.innerText = content;
        };
        /**
        * Escrever?? o conte??do em HTML no elemento, sem sobrepor o conte??do anterior
        *  @param {string} content - valor a ser escrito
        */
        this.AddHTML = (content) => {
            this.to.innerHTML += content;
        };
        /**
        * Escrever?? o conte??do em TXT no elemento, sem sobrepor o conte??do anterior
        *  @param {string} content - valor a ser escrito
        */
        this.AddTXT = (content) => {
            this.to.innerText += content;
        };
        /**
        * Ir?? por o id no elemento em quest??o
        * @param {string} id
        */
        this.SetID = (id) => {
            if (__classPrivateFieldGet(this, _ns_Dom_Uni_Cls_styleId, "f")) {
                EditTheOldCSS(__classPrivateFieldGet(this, _ns_Dom_Uni_Cls_styleId, "f"), id, this.to.id);
            }
            this.to.id = id;
            function GenBase64(file, id, element) {
                let contentType = "data:text/css;base64,";
                let base64File = btoa(file);
                base64File = contentType + base64File;
                if (element) {
                    element.href = base64File;
                }
                else {
                    let link = createElm.CreateElm("link", { href: base64File, rel: "stylesheet", id: id });
                    link.Append(__classPrivateFieldGet(GetElm("head"), _ns_Dom_Uni_Cls_to, "f"));
                }
            }
            function EditTheOldCSS(styleId, newId, oldID) {
                let toFile = "";
                let theElement = GetElm(`link#${styleId}`).to;
                let oldContent = atob(theElement.href.replace("data:text/css;base64,", ""));
                let arrCont = oldContent.split("\n");
                // let indexToContinue = arrCont.indexOf("/*Continue Here*/")
                toFile += `${arrCont[0].replace(oldID, newId)}\n`;
                for (let i = 1; i < arrCont.length; i++) {
                    toFile += `${arrCont[i]}\n`;
                }
                GenBase64(toFile, styleId, theElement);
            }
        };
        /**
        * Ir?? adicionar uma(ou mais) classe ao elemento
        * @param {...string} target
        */
        this.SetClass = (target) => {
            if (Array.isArray(target)) {
                target.forEach(elm => {
                    let a = this.to.classList.contains(elm);
                    switch (a) {
                        case false:
                            this.to.classList.add(elm);
                            break;
                        default:
                            console.error("Esta classe j?? existe neste elemento!");
                            break;
                    }
                });
            }
            else {
                let a = this.to.classList.contains(target);
                switch (a) {
                    case false:
                        this.to.classList.add(target);
                        break;
                    default:
                        console.error("Esta classe j?? existe neste elemento!");
                        break;
                }
            }
        };
        /**
        * Ir?? remover uma(ou mais) classe do elemento
        * @param {...string} target
        */
        this.RmClass = (target) => {
            if (Array.isArray(target)) {
                target.forEach(elm => {
                    let a = this.to.classList.contains(elm);
                    switch (a) {
                        case true:
                            this.to.classList.remove(elm);
                            break;
                        default:
                            console.error("Esta classe n??o existe neste elemento!");
                            break;
                    }
                });
            }
            else {
                let a = this.to.classList.contains(target);
                switch (a) {
                    case true:
                        this.to.classList.remove(target);
                        break;
                    default:
                        console.error("Esta classe n??o existe neste elemento!");
                        break;
                }
            }
        };
        /**
        * Ir?? adicionar um atributo ao elemento
        * @param {attrsNs} target
        */
        this.SetAttr = (target, value) => {
            this.to.setAttribute(target, value);
        };
        /**
        * Ir?? remover um atributo ao elemento
        * @param {string} target
        */
        this.RmAttr = (target) => {
            this.to.removeAttribute(target);
        };
        this.Append = (feather) => {
            if (!feather) {
                feather = document.body;
                Debug({ type: 2 }, `Como n??o passou o elemento pai, o elemento solicitado, foi adicionada ao body.`);
                feather.appendChild(this.to);
            }
            else {
                feather.appendChild(this.to);
            }
        };
        this.Remove = () => {
            this.to.remove();
        };
        this.SetChild = (child) => {
            if (IsArray(child)) {
                for (let i in child) {
                    let a = child;
                    this.to.appendChild(a[i]);
                }
            }
            else {
                let a = child;
                this.to.appendChild(a);
            }
        };
        this.GetChild = () => {
            const itemReturn = [];
            for (let c of __classPrivateFieldGet(this, _ns_Dom_Uni_Cls_to, "f").children) {
                itemReturn.push(c);
            }
            return itemReturn;
        };
    }
}
_ns_Dom_Uni_Cls_to = new WeakMap(), _ns_Dom_Uni_Cls_styleId = new WeakMap();
class ns_Dom_List_Cls {
    constructor(element, specification) {
        _ns_Dom_List_Cls_styleId.set(this, void 0);
        /**
         * domBy serve para dizer de onde vem o DOM
         */
        this.domBy = "NhacScript Module";
        /**
         * O AddEnv trabalha como o addEventListener, sendo o primeiro par??metro para o nome do evento
         * e o segundo para a fun????o que ocorrer?? ao acontecer determinado evento.
         * @param {('abort'| 'change'|  'click'|  'close'|  'compositionend'| 'copy'| 'cuechange'| 'cut'| 'dblclick'| 'keydown'| 'keypress'| "keyup"| 'load'| 'mousedown'| 'mouseenter'| 'mouseout'| 'mouseover'| 'mouseup'| 'submit')} nameEvent
         * @param {Function} env
        */
        this.AddEnv = (nameEvent, env) => {
            for (let e of element) {
                e.addEventListener(nameEvent, env);
            }
        };
        /**
        * O m??todo click realizar?? a fun????o passada pelo par??metro quando o elemento em quest??o receber o evento de clique
        * @param {Function} env
        */
        this.Click = (env) => {
            this.AddEnv("click", env);
        };
        /**
        * O m??todo dbClick realizar?? a fun????o passada pelo par??metro quando o elemento em quest??o receber o evento de duplo clique
        * @param {Function} env
        */
        this.DbClick = (env) => {
            this.AddEnv("dblclick", env);
        };
        /**
        * O m??todo change realizar?? a fun????o passada pelo par??metro quando o elemento em quest??o receber o evento de mudan??a(mudar o valor do atributo value) ocorrer
        * @param {Function} env
        */
        this.Change = (env) => {
            this.AddEnv("change", env);
        };
        /**
        * O m??todo submit realizar?? a fun????o passada pelo par??metro quando o formul??rio em quest??o for submetido
        * @param {Function} env
        */
        this.Submit = (env) => {
            this.AddEnv("submit", env);
        };
        /**
        * O m??todo keypress realizar?? a fun????o passada pelo par??metro quando o uma tecla do teclado for precisando no elemento
        * @param {Function} env
        */
        this.Keypress = (env) => {
            this.AddEnv("keypress", env);
        };
        /**
        * O m??todo keydown realizar?? a fun????o passada pelo par??metro quando o uma tecla do teclado for precisando no elemento
        * @param {Function} env
        */
        this.Keydown = (env) => {
            this.AddEnv("keydown", env);
        };
        /**
        * O m??todo keyup realizar?? a fun????o passada pelo par??metro quando o uma tecla do teclado for precisando, logo depois solto no elemento
        * @param {Function} env
        */
        this.Keyup = (env) => {
            this.AddEnv("keyup", env);
        };
        /**
        * O m??todo mouseenter realizar?? a fun????o passada pelo par??metro quando o mouse entrar no elemento
        * @param {Function} env
        */
        this.Mouseenter = (env) => {
            this.AddEnv("mouseenter", env);
        };
        /**
        * O m??todo mouseout realizar?? a fun????o passada pelo par??metro quando o mouse sair no elemento
        * @param {Function} env
        */
        this.Mouseout = (env) => {
            this.AddEnv("mouseout", env);
        };
        /**
        * NOS ou Nhac Object Style ?? um m??todo criado pro NS_DOM(NhacScript Document Object Module)
        * Sua principal fun????o ?? estilizar os elementos por meio de objeto
        * @param {{background?: string,backgroundColor?: string,backgroundPosition?: string,color?: string,textAlign?: string,textDecoration?: string,display?: string,margin?: string,marginTop?: string,marginBottom?: string,marginLeft?: string,marginRight?: string,padding?: string,paddingTop?: string,paddingBottom?: string,paddingLeft?: string,paddingRight?: string,maxWidth?: string,minWidth?: string,maxHeight?: string,minHeight?: string}} props
        */
        this.NOS = (props) => {
            for (let e = 0; e < element.length; e++) {
                if (typeof props == "object") {
                    var keys = Object.keys(props);
                    var value = Object.values(props);
                    for (let ind = 0; ind < keys.length; ind++) {
                        element[e].style[keys[ind]] = value[ind];
                    }
                }
            }
        };
        /**
        * FOS ou File Object Style ?? um m??todo criado pro NS_DOM(NhacScript Document Object Module)
        * Sua principal fun????o ?? estilizar os elementos por meio de objeto
        * @param {{background?: string,backgroundColor?: string,backgroundPosition?: string,color?: string,textAlign?: string,textDecoration?: string,display?: string,margin?: string,marginTop?: string,marginBottom?: string,marginLeft?: string,marginRight?: string,padding?: string,paddingTop?: string,paddingBottom?: string,paddingLeft?: string,paddingRight?: string,maxWidth?: string,minWidth?: string,maxHeight?: string,minHeight?: string}} props
        */
        this.FOS = (props) => {
            if (typeof props == "object") {
                let toFile = "";
                var keys = Object.keys(props);
                var value = Object.values(props);
                let advancedSpecification = VerifySyntax();
                let SID = (element[0].styleId) ? element[0].styleId : (__classPrivateFieldGet(this, _ns_Dom_List_Cls_styleId, "f")) ? __classPrivateFieldGet(this, _ns_Dom_List_Cls_styleId, "f") : "";
                if (SID) {
                    EditTheOldCSS(SID);
                }
                else {
                    if (advancedSpecification.tag) {
                        toFile += `${advancedSpecification.tag}${(advancedSpecification.typeComplement == "class") ? `.${advancedSpecification.complement}` : (advancedSpecification.typeComplement == "type") ? `[${advancedSpecification.complement}` : ""}{\n\t`;
                    }
                    else {
                        toFile += `${(advancedSpecification.typeComplement == "class") ? `.${advancedSpecification.complement}` : (advancedSpecification.typeComplement == "type") ? `[${advancedSpecification.complement}` : ""}{\n\t`;
                    }
                    toFile = CreateCSS(toFile);
                    let objVerify = VerifyLinkID();
                    if (!objVerify.isExist) {
                        __classPrivateFieldSet(this, _ns_Dom_List_Cls_styleId, objVerify.randomId, "f");
                        element[0].styleId = objVerify.randomId;
                        GenBase64(toFile, objVerify.randomId);
                    }
                }
                function GenBase64(file, id, element) {
                    let contentType = "data:text/css;base64,";
                    let base64File = btoa(file);
                    base64File = contentType + base64File;
                    if (element) {
                        element.href = base64File;
                    }
                    else {
                        let link = createElm.CreateElm("link", { href: base64File, rel: "stylesheet", id: id });
                        link.Append(GetElm("head").to);
                    }
                }
                function VerifyLinkID() {
                    let randomId = GenRandomText(5, { templateMask: "##_##_#", firstChar: "s" });
                    let isExist = GetElm(`#${randomId}`).exist;
                    while (isExist) {
                        randomId = GenRandomText(5, { templateMask: "##_##_#", firstChar: "s" });
                        isExist = GetElm(`#${randomId}`).exist;
                    }
                    return {
                        randomId,
                        isExist
                    };
                }
                function EditTheOldCSS(styleId) {
                    let theElement = GetElm(`link#${styleId}`).to;
                    let oldContent = atob(theElement.href.replace("data:text/css;base64,", ""));
                    let arrCont = oldContent.split("\n");
                    // let indexToContinue = arrCont.indexOf("/*Continue Here*/")
                    toFile += `${arrCont[0]}\n`;
                    for (let i = 1; i < arrCont.length; i++) {
                        if (arrCont[i] != "\t/*Continue Here*/") {
                            toFile += `${arrCont[i]}\n`;
                        }
                        else {
                            break;
                        }
                    }
                    for (let ind = 0; ind < keys.length; ind++) {
                        if (ind != (keys.length - 1))
                            toFile += `\t${[keys[ind]]}: ${value[ind]};\n\t`;
                        else
                            toFile += `\t${[keys[ind]]}: ${value[ind]};\n`;
                    }
                    toFile += "\t/*Continue Here*/\n";
                    toFile += `}`;
                    GenBase64(toFile, styleId, theElement);
                }
                function CreateCSS(text) {
                    for (let ind = 0; ind < keys.length; ind++) {
                        if (ind != (keys.length - 1))
                            text += `${[keys[ind]]}: ${value[ind]};\n\t`;
                        else
                            text += `${[keys[ind]]}: ${value[ind]};\n`;
                    }
                    text += "\t/*Continue Here*/\n";
                    text += `}`;
                    return text;
                }
                function VerifySyntax() {
                    let recibe = specification.includes(".") ? specification.split(".") : specification;
                    recibe = recibe.includes("[") ? recibe.split("[") : recibe;
                    if (recibe[0] != "") {
                        return {
                            tag: recibe[0],
                            complement: recibe[1],
                            typeComplement: specification.includes("[type") ? "type" : (specification.includes(".")) ? "class" : "other"
                        };
                    }
                    else {
                        return {
                            complement: recibe[1],
                            typeComplement: specification.includes("[type") ? "type" : (specification.includes(".")) ? "class" : "other"
                        };
                    }
                }
            }
        };
        /**
        * Obter?? o conte??do do elemento, se html, obter?? as tags html, se txt, obter?? apenas o texto
        * @param {("html"|"txt")} type
        * @returns {string}
        */
        this.GetContent = (type) => {
            let ret = new Array();
            for (let e = 0; e < element.length; e++) {
                switch (type) {
                    case "html":
                        ret.push(element[e].innerHTML);
                        break;
                    case "txt":
                        ret.push(element[e].innerText);
                        break;
                    default:
                        let a = "Error - o tipo ?? inval??do";
                        console.error("Error - o tipo ?? inval??do");
                        ret.push(a);
                        break;
                }
            }
            return ret;
        };
        /**
        * Obter?? o conte??do do elemento em html
        * @returns {string}
        */
        this.GetHtml = () => {
            let ret = new Array();
            for (let e = 0; e < element.length; e++) {
                ret.push(element[e].innerHTML);
            }
            return ret;
        };
        /**
        * Obter?? o conte??do do elemento em texto
        * @returns {string}
        */
        this.GetTXT = () => {
            let ret = new Array();
            for (let e = 0; e < element.length; e++) {
                ret.push(element[e].innerText);
            }
            return ret;
        };
        /**
        * Obter?? o valor do atributo value
        * @returns {string}
        */
        this.GetVal = () => {
            let ret = new Array();
            for (let e = 0; e < element.length; e++) {
                ret.push(element[e].value);
            }
            return ret;
        };
        /**
        * Sobrepor??(escrever?? um novo) o valor do atributo value
        * @param {string} value - valor a ser atribu??do
        */
        this.SetVal = (value) => {
            for (let e = 0; e < element.length; e++) {
                element[e].value = value;
            }
        };
        /**
        * Escrever?? o conte??do em HTML no elemento sobrescrevendo o valor anterior
        *  @param {string} content - valor a ser escrito
        */
        this.SetHTML = (content) => {
            for (let e = 0; e < element.length; e++) {
                element[e].innerHTML = content;
            }
        };
        /**
        * Escrever?? o conte??do em TEXTO no elemento sobrescrevendo o valor anterior
        * @param {string} content - valor a ser escrito
        */
        this.SetTXT = (content) => {
            for (let e = 0; e < element.length; e++) {
                element[e].innerText = content;
            }
        };
        /**
        * Escrever?? o conte??do em HTML no elemento, sem sobrepor o conte??do anterior
        *  @param {string} content - valor a ser escrito
        */
        this.AddHTML = (content) => {
            for (let e = 0; e < element.length; e++) {
                element[e].innerHTML += content;
            }
        };
        /**
        * Escrever?? o conte??do em TXT no elemento, sem sobrepor o conte??do anterior
        *  @param {string} content - valor a ser escrito
        */
        this.AddTXT = (content) => {
            for (let e = 0; e < element.length; e++) {
                element[e].innerText += content;
            }
        };
        /**
        * Ir?? adicionar uma(ou mais) classe ao elemento
        * @param {...string} target
        */
        this.SetClass = (target) => {
            for (let e = 0; e < element.length; e++) {
                if (Array.isArray(target)) {
                    target.forEach(elm => {
                        let a = element[e].classList.contains(elm);
                        switch (a) {
                            case false:
                                element[e].classList.add(elm);
                                break;
                            default:
                                console.error("Esta classe j?? existe neste elemento!");
                                break;
                        }
                    });
                }
                else {
                    let a = element[e].classList.contains(target);
                    switch (a) {
                        case false:
                            element[e].classList.add(target);
                            break;
                        default:
                            console.error("Esta classe j?? existe neste elemento!");
                            break;
                    }
                }
            }
        };
        /**
        * Ir?? remover uma(ou mais) classe do elemento
        * @param {...string} target
        */
        this.RmClass = (target) => {
            for (let e = 0; e < element.length; e++) {
                if (Array.isArray(target)) {
                    target.forEach(elm => {
                        let a = element[e].classList.contains(elm);
                        switch (a) {
                            case true:
                                element[e].classList.remove(elm);
                                break;
                            default:
                                console.error("Esta classe n??o existe neste elemento!");
                                break;
                        }
                    });
                }
                else {
                    let a = element[e].classList.contains(target);
                    switch (a) {
                        case true:
                            element[e].classList.remove(target);
                            break;
                        default:
                            console.error("Esta classe n??o existe neste elemento!");
                            break;
                    }
                }
            }
        };
        /**
        * Ir?? adicionar um atributo ao elemento
        * @param {string} target
        */
        this.SetAttr = (target, value) => {
            for (let e of element) {
                e.setAttribute(target, value);
            }
        };
        /**
        * Ir?? remover um atributo ao elemento
        * @param {string} target
        */
        this.RmAttr = (target) => {
            for (let e of element) {
                e.removeAttribute(target);
            }
        };
        this.Append = (feather) => {
            if (!feather) {
                feather = document.body;
                Debug({ type: 2 }, `Como n??o passou o elemento pai, o elemento solicitado, foi adicionada ao body.`);
                for (let e of element) {
                    feather.appendChild(e);
                }
            }
            else {
                for (let e of element) {
                    feather.appendChild(e);
                }
            }
        };
        this.Remove = () => {
            for (let e of element) {
                e.remove();
            }
        };
        this.GetChild = () => {
            const itemReturn = [];
            let index = 0;
            for (let i of element) {
                itemReturn[index] = new Array();
                for (let j of i?.children) {
                    itemReturn[index].push(j);
                }
                index++;
            }
            return itemReturn;
        };
    }
}
_ns_Dom_List_Cls_styleId = new WeakMap();
// Get The HTML Elements
class get_Elm_Cls extends ns_Dom_Uni_Cls {
    constructor(syntax) {
        let elm = document.querySelector(syntax);
        super(elm, true);
        if (elm) {
            this.exist = true;
        }
        else {
            this.exist = false;
        }
        switch (syntax[0]) {
            case ".":
                this.getSyntax = "class";
                break;
            case "#":
                this.getSyntax = "id";
                break;
            default:
                if (syntax.includes("[name="))
                    this.getSyntax = "name";
                else if (syntax.includes("[type="))
                    this.getSyntax = "type";
                else
                    this.getSyntax = "other";
        }
    }
}
class get_List_Elm_Cls extends ns_Dom_List_Cls {
    constructor(syntax) {
        let elms = document.querySelectorAll(syntax);
        super(elms, syntax);
        if (elms) {
            this.elms = new Array();
            for (let elm of elms) {
                this.elms.push(new ns_Dom_Uni_Cls(elm, true));
            }
            this.syntaxGet = syntax;
        }
        switch (syntax[0]) {
            case ".":
                this.getSyntax = "class";
                break;
            default:
                if (syntax.includes("[type="))
                    this.getSyntax = "type";
                else
                    this.getSyntax = "other";
        }
    }
}
class create_Element_Cls extends ns_Dom_Uni_Cls {
    constructor(tag, preDefinition) {
        let elm = document.createElement(tag);
        super(elm, true);
        if (preDefinition) {
            let preKey = Object.keys(preDefinition);
            let preValue = Object.values(preDefinition);
            for (const keyPre in preKey) {
                let attr = preKey[keyPre];
                switch (attr) {
                    case "id":
                        this.SetID(preValue[keyPre]);
                        break;
                    case "class":
                        this.SetClass(preValue[keyPre]);
                        break;
                    case "style":
                        this.NOS(preValue[keyPre]);
                        break;
                    case "text":
                        this.SetTXT(preValue[keyPre]);
                        break;
                    default:
                        elm[attr] = preValue[keyPre];
                        break;
                }
            }
        }
    }
}
// Especial Class
class NS_Component {
    constructor(props, preElm, autoStart = true, defaultStyle = createElm.defaultStyle) {
        _NS_Component_proprieties.set(this, void 0);
        _NS_Component_defaultStyle.set(this, void 0);
        __classPrivateFieldSet(this, _NS_Component_proprieties, props ? props : new Object(), "f");
        __classPrivateFieldSet(this, _NS_Component_defaultStyle, { defaultStyle: defaultStyle }, "f");
        this.feather = preElm?.feather ? preElm.feather : Div({});
        this.main = preElm?.main ? preElm.main : GetElm("body");
        this.GetDefaultStyle = createElm.GetDefaultStyle.bind(__classPrivateFieldGet(this, _NS_Component_defaultStyle, "f"));
        this.SetDefaultStyle = createElm.SetDefaultStyle.bind(__classPrivateFieldGet(this, _NS_Component_defaultStyle, "f"));
        if (autoStart)
            this.Start();
    }
    /**
     * Obtenha os Elementos NS do componente
     */
    GetNSElement() {
        let name = Object.keys(this);
        let value = Object.values(this);
        let index = 0;
        const returnItem = {};
        for (let item of value) {
            if (item.domBy === "NhacScript Module") {
                returnItem[name[index]] = item;
            }
            index++;
        }
        return returnItem;
    }
    /**
     * Adicione uma propriedade
     */
    SetProps(name, value) {
        let item = __classPrivateFieldGet(this, _NS_Component_proprieties, "f");
        item[name] = value;
        let className = this.__proto__["constructor"].toString();
        className = className.split('\n');
        for (let line of className) {
            const invalidLines = ["var ", "let ", "const ", "{", "}", "[", "]"];
            if (line.includes("this.GetProps")) {
                for (let invalid of invalidLines) {
                    if (line.includes(invalid)) {
                        continue;
                    }
                }
                eval(line);
            }
        }
    }
    /**
     * Obtenha uma ou todas as propriedades
     */
    GetProps(propName) {
        let item = __classPrivateFieldGet(this, _NS_Component_proprieties, "f");
        if (propName)
            return item[propName] ? item[propName] : undefined;
        else
            return item;
    }
    /**
     * Obtenha todos os atributos string do componente
     */
    GetStringKeys() {
        let name = Object.keys(this);
        let value = Object.values(this);
        let index = 0;
        const returnItem = {};
        for (let item of value) {
            if (typeof item == "string") {
                returnItem[name[index]] = item;
            }
            index++;
        }
        return returnItem;
    }
    /**
     * Obtenha todos os atributos num??ricos do componente
     */
    GetNumKeys() {
        let name = Object.keys(this);
        let value = Object.values(this);
        let index = 0;
        const returnItem = {};
        for (let item of value) {
            if (typeof item == "number") {
                returnItem[name[index]] = item;
            }
            index++;
        }
        return returnItem;
    }
    /**
     * Obtenha todos os atributos Booleanos do componente
     */
    GetBoolKeys() {
        let name = Object.keys(this);
        let value = Object.values(this);
        let index = 0;
        const returnItem = {};
        for (let item of value) {
            if (typeof item == "boolean") {
                returnItem[name[index]] = item;
            }
            index++;
        }
        return returnItem;
    }
    /**
     * Obtenha o elemento principal/pai do seu componente
     */
    GetFeather() {
        return this.feather;
    }
    /**
     * Adicione o elemento principal/pai do seu componente
     */
    SetFeather(feather) {
        this.feather = feather;
    }
    /**
     * Obtenha o elemento principal onde o seu componente estar??
     */
    GetContainer() {
        return this.main;
    }
    /**
     * Adicione o elemento principal onde o seu componente estar??
     */
    SetContainer(container) {
        this.main = container;
    }
    /**
     * Renderize automaticamente os elementos pai, e principal
     */
    Start() {
        let feather = this.feather;
        this.main.SetChild(feather);
    }
    Remove() {
        this.feather.Remove();
    }
}
_NS_Component_proprieties = new WeakMap(), _NS_Component_defaultStyle = new WeakMap();
// Function
// Get The DOM
/**
 * Obtenha o DOM para manipular um elemento HTML
 * @param {Element|Node} element - Passe o elemento a ser manipulado
 * @returns {ns_Dom_Uni_Cls}
 */
function GetDom(element) {
    let elm = new ns_Dom_Uni_Cls(element);
    return elm;
}
/**
 * Obtenha o DOM para uma NodeList
 * @param {NodeList} element - Passe a NodeList a ser manipulada
 * @returns {ns_Dom_List_Cls}
 */
function GetListDom(element, specification) {
    if (specification) {
        let elm = new ns_Dom_List_Cls(element, specification);
        return elm;
    }
    else {
        let elm = new ns_Dom_List_Cls(element);
        return elm;
    }
}
// Get The HTML Elements
/**
 * Obtenha elementos HTML com o NhacScript para melhor manipula????o
 * @param {string} syntax - use a mesma sintaxe que usaria no querySelector
 * @returns {get_Elm_Cls}
 */
function GetElm(syntax) {
    let element = new get_Elm_Cls(syntax);
    return element;
}
/**
 * Obtenha um array com v??rios elementos HTML com o NhacScript para melhor manipula????o
 * @param {string} syntax - use a mesma sintaxe que usaria no querySelectorAll
 * @returns {get_List_Elm_Cls}
 */
function GetListElm(syntax) {
    let element = new get_List_Elm_Cls(syntax);
    return element;
}
// Especial Function
/**
 * Renderize um componente no seu DOM
 * @param {get_Elm_Cls | create_Element_Cls} feather  - Elemento que ir?? conter todo seu componente
 * @param {get_Elm_Cls | create_Element_Cls | string} contents - Componentes, elementos_NS, Elemento DOM ou string com nota????o HTML
 * Valor de contents ?? sequencial, isso ?? Render(feather, MeuComponente1, MeuComponente2, ...) - o ... quer dizer que pode ter mais valores
 * Caso passe uma classe/componente que herde o NS_Component como um dos itens de contents, ele retornar?? o componente criado em um Array.
 * Permitindo a manipula????o
*/
function Render(feather, ...contents) {
    const returnComponent = [];
    feather.SetHTML("");
    for (let content of contents) {
        try {
            let item = new content();
            item.SetContainer(feather);
            feather.SetChild(item.feather);
            returnComponent.push(item);
        }
        catch (error) {
            if (typeof content === "string"){
                feather.AddHTML(content);
            }
            else{
                feather.SetChild(content);
            }
        }
    }
    return returnComponent;
}
// Object Manipulator
// Protect
/**
 * Pro??ba a rescri????o nas chaves dos seus objetos
 * @param {object} obj - Objeto a ser modificado
 * @param {string|string[]} keys - Chave ou chaves a serem modificadas
 * use * como argumento de keys para modificar todas
 */
function NoRewriteObject(obj, keys) {
    function protectFuncWrite(arrayKey) {
        if (arrayKey == void 0)
            arrayKey = Object.keys(obj);
        for (let privKey of arrayKey) {
            Object.defineProperties(obj, {
                [privKey]: {
                    writable: false
                }
            });
        }
    }
    if (keys == "*") {
        protectFuncWrite();
    }
    else if (Array.isArray(keys)) {
        protectFuncWrite(keys);
    }
    else if (typeof keys == "string") {
        protectFuncWrite([keys]);
    }
    return obj;
}
/**
* Pro??ba a enumera????o nas chaves dos seus objetos
* @param {object} obj - Objeto a ser modificado
* @param {string|string[]} keys - Chave ou chaves a serem modificadas
* use * como argumento de keys para modificar todas
*/
function NoEnumerableObject(obj, keys) {
    function protectFuncEnu(arrayKey) {
        if (arrayKey == void 0)
            arrayKey = Object.keys(obj);
        for (let privKey of arrayKey) {
            Object.defineProperties(obj, {
                [privKey]: {
                    enumerable: false
                }
            });
        }
    }
    if (keys == "*") {
        protectFuncEnu();
    }
    else if (Array.isArray(keys)) {
        protectFuncEnu(keys);
    }
    else if (typeof keys == "string") {
        protectFuncEnu([keys]);
    }
    return obj;
}
/**
* Pro??ba qualquer altera????o nas chaves dos seus objetos
* @param {object} obj - Objeto a ser modificado
* @param {string|string[]} keys - Chave ou chaves a serem modificadas
* use * como argumento de keys para modificar todas
*/
function PrivateAllObject(obj, keys) {
    function protectFunc(arrayKey) {
        if (arrayKey == void 0)
            arrayKey = Object.keys(obj);
        for (let privKey of arrayKey) {
            Object.defineProperties(obj, {
                [privKey]: {
                    enumerable: false,
                    writable: false
                }
            });
        }
    }
    if (keys == "*") {
        protectFunc();
    }
    else if (Array.isArray(keys)) {
        protectFunc(keys);
    }
    else if (typeof keys == "string") {
        protectFunc([keys]);
    }
    return obj;
}
// DeProtect
/**
 * Permita a rescri????o nas chaves dos seus objetos
 * @param {object} obj - Objeto a ser modificado
 * @param {string|string[]} keys - Chave ou chaves a serem modificadas
 * use * como argumento de keys para modificar todas
 */
function RewriteObject(obj, keys) {
    function protectFuncWrite(arrayKey) {
        if (arrayKey == void 0)
            arrayKey = Object.keys(obj);
        for (let privKey of arrayKey) {
            Object.defineProperties(obj, {
                [privKey]: {
                    writable: true
                }
            });
        }
    }
    if (keys == "*") {
        protectFuncWrite();
    }
    else if (Array.isArray(keys)) {
        protectFuncWrite(keys);
    }
    else if (typeof keys == "string") {
        protectFuncWrite([keys]);
    }
    return obj;
}
/**
 * Permita a enumera????o nas chaves dos seus objetos
 * @param {object} obj - Objeto a ser modificado
 * @param {string|string[]} keys - Chave ou chaves a serem modificadas
 * use * como argumento de keys para modificar todas
 */
function EnumerableObject(obj, keys) {
    function protectFuncEnu(arrayKey) {
        if (arrayKey == void 0)
            arrayKey = Object.keys(obj);
        for (let privKey of arrayKey) {
            Object.defineProperties(obj, {
                [privKey]: {
                    enumerable: true
                }
            });
        }
    }
    if (keys == "*") {
        protectFuncEnu();
    }
    else if (Array.isArray(keys)) {
        protectFuncEnu(keys);
    }
    else if (typeof keys == "string") {
        protectFuncEnu([keys]);
    }
    return obj;
}
/**
 * Permita qualquer altera????o nas chaves dos seus objetos
 * @param {object} obj - Objeto a ser modificado
 * @param {string|string[]} keys - Chave ou chaves a serem modificadas
 * use * como argumento de keys para modificar todas
 */
function PublicAllObject(obj, keys) {
    function protectFunc(arrayKey) {
        if (arrayKey == void 0)
            arrayKey = Object.keys(obj);
        for (let privKey of arrayKey) {
            Object.defineProperties(obj, {
                [privKey]: {
                    enumerable: true,
                    writable: true
                }
            });
        }
    }
    if (keys == "*") {
        protectFunc();
    }
    else if (Array.isArray(keys)) {
        protectFunc(keys);
    }
    else if (typeof keys == "string") {
        protectFunc([keys]);
    }
    return obj;
}
// Verify Types
/**
 * Verifica se o elemento ?? um n??mero ou n??o
 * @param {string} target - Valor a ser analisado
 * @returns {true|false}
 */
function IsNum(target) {
    return (target < 0) || (target >= 0);
}
/**
 * Verifica se o elemento ?? um string ou n??o
 * @param {string} target - Valor a ser analisado
 * @returns {true|false}
 */
/**
 * Verifica se o elemento ?? um Objeto(n??o array) ou n??o
 * @param {string} target - Valor a ser analisado
 * @returns {true|false}
 */
function IsObj(target) {
    return (typeof target === "object" && Array.isArray(target) === false);
}
/**
 * Verifica se o elemento ?? um Array ou n??o
 * @param {string} target - Valor a ser analisado
 * @returns {true|false}
 */
function IsArray(target) {
    return Array.isArray(target) === true;
}
/**
 * Verifica se o elemento ?? uma matriz ou n??o
 * @param {string} target - Valor a ser analisado
 * @returns {true|false}
 */
function IsMatriz(target) {
    let is = new Array();
    if (IsArray(target)) {
        is.push(true);
        for (let key of target) {
            is.push(IsArray(key));
        }
    }
    return !is.includes(false);
}
/**
 * Verifica o tipo da vari??vel
 * @returns {{special?:string, literal: string, probability?: string}}
 */
function TypeVar(target) {
    let typeLiterals = typeof target;
    let objReturn = new Object();
    if (typeLiterals == "function") {
        objReturn = {
            probability: "Class or Function",
            literal: typeLiterals
        };
    }
    else if (typeLiterals == "object") {
        if (IsArray(target)) {
            objReturn = {
                special: "Array",
                literal: typeLiterals
            };
        }
        else {
            objReturn = {
                special: "Object Js",
                literal: typeLiterals
            };
        }
    }
    else {
        if (typeLiterals == "string" && IsNum(target)) {
            objReturn = {
                special: "str-num",
                literal: typeLiterals
            };
        }
        else {
            objReturn = {
                literal: typeLiterals
            };
        }
    }
    return objReturn;
}
// Math Function
/**
 * Gere um n??mero aleat??rio
 * @param {number} min bote o valor m??nimo a ser retornado
 * @param {number} max bote o valor m??ximo a ser retornado
 * @returns {number}
 */
function GenRandom(min, max) {
    return RoundNum(Math.random() * (max - min) + min);
}
/**
 * Arredonde o n??mero de forma l??gica
 * @param {number} num
 * @returns {number}
 */
function RoundNum(num) {
    let numbers = num.toString().split(".");
    if ((numbers[1] == undefined && IsNum(numbers[0])) || ToNum(numbers[1]) <= 4)
        return convertor.ToInt(`${num}`);
    else if (ToNum(numbers[1]) >= 5)
        return convertor.ToInt(`${num}`) + 1;
    else
        throw new Error("Opera????o inv??lida!");
}
/**
 * Arredonde o n??mero para baixo
 * EX: 1.6
 * logica: 2.0 ou 2
 * retorno 1.0 ou 1
 * @param {number} num
 * @returns {number}
 */
function RoundNumDown(num) {
    return convertor.ToInt(`${num}`);
}
/**
* Arredonde o n??mero para cima
* EX: 1.2
* logica: 1.0 ou 1
* retorno 2.0 ou 2
* @param {number} num
* @returns {number}
*/
function RoundNumUp(num) {
    return (convertor.ToInt(`${num}`) + 1);
}
// String and Array Working
/**
 * Gere um texto aleat??rio, defina o limite m??ximo dele.
 * @param {number} maxLength - Quantidade de caracteres m??ximo
 * @param {{templateMask?: string, noNum?: boolean, noLowerChar?: boolean, noUpChar?: boolean, firstChar?: string}} settings - Defina as configura????es
 * O atributo templateMask do settings defina um tipo de texto para ser mascarado com o @function MaskText
 * O Atributo noNum deve ser um valor booleano, se for true, ent??o n??o ser?? gerado n??meros
 * O Atributo noLowerChar deve ser um valor booleano, se for true, ent??o n??o ser?? gerado letras minusculas
 * O Atributo noUpChar deve ser um valor booleano, se for true, ent??o n??o ser?? gerado letras minusculas
 * O Atributo firstChar deve ser um valor em string, que deve ser o primeiro car??cter.
 * @returns {string}
 */
function GenRandomText(maxLength, settings) {
    let allChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let endIndexOf = {
        upperLetter: allChar.indexOf("Z"),
        loweLetter: allChar.indexOf("z"),
        numberLetter: allChar.indexOf("9"),
    };
    let ranText = "";
    for (let l = 0; l < maxLength; l++) {
        let ranNum = GenRandom(0, allChar.length);
        if (settings) {
            if (settings.firstChar && l == 0) {
                ranText += settings.firstChar;
                continue;
            }
            if (settings.noNum == true && IsNum(allChar[ranNum])) {
                l--;
                continue;
            }
            if (settings.noLowerChar == true && (ranNum <= endIndexOf.loweLetter && ranNum > endIndexOf.upperLetter)) {
                l--;
                continue;
            }
            if (settings.noUpChar == true && ranNum <= endIndexOf.upperLetter) {
                l--;
                continue;
            }
            if (!allChar[ranNum]) {
                l--;
                continue;
            }
        }
        ranText += allChar[ranNum];
    }
    if (settings) {
        if (settings.templateMask) {
            ranText = MaskText(ranText, settings.templateMask);
        }
    }
    return ranText;
}
/**
 * Mascare sua string, defina o template exemplo:
 * "###.###.###-##"
 * E seu texto, exemplo:
 * "00000000000"
 * e virar??:
 * "000.000.000-00"
 * @param {string} text - Texto a ser mascarado
 * @param {string} template - Templete - use as # para definir o valor para ser substitu??do
 * @returns {string}
 */
function MaskText(text, template) {
    let indexText = text.length;
    let indexMask = FindAllIndex(template, "#").length;
    let returnText = template;
    if (indexMask == indexText) {
        for (const textImplants of text) {
            returnText = returnText.replace("#", textImplants);
        }
    }
    else {
        Debug({ type: 1, forceStop: true }, "O template n??o coincide com o tamanho do texto a ser implementado!");
    }
    return returnText;
}
/**
 * Uma das coisas mais chatas, ?? verificar os arrays, e essa fun????o retorna todos os indices de um determinado valor no array ou string.
 * Desde que, haja valores repetidos.
 * @param {any} to - Valor a ser pesquisado
 * @param {string|any} ofItem - Vetor m??e
 * @returns {number[]}
 */
function FindAllIndex(ofItem, to) {
    let found = new Array();
    let counter = 0;
    for (let item of ofItem) {
        let is = to == item;
        if (is) {
            found.push(counter);
        }
        counter++;
    }
    return found;
}
// MultiPlatform
/**
 * Defina fun????es para dispositivos nomeados como Desktops a fun????o que ocorrer?? somente nos aparelho com a tela maior que 800px
 * @param {Function} callback
 */
function SetDesktop(callback) {
    if (screen.width <= 800) {
        callback();
    }
}
/**
 * Defina fun????es para dispositivos nomeados como Celulares Mobile a fun????o que ocorrer?? somente nos aparelho com a tela menor que 801px
 * @param {Function} callback
 */
function SetMobile(callback) {
    if (screen.width >= 801) {
        callback();
    }
}
/**
 * Defina fun????es para dispositivos de tamanho diferente
 * @param {Function} mobile Defina fun????o que ocorrer?? somente nos aparelho com a tela menos que 801px
 * @param {Function} desktop Defina fun????o que ocorrer?? somente nos aparelho com a tela mais que 800px
 */
function SetResponsive(mobile, desktop) {
    SetMobile(mobile);
    SetDesktop(desktop);
}
// LocalStorage Manipulation
/**
* Remova o local storage
* @param {string} nameLocal - Nome do localStorage
*/
function RemoveLocal(nameLocal) {
    localStorage.removeItem(nameLocal);
}
/**
 * Adicione valores ao local storage
 * @param {string} localName - Nome do localStorage
 * @param {any} value - Valor a ser adicionado
 * @param {boolean} append - Esse valor vai ser adicionado ou sobrepor?? o anterior?
 * Se true, os valores ser??o concatenados, se false, o valor anterior ser?? removido e o novo adicionado
 */
function SetLocal(localName, value, append = false) {
    if (typeof value == "object")
        ToJSON(value);
    if (append == false) {
        localStorage[localName] = value;
    }
    else {
        localStorage[localName] += value;
    }
}
/**
 * Obtenha os valores do localStorage;
 * Obtenha pre-convertido ou no tipo default(string)
 * @param {string} localName - Nome do localStorage
 * @param {{convert: boolean, targetType: "str"|"obj"|"num"|"JSON"|"obj"}} setting - Em convert defina se vai converter ou n??o, em targetType, defina o tipo da convers??o de retorno.
 * @returns {any}
 */
function GetLocal(localName, setting) {
    let localValue = localStorage[localName];
    if (localValue == "" || localValue == undefined) {
        Debug({ type: 1, forceStop: true }, `O localStorage: ${localName} n??o foi encontrado ou o valor armazenado ?? invalido`);
        return "";
    }
    else {
        if (setting && setting.convert == true) {
            try {
                localValue = Conversor({ to: setting.targetType, value: localValue });
                return localValue;
            }
            catch (err) {
                Debug({ type: 1, forceStop: true }, `Imposs??vel converter o valor de ${localName}, para ${setting.targetType}, ent??o lhe foi retornado o tipo default do localStorage(string)`);
                throw new Error(err);
            }
        }
        return localValue;
    }
}
// Constant declaration
/**
 * Objeto padr??o do NhacScript para convers??o de tipo
*/
const convertor = {
    /**
     * Conversor geral, converte para qualquer tipo
     * @param {{to:("str"|"obj"|"num"|"JSON"|"obj"), value:any}} set - no set ponha: obj | str | num | int | float | bool
     * obj - Para objeto ; str - para string
     * num - Para n??mero ; int - para inteiro
     * float - Para num flutuante ; bool - para booleano
     */
    Conversor: (set) => {
        switch (set.to) {
            case "str":
                return convertor.ToStr(set.value);
            case "obj":
                return convertor.ToObj(set.value);
            case "num":
                return convertor.ToNum(set.value);
            case "JSON":
                return convertor.ToJSON(set.value);
            default:
                return "Tipo inv??lido";
        }
    },
    ToStr: (value) => {
        if (typeof value == "number") {
            return value.toString();
        }
        else if (typeof value == "boolean") {
            switch (value) {
                case true:
                    return "true";
                case false:
                    return "false";
                default:
                    return `${value}`;
                    break;
            }
        }
        else {
            return `${value}`;
        }
    },
    ToNum: (value) => {
        if (value <= 0 || value > 0) {
            return Number(value);
        }
        else {
            throw new Error("Este valor pode virar um n??mero!");
        }
    },
    ToInt: (value) => {
        try {
            let confNum = convertor.ToNum(value);
            let num = confNum.toString();
            return typeof num == "string" ? parseInt(num) : -1;
        }
        catch (error) {
            throw new Error("Este valor pode virar um n??mero inteiro!");
        }
    },
    ToFloat: (value) => {
        try {
            let confNum = convertor.ToNum(value);
            let num = confNum.toString();
            return typeof num == "string" ? parseFloat(num) : 0;
        }
        catch (error) {
            throw new Error("Este valor pode virar um n??mero real!");
        }
    },
    ToJSON: (obj) => {
        if (typeof obj == "object") {
            return JSON.stringify(obj);
        }
        else {
            throw new Error("O valor passado como argumento n??o pode virar um JSON!");
        }
    },
    ToObj: (obj) => {
        try {
            return JSON.parse(obj);
        }
        catch (error) {
            throw new Error("O valor passado como argumento n??o pode virar um Objeto!");
        }
    }
};
/**
 * Objeto padr??o do NhacScript para entrada de texto
*/
const inputObj = {
    /**
     * Pergunte algo ao usu??rio e tenha um retorno de um texto
     * @param {string} question - Pergunta a ser feita
     * @returns {string|null}
    */
    Ask: (question) => {
        return prompt(question);
    },
    /**
     * Pergunte algo ao usu??rio e tenha um retorno de um n??mero
     * @param {string} question - Pergunta a ser feita
     * @returns {number} - se retornar -10 de forma n??o esperada, ?? porque o usu??rio n??o digitou um n??mero
     */
    AskNum: (question) => {
        let userResponse = prompt(question);
        let isANumber = IsNum(userResponse);
        switch (isANumber) {
            case true:
                userResponse = (userResponse != null) ? ToNum(userResponse) : -10;
                break;
            default:
                while (!isANumber) {
                    userResponse = prompt(question);
                    isANumber = IsNum(userResponse);
                }
                userResponse = (userResponse != null) ? ToNum(userResponse) : -10;
                break;
        }
        return userResponse;
    },
    AskBool: (question) => {
        return confirm(question);
    }
};
/**
 * Objeto padr??o do NhacScript para sa??da de texto
*/
const outObj = {
    /**
     * Por baixo dos panos usa o objeto console original, por??m tudo ?? convertido em texto;
     * Voc?? pode configurar a sa??da, definindo os tipos (0: log, 1: error, 2: warn, 3: table)
     * @param {{type:number, forceStop?: boolean}} settings - Configure a sa??da
     * @param message - bote suas mensagens
     * @returns
     */
    Debug: (settings, ...message) => {
        var msg = "";
        function verifyObj(val) {
            if (typeof val == "object")
                return val;
            else if (typeof val == "string")
                try {
                    return JSON.parse(val);
                }
                catch (_a) {
                    throw new Error("N??o ?? poss??vel converter o valor para objeto!");
                }
        }
        function appendMsg() {
            if (message.length == 1) {
                msg = message[0];
            }
            else if (message.length > 1) {
                for (let sendMes of message) {
                    if (typeof sendMes == "object") {
                        msg += JSON.stringify(sendMes);
                    }
                    else {
                        msg += sendMes;
                    }
                    msg += " ";
                }
            }
        }
        if (typeof settings != "object") {
            message.push(settings);
            settings = { type: 0 };
        }
        else if (typeof settings == "object") {
            appendMsg();
            switch (settings.type) {
                case 0:
                    Log(msg);
                    break;
                case 1:
                    if (settings.type == 1 && settings.forceStop == true) {
                        throw new Error(msg);
                    }
                    Err(msg);
                    break;
                case 2:
                    Warn(msg);
                    break;
                case 3:
                    let objPrint = verifyObj(msg);
                    Table(objPrint);
                    break;
                default:
                    throw new Error(`O tipo ${settings.type} ?? invalido no Debug!`);
                    break;
            }
        }
    },
    /**
    * Por baixo dos panos usa o objeto console.log original, por??m tudo ?? convertido em texto;
    * @param message - bote suas mensagens
    * @returns
    */
    Log: (...message) => {
        var msg = "";
        if (message.length == 1) {
            msg = message[0];
        }
        else if (message.length > 1) {
            for (let i = 0; i < message.length; i++) {
                if (i < (message.length - 1)) {
                    if (typeof message[i] == "object") {
                        msg += JSON.stringify(message[i]);
                    }
                    else {
                        msg += message[i];
                    }
                    msg += " ";
                }
                else {
                    if (typeof message[i] == "object") {
                        msg += JSON.stringify(message[i]);
                    }
                    else {
                        msg += message[i];
                    }
                }
            }
        }
        console.log(msg);
    },
    /**
     * Mostrar?? uma tabela decorada para objetos e array
     * @param {object} obj Objeto a ser mostrado
     * @returns object
     */
    Table: (obj) => {
        if (typeof obj == "object") {
            if (Array.isArray(obj) == true) {
                Log("Depurando Array:");
                console.table(obj);
            }
            else {
                Log("Depurando Objeto:");
                console.table(obj);
            }
        }
        else {
            throw new Error("O Argumento n??o ?? um objeto!");
        }
    },
    /**
    * Exiba uma mensagem de erro
    * @param message - bote suas mensagens
    * @returns
    */
    Err: (message) => {
        var msg = message;
        if (message.length == 1) {
            msg = message[0];
        }
        else if (message.length > 1) {
            for (let i = 0; i < message.length; i++) {
                if (i < (message.length - 1)) {
                    if (typeof message[i] == "object") {
                        msg += JSON.stringify(message[i]);
                    }
                    else {
                        msg += message[i];
                    }
                    msg += " ";
                }
                else {
                    if (typeof message[i] == "object") {
                        msg += JSON.stringify(message[i]);
                    }
                    else {
                        msg += message[i];
                    }
                }
            }
        }
        console.error(msg);
    },
    /**
    * Exiba uma mensagem de aviso
    * @param message - bote suas mensagens
    * @returns
    */
    Warn: (message) => {
        var msg = message;
        if (message.length == 1) {
            msg = message[0];
        }
        else if (message.length > 1) {
            for (let i = 0; i < message.length; i++) {
                if (i < (message.length - 1)) {
                    if (typeof message[i] == "object") {
                        msg += JSON.stringify(message[i]);
                    }
                    else {
                        msg += message[i];
                    }
                    msg += " ";
                }
                else {
                    if (typeof message[i] == "object") {
                        msg += JSON.stringify(message[i]);
                    }
                    else {
                        msg += message[i];
                    }
                }
            }
        }
        console.warn(msg);
    },
    Dir: (object) => {
        console.dir(object);
    }
};
/**
 * Crie elementos HTML em poucos texto
 */
const createElm = {
    /**
     * Crie qualquer tag
     * @param {string} tag use os sinais < text > para definir a tag.
     * @param {{value?: string, style?: {background?: string,backgroundColor?: string,backgroundPosition?: string,color?: string,textAlign?: string,textDecoration?: string,display?: string,margin?: string,marginTop?: string,marginBottom?: string,marginLeft?: string,marginRight?: string,padding?: string,paddingTop?: string,paddingBottom?: string,paddingLeft?: string,paddingRight?: string,maxWidth?: string,minWidth?: string,maxHeight?: string,minHeight?: string},text?: string, name?: string, id?: string,class?: string}} preDefinition - Predefini????o
     * @returns
     */
    CreateElm: (tag, preDefinition) => {
        let create = new create_Element_Cls(tag, preDefinition);
        return create;
    },
    /**
     * Crie um bot??o
     * @param {{value?: string, style?: {background?: string,backgroundColor?: string,backgroundPosition?: string,color?: string,textAlign?: string,textDecoration?: string,display?: string,margin?: string,marginTop?: string,marginBottom?: string,marginLeft?: string,marginRight?: string,padding?: string,paddingTop?: string,paddingBottom?: string,paddingLeft?: string,paddingRight?: string,maxWidth?: string,minWidth?: string,maxHeight?: string,minHeight?: string},text?: string, name?: string, id?: string,class?: string}} preDefinition - Predefini????o
     * @returns
     */
    Btn: (preDefinition) => {
        if (!preDefinition || !preDefinition.style && !preDefinition.class) {
            if (!preDefinition) {
                preDefinition = new Object();
            }
            if (!preDefinition.style && !preDefinition.class) {
                preDefinition.style = createElm.GetDefaultStyle("btn");
            }
        }
        let create = createElm.CreateElm("button", preDefinition);
        return create;
    },
    /**
     * Crie um input
     * @param {{value?: string, style?: {background?: string,backgroundColor?: string,backgroundPosition?: string,color?: string,textAlign?: string,textDecoration?: string,display?: string,margin?: string,marginTop?: string,marginBottom?: string,marginLeft?: string,marginRight?: string,padding?: string,paddingTop?: string,paddingBottom?: string,paddingLeft?: string,paddingRight?: string,maxWidth?: string,minWidth?: string,maxHeight?: string,minHeight?: string},text?: string, name?: string, id?: string,class?: string}} preDefinition - Predefini????o
     * @returns
     */
    Input: (preDefinition) => {
        if (!preDefinition || !preDefinition.style && !preDefinition.class) {
            if (!preDefinition) {
                preDefinition = new Object();
            }
            if (!preDefinition.style && !preDefinition.class) {
                preDefinition.style = createElm.GetDefaultStyle("input");
            }
        }
        let create = createElm.CreateElm("input", preDefinition);
        return create;
    },
    /**
     * Crie um output
     * @param {{value?: string, style?: {background?: string,backgroundColor?: string,backgroundPosition?: string,color?: string,textAlign?: string,textDecoration?: string,display?: string,margin?: string,marginTop?: string,marginBottom?: string,marginLeft?: string,marginRight?: string,padding?: string,paddingTop?: string,paddingBottom?: string,paddingLeft?: string,paddingRight?: string,maxWidth?: string,minWidth?: string,maxHeight?: string,minHeight?: string},text?: string, name?: string, id?: string,class?: string}} preDefinition - Predefini????o
     * @returns
     */
    Output: (preDefinition) => {
        if (!preDefinition || !preDefinition.style && !preDefinition.class) {
            if (!preDefinition) {
                preDefinition = new Object();
            }
            if (!preDefinition.style && !preDefinition.class) {
                preDefinition.style = createElm.GetDefaultStyle("output");
            }
        }
        let create = createElm.CreateElm("output", preDefinition);
        return create;
    },
    /**
     * Crie uma div
     * @param {{value?: string, style?: {background?: string,backgroundColor?: string,backgroundPosition?: string,color?: string,textAlign?: string,textDecoration?: string,display?: string,margin?: string,marginTop?: string,marginBottom?: string,marginLeft?: string,marginRight?: string,padding?: string,paddingTop?: string,paddingBottom?: string,paddingLeft?: string,paddingRight?: string,maxWidth?: string,minWidth?: string,maxHeight?: string,minHeight?: string},text?: string, name?: string, id?: string,class?: string}} preDefinition - Predefini????o
     * @returns
     */
    Div: (preDefinition) => {
        if (!preDefinition?.style && !preDefinition?.class && createElm.GetDefaultStyle("div")) {
            preDefinition.style = createElm.GetDefaultStyle("div");
        }
        let create = createElm.CreateElm("div", preDefinition);
        return create;
    },
    /**
     * Crie uma span
     * @param {{value?: string, style?: {background?: string,backgroundColor?: string,backgroundPosition?: string,color?: string,textAlign?: string,textDecoration?: string,display?: string,margin?: string,marginTop?: string,marginBottom?: string,marginLeft?: string,marginRight?: string,padding?: string,paddingTop?: string,paddingBottom?: string,paddingLeft?: string,paddingRight?: string,maxWidth?: string,minWidth?: string,maxHeight?: string,minHeight?: string},text?: string, name?: string, id?: string,class?: string}} preDefinition - Predefini????o
     * @returns
     */
    Span: (preDefinition) => {
        if (!preDefinition?.style && !preDefinition?.class && createElm.GetDefaultStyle("span")) {
            preDefinition.style = createElm.GetDefaultStyle("span");
        }
        let create = createElm.CreateElm("span", preDefinition);
        return create;
    },
    /**
     * Crie um par??grafo
     * @param {{value?: string, style?: {background?: string,backgroundColor?: string,backgroundPosition?: string,color?: string,textAlign?: string,textDecoration?: string,display?: string,margin?: string,marginTop?: string,marginBottom?: string,marginLeft?: string,marginRight?: string,padding?: string,paddingTop?: string,paddingBottom?: string,paddingLeft?: string,paddingRight?: string,maxWidth?: string,minWidth?: string,maxHeight?: string,minHeight?: string},text?: string, name?: string, id?: string,class?: string}} preDefinition - Predefini????o
     * @returns
     */
    P: (preDefinition) => {
        if (!preDefinition?.style && !preDefinition?.class && createElm.GetDefaultStyle("p")) {
            preDefinition.style = createElm.GetDefaultStyle("p");
        }
        let create = createElm.CreateElm("p", preDefinition);
        return create;
    },
    /**
     * Crie um formul??rio
     * @param {{value?: string, style?: {background?: string,backgroundColor?: string,backgroundPosition?: string,color?: string,textAlign?: string,textDecoration?: string,display?: string,margin?: string,marginTop?: string,marginBottom?: string,marginLeft?: string,marginRight?: string,padding?: string,paddingTop?: string,paddingBottom?: string,paddingLeft?: string,paddingRight?: string,maxWidth?: string,minWidth?: string,maxHeight?: string,minHeight?: string},text?: string, name?: string, id?: string,class?: string}} preDefinition - Predefini????o
     * @returns
     */
    Form: (preDefinition) => {
        if (!preDefinition?.style && !preDefinition?.class && createElm.GetDefaultStyle("form")) {
            preDefinition.style = createElm.GetDefaultStyle("form");
        }
        let create = createElm.CreateElm("form", preDefinition);
        return create;
    },
    Label: (preDefinition) => {
        if (!preDefinition?.style && !preDefinition?.class && createElm.GetDefaultStyle("textarea")) {
            preDefinition.style = createElm.GetDefaultStyle("div");
        }
        let create = createElm.CreateElm("label", preDefinition);
        return create;
    },
    Textarea: (preDefinition) => {
        if (!preDefinition?.style && !preDefinition?.class && createElm.GetDefaultStyle("textarea")) {
            preDefinition.style = createElm.GetDefaultStyle("div");
        }
        let create = createElm.CreateElm("textarea", preDefinition);
        return create;
    },
    Script: (preDefinition) => {
        if (!preDefinition) {
            Debug({ type: 2 }, "Erro n??o grave, o src n??o foi definido.");
        }
        let create = createElm.CreateElm("script", preDefinition);
        return create;
    },
    defaultStyle: {
        input: {
            backgroundColor: "#999999",
            color: "#000",
            border: "none",
            borderRadius: "3rem",
        },
        output: {
            backgroundColor: "#999999",
            color: "#000",
            border: "none",
            borderRadius: "3rem",
        },
        btn: {
            backgroundColor: "#999999",
            color: "#00ddff"
        }
    },
    /**
    * Obtenha o padr??o de estilo de um(ou todos) elemento NS
    * @param {"input"|"btn"| "output"|"textarea"|"p"| "div"| "span"|"textarea"|"form"|"label"} item
    * @returns {{background?: string,backgroundColor?: string,backgroundPosition?: string,color?: string,textAlign?: string,textDecoration?: string,display?: string,margin?: string,marginTop?: string,marginBottom?: string,marginLeft?: string,marginRight?: string,padding?: string,paddingTop?: string,paddingBottom?: string,paddingLeft?: string,paddingRight?: string,maxWidth?: string,minWidth?: string,maxHeight?: string,minHeight?: string}}
    */
    GetDefaultStyle: function (item) {
        for (let k of Object.keys(this.defaultStyle)) {
            if (k === item) {
                let item = this.defaultStyle;
                return item[k];
            }
        }
    },
    /**
    * Adicione um padr??o de estilo para os elementos NS
    * @param {"input"|"btn"| "output"|"textarea"|"p"| "div"| "span"|"textarea"|"form"|"label"} item
    * @param {{background?: string,backgroundColor?: string,backgroundPosition?: string,color?: string,textAlign?: string,textDecoration?: string,display?: string,margin?: string,marginTop?: string,marginBottom?: string,marginLeft?: string,marginRight?: string,padding?: string,paddingTop?: string,paddingBottom?: string,paddingLeft?: string,paddingRight?: string,maxWidth?: string,minWidth?: string,maxHeight?: string,minHeight?: string}} value
    */
    SetDefaultStyle: function (item, value) {
        if (item && value) {
            let i = this.defaultStyle;
            i[item] = value;
            this.defaultStyle = i;
        }
    }
};
// Extract of Objects
const { Conversor, ToNum, ToStr, ToObj, ToJSON } = convertor;
const { Ask, AskNum, AskBool } = inputObj;
const { Log, Debug, Err, Warn, Table, Dir } = outObj;
const { Input, Output, Btn, Form, Div, CreateElm } = createElm;
// Execution
