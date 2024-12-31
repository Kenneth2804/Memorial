const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
 const Users = sequelize.define('users', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    profilePicture: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Users.prototype.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

  return Users;
};
