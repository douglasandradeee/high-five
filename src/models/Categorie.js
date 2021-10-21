categories.associate = (models) => {
    categories.belongsTo(models.produto, {
      foreignKey: "IdCategoria",
    });

    categories.hasOne(models.produto, {
      foreignKey: "Idproduto",
    });
  };
