import { _decorator, Component, EditBoxComponent, instantiate, Node, PageView, Prefab, randomRange, randomRangeInt, Size, Sprite, SpriteFrame, UITransform, Vec3 } from 'cc';
import { addPagePrefab } from './addPagePrefab';
const { ccclass, property } = _decorator;

@ccclass('pageViewLogic')
export class pageViewLogic extends Component {


    @property( {type : PageView} )
    pageViewNode : PageView | null = null ;

    @property( {type : Prefab } )
    pagePrafab : Prefab | null = null ;

    @property( {type : EditBoxComponent} )
    editBox : EditBoxComponent | null = null ;


    private inputValue : number ;


    start() 
    {
        console.log( " start " ) ;
        this.editBox.node.on('editing-did-ended', this.captureEnteredPageNumber, this);
        this.addMorePages() ;
    }
    
    captureEnteredPageNumber()
    {
        let userInput = this.editBox.string ;
        this.inputValue = parseInt(userInput) ;
        if( isNaN(this.inputValue) ) 
        {
            console.log( "Please enter the valid number " ) ;
            return  ;
        }
        let totalpageCount = this.pageViewNode.content.children.length ;
        if( this.inputValue <= 0 || this.inputValue > totalpageCount )
        {
            console.log( `Please enter number between  1 to ${totalpageCount}` ) ;
            window.alert(  `Please enter number between  1 to ${totalpageCount}` )
            return  ;
        }
        console.log( " edit box => " , this.inputValue ) ;
        this.pageViewNode.setCurrentPageIndex(this.inputValue-1);
    }

    addMorePages()
    {
        // console.log( "add more pages " ) ;
        // console.log( "totalchild before => " , this.pageViewNode.content.children.length )

                  
        for(let i=0; i<10; i++)
        {
            let newPageNode = instantiate(this.pagePrafab) ; 
            newPageNode.getComponent(addPagePrefab).setPageData(randomRangeInt(0,5)) ; 
            this.pageViewNode.addPage(newPageNode) ;
        }
        // console.log( "page node " , newPageNode ) ;
        // console.log( "totalchild after => " , this.pageViewNode.content.children.length )

    }



    update(deltaTime: number) 
    {
        
    }




}

