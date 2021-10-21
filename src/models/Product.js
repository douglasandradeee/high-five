module.exports = (connection, dataTypes) => {
  const Produto = connection.define('Produto', {
    id: {
      type: dataTypes.INTEGER,
      primary: true,
      autoIncremente: true,
    },
    name: {
      type: dataTypes.STRING(100),
    },
    modelo: {
      type: dataTypes.STRING(100),
    },
    preco: {
      type: dataTypes.DECIMAL(30, 2),
    },
    descricao: {
      type: dataTypes.STRING(5000),
    },
    imagem: {
      type: dataTypes.STRING(200),
    },
    categoria_id: {
      type: dataTypes.INTEGER,
      foreignKey: true,
    },
    create_at: {
      type: dataTypes.DATE,
    }
  },
  {
    tableName: 'Produtos',
    timestamps: false,
  });
  return Produto
}
