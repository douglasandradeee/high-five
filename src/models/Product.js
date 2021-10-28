module.exports = (connection, DataTypes) => {
  const Product = connection.define(
    "Product",
    {
      ProductID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      ProductName: {
        type: DataTypes.STRING(100),
      },
      ProductDesc: {
        type: DataTypes.STRING(5000),
      },
      ProductPrice: {
        type: DataTypes.DECIMAL(30, 2),
      },
      ProductImage: {
        type: DataTypes.STRING(200),
      },
      ProductCategoryID: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "products",
      timestamps: false,
    }
  );

  Product.associate = (models) => {
    Product.belongsTo(models.Category, {
      foreignKey: "ProductCategoryID",
      as: "category",
    });
  };

  return Product;
};
