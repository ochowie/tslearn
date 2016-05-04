/**
 * Created by azeyda on 5/2/16.
 */

interface HelloProps {
    counter?: number;
    incr?: () => any;
    decr?: () => any;
}

interface HelloState {
    counter:number;
}

interface HelloAction {
    type:string,
    by:number;
}