from flask import Flask, jsonify, make_response, abort, request
from flaskext.mysql import MySQL
import uuid 
from flask_cors import CORS, cross_origin

mysql = MySQL()
app = Flask(__name__)
CORS(app)

app.config['MYSQL_DATABASE_USER'] = 'ramonramospaz'
app.config['MYSQL_DATABASE_PASSWORD'] = 'r15281565'
app.config['MYSQL_DATABASE_DB'] = 'ramonramospaz$test1'
app.config['MYSQL_DATABASE_HOST'] = 'ramonramospaz.mysql.pythonanywhere-services.com' 
mysql.init_app(app)


@app.route('/autenticar',methods=['POST'])
def autenticar():
    if not request.json:
        abort(400)
    usuario=request.json['usuario']
    clave=request.json['clave']
    conn=mysql.connect()
    cursor=conn.cursor()
    cursor.execute("select * from usuario where nombre='"+usuario+"' and clave='"+clave+"'") 
    data = cursor.fetchone()
    if data is None:
        return make_response(jsonify({'respuesta':'El password es invalido'}), 401)
    else:
        token = str(uuid.uuid1())
        cursor.execute("update usuario set token='"+token[0:20]+
                "' where nombre='"+usuario+"' and clave='"+clave+"'")
        conn.commit()
        respuesta={'token':token[0:20],'id':str(data[0])}
        return jsonify(respuesta)

@app.route('/listar',methods=['POST'])
def listar():
    if not request.json:
        abort(400)
    id_usuario=request.json['id']
    token=request.json['token']
    cursor=mysql.connect().cursor()
    #Valido el token
    cursor.execute("select * from usuario where id='"+id_usuario+"' and token='"+token+"'")
    data = cursor.fetchone()
    if data is None:
        return make_response(jsonify({'respuesta':'Token invalido'}),401)
    else:
        cursor.execute("select * from actividades where id='"+id_usuario+"'")
        data = cursor.fetchall()
        if data is None:
            return make_response(jsonify({'respuesta':'No existen registros'}), 200)
        else:
            actividades=[]
            for row in data:
                actividad={
                    'id_tran':str(row[0]),
                    'titulo':str(row[2]),
                    'descripcion':str(row[3])
                    }
                actividades.append(actividad)
            return jsonify(actividades)



@app.route('/agregar',methods=['POST'])
def agregar():
    if not request.json:
        abort(400)
    id_user=request.json['id']
    titulo=request.json['titulo']
    descripcion=request.json['descripcion']
    token=request.json['token']
    conn=mysql.connect()
    cursor=conn.cursor()
    cursor.execute("select * from usuario where id='"+id_user+"' and token='"+token+"'")
    data = cursor.fetchone()
    if data is None:
        return make_response(jsonify({'respuesta':'Token invalido'}),401)
    else:
        cursor.execute("insert into actividades(id,titulo,descripcion) values("+id_user+",'"+titulo+"','"+descripcion+"')")
        conn.commit()
        return make_response(jsonify({'respuesta':'registro ingresado'}), 200)


@app.route('/eliminar',methods=['POST'])
def eliminar():
    if not request.json:
        abort(400)
    id_tran=request.json['id_tran']
    token=request.json['token']
    conn=mysql.connect()
    cursor=conn.cursor()
    cursor.execute("select * from usuario where token='"+token+"'")
    data = cursor.fetchone()
    if data is None:
        return make_response(jsonify({'respuesta':'Token invalido'}),401)
    else:
        cursor.execute("delete from actividades where id_tran="+id_tran)
        conn.commit()
        return make_response(jsonify({'respuesta':'registo eliminardo'}), 200)


@app.route('/')
def main():
    return "Llame a los procedimientos: autenticar,eliminar,agregar o listar."

if __name__=='__main__':
    app.run()
