// Объектом какого класса является document? // HTMLDocument

// Какое место он занимает в DOM-иерархии?
alert(HTMLDocument.prototype.constructor.name); // HTMLDocument
alert(HTMLDocument.prototype.__proto__.constructor.name); // Document
alert(HTMLDocument.prototype.__proto__.__proto__.constructor.name); // Node

// Наследует ли он от Node или от Element, или может от HTMLElement? //Прямо от Node наследуют текстовые узлы Text, комментарии Comment и элементы Element.
