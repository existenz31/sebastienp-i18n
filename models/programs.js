// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Programs = sequelize.define('programs', {
  }, {
    tableName: 'programs',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Programs.associate = (models) => {
    Programs.belongsTo(models.translates, {
      foreignKey: {
        name: 'nameCodeKey',
        field: 'name_code',
      },
      targetKey: 'code',
      as: 'nameCode',
    });
    Programs.belongsToMany(models.translates, {
      through: 'excercices',
      foreignKey: 'program_id',
      otherKey: 'name_code',
      as: 'translatesThroughExcercices',
    });
  };

  return Programs;
};
