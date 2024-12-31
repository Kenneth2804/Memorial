const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('comments', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id',
            },
        },
        memoriamId: {
            type: DataTypes.UUID, // Cambiado de INTEGER a UUID
            allowNull: false,
            references: {
                model: 'memoriams',
                key: 'id',
            },
        },
    });
    
};
