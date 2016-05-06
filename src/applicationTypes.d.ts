/**
 * Created by azeyda on 5/2/16.
 */

interface HelloProps {
    counter?: number;
    field?: string;
    incr?: (field: string) => any;
    decr?: (field: string) => any;
}

interface HelloState {
  test: {
    [field: string]: number;
  }
}

interface HelloAction {
    type:string;
    field: string;
    by:number;
}
