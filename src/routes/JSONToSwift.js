class JSONToSwift {
  constructor(json) {
    this.json = json;
  }

  convert() {
    const code = [];
    const root = this.json.mxGraphModel.root[0];

    // Crear una clase para el diagrama
    code.push(`class ${root.mxCell[0].$.id}: NSObject {`);

    // Crear una propiedad para cada celda del diagrama
    for (const cell of root.mxCell) {
      const id = cell.$.id;
      const value = cell.$.value;
      const style = cell.$.style;

      // Convertir el estilo a código Swift
      const swiftStyle = this.convertStyle(style);

      // Crear la propiedad
      code.push(`  var ${id}: ${swiftStyle} {`);
      code.push(`    get {`);
      code.push(`      return ${value}`);
      code.push(`    }`);
      code.push(`    set {`);
      code.push(`      ${value} = newSet`);
      code.push(`    }`);
      code.push(`  }`);
    }

    // Crear una función para inicializar el diagrama
    code.push(`  func initialize() {`);
    for (const cell of root.mxCell) {
      const id = cell.$.id;
      const parent = cell.$.parent;

      // Añadir la celda al padre
      code.push(`    ${parent}.addSubview(${id})`);
    }
    code.push(`  }`);

    // Cerrar la clase
    code.push(`}`);

    return code.join('\n');
  }

  convertStyle(style) {
    const swiftStyle = [];

    // Convertir los pares clave-valor del estilo a código Swift
    for (const key in style) {
      const value = style[key];

      swiftStyle.push(`  ${key}: ${value}`);
    }

    return swiftStyle.join('\n');
  }
}
