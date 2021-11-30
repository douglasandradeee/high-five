module.exports = (connection, DataTypes) => {
    const Administrator = connection.define(
      "Administrator",
      {
        AdminID: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        AdminName: {
          type: DataTypes.STRING(100),
        },
        AdminUser: {
          type: DataTypes.STRING(100),
        },
        AdminPass: {
          type: DataTypes.STRING(100),
        },
      },
      {
        tableName: "administrators",
        timestamps: false,
      }
    );
  
    return Administrator;
  };