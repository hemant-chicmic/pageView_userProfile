import { _decorator, Component, Label, Node, randomRangeInt, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('addPagePrefab')
export class addPagePrefab extends Component {


    @property({ type: Node })
    userImageNode: Node = null;
    
    @property({type:Label})
    nameLabel:Label = null;
    
    @property({type:Label})
    scoreLabel:Label = null;

    @property({type:Node})
    ratingImgNode:Node = null;

    


    
    @property({ type: [SpriteFrame] })
    userImg: SpriteFrame[] = [];
    
    @property({ type: [String] })
    userNames: string[] = [];
    
    @property({ type: [Number] })
    userScores: number[] = [];
    
    @property({ type: [SpriteFrame] })
    ratingImg: SpriteFrame[] = [];








    setPageData(index: number ) 
    {
        this.userImageNode.getComponent(Sprite).spriteFrame = this.userImg[index];
        
        this.nameLabel.string = this.userNames[index];
        
        this.scoreLabel.string = this.userScores[index].toString();


        this.ratingImgNode.getComponent(Sprite).spriteFrame = this.ratingImg[randomRangeInt(0,3)] ;
    }





    start() {

    }

    update(deltaTime: number) {
        
    }
}

