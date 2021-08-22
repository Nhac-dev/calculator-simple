export class MyCalculatorSimple extends NS_Component{
    constructor(){
        super()

        this.headLabel = createElm.P({
            text: GetElm("html").lang == "pt"?
             "Simples Calculadora - NS":
             "Calculator Simple - NS",
            id: "head-text-calc"
        }) 

        this.numberOne = Input({
            id: "num-one",
            class: ["num-input"],
            placeholder: "Coloque o primeiro número",
            type: "number"
        })
        this.numberTwo = Input({
            id: "num-two",
            class: ["num-input"],
            placeholder: "Coloque o segundo número",
            type: "number"
        })
        this.btnAdd = Btn({
            text: GetElm("html").lang == "pt"?
                "Somar":
                "Add",
            class: "btn-operator"
        })
        this.btnSubtract = Btn({
            class: "btn-operator",
            text: GetElm("html").lang == "pt"?
             "Subtrair":
             "Subtract",
        })
        this.btnMulti = Btn({
            class: "btn-operator",
            class: "btn-operator",
            text: GetElm("html").lang == "pt"?
             "Multiplicar":
             "Multiply"
        })
        this.btnDiv = Btn({
            class: "btn-operator",
            text: GetElm("html").lang == "pt"?
             "Dividir":
             "Division"
        })
        this.result = Div({
            style: {
                margin: "auto"
            },
            id: "result"
        })
       

        this.headLabel.Append(this.feather)
        this.numberOne.Append(this.feather)
        this.numberTwo.Append(this.feather)
        this.feather.AddHTML("<hr/>")
        this.btnAdd.Append(this.feather)
        this.btnSubtract.Append(this.feather)
        this.btnMulti.Append(this.feather)
        this.btnDiv.Append(this.feather)
        this.result.Append(this.feather)

        this.numberOne = GetElm("#num-one")
        this.numberTwo = GetElm("#num-two")
        this.btnAdd.Click(()=>{
            if(IsNum(this.numberOne.GetVal()) && IsNum(this.numberTwo.GetVal())){
                this.result.SetHTML("<hr/>")
                this.result.AddHTML(
                    GetElm("html").lang == "pt"?
                    `Resultado é: ${ToNum(this.numberOne.GetVal()) + ToNum(this.numberTwo.GetVal())}`: `Result is: ${ToNum(this.numberOne.GetVal()) + ToNum(this.numberTwo.GetVal())}`)        
            }
        })  
        this.btnSubtract.Click(()=>{
            if(IsNum(this.numberOne.GetVal()) && IsNum(this.numberTwo.GetVal())){
                this.result.SetHTML("<hr/>")
                this.result.AddHTML(
                    GetElm("html").lang == "pt"?
                    `Resultado é: ${ToNum(this.numberOne.GetVal()) - ToNum(this.numberTwo.GetVal())}`: `Result is: ${ToNum(this.numberOne.GetVal()) - ToNum(this.numberTwo.GetVal())}`)        
            }
        })  
        this.btnMulti.Click(()=>{
            if(IsNum(this.numberOne.GetVal()) && IsNum(this.numberTwo.GetVal())){
                this.result.SetHTML("<hr/>")
                this.result.AddHTML(
                    GetElm("html").lang == "pt"?
                    `Resultado é: ${ToNum(this.numberOne.GetVal()) * ToNum(this.numberTwo.GetVal())}`: `Result is: ${ToNum(this.numberOne.GetVal()) * ToNum(this.numberTwo.GetVal())}`)        
            }
            
        })  
        this.btnDiv.Click(()=>{
            if(IsNum(this.numberOne.GetVal()) && IsNum(this.numberTwo.GetVal())){
                this.result.SetHTML("<hr/>")
                this.result.AddHTML(
                    GetElm("html").lang == "pt"?
                    `Resultado é: ${ToNum(this.numberOne.GetVal()) / ToNum(this.numberTwo.GetVal())}`: `Result is: ${ToNum(this.numberOne.GetVal()) / ToNum(this.numberTwo.GetVal())}`)        
            }
        })  
    }
}