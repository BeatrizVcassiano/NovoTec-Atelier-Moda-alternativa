from flask import Flask, request, jsonify, render_template
import mysql.connector

app = Flask(__name__)

# Configurações de conexão com o banco de dados MySQL
db_config = {
    'host': 'localhost',
    'user': 'root',         # Substitua pelo seu usuário do MySQL
    'password': '',         # Substitua pela sua senha do MySQL
    'database': 'novotec_db'
}

def salvar_pedido_banco(valor):
    conexao = mysql.connector.connect(**db_config)
    cursor = conexao.cursor()
    
    comando_sql = "INSERT INTO pedidos (valor_total) VALUES (%s)"
    cursor.execute(comando_sql, (valor,))
    
    conexao.commit()
    cursor.close()
    conexao.close()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/finalizar-compra', methods=['POST'])
def finalizar_compra():
    try:
        dados = request.get_json()
        
        # Validação do valor enviado
        if not dados or 'valor_total' not in dados:
            return jsonify({'sucesso': False, 'mensagem': 'Dados inválidos ou ausentes.'}), 400
        
        valor_total = float(dados['valor_total'])
        
        # Salva o valor total no MySQL
        salvar_pedido_banco(valor_total)
        
        return jsonify({
            'sucesso': True, 
            'mensagem': f'Pedido de R$ {valor_total:.2f} registrado com sucesso no banco de dados!'
        }), 200
        
    except Exception as erro:
        return jsonify({'sucesso': False, 'mensagem': f'Erro interno no servidor: {str(erro)}'}), 500

if __name__ == '__main__':
    app.run(debug=True)
