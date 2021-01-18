// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Translates = sequelize.define('translates', {
    code: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    enUs: {
      type: DataTypes.STRING,
      field: 'en-US',
      allowNull: false,
    },
    frFr: {
      type: DataTypes.STRING,
      field: 'fr-FR',
    },
    esEs: {
      type: DataTypes.STRING,
      field: 'es-ES',
    },
  }, {
    tableName: 'translates',
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Translates.associate = (models) => {

  };

  return Translates;
};
