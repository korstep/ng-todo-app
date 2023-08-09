import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace',
})
export class ReplacePipe implements PipeTransform {
  transform(value: string | null, search: string, replacement: string): string {
    if (value) {
      return value.split(search).join(replacement);
    }
    return '';
  }
}
