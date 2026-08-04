class BoardManager{

    cardManager

    node 

    numImgs 

    curNumCards 

    constructor(id, numImgs, cardManager){
        this.node = document.getElementById(id)
        this.numImgs = numImgs
        this.cardManager = cardManager
    }

    clear(){
        this.node.innerHTML=""
    }

    fill(numberCards){
        if(numberCards > 2 * this.numImgs){
            console.error("O numero de cartas é maior que duas vezes o número de imagens disponíveis")
            numberCards = 2 * this.numImgs
        }
        this.curNumCards = numberCards
        this.clear()
        this.genRandonList(numberCards).forEach((Number) => {
            this.addCard(this.cardManager.gen(Number))
        })

        this.adjustCSS()
    }

    addCard(card){
        this.node.appendChild(card)
    }

    genRandonList (size) {
        let lista = Array(size/2).fill().map((_, i) => i + 1)

        lista = [...lista, ...lista].sort(() => Math.random() - 0.5)
        return lista
    }

    adjustCSS () {
        let cols = Math.sqrt(this.curNumCards)
        
        let size = (100/cols - 1)

        size+="vmin"

        document.documentElement.style.setProperty("--numCols", cols)
        document.documentElement.style.setProperty("--size", size)
    }
}