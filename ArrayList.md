# ArrayList

```mermaid
classDiagram
    class ArrayList
    ArrayList : +int length
    ArrayList : +ArrayList(Array source = null)
    ArrayList : +addAll(ArrayList extends) void
    ArrayList : +addAllAt(ArrayList extends, int index) void
    ArrayList : +addItem(Object item) void
    ArrayList : +addItemAt(Object item, int index) void
    ArrayList : +getItemAt(int index) Object
    ArrayList : +getItemIndex(Object item) int
    ArrayList : +removeAll() void
    ArrayList : +removeItem(Object item) Boolean
    ArrayList : +removeItemAt(Object item, int index) Object
    ArrayList : +setItemAt(Object item, int index) Object
    ArrayList : +toArray() Array
    ArrayList : +clone() ArrayList
```

**public method**
| Method  |
| ------------- |
| **ArrayList(source: Array = null)** <br/> Construct a new ArrayList using the specified array as its source. |
| **addAll(extends: ArrayList ): void**  <br/> Adds a list of items to the current list, placing them at the end of the list in the order they are passed.|
| **addAllAt(extends: ArrayList, index: int): void**  <br/> Adds a list of items to the current list, placing them at the position index passed in to the function.|
| **addItem(item: Object): void**  <br/> Add the specified item to the end of the list.|
| **addItemAt(item: Object, index: int): void**  <br/> Add the item at the specified index.|
| **getItemAt(index: int ): Object**  <br/>Get the item at the specified index.|
| **getItemIndex(item: Object): int**  <br/> Return the index of the item if it is in the list such that getItemAt(index) == item.|
| **removeAll(): void**  <br/> Remove all items from the list.|
| **removeItem(item: Object): Boolean**  <br/> Removes the specified item from this list, should it exist.|
| **removeItemAt(item: Object, index: int): Object**  <br/> Remove the item at the specified index and return it.|
| **setItemAt(item: Object, index: int): Object**  <br/> Place the item at the specified index.|
| **toArray() : Array**  <br/> Return an Array.|
| **clone() : ArrayList**  Returns a shallow copy of this ArrayList instance.<br/>|



**reference**
- [mermaid](https://mermaid-js.github.io/mermaid/#/classDiagram?id=configuration)
