import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // if (!args) {
    //   return value;
    // } else {
    //   //args = args.toLocaleLowerCase();

    //   args = args.toLocalLowerCase();
    // }

    // return value.filter((note:any) =>{
    //   return note.title.toLocaleLowerCase().includes(args) | note.desciption.toLocaleLowerCase().includes(args);
      
    // })
    if(!args ){
      return value;
    }else{
      args=args.toLocaleLowerCase();
    }
    
    return value.filter((note:any) =>{
      return note.title.toLocaleLowerCase().includes(args) | note.desciption.toLocaleLowerCase().includes(args);
    })
  
  }

}
