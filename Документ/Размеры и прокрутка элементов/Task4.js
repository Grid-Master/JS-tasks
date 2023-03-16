//В чём отличие между getComputedStyle(elem).width и elem.clientWidth?

// clientWidth возвращает число, а getComputedStyle(elem).width – строку с px на конце.

// getComputedStyle не всегда даст ширину, он может вернуть, к примеру, "auto" для строчного элемента.

// clientWidth соответствует внутренней области элемента, включая внутренние отступы padding,
//  а CSS-ширина (при стандартном значении box-sizing) соответствует внутренней области без внутренних отступов padding.
