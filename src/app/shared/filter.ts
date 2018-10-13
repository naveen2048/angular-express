import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "orderFilter",
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string = '', status: string[] = []): any[] {
    let temp: any[] = [];
    let tempSearch: any[] = [];

    if (status.length > 0) {
      for (let i = 0; i < items.length; i++) {
         for(let j=0; j < status.length; j++) {
             if(items[i].order_number.toLowerCase().includes(status[j].toLowerCase())){
                temp.push(items[i]);
             }
         }
      }
    }

    if(searchTerm && searchTerm.length > 0) {
        //ensure this object is filled
        if(temp.length == 0) { temp = items; }
        debugger;
        temp.forEach((item:any) => {
            if(item.order_number.toString().toLowerCase().includes(searchTerm)) {
                tempSearch.push(item);
            }
        });

        //finally push to return object
        temp = tempSearch;
    }

    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return temp.length > 0 ? temp : items;
    //return temp;
  }
}
