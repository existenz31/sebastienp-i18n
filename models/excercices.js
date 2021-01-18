// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Excercices = sequelize.define('excercices', {
  }, {
    tableName: 'excercices',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Excercices.associate = (models) => {
    Excercices.belongsTo(models.programs, {
      foreignKey: {
        name: 'programIdKey',
        field: 'program_id',
      },
      as: 'program',
    });
    Excercices.belongsTo(models.translates, {
      foreignKey: {
        name: 'nameCodeKey',
        field: 'name_code',
      },
      targetKey: 'code',
      as: 'nameCode',
    });
  };

  return Excercices;
};