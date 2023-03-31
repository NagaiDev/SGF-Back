import { Model, DataTypes } from "sequelize";

class Conta extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: { msg: "Nome da Conta deve ser preenchido!" },
                    len: { args: [2, 20], msg: "Nome da Conta deve ter entre 2 e 20 caracteres!" }
                }
            },
            tipo: {
                type: DataTypes.STRING,
                validate: {
                    len: { args: [2, 50], msg: "Nome do Usuário deve ter entre 2 e 50 caracteres!" }
                }
            },
            descricao: {
                type: DataTypes.STRING,
                validate: {
                    len: { args: [2, 50], msg: "Nome do Usuário deve ter entre 2 e 50 caracteres!" }
                }
            },
            saldo: { 
                type: DataTypes.DOUBLE, 
                validate: {
                  isFloat: { msg: "O saldo deve ser preenchido com um valor decimal!" }
                }
              }
        }, { sequelize, modelName: 'conta', tableName: 'contas' })
    }

    static associate(models) {
        this.belongsTo(models.usuario, { as: 'usuario', foreignKey: {name: 'usuarioId', allowNull: false, validate: {notNull: {msg: 'A Conta do Usuário deve ser preenchido!'}}}});
    }
}

export { Conta };