import { MyCalculatorSimple } from "./calc/calc.js"

export class MainContainer extends NS_Component{
    constructor(){
        super()

        this.feather.SetClass("container")
        Render(this.feather, MyCalculatorSimple)
    }
}