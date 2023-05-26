//Teognes

import { Model, DataTypes } from "sequelize";

class Orcamento extends Model {
    static init(sequelize) {
        super.init(
            {
                data_inicio: {
                    type: DataTypes.DATEONLY,
                    validate: {
                        isDate: { msg: "A data deve ser preenchida no formato yyyy-MM-dd!" },
                    },
                },
                data_final: {
                    type: DataTypes.DATEONLY,
                    validate: {
                        isDate: { msg: "A data deve ser preenchida no formato yyyy-MM-dd!" },
                    },
                },
                valor_total: {
                    type: DataTypes.DOUBLE,
                    validate: {
                        isFloat: { msg: "O valor deve ser preenchido com um valor decimal!" },
                    },
                },
            },
            {
                sequelize, 
                modelName: "orcamento", 
                tableName: "orcamentos" 
            }
        );
    }

    static associate(models) {
        this.belongsTo(models.usuario, { 
            as: "usuario", 
            foreignKey: { 
                name: "usuario_id", 
                allowNull: false, 
                validate: { 
                    notNull: { msg: "O Usuário deve ser preenchido!" } 
                } 
            } 
        });
        this.hasMany(models.orcamentocategoria, { 
            as: { 
                singular: 'orcamentoCategoria', 
                plural: 'orcamentosCategorias' 
            }, 
            onDelete: 'CASCADE', 
            onUpdate: 'CASCADE' 
        });
    }
}

export { Orcamento };