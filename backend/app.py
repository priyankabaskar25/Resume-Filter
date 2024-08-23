from flask import Flask, request, jsonify, session, send_file, abort
from flask_pymongo import PyMongo
from werkzeug.security import check_password_hash, generate_password_hash

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/Job_Application"
mongo = PyMongo(app)

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password') 
    role = 'user'

    exist_user = mongo.db.user.find_one({'email': email})
    if exist_user:
        return jsonify({"message": "User already exists"}), 400
    
    try:
        hash_pass = generate_password_hash(password)
        user_data = {
            'username': username,
            'email': email,
            'password': hash_pass,
            'role': role
        }
        mongo.db.user.insert_one(user_data)
        return jsonify({"message": "Registration successful"}), 201
    except Exception as e:
        return jsonify({"message": "Error during registration", "error": str(e)}), 400
    
if __name__ == '__main__':
    app.run(debug=True)
