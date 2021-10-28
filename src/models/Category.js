module.exports = (connection, DataTypes) => {
  const Category = connection.define(
    "Category",
    {
      CategoryID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      CategoryName: {
        type: DataTypes.STRING(50),
      },
    },
    {
      tableName: "categories",
      timestamps: false,
    }
  );

  Category.associate = (models) => {
    Category.hasMany(models.Product, {
      foreignKey: "ProductCategoryID",
      as: "products"
    });
  };

  return Category;
};
