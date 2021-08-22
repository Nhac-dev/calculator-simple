export class HeaderApp extends NS_Component{
    constructor(){
        super({
            linksLabel: [
                ["GitHub", "Author Instagram"],
                ["https://github.com/Nhac-dev", "https://instagram.com/jeff.developer"]
            ]
        }, {
            feather: CreateElm("header", {
                id: "app-header"
            })
        })
        
        this.navLink = Div({
            class: ["nav-link"]
        })
        this.links = []

        for(let item of this.GetProps("linksLabel")){
            for(let content in item){
                if(item[content].includes("https")){
                    this.links[content].SetAttr("href", item[content])
                }else{
                    this.links.push(CreateElm("a", {
                        text: item[content],
                        target: "_blank"
                    }))
                }
            } 
        }
        for(let link of this.links){
            let paragraph = createElm.P({})
                paragraph.SetChild(link)
                
            this.navLink.SetChild(paragraph)
        }
        
        this.feather.SetChild(this.navLink)
    }
}
