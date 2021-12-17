export interface ILogger{
    Log():void;
}
export class BaseLogger implements ILogger{
    Log() {
        
    }
}
export class ConsoleLogger extends BaseLogger{
     override Log(): void {
        console.log("using console logger");
    }
}
export class DbLogger extends BaseLogger{
    override Log(): void {
        console.log("Using Db Logger");
    }
}
export class FileLogger extends BaseLogger{
    override Log(): void {
        console.log("Using File Logger");
    }
}