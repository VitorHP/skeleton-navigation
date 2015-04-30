export class FilterByPropertyValueConverter {

  toView(aliens, property, value) {
    return value ? aliens.filter( item => !item.name.search(value) ) : aliens
  }
}
