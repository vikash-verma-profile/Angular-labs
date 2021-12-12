class PhotoBook{
    numPages:Number;
    constructor() {
        this.numPages=16;
    }
    SetNumPages(_numPages:Number){
        this.numPages=_numPages;
    }
    GetNumPages():Number{
        return this.numPages;
    }
}
class BigPhotoBook extends PhotoBook{
    constructor() {
        super();
        this.numPages=64;
    }
}