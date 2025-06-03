from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, Feedback
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
CORS(app, resources={r"/feedback*": {"origins": "https://mini-cx-project.vercel.app"}})
db.init_app(app)

with app.app_context():
    db.create_all()

@app.route('/feedback', methods=['POST'])
def create_feedback():
    data = request.json
    print("RECEIVED FEEDBACK:", data)
    new_feedback = Feedback(rating=data['rating'], comment=data['comment'])
    db.session.add(new_feedback)
    db.session.commit()
    return jsonify({"message": "Feedback submitted"}), 201

@app.route('/feedback', methods=['GET'])
def get_feedback():
    feedback = Feedback.query.all()
    return jsonify([f.to_dict() for f in feedback])

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
